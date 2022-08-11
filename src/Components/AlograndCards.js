import React from 'react';
import { useState } from 'react';

const AlograndCard = (props) => {
    //to get if the asset is available or not
    const[available, setAvailable] = useState(props.isAvailable);
    const check = available?'Available':'unavailable'

    return (
        <div className='card'>
            <img src={props.logo} alt='logo'  className='bitcoin-icon'/>
            <p className='coin-name'>{props.name}</p>
            <button className={check}>{check}</button>
        </div>
    );
}
 
export default AlograndCard;