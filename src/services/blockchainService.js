import web3 from "../config/web3.js";

export const getLatestBlock = async () => {
  try {
    const latestBlock = await web3.eth.getBlock("latest");
    return latestBlock;
  } catch (error) {
    console.error("Error fetching latest block:", error);
    throw error;
  }
};

export const getTransaction = async (txHash) => {
  try {
    const transaction = await web3.eth.getTransaction(txHash);
    return transaction;
  } catch (error) {
    console.error("Error fetching transaction:", error);
    throw error;
  }
};
