import chokidar from "chokidar";
import logger from "./logger.js";

const watchChanges = (onChangeCallback) => {
  const watcher = chokidar.watch("path/to/configuration/file", {
    persistent: true,
  });

  watcher.on("change", async () => {
    logger.info("Configuration file changed");
    await onChangeCallback();
  });
};

export default watchChanges;
