import React from 'react'
import Link from 'next/Link'


const joaopessoa = (props)=>{
    return(
        <div>   
        <h1>Joao Pessoa beaches</h1>
        <Link href='/joaopessoa/graminha'><a>Graminha</a></Link>
        <Link href='/joaopessoa/manaira'><a>Praia de Manaira</a></Link>
        </div>
    )
}

export default joaopessoa