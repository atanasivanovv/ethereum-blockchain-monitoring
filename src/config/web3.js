import Web3 from "web3";
import config from "./index.js";

const infuraUrl = `wss://mainnet.infura.io/ws/v3/${config.infuraApiKey}`;
const web3 = new Web3(new Web3.providers.WebsocketProvider(infuraUrl));

export default web3;
