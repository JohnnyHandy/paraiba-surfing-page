import React from 'react'
import Link from 'next/Link'


const baiadatraicao = (props)=>{
    return(
        <div>   
        <h1>Baia da Traicao beaches</h1>
        <Link href='/baiadatraicao/cardosas'><a>Cardosas</a></Link>
        <Link href='/baiadatraicao/forte'><a>Forte</a></Link>
        <Link href='/baiadatraicao/tamba'><a>Tamba</a></Link>
        <Link href='/baiadatraicao/valas'><a>Valas</a></Link>
        </div>
    )
}

export default baiadatraicao