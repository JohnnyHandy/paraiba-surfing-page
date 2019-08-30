import React from 'react'
import Media from 'react-media'
import {Container,Row,Col,Card,CardImg,CardFooter} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import './selector.css'

import * as actionTypes from '../../../assets/utility/actionTypes'

const selector = (props)=>{
    return (
        <Container>
        <Row className='selector-row'>
            <Col>
                <Card className='zoom img' onClick={()=>props.spotChange(actionTypes.JOAO_PESSOA)}>
                        <CardImg src='https://i.imgur.com/WQKMYT0.jpg'/>
                        <CardFooter 
                        className='selector' 
                        >João Pessoa
                        </CardFooter>
                </Card>
            </Col>
            {props.city === actionTypes.JOAO_PESSOA ? <Media query={{maxWidth:430}}>
               <div style={{height:'750px'}}>{props.info}</div> 
            </Media> : null}
            <Col>
                <Card className='zoom img' onClick={()=>props.spotChange(actionTypes.CABEDELO)}>
                    <CardImg src='https://i.imgur.com/ulEtAav.png'/>
                    <CardFooter className='selector'  
                     >Cabedelo
                    </CardFooter>
                </Card>
            </Col>
            {props.city === actionTypes.CABEDELO ? <Media query={{maxWidth:430}}>
                <div style={{height:'850px'}}>{props.info}</div>
            </Media> : null}
            <Col>
                <Card className='zoom img' onClick={()=>props.spotChange(actionTypes.CONDE)}>
                    <CardImg src='https://i.imgur.com/6L9glWJ.jpg'/>
                    <CardFooter className='selector'>
                        Conde
                    </CardFooter>
                </Card>
            </Col>
            {props.city === actionTypes.CONDE ? <Media query={{maxWidth:430}}>
                {props.info}
            </Media> : null}
            <Col>
                <Card style={{height:'100%'}} className='zoom img' onClick={()=>props.spotChange(actionTypes.BAIA_DA_TRAICAO)}>
                    <CardImg style={{height:'100%'}} src='https://i.imgur.com/PAL8eum.png'/>
                    <CardFooter className='selector'>
                        Baía da Traição
                    </CardFooter>
                </Card>
            </Col>
            {props.city === actionTypes.BAIA_DA_TRAICAO ? <Media query={{maxWidth:430}}>
                {props.info}
            </Media> : null}
            <Col>
                <Card className='zoom img' onClick={()=>props.spotChange(actionTypes.MATARACA)}>
                    <CardImg src='https://i.imgur.com/XOjoAvH.png'/>
                    <CardFooter className='selector'>
                        Mataraca
                    </CardFooter>
                </Card>
            </Col>
            {props.city === actionTypes.MATARACA ? <Media query={{maxWidth:430}}>
                {props.info}
            </Media> : null}
        </Row>
    </Container>
    )
}

export default selector