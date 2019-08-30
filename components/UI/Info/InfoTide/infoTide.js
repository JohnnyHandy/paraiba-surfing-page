import React from 'react'
import {Col} from 'reactstrap'

const tide = (props)=>{
    return(
        <>
        <Col>Tide</Col>
        <Col>{props.tide}</Col>
        </>
    )
}

export default tide