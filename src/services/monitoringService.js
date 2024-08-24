import web3 from "../config/web3.js";
import Transaction from "../db/models/transaction.js";
import logger from "../logger.js";
import { matchesConfiguration } from "../utils/matchesConfiguration.js";
import { loadConfigurations } from "./configurationService.js";

const configurations = await loadConfigurations();

const monitorTransactions = async () => {
  web3.eth.subscribe("pendingTransactions", async (error, txHash) => {
    if (error) {
      logger.error("Error subscribing to pending transactions", { error });
      return;
    }

    const tx = await web3.eth.getTransaction(txHash);

    configurations.forEach(async (config) => {
      if (matchesConfiguration(tx, config)) {
        await Transaction.create({
          txHash: tx.hash,
          configId: config.id,
          data: tx,
          blockNumber: tx.blockNumber,
          confirmed: false,
        });

        logger.info("Transaction stored", {
          txHash: tx.hash,
          configId: config.id,
        });
      }
    });
  });
};

const monitorConfirmations = async () => {
  const pendingTransactions = await Transaction.findAll({
    where: { confirmed: false },
  });

  const currentBlock = await web3.eth.getBlockNumber();

  pendingTransactions.forEach(async (tx) => {
    const config = configurations.find((c) => c.id === tx.configId);
    if (config && currentBlock - tx.blockNumber >= config.confirmations) {
      tx.confirmed = true;
      await tx.save();
      logger.info("Transaction confirmed", { txHash: tx.txHash });
    }
  });
};

export { monitorTransactions, monitorConfirmations };
