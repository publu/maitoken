require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");

const infuraProjectId = process.env.INFURA_PROJECT_ID;
const privateKey = process.env.MATIC_KEY;

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
      chainId: 1337,
      fork: "https://zkevm-rpc.com",
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    testnet: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/YOUR_INFURA_PROJECT_ID",
    },
    mainnet: {
      url: "https://eth-mainnet.alchemyapi.io/v2/YOUR_INFURA_PROJECT_ID",
    },
    zk: {
      url: "https://zkevm-rpc.com",
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: {
      polygon: process.env.POLYGONSCAN_API_KEY,
      mainnet: process.env.ETHERSCAN_API_KEY,
      avalanche: process.env.SNOWTRACE_API_KEY,
      moonriver: process.env.MOONRIVERSCAN_API_KEY,
      opera: process.env.FTMSCAN_API_KEY,
      optimisticEthereum: process.env.OPTIMISTIC_ETHERSCAN_API_KEY,
      bsc: process.env.BSCSCAN_API_KEY,
      moonbeam: process.env.MOONBEAMSCAN_API_KEY,
      avalancheFujiTestnet: process.env.AVALANCHEFUJI_API_KEY,
      arbitrumOne: process.env.ARBISCAN_API_KEY,
      zkevm: process.env.ZKEVMSCAN_API_KEY,
      gnosis: process.env.GNOSISSCAN_API_KEY,
      sepscroll: process.env.SEPSCROLL_API_KEY,
    },
    customChains: [
      {
        network: "zkevm",
        chainId: 1101,
        urls: {
          apiURL: "https://api-zkevm.polygonscan.com/api",
          browserURL: "https://zkevm.polygonscan.com",
        },
      },
      {
        network: "sepscroll",
        chainId: 534351,
        urls: {
          apiURL: "https://api-sepolia.scrollscan.com/api",
          browserURL: "https://sepolia.scrollscan.dev/",
        },
      },
    ],
  },
};
