import watchChanges from "./watcher.js";
import { loadConfigurations } from "./services/configurationService.js";
import {
  monitorTransactions,
  monitorConfirmations,
} from "./services/monitoringService.js";

const ONE_MINUTE_IN_MS = 60000;

// Wrapper for our monitoring services, so that the main index.js stays clean
export const startMonitoring = () => {
  monitorTransactions();
  watchChanges(loadConfigurations);
  setInterval(monitorConfirmations, ONE_MINUTE_IN_MS); 
};
