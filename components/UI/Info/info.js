import React, {useState} from 'react'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from './infoMenu'

const info = (props)=>{
    
   return props.spot !=='' ? (
        <Container className='info'>
            <Row>
                <Col sm='2'>
                    {props.spot}
                </Col>
                <Col sm='10'>
                    {props.actualSpot}
                </Col>
            </Row>
            <Row>
                <Col sm='2'>
                   <Menu/>
                </Col>
                <Col sm='4'> 
                    Foto
                </Col>
                <Col sm='4'>
                    Texto
                </Col>
                <Col sm='2'>
                    <Row>
                        Swell
                    </Row>
                    <Row>
                        Swell 
                    </Row>
                    <Row>
                        Wind
                    </Row>
                    <Row>
                        Wind
                    </Row>
                </Col>
            </Row>
        </Container>):null
}

export default info