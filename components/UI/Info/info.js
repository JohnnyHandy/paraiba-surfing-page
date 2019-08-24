import React, {useState,useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import * as actionTypes from '../../../assets/utility/actionTypes'

import Menu from './InfoMenu/infoMenu'

const info = (props)=>{
    const [spot,setSpot]=useState(null)
    const spotChangeHandler=(data)=>{
        setSpot(data)
    }
    let city = {}
    switch(props.city){
        case actionTypes.JOAO_PESSOA:
            city={
                name:'João Pessoa',
                details:{
                    graminha:{
                        name:'Graminha',
                        picture:'https://i.imgur.com/9dJlvlt.jpg',
                        text:'Graminha text'
                    },
                    havaizinho:{
                        name:'Havaízinho',
                        picture:'https://i.imgur.com/1MrcV27.png',
                        havaizinho:'Havaízinho text'
                    }
                }   
            };
            break
        case actionTypes.CABEDELO:
            city={
                name:'Cabedelo',
                details:{
                    barretas:{
                        name:'Barretas',
                        picture:'',
                        text:'Barretas text'
                    },
                    macaco:{
                        name:'Mar do macaco',
                        picture:'',
                        text:'Macaco text'
                    },
                    dique:{
                        name:'Dique de Cabedelo',
                        picture:'',
                        text:"Dique text"
                    }
                }
            }
            break
        case actionTypes.CONDE:
            city={
                name:'Conde',
                details:{
                    enseada:{
                        name:'Enseada de coqueirinho',
                        picture:'',
                        text:'Enseada text'
                    },
                    Canyon:{
                        name:'Canyon de coqueirinho',
                        picture:'',
                        text:'Canyon text'
                    },
                    Arapuca:{
                        name:'Praia do Arapuca',
                        picture:'',
                        text:'Arapuca text'
                    },
                    praiaBela:{
                        name:'Praia Bela',
                        picture:'',
                        text:'Praia Bela text'
                    }

                }
            }
            break
        case actionTypes.MATARACA:
            city={
                name:'Mataraca',
                details:{
                    bocaDaBarra:{
                        name:'Boca da Barra',
                        picture:'',
                        text:'Boca da barra text'
                    },
                    barraCamaratuba:{
                        name:'Barra de Camaratuba',
                        picture:'',
                        text:'Barra de Camaratuba text'
                    }
                }
            }
            break
        case actionTypes.BAIA_DA_TRAICAO:
            city={
                name:'Baía da Traição',
                details:{
                    jerimum:{
                        name:'Praia do Jerimum',
                        picture:'',
                        text:'Jerimum text'
                    },
                    forte:{
                        name:'Praia do Forte',
                        picture:'',
                        text:'Jerimum text'
                    },
                    tamba:{
                        name:'Praia do Tambá',
                        picture:'',
                        text:'Tamba text'
                    },
                    valas:{
                        name:'Praia das valas',
                        picture:'',
                        text:'Valas text'
                    }

                }
            }
            break
        default:
            city=null
            break
    }
    let itemArray = []
    if(city){
        for(let i in city.details){
            itemArray.push(city.details[i].name)
        }
    }
    useEffect(()=>{
        console.log('useEffect info.js')
        console.log(spot)
        spotChangeHandler(itemArray[0])
    },[props.city])
    
    
   return props.city !=='' ? (
        <Container className='info'>
            <Row>
                <Col sm='2'>
                    {city.name}
                </Col>
                <Col sm='10'>
                    {spot}
                </Col>
            </Row>
            <Row>
                <Col sm='2'>
                   <Menu 
                   spotChange = {(data)=>spotChangeHandler(data)}
                   itemArray = {itemArray}/>
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