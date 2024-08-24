import Web3 from "web3";
import config from "./index.js";

const infuraUrl = `https://mainnet.infura.io/v3/${config.infuraApiKey}`;
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

export default web3;
