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
    // const datalist = data
    // const [algo, setAlgo] = useState(datalist)

    // const cards = algo.map(card=>
    //     <AlograndCard 
    //         key={card.assetId}
    //         logo={card.logo}
    //         isAvailable={card.available}
    //         name={card.name}
    //     />
    // )
    return ( 
        <main>
            <h2 className='alogrand-list'>List of Algorand Standard Assets <br />on ASAlytics</h2>
            <div>
               <AlograndCard/>
            </div>
        </main>
    );
}
 
export default Body;