
const hre = require("hardhat");

const SCWINNER_ADR = "0xCadacEBad5abf138672cE8c23f21Ed7296F2AF34"

async function main() {
  // const adr2Call = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502"

  const sCWinner = await hre.ethers.getContractAt("SCWinner",  SCWINNER_ADR);
  const tx = await sCWinner.callContract();

  await tx.wait()

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
