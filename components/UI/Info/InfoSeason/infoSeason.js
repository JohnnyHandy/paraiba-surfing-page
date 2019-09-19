import React from 'react'
import {Col} from 'reactstrap'

const season = (props)=>{
    return(
        <>
        <Col style={{color:'white',fontFamily:'Bitter', fontWeight:'bold',margin:'auto'}}>{props.lang === 'PT-BR' ? 'Melhor Temporada' : 'Best Season'}</Col>
        <Col style={{color:'white',fontFamily:'Bitter'}}>{props.season}</Col>
        </>
    )
}

export default season