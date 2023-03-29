// import './App.css';
// import React, {useEffect} from 'react';
// import {init} from './web3Client.js';
// import Web3 from 'web3'
// function App() {
//   const providerUrl = "https://mainnet.infura.io/v3/872120e09b544323960bd88725889963" || 'http://localhost:8545'
//   useEffect(() => {
//     init();

//   }, []);

// }

// export default App;


import React, { useEffect } from 'react';
import {init, getWhrTokenUsingUSDT} from './Web3Client';

function App() {
  const [minted, setMinted] = useState(false);
  const getWhrTokenUsingUSDT = () => {
    getWhrTokenUsingUSDT().then(tx => {
    console.log(tx);
    setMinted(true);
    }).catch(err => {
    console.log(err);
    });
}
  return <div className='App'>
    {!minted ? (
        <button onClick={() => getWhrTokenUsingUSDT()}>Get token using USDT</button>
        ):(
        <p>Token purchased successfully!</p>
        )}
        </div>
      );
}
export default App;
