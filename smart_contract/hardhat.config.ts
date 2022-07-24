import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.SPEEDY_NODE,
      accounts: [`${process.env.ACCOUNT}`],
    },
  },
};

export default config;
