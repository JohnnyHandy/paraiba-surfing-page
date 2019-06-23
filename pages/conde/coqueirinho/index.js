import React from 'react'

import Seed from '../../../components/seed/seed'

const coqueirnho = (props)=>{
    const beachName = "Praia de coqueirinho (Coqueirinho's beach)";
    const description = 'Located in Conde'

    return(
        <Seed beachName={beachName} description={description} />
    )
}

export default coqueirnho