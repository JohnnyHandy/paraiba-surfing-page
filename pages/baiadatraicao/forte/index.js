import React from 'react'

import Seed from '../../../components/seed/seed'

const forte = (props)=>{
    const beachName = 'Praia do Forte (Forte Beach)';
    const description = 'Located in Baia da Traicao'

    return(
        <Seed beachName={beachName} description={description} />
    )
}

export default forte