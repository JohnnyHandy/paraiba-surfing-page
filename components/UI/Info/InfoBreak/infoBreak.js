import React from 'react'
import {Col} from 'reactstrap'

const breakType = (props)=>{
    return(
        <>
        <Col style={{color:'white',fontFamily:'Bitter',fontWeight:'bold',margin:'auto'}}>Fundo</Col>
        <Col style={{color:'white',fontFamily:'Bitter'}}>{props.break}</Col>
        </>
    )
}

export default breakType