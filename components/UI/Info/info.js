import React, {useState,useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import * as actionTypes from '../../../assets/utility/actionTypes'

import Menu from './InfoMenu/infoMenu'
import Picture from './InfoPicture/infoPicture'
import Swell from './infoSwell/infoSwell'

const info = (props)=>{
    const [index,setIndex]=useState(undefined)
    const spotChangeHandler=(index)=>{
        setIndex(index)
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
                        text:'Localizada na capital, a graminha é um fundo de areia que fornece boas ondas nos meses de verão, quando recebe ondulações do quadrante norte',
                        swellDirection:['N','NE'],
                        windDirection:['N','NE','SE'],
                        season:'Summer - (November to March)'
                    },
                    havaizinho:{
                        name:'Havaízinho',
                        picture:'https://i.imgur.com/1MrcV27.png',
                        havaizinho:'Um dos melhores picos de surf do estado, essa bancada de pedras fica localizada a 800m da praia e funciona sempre com vento terral e/ou fraco, com ondulação constante. para chegar ao pico, são necessários 15 minutos de remada',
                        swellDirection:['N','NE','SE','S'],
                        windDirection:['N','NE','SE','S'],
                        season:'Year-round'
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
                        text:'Um dos melhores picos do estado. Localizada a 1km da praia, essa bancada de pedras funciona sempre com vento terral e/ou fraco, com ondulação consistente. Para chegar ao pico, são necessarios aproximadamente 20 a 25 moinutos de remada',
                        swellDirection:['N','NE','SE','S'],
                        windDirection:['N','NE','SE','S'],
                        season:'Year-round'
                    },
                    macaco:{
                        name:'Mar do macaco',
                        picture:'https://i.imgur.com/vKbPJhj.png',
                        text:'O pico mais frequentado pelos praticantes de surf da zona metropolitana de João Pessoa. Possui boas ondas para todos os níveis.',
                        swellDirection:['S','SE'],
                        windDirection:['S','SE'],
                        season:'Winter - (May to August)'
                    },
                    dique:{
                        name:'Dique de Cabedelo',
                        picture:'https://i.imgur.com/c9X37Ih.jpg',
                        text:"Lenda do surf nos anos 80 e 90 devido a seus tubos perfeitos, o dique de cabedelo mudou ao longo do tempo e já não dá as mesmas ondas de antigamente, porém ainda fornece a possibilidade de um surf consistente.",
                        swellDirection:['S','SE'],
                        windDirection:['S','SE'],
                        season:'Winter - (May to August)'
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
                        text:'Uma das praia mais paradisíacas do estado também é famosa pelas suas ondas, geralmente longas direitas.',
                        swellDirection:['S','SE','E'],
                        windDirection:['SE','S'],
                        season:'Winter - (May to August)'
                    },
                    Canyon:{
                        name:'Canyon de coqueirinho',
                        picture:'https://i.imgur.com/im1LE3f.png',
                        text:'Provavelmente um dos picos com as ondas mais pesadas e radicais da região. Não é recomendado para iniciantes devido a força com que as ondas quebram na bancada de areia.',
                        swellDirection:['S','SE'],
                        windDirection:['SE','S'],
                        season:'Winter - (May to August)'

                    },
                    Arapuca:{
                        name:'Praia do Arapuca',
                        picture:'https://i.imgur.com/pathSzb.jpg',
                        text:'Pico que proporciona boas valas,podendo contar com ondas radicais, pesadas e divertidas',
                        swellDirection:['S','SE'],
                        windDirection:['SE','S'],
                        season:'Winter - (May to August)'
                    },
                    praiaBela:{
                        name:'Praia Bela',
                        picture:'https://i.imgur.com/1sYaZeS.jpg',
                        text:'Localizado na desenbocadura do rio Graú, o pico oferece excelentes quando há vento terral, principalmente na maré seca.',
                        swellDirection:['S','SE'],
                        windDirection:['SE','S'],
                        season:'Winter (May to August)'
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
                        text:'Pico localizado na desenbocadura do rio Camaratuba, funcionando melhor quando a maré está na seca.',
                        swellDirection:['S','SE','E','NE','N'],
                        windDirection:['SE','S','NE','N'],
                        season:'Year-round'
                    },
                    barraCamaratuba:{
                        name:'Barra de Camaratuba',
                        picture:'https://i.imgur.com/uMHeFjC.jpg',
                        text:'Um dos picos de surf mais constantes do estado, pois dá boas ondas o ano todo, do verão ao inverno',
                        swellDirection:['S','SE','E','NE','N'],
                        windDirection:['SE','S','NE','N'],
                        season:'Year-round'
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
                        text:'Pico mais afastado do centro da cidade e com acesso relativamente dificil, o pico fornece ondas de qualidade na maré seca.',
                        swellDirection:['S','SE','E','NE','N'],
                        windDirection:['SE','S','NE','N'],
                        season:'Year-round'
                    },
                    forte:{
                        name:'Praia do Forte',
                        picture:'https://i.imgur.com/3sLJ91D.png',
                        text:'Pico próximo do centro da cidade, é uma boa escolha para surfar ondas não tão fortes porém divertidas.',
                        swellDirection:['S','SE','E','NE','N'],
                        windDirection:['SE','S','NE','N'],
                        season:'Year-round'
                    },
                    tamba:{
                        name:'Praia do Tambá',
                        picture:'https://i.imgur.com/3NgaXTE.png',
                        text:'Pico de funcionamento constante que fornece boas ondas e valas, localizado dentro da área indigena.',
                        swellDirection:['S','SE','E','NE','N'],
                        windDirection:['SE','S','NE','N'],
                        season:'Year-round'
                    },
                    valas:{
                        name:'Praia das valas',
                        picture:'https://i.imgur.com/OOIxDZo.jpg',
                        text:'Pelo nome da praia, o pico localizado dentro da área indigena fornece boas valas e surf constante ao longo do ano.',
                        swellDirection:['S','SE','E','NE','N'],
                        windDirection:['SE','S','NE','N'],
                        season:'Year-round'
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
            swellArray.push(city.details[i].swellDirection)
        }
        console.log(swellArray)
    }
    useEffect(()=>{
        spotChangeHandler(0)
    },[props.city])
    
   return props.city !=='' ? (
        <Container className='info'>
            <Row>
                <Col sm='2'>
                    {city.name}
                </Col>
                <Col sm='10'>
                    {itemArray[index]}
                </Col>
            </Row>
            <Row>
                <Col sm='2'>
                   <Menu 
                   spotChange = {(index)=>spotChangeHandler(index)}
                   itemArray = {itemArray}/>
                </Col>
                <Col sm='4'> 
                    <Picture

                    picture = {picArray[index]}/>
                </Col>
                <Col sm='4'>
                    Texto
                </Col>
                <Col sm='2'>
                    <Row>
                        <Swell swell={swellArray[index]}/>
                    </Row>
                    <Row>
                        Wind
                    </Row>
                </Col>
            </Row>
        </Container>):null
}

export default info