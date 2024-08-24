import { watchChanges, ONE_MINUTE_IN_MS } from "./watcher.js";
import {
  monitorTransactions,
  monitorConfirmations,
} from "./services/monitoringService.js";

// Wrapper for our monitoring services, so that the main index.js stays clean
export const startMonitoring = () => {
  monitorTransactions();
  watchChanges();
  setInterval(monitorConfirmations, ONE_MINUTE_IN_MS);
};
