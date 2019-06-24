import React from 'react'
import Head from 'next/head'
import Seed from '../../../components/seed/seed'
import {NorthSwell,NorthEastSwell, EastSwell, SouthEastSwell, SouthSwell} from '../../../components/UI/Swell/swell'
import Conditions from '../../../components/UI/Conditions/conditions'

const forte = (props)=>{
    const beachName = 'Praia do Forte (Forte Beach)';
    const description = 'Located in Baia da Traicao'

    return(
        <div>
            <Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
            </Head>
            <Seed beachName={beachName} description={description} />
            <NorthSwell/>
            <NorthEastSwell/>
            <EastSwell/>
            <SouthEastSwell/>
            <SouthSwell/>
            <Conditions/>

        </div>
      
    )
}

export default forte