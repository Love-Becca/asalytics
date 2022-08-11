import React from 'react';

const AlograndCard = (props) => {
    return (
        <div className='card'>
            <img src={props.logo} alt='logo'  className='bitcoin-icon'/>
            <h3 className='coin-name'>{props.name}</h3>
            <button className='available'>{props.isAvailable}</button>
        </div>
    );
}
 
export default AlograndCard;