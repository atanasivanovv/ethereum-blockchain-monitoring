"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const configurations = await queryInterface.sequelize.query(
      `SELECT id FROM \`Configurations\` WHERE name IN ('config1', 'config2')`
    );

    if (configurations[0].length === 0) {
      await queryInterface.bulkInsert("Configurations", [
        {
          name: "config1",
          value: "value1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "config2",
          value: "value2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }

    const transactions = await queryInterface.sequelize.query(
      `SELECT txHash FROM \`Transactions\` WHERE txHash IN ('0x1234567890abcdef', '0xfedcba0987654321')`
    );

    if (transactions[0].length === 0) {
      await queryInterface.bulkInsert("Transactions", [
        {
          txHash: "0x1234567890abcdef",
          configId: 1,
          data: JSON.stringify({ key: "value" }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          txHash: "0xfedcba0987654321",
          configId: 2,
          data: JSON.stringify({ key: "value" }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Configurations", null, {});
    await queryInterface.bulkDelete("Transactions", null, {});
  },
};
