let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;
const metamaskConnectElem = document.querySelector('[data-metamask-connect ]');

async function connectMetamask() {
  if (signer) {
    // disconnect if already connected
    signer = null;
    metamaskConnectElem.textContent = 'Connect wallet';
  } else {
    await provider.send('eth_requestAccounts', []);
    signer = await provider.getSigner();
    const getPlayerAddress = await signer.getAddress();
    const playerAddress =
      getPlayerAddress.slice(0, 6) + '...' + getPlayerAddress.slice(38, 42);
    metamaskConnectElem.textContent = playerAddress;
  }
}

async function claimTokens() {
  if (!signer) {
    return alert('Please connect wallet to claim tokens.');
  }

  const runTokenContractAddress = '0x00bcD49DcEaDbB4b9c7fF9E54a64CF2ad61ead61';
  const runTokenContractAbi = [
    'function mintTokens(address account, uint256 amount) public',
  ];
  const runTokenContract = new ethers.Contract(
    runTokenContractAddress,
    runTokenContractAbi,
    provider
  );
  let convertToWei = 1000000000;
  let amountToClaim = window.totalGweiScore * convertToWei;
  if (!amountToClaim) {
    return alert('No tokens to claim.');
  }

  await runTokenContract
    .connect(signer)
    .mintTokens(signer.getAddress(), amountToClaim.toString());
  window.totalGweiScore = 0;
}

async function claimNft() {
  if (!signer) {
    return alert('Please connect wallet to claim tokens.');
  }
  const nftContractAddress = '0x093298F529abdfCdA505e5C80A896478Dc32841a';
  const mintContractAbi = ['function mint(uint256 amount) public'];
  const nftContract = new ethers.Contract(
    nftContractAddress,
    mintContractAbi,
    provider
  );
  if (window.totalNFTScore === 0) {
    return alert('No tokens to claim as the totalNFTScore is 0.');
  }
  await nftContract.connect(signer).mint(window.totalNFTScore.toString());
  window.totalNFTScore = 0;
}
