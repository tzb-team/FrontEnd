import Web3 from 'web3'
import {address, ABI} from './constants/patentContract'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let patentContract = web3.eth.contract(ABI)
  let patentContractInstance = patentContract.at(address)
  console.log(patentContract)
  console.log(patentContractInstance)
  resolve(patentContractInstance)
})

export default getContract