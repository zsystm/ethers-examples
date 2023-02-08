require('dotenv').config()
const ethers = require('ethers')

provider = new ethers.providers.JsonRpcProvider(process.env.ENDPOINT)
wallet = new ethers.Wallet(pk, provider)

const tx = {
  to: '0xdb44645841b66373a0f48ede474b2292b99e78a0',
  gasLimit: 1000000,
  gasPrice: 5000,
  value: ethers.utils.parseEther(0.00001),
}
wallet.sendTransaction(tx).then(console.log) // It uses eth_sendRawTransaction
