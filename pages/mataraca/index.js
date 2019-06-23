import React from 'react'
import Link from 'next/Link'


const mataraca = (props)=>{
    return(
        <div>   
        <h1>Joao Pessoa beaches</h1>
        <Link href='/mataraca/barra'><a>Barra</a></Link>
        <Link href='/mataraca/bocadabarra'><a>Boca da Barra</a></Link>
        </div>
    )
}

export default mataraca