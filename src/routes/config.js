import express from "express";
import {
  createConfig,
  getConfigs,
  getConfigById,
  updateConfig,
  deleteConfig,
} from "../controllers/configurationController";

const router = express.Router();

router.post("/", createConfig);
router.get("/", getConfigs);
router.get("/:id", getConfigById);
router.put("/:id", updateConfig);
router.delete("/:id", deleteConfig);

export default router;
