import React from 'react'
import {Col} from 'reactstrap'

const breakType = (props)=>{
    return(
        <>
        <Col>Break</Col>
        <Col>{props.break}</Col>
        </>
    )
}

export default breakType