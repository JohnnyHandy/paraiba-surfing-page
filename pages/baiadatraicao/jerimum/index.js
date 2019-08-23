import React from 'react'

import Seed from '../../../components/seed/seed'
import Navbar from '../../../components/Navigation/navigation'
import {NorthWind,NorthEastWind, EastWind, SouthEastWind, SouthWind} from '../../../components/UI/Wind/wind'

const cardosas = (props)=>{
    const beachName = 'Praia das Cardosas (Cardosas Beach)';
    const description = 'Located in Baia da Traicao'

    return(
        <div>
                <Navbar/>
                <Seed beachName={beachName} description={description} />
                <NorthWind/>
                <NorthEastWind/>
                <EastWind/>
                <SouthEastWind/>
                <SouthWind/>
        </div>
    )
}

export default cardosas