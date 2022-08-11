import React, { useEffect, useState } from 'react';
import AlograndCard from './AlograndCards';
import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client/react';

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
    const{error, loading, data} = useQuery(getCoinQuery)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    let element;
    for (const item in data) {
        if (Object.hasOwnProperty.call(data, item)) {
            element = data[item];

        }
    }

    let check
    for (const item in element) {
        if (Object.hasOwnProperty.call(element, item)) {
            check = element[item];

        }
    }

    //const [algo, setAlgo] = useState(datalist)

    const cards = check.map(card=>
        <AlograndCard 
            key={card.assetId}
            logo={card.logo}
            isAvailable={card.available}
            name={card.name}
        />
    )
    return ( 
        <main>
            <h2 className='alogrand-list'>List of Algorand Standard Assets <br />on ASAlytics</h2>
            <div>
               {cards}
            </div>
        </main>
    );
}
 
export default Body;