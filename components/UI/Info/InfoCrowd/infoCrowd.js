import React from 'react'
import {Col} from 'reactstrap'

const crowd = (props)=>{
    return(
        <>
        <Col style={{color:'white',fontFamily:'Bitter',fontWeight:'bold',margin:'auto'}}>Crowd</Col>
        <Col style={{color:'white',fontFamily:'Bitter'}}>{props.crowd}</Col>
        </>
    )
}

export default crowd