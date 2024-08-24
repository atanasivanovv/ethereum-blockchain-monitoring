"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    const configurations = await queryInterface.sequelize.query(
      `SELECT id FROM \`configurations\` WHERE name IN ('config1', 'config2', 'High Value and Low Gas Transactions', 'Specific Sender and Receiver', 'High Value from Specific Sender', 'Low Gas and Specific Input Data', 'Specific Nonce and Block Number Range')`
    );

    if (configurations[0].length === 0) {
      await queryInterface.bulkInsert("configurations", [
        {
          name: "High Value and Low Gas Transactions",
          value: JSON.stringify({
            minValue: "1000000000000000000", // 1 ETH in wei
            maxGas: 21000,
            from: null,
            to: null,
            inputData: null,
            nonce: null,
            minBlockNumber: null,
            maxBlockNumber: null,
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Specific Sender and Receiver",
          value: JSON.stringify({
            minValue: null,
            maxGas: null,
            from: "0x1234567890abcdef1234567890abcdef12345678",
            to: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
            inputData: null,
            nonce: null,
            minBlockNumber: null,
            maxBlockNumber: null,
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "High Value from Specific Sender",
          value: JSON.stringify({
            minValue: "2000000000000000000", // 2 ETH in wei
            maxGas: null,
            from: "0x1234567890abcdef1234567890abcdef12345678",
            to: null,
            inputData: null,
            nonce: null,
            minBlockNumber: null,
            maxBlockNumber: null,
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Low Gas and Specific Input Data",
          value: JSON.stringify({
            minValue: null,
            maxGas: 30000,
            from: null,
            to: null,
            inputData: "0xabcdef",
            nonce: null,
            minBlockNumber: null,
            maxBlockNumber: null,
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Specific Nonce and Block Number Range",
          value: JSON.stringify({
            minValue: null,
            maxGas: null,
            from: null,
            to: null,
            inputData: null,
            nonce: 10,
            minBlockNumber: 1000000,
            maxBlockNumber: 2000000,
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }

    const transactions = await queryInterface.sequelize.query(
      `SELECT txHash FROM \`transactions\` WHERE txHash IN ('0x1234567890abcdef', '0xfedcba0987654321')`
    );

    if (transactions[0].length === 0) {
      await queryInterface.bulkInsert("transactions", [
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
    await queryInterface.bulkDelete("configurations", null, {});
    await queryInterface.bulkDelete("transactions", null, {});
  },
};
