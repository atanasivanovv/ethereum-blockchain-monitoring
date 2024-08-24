import Web3 from "web3";
import dotenv from "dotenv";

dotenv.config();

const infuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

export default web3;
