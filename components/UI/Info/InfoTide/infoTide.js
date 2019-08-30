import React from 'react'
import {Col} from 'reactstrap'

const tide = (props)=>{
    return(
        <>
        <Col style={{color:'white',fontFamily:'Bitter',fontWeight:'bold',margin:'auto'}}>Melhor Maré</Col>
        <Col style={{color:'white',fontFamily:'Bitter'}}>{props.tide}</Col>
        </>
    )
}

export default tide