import React from 'react'

import Seed from '../../../components/seed/seed'

const bocadabarra = (props)=>{
    const beachName = "Boca da Barra (Camaratuba's estuary)";
    const description = 'Located in Mataraca'

    return(
        <Seed beachName={beachName} description={description} />
    )
}

export default bocadabarra