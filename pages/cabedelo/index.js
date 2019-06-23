import React from 'react'
import Link from 'next/Link'


const cabedelo = (props)=>{
    return(
        <div>   
        <h1>Cabedelo beaches</h1>
        <Link href='/cabedelo/macaco'><a>Mar do Macaco</a></Link>
        <Link href='/cabedelo/dique'><a>Dique de Cabedelo</a></Link>
        </div>
    )
}

export default cabedelo