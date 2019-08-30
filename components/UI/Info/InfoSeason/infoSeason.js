import React from 'react'
import {Col} from 'reactstrap'

const season = (props)=>{
    return(
        <>
        <Col>Best Season</Col>
        <Col>{props.season}</Col>
        </>
    )
}

export default season