import React, {useState,useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import * as actionTypes from '../../../assets/utility/actionTypes'

import Menu from './InfoMenu/infoMenu'
import Picture from './InfoPicture/infoPicture'
import Swell from './infoSwell/infoSwell'

const info = (props)=>{
    console.log(props.city)
    const [spot,setSpot]=useState(null)
    const [imageIndex,setImage]=useState(null)
    const spotChangeHandler=(data,pictureIndex)=>{
        setSpot(data)
        setImage(pictureIndex)
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
                        text:'Graminha text',
                        swellDirection:['N','NE']
                    },
                    havaizinho:{
                        name:'Havaízinho',
                        picture:'https://i.imgur.com/1MrcV27.png',
                        havaizinho:'Havaízinho text',
                        swellDirection:['N','NE','SE','S']
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
                        picture:'https://i.imgur.com/G6v9kkB.png',
                        text:'Barretas text',
                        swellDirection:['N','NE']
                    },
                    macaco:{
                        name:'Mar do macaco',
                        picture:'https://i.imgur.com/vKbPJhj.png',
                        text:'Macaco text',
                        swellDirection:['S','SE']
                    },
                    dique:{
                        name:'Dique de Cabedelo',
                        picture:'https://i.imgur.com/c9X37Ih.jpg',
                        text:"Dique text",
                        swellDirection:['S','SE']
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
                        picture:'https://i.imgur.com/8nOXHSZ.jpg',
                        text:'Enseada text'
                    },
                    Canyon:{
                        name:'Canyon de coqueirinho',
                        picture:'https://i.imgur.com/im1LE3f.png',
                        text:'Canyon text'
                    },
                    Arapuca:{
                        name:'Praia do Arapuca',
                        picture:'https://i.imgur.com/pathSzb.jpg',
                        text:'Arapuca text'
                    },
                    praiaBela:{
                        name:'Praia Bela',
                        picture:'https://i.imgur.com/1sYaZeS.jpg',
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
                        picture:'https://i.imgur.com/EWW0gbi.png',
                        text:'Boca da barra text'
                    },
                    barraCamaratuba:{
                        name:'Barra de Camaratuba',
                        picture:'https://i.imgur.com/uMHeFjC.jpg',
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
                        picture:'https://i.imgur.com/fQbgkrj.jpg',
                        text:'Jerimum text'
                    },
                    forte:{
                        name:'Praia do Forte',
                        picture:'https://i.imgur.com/3sLJ91D.png',
                        text:'Jerimum text'
                    },
                    tamba:{
                        name:'Praia do Tambá',
                        picture:'https://i.imgur.com/3NgaXTE.png',
                        text:'Tamba text'
                    },
                    valas:{
                        name:'Praia das valas',
                        picture:'https://i.imgur.com/OOIxDZo.jpg',
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
    let picArray = []
    let swellArray = []
    if(city){
        for(let i in city.details){
            itemArray.push(city.details[i].name)
            picArray.push(city.details[i].picture)
            swellArray = (city.details[i].swellDirection)
        }
        console.log(swellArray)
    }
    useEffect(()=>{
        console.log('useEffect info.js')
        console.log(spot)
        spotChangeHandler(itemArray[0],0)
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
                   spotChange = {(spot,index)=>spotChangeHandler(spot,index)}
                   itemArray = {itemArray}/>
                </Col>
                <Col sm='4'> 
                    <Picture

                    picture = {picArray[imageIndex]}/>
                </Col>
                <Col sm='4'>
                    Texto
                </Col>
                <Col sm='2'>
                    <Row>
                        <Swell swell={swellArray}/>
                    </Row>
                    <Row>
                        Wind
                    </Row>
                </Col>
            </Row>
        </Container>):null
}

export default info