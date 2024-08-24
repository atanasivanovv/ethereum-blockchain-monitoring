import express from "express";
import config from "./config";
import transaction from "./transaction";

const router = express.Router();

router.get("/config", config);
router.get("/transaction", transaction);

export default router;
