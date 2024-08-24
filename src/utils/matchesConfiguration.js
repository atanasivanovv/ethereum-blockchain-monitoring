/*
  Assuming that the value stored for each configuration is in JSON format,
  containg various criteria for filtering transactions, I've come up with some matching logic.

  1) FROM Address Check:
  If the configuration specifies a from address, check if the transaction's from address matches it.

  2) TO Address Check:
  If the configuration specifies a to address, check if the transaction's to address matches it.

  3) Minimum Value Check:
  If the configuration specifies a minValue, check if the transaction's value is greater than or equal to it.

  4) Maximum Gas Check:
  If the configuration specifies a maxGas, check if the transaction's gas is less than or equal to it.
*/
export const matchesConfiguration = (tx, config) => {
  if (config.from && tx.from.toLowerCase() !== config.from.toLowerCase()) {
    return false;
  }

  if (config.to && tx.to.toLowerCase() !== config.to.toLowerCase()) {
    return false;
  }

  if (config.minValue && BigInt(tx.value) < BigInt(config.minValue)) {
    return false;
  }

  if (config.maxGas && tx.gas > config.maxGas) {
    return false;
  }

  return true;
};
