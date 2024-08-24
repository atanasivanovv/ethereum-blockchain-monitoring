import {
  getLatestBlock,
  getTransaction,
} from "../services/blockchainService.js";

export const fetchLatestBlock = async (_, res) => {
  try {
    const latestBlock = await getLatestBlock();
    res.json(latestBlock);
  } catch (error) {
    res.status(500).json({ msg: "Failed to fetch latest block", error });
  }
};

export const fetchTransaction = async (req, res) => {
  const { txHash } = req.params;

  try {
    const transaction = await getTransaction(txHash);
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ msg: "Failed to fetch transaction", error });
  }
};
