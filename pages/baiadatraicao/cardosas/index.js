import React from 'react'

import Seed from '../../../components/seed/seed'

const cardosas = (props)=>{
    const beachName = 'Praia das Cardosas (Cardosas Beach)';
    const description = 'Located in Baia da Traicao'

    return(
        <Seed beachName={beachName} description={description} />
    )
}

export default cardosas