import React from 'react'
import Link from 'next/Link'


const conde = (props)=>{
    return(
        <div>   
        <h1>Conde beaches</h1>
        <Link href='/conde/arapuca'><a>Praia da Arapuca</a></Link>
        <Link href='/conde/coqueirinho'><a>Praia de coqueirinho</a></Link>
        <Link href='/conde/praiabela'><a>Praia Belao</a></Link>
        </div>
    )
}

export default conde