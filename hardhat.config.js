require('dotenv').config();
require("@nomiclabs/hardhat-waffle");

const infuraProjectId = process.env.INFURA_PROJECT_ID;
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    testnet: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/YOUR_INFURA_PROJECT_ID",
    },
    mainnet: {
      url: "https://eth-mainnet.alchemyapi.io/v2/YOUR_INFURA_PROJECT_ID",
    }
  }
};
