import { Configuration } from "../db/models/index.js";

export const loadConfigurations = async () => {
  try {
    return Configuration.findAll();
  } catch (error) {
    console.error("Failed to fetch configurations", error);
    return [];
  }
};
