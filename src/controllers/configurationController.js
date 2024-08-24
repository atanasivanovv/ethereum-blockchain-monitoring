import Configuration from "../models";

export const createConfig = async (req, res) => {
  try {
    const config = await Configuration.create(req.body);
    res.status(201).json(config);
  } catch (error) {
    res.status(500).json({ error: "Failed to create configuration" });
  }
};

export const getConfigs = async (_, res) => {
  try {
    const configs = await Configuration.findAll();
    res.json(configs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch configurations" });
  }
};

export const getConfigById = async (req, res) => {
  try {
    const config = await Configuration.findByPk(req.params.id);

    if (config) {
      res.json(config);
    } else {
      res.status(404).json({ error: "Configuration not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch configuration" });
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
      res.status(404).json({ error: "Configuration not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update configuration" });
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
      res.status(404).json({ error: "Configuration not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete configuration" });
  }
};
