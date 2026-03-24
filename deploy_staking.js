const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const StakingRewards = await hre.ethers.getContractFactory("StakingRewards");
  
  // Use existing token addresses or deploy mocks first
  const STAKING_TOKEN = "0x..."; 
  const REWARD_TOKEN = "0x...";

  const staking = await StakingRewards.deploy(STAKING_TOKEN, REWARD_TOKEN);
  await staking.waitForDeployment();

  console.log(`Staking Rewards deployed to: ${await staking.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
