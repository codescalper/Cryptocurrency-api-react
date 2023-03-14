import React , {useEffect,useState} from "react";
import Coins from './components/Coins'
import axios from 'axios'

function App() {

  const [coins,setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false';

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <>
      <Coins coins={coins} />
    </>
  );
}

export default App;
