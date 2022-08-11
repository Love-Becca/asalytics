import React from 'react';
import AlograndCard from './AlograndCards';

const Body = () => {
    return ( 
        <main>
            <h2 className='alogrand-list'>List of Algorand Standard Assets <br />on ASAlytics</h2>
            <div>
                <AlograndCard />
            </div>
        </main>
    );
}
 
export default Body;