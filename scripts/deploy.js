
const hre = require("hardhat");

async function main() {
  const adr2Call = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"


  const SCWinner = await hre.ethers.getContractFactory("SCWinner");
  const sCWinner = await SCWinner.deploy(adr2Call);

  await sCWinner.deployed();

  console.log(
    `SCWinner Smart Contract deployed at: ${sCWinner.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
