import { Configuration } from "../db/models/index.js";
import { loadConfigurations } from "../services/configurationService.js";

export const createConfig = async (req, res) => {
  try {
    const config = await Configuration.create(req.body);
    res.status(201).json(config);
  } catch (error) {
    res.status(500).json({ msg: "Failed to create configuration", error });
  }
};

export const getConfigs = async (_, res) => {
  try {
    const configs = await loadConfigurations();
    res.json(configs);
  } catch (error) {
    res.status(500).json({ msg: "Failed to fetch configurations", error });
  }
};

export const getConfigById = async (req, res) => {
  try {
    const config = await Configuration.findByPk(req.params.id);

    if (config) {
      res.json(config);
    } else {
      res.status(404).json({ msg: "Configuration not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Failed to fetch configuration", error });
  }
};

export const updateConfig = async (req, res) => {
  try {
    const [updated] = await Configuration.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedConfig = await Configuration.findByPk(req.params.id);
      res.json(updatedConfig);
    } else {
      res.status(404).json({ msg: "Configuration not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Failed to update configuration", error });
  }
};

export const deleteConfig = async (req, res) => {
  try {
    const deleted = await Configuration.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ msg: "Configuration not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Failed to delete configuration", error });
  }
};
