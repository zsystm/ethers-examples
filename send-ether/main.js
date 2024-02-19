require('dotenv').config()
const { Wallet, ethers } = require('ethers')

// const MNEMONIC="maximum display century economy unlock van census kite error heart snow filter midnight usage egg venture cash kick motor survey drastic edge muffin visual"

const provider = new ethers.providers.JsonRpcProvider(process.env.ENDPOINT)
// const wallet = Wallet.fromMnemonic(MNEMONIC).connect(provider)
privateKey = '0xfffdbb37105441e14b0ee6330d855d8504ff39e705c3afa8f859ac9865f99306'
const wallet = new Wallet(privateKey, provider)

const tx = {
  nonce: 4, 
  to: '0xdb44645841b66373a0f48ede474b2292b99e78a0',
  gasLimit: 1000000,
  gasPrice: 900000000000,
  value: "10000",
}
wallet.sendTransaction(tx).then(console.log) // It uses eth_sendRawTransaction
