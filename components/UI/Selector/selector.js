import React from 'react'
import {Container,Row,Col,Card,CardImg,CardFooter} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import * as actionTypes from '../../../assets/utility/actionTypes'

const selector = (props)=>{
    return (
        <Container>
        <Row>
            <Col>
                <Card className='zoom img'>
                        <CardImg src='https://i.imgur.com/WQKMYT0.jpg'/>
                        <CardFooter onClick={()=>props.spotChange(actionTypes.JOAO_PESSOA)}>João Pessoa</CardFooter>
                </Card>
            </Col>
            <Col>
                <Card className='zoom img'>
                    <CardImg src='https://i.imgur.com/yG5jADA.jpg'/>
                    <CardFooter onClick={()=>props.spotChange(actionTypes.CABEDELO)}>Cabedelo</CardFooter>
                </Card>
            </Col>
            <Col>
                <Card className='zoom img'>
                    <CardImg src='https://i.imgur.com/6L9glWJ.jpg'/>
                    <CardFooter onClick={()=>props.spotChange(actionTypes.CONDE)}>Conde</CardFooter>
                </Card>
            </Col>
            <Col>
                <Card className='zoom img'>
                    <CardImg src='https://i.imgur.com/S68CG5u.jpg'/>
                    <CardFooter onClick={()=>props.spotChange(actionTypes.BAIA_DA_TRAICAO)}>Baía da Traição</CardFooter>
                </Card>
            </Col>
            <Col>
                <Card className='zoom img'>
                    <CardImg src='https://i.imgur.com/XOjoAvH.png'/>
                    <CardFooter onClick={()=>props.spotChange(actionTypes.MATARACA)}>Mataraca</CardFooter>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export default selector