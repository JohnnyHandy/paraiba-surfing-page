import React from 'react'
import {Container,Row,Col,Card,CardImg,CardFooter} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const selector = (props)=>{
    return (
        <Container>
        <Row>
            <Col>
                <Card className='zoom img'>
                        <CardImg src='https://i.imgur.com/WQKMYT0.jpg'/>
                        <CardFooter onClick={()=>props.spotChange('joaopessoa')}>João Pessoa</CardFooter>
                </Card>
            </Col>
            <Col>
                <Card className='zoom img'>
                    <CardImg src='https://i.imgur.com/yG5jADA.jpg'/>
                    <CardFooter>Cabedelo</CardFooter>
                </Card>
            </Col>
            <Col>
                <Card className='zoom img'>
                    <CardImg src='https://i.imgur.com/6L9glWJ.jpg'/>
                    <CardFooter>Conde</CardFooter>
                </Card>
            </Col>
            <Col>
                <Card className='zoom img'>
                    <CardImg src='https://i.imgur.com/S68CG5u.jpg'/>
                    <CardFooter>Baía da Traição</CardFooter>
                </Card>
            </Col>
            <Col>
                <Card className='zoom img'>
                    <CardImg src='https://i.imgur.com/XOjoAvH.png'/>
                    <CardFooter>Mataraca</CardFooter>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export default selector