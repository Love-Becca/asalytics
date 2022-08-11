import React from 'react';
import icon from '../assets/biticon.png'

const AlograndCard = () => {
    return (
        <div className='card'>
            <img src={icon} alt='logo'  className='bitcoin-icon'/>
            <h3 className='coin-name'>Alogrand</h3>
            <button className='available'>Available</button>
        </div>
    );
}
 
export default AlograndCard;