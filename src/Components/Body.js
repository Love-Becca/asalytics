import React from 'react';
import AlograndCard from './AlograndCards';
import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react';

//query structure
const getCoinQuery = gql`
    query MyQuery {
        asalist {
            results {
                assetId
                logo
                name
                available
            }
        }
    }
`

const Body = () => {
    //binds component to query
    const{error, loading, data} = useQuery(getCoinQuery)
    //message when loading
    if (loading) return 'Loading please wait...';
    //error message 
    if (error) return `Error! ${error.message}`;

    //first iteration in other to get result from asalist
    let assetData;
    for (const item in data) {
        if (Object.hasOwnProperty.call(data, item)) {
            assetData = data[item];
        }
    }

    //second iteration to get the array needed from the result
    let assetResult
    for (const item in assetData) {
        if (Object.hasOwnProperty.call(assetData, item)) {
            assetResult = assetData[item];
        }
    }
    // returns each component with data
    const cards = assetResult.map(card=>
        <AlograndCard 
            key={card.assetId}
            logo={card.logo}
            isAvailable={card.available}
            name={card.name}
        />
    )
    return ( 
        <main className='asset-info'>
            <h2 className='alogrand-list'>List of Algorand Standard Assets <br />on ASAlytics</h2>
            <div className='assetCards'>
               {cards}
            </div>
        </main>
    );
}
 
export default Body;