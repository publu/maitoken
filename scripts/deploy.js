const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await hre.ethers.getContractFactory("PermitableERC20");
  const token = await Token.deploy("Mai Stablecoin", "MAI");

  await token.deployed();

  console.log("Token deployed to:", token.address);

  await (await token.transferOwnership("0x20265d77e0F5A7E86fDb013e408C4AdF11289355")).wait(2);

  console.log("Ownership transferred to: ", await token.owner());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
