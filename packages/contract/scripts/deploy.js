async function main() {
  // コントラクトがコンパイルします
  // コントラクトを扱うために必要なファイルが `artifacts` ディレクトリの直下に生成されます。
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
  // Hardhat がローカルの Ethereum ネットワークを作成します。
  const nftContract = await nftContractFactory.deploy();
  // コントラクトが Mint され、ローカルのブロックチェーンにデプロイされるまで待ちます。
  await nftContract.deployed();
  console.log('Contract deployed to:', nftContract.address);

  const txn = await nftContract.makeAnEpicNFT();
  await txn.wait();

  const txn2 = await nftContract.makeAnEpicNFT();
  await txn2.wait();

  const txn3 = await nftContract.makeAnEpicNFT();
  await txn3.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});