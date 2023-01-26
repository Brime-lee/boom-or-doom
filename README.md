# Hustle (Runner P2E Game)

Grandida Solo-Project Submission

A play to earn Web3 runner game that rewards tokens and NFTs

<!-- <img src="./asset/bod.png" width="768" height="480"> -->

## About

          Hustle is a play-to-earn decentralised game where players
          can earn tokens and NFTs as reward for playing the game.

          Hustle is a infinite runner game where the player tend to gather NFTs while running and avoiding obstacles. The higher the number of NFTs gathhered the higher the reward.

          Hustle is beginner friendly and does not require players to have
          any technical knowledge as it seeks to improve adoption of Web3 and
          give users the opportunity to earn while having fun.

#

**Visit Live DApp to [Play Hustle](https://hustle.vercel.app)**.

### **`Roadmap & future development`**

Hustle is a continuous development game so the listed features below will be added:

1. different levels in form of difficulties willbe added.
2. different Location as per game interface of the runner will be implemented.
3. Obstacles that can attack (i.e dynamic obstacle and not just stationary).
4. While while attacking obstacles are added, A defense shield will be added to the runner which willbe bought with a particular amount of NFTs won by users.

### **`Tech Stack`**

## Technology Stack & Dependencies

- Solidity (Writing Smart Contract)
- HTML, Css, Javascript For the website
- [Infura](https://infura.io/) Account on Infura as a node provider
- [NodeJS](https://nodejs.org/en/) To install Dependencies
- [Hardhat](https://hardhat.org/) Ethereum development environment
- [Ethers.js](https://docs.ethers.io/v5/) To interact with the blockchain

### 1. Clone/Download the Repository

### 2. Install Dependencies:

```
$ cd contracts
```

```
$ npm install
```

### 3. Deploy NFT collection to Polygon Mumbai testnet

- Setup your env file with both private key and mumbai RPC

```
npx hardhat run scripts/deployNFTCollection.js --network mumbai
```

### 4. Deploy Run token to Polygon Mumbai testnet

- Setup your env file with both private key and mumbai RPC

```
npx hardhat run scripts/deployRunToken.js --network mumbai
```

### 5. Provide the smart contract addresses in blockchain.js file

Built with intentionality by [@Brime-lee](https://github.com/Brime-lee) :sparkles:
