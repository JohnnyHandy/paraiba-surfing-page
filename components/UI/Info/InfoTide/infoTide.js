import React from 'react'
import {Col} from 'reactstrap'

const tide = (props)=>{
    return(
        <>
        <Col style={{color:'white',fontFamily:'Bitter',fontWeight:'bold',margin:'auto'}}>{props.lang === 'PT-BR' ? 'Melhor Maré' : 'Best tide'}</Col>
        <Col style={{color:'white',fontFamily:'Bitter'}}>{props.tide}</Col>
        </>
    )
}

export default tide