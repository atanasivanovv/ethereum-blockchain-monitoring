import express from "express";
import {
  fetchLatestBlock,
  fetchTransaction,
} from "../controllers/transactionController";

const router = express.Router();

router.get("/latest-block", fetchLatestBlock);
router.get("/transaction/:txHash", fetchTransaction);

export default router;
