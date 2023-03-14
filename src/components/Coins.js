import React from 'react'

import Coinitem from './Coinitem'

const Coins = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Voulme</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>

            {props.coins.map(coins=>{
                return(
                    <Coinitem coins={coins}/>
                )
            })}
        </div>
    </div>
  )
}

export default Coins