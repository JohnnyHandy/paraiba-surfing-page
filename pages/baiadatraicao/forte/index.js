import React from 'react'
import Seed from '../../../components/seed/seed'
import {NorthSwell,NorthEastSwell, EastSwell, SouthEastSwell, SouthSwell} from '../../../components/UI/Swell/swell'
import Conditions from '../../../components/UI/Conditions/conditions'

const forte = (props)=>{
    const beachName = 'Praia do Forte (Forte Beach)';
    const description = 'Located in Baia da Traicao'

    return(
        <div>
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