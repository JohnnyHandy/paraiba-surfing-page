import React from 'react'

import Seed from '../../../components/seed/seed'

const macaco = (props)=>{
    const beachName = "Mar do macaco (Monkey's sea)";
    const description = 'Located in cabedelo'

    return(
        <Seed beachName={beachName} description={description} />
    )
}

export default macaco