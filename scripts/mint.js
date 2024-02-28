const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/NFT.sol/NFT.json");
require('dotenv').config()

const contractAddress = "0xc35aD2EdBA9C8fdf341536B678ec9eEeDB31e35B"; // ERC721A contract address
const contractABI = contractJSON.abi;
const walletAddress = "0x02A7CC06722eb87cE8ce259863b34f8a8C61d9ef"; // Your public address which is connected to goerli testnet network
let noOfNFTs = 5;
async function main() {

    const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  
    const tx = await contract.mint(walletAddress, noOfNFTs);
    await tx.wait();

    console.log(walletAddress + " now has: " + await contract.balanceOf(walletAddress) + " NFTs");
  }

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
