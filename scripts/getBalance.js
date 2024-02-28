const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/NFT.sol/NFT.json");

const contractAddress = "0x7F092e65C688a509737FcD8D0998dD12208f5297"; // place your polygon contract address here
const contractABI = contractJSON.abi;
const walletAddress = "0x02A7CC06722eb87cE8ce259863b34f8a8C61d9ef"; // place the public address for your wallet here

async function main() {

    const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

    console.log(`${walletAddress} has: ${await contract.balanceOf(walletAddress)} NFTs`);

  }

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
