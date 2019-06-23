import React from 'react'

import Seed from '../../../components/seed/seed'

const manaira = (props)=>{
    const beachName = "Praia de Manaíra (Manaíra's beach)";
    const description = 'Located in João Pessoa'

    return(
        <Seed beachName={beachName} description={description} />
    )
}

export default manaira