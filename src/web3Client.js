import Web3 from 'web3'
import {contractAbi} from './abi/whrSaleAbi';

let selectedAccount;
let isInitialized = false;
let whrSale;

export const init = async () => {
    let provider = window.ethereum;

    if (typeof provider !== 'undefined') {
    
    provider
    .request({method: 'eth_requestAccounts' })
    .then((accounts) => {
      selectedAccount = accounts[0];
      console.log(`Selected account is ${selectedAccount}`);
    })
    .catch((err) => {
      console.log(err);
    });
    window.ethereum.on('accountsChanged', function (accounts){
      selectedAccount = accounts[0];
      console.log(`Selected account changed to ${selectedAccount}`);
    });
  }
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  whrSale = new web3.eth.Contract(contractAbi[0].abi)

  isInitialized = true;
};

export const getWhrTokenUsingUSDT  = async () => {
    if (!isInitialized) {
      await init();
  }
    return whrSale.methods
      .ParticipateUsingUSDT('1000000000000000000')
      .send({from: selectedAccount})
  }