require('dotenv').config()
const fs = require('fs')
const { Wallet, ethers } = require('ethers')

async function deployAndExecuteContract() {
  const MNEMONIC = 'copper push brief egg scan entry inform record adjust fossil boss egg comic alien upon aspect dry avoid interest fury window hint race symptom'
  const WETH_abi = JSON.parse(fs.readFileSync('contracts/WETH.abi.json', 'utf8'))
  let WETH_bytecode = fs.readFileSync('contracts/WETH.bytecode', 'utf8')
  WETH_bytecode = WETH_bytecode.replace(/\n/g, '');

  const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')
  const wallet = Wallet.fromMnemonic(MNEMONIC).connect(provider)

  const beforeBalance = await provider.getBalance(wallet.address)
  console.log(`balance of sender: ${beforeBalance.toString()}`)

  const recipient = '0x963ebdf2e1f8db8707d05fc75bfeffba1b5bac17'

  const contractFactory = new ethers.ContractFactory(WETH_abi, WETH_bytecode, wallet)
  const contract = await contractFactory.deploy()

  const result = await contract.transfer(recipient, 1)
  console.log(`tx hash: ${result.hash}`)

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
  await delay(1000)

  const balanceOfRecipient = await contract.balanceOf(recipient)
  console.log(`WETH balance of recipient: ${balanceOfRecipient.toString()}`)

  const afterBalance = await provider.getBalance(wallet.address)
  console.log(`balance of sender: ${afterBalance.toString()}`)
}

deployAndExecuteContract()

