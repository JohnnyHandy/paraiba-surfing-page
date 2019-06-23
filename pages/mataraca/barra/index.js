import React from 'react'

import Seed from '../../../components/seed/seed'

const barra = (props)=>{
    const beachName = "Barra de camaratuba (Camaratuba's estuary)";
    const description = 'Located in Mataraca'

    return(
        <Seed beachName={beachName} description={description} />
    )
}

export default barra