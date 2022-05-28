const  hre  = require("hardhat");

async function main() {

  const [owner] = await hre.ethers.getSigners()

const BankContractFactory = await hre.ethers.getContractFactory('MemeCoin')
const BankContract = await BankContractFactory.deploy()
await BankContract.deployed()

console.log('MemeCoin contract deployed to:', BankContract.address)
console.log('MemeCoin contract owner address:', owner.address)

}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });