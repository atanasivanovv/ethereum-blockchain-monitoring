import logger from "./logger.js";
import { loadConfigurations } from "./services/configurationService.js";

export const ONE_MINUTE_IN_MS = 60000;

// Hot-loading the configurations from the database
export const watchChanges = (interval = ONE_MINUTE_IN_MS) => {
  setInterval(async () => {
    logger.info("Checking for configuration changes in the database");
    await loadConfigurations();
  }, interval);
};
