import React from 'react'

import Seed from '../../../components/seed/seed'

const graminha = (props)=>{
    const beachName = "Graminha";
    const description = 'Located in João Pessoa'

    return(
        <Seed beachName={beachName} description={description} />
    )
}

export default graminha