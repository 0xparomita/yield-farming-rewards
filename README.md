# Yield Farming Rewards

This repository provides a battle-tested staking contract that distributes rewards (e.g., GOV tokens) to users who stake a specific asset (e.g., LP tokens). It uses a mathematical approach to ensure that rewards are distributed proportionally based on both the amount staked and the duration of the stake.

## Key Features
* **Time-Weighted Rewards**: Rewards are calculated per second, ensuring precision.
* **Pro-Rata Distribution**: Users earn based on their percentage of the total pool.
* **Pull-Based Updates**: The `rewardPerToken` is updated whenever a user interacts with the contract, minimizing gas costs for the owner.

## Mathematical Formula
The contract tracks `rewardPerTokenStored` using the following logic:
$rewardPerToken = rewardPerTokenStored + \frac{(lastTimeRewardApplicable - lastUpdateTime) * rewardRate * 1e18}{totalSupply}$

## Setup
1. Deploy the `StakingRewards` contract with the Staking Token and Reward Token addresses.
2. The owner calls `notifyRewardAmount` to start a new distribution cycle.
