import React, {useState,useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './info.css'

import * as actionTypes from '../../../assets/utility/actionTypes'

import Menu from './InfoMenu/infoMenu'
import Picture from './InfoPicture/infoPicture'
import Swell from './InfoSwell/infoSwell'
import Wind from './InfoWind/infoWind'
import Text from './InfoText/infoText'
import Tide from './InfoTide/infoTide'
import Crowd from './InfoCrowd/infoCrowd'
import Break from './InfoBreak/infoBreak'
import Season from './InfoSeason/infoSeason'

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
                        text:'Localizada na capital, a graminha é um fundo de areia que recebe boas ondas nos meses de verão, quando recebe ondulações do quadrante norte',
                        swellDirection:['N','NE'],
                        windDirection:['N','NE','SE'],
                        crowd:'Baixo',
                        tide:'Seca ou Cheia',
                        break:'Areia',
                        season:'Verão'
                    },
                    havaizinho:{
                        name:'Havaízinho',
                        picture:'https://i.imgur.com/PzSkCB9.png?1',
                        text:'Um dos melhores picos de surf do estado, essa bancada de pedras fica localizada a 800m da praia e funciona sempre com vento terral e/ou fraco, com ondulação constante. Para chegar ao pico, são necessários 15 minutos de remada',
                        swellDirection:['N','NE','SE','S'],
                        windDirection:['N','NE','SE','S'],
                        crowd:'Baixo',
                        tide:'Meia-maré secando ou seca enchendo',
                        break:'Pedra',
                        season:'Ano todo'
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
                        crowd:'Baixo',
                        tide:'Meia-maré secando ou seca enchendo',
                        break:'Pedra',
                        season:'Ano todo'
                    },
                    macaco:{
                        name:'Mar do macaco',
                        picture:'https://i.imgur.com/LLW5U1H.png',
                        text:'O pico mais frequentado pelos praticantes de surf da zona metropolitana de João Pessoa. Possui boas ondas para todos os níveis.',
                        swellDirection:['S','SE'],
                        windDirection:['S','SE'],
                        crowd:'Alto',
                        tide:'Seca ou Cheia',
                        break:'Areia',
                        season:'Inverno'
                    },
                    dique:{
                        name:'Dique de Cabedelo',
                        picture:'https://i.imgur.com/c9X37Ih.jpg',
                        text:"Lenda do surf nos anos 80 e 90 devido a seus tubos perfeitos, o dique de cabedelo mudou ao longo do tempo e já não dá as mesmas ondas de antigamente, porém ainda fornece a possibilidade de um surf consistente.",
                        swellDirection:['S','SE'],
                        windDirection:['S','SE'],
                        crowd:'Alto',
                        tide:'Seca ou Cheia',
                        break:'Areia',
                        season:'Inverno'
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
                        text:'Uma das praia mais paradisíacas do estado também é famosa pelas suas ondas de boa formação.',
                        swellDirection:['S','SE','E'],
                        windDirection:['SE','S'],
                        crowd:'Médio',
                        tide:'Seca',
                        break:'Areia e Pedra',
                        season:'Inverno'
                    },
                    Canyon:{
                        name:'Canyon de coqueirinho',
                        picture:'https://i.imgur.com/im1LE3f.png',
                        text:'Provavelmente um dos picos com as ondas mais pesadas e radicais da região. Não é recomendado para iniciantes devido a força com que as ondas quebram na bancada de areia.',
                        swellDirection:['S','SE'],
                        windDirection:['SE','S'],
                        crowd:'Médio',
                        tide:'Seca ou Cheia',
                        break:'Areia',
                        season:'Inverno'

                    },
                    Arapuca:{
                        name:'Praia do Arapuca',
                        picture:'https://i.imgur.com/pathSzb.jpg',
                        text:'Pico que proporciona boas valas,podendo contar com ondas radicais, pesadas e divertidas',
                        swellDirection:['S','SE'],
                        windDirection:['SE','S'],
                        crowd:'Médio',
                        tide:'Cheia',
                        break:'Fundo de Areia',
                        season:'Inverno'
                    },
                    praiaBela:{
                        name:'Praia Bela',
                        picture:'https://i.imgur.com/1sYaZeS.jpg',
                        text:'Localizado na desenbocadura do rio Graú, o pico oferece excelentes quando há vento terral.',
                        swellDirection:['S','SE'],
                        windDirection:['SE','S'],
                        crowd:'Baixo',
                        tide:'Seca',
                        break:'Areia',
                        season:'Inverno'
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
                        crowd:'Baixo',
                        tide:'Seca',
                        break:'Areia',
                        season:'Ano todo'
                    },
                    barraCamaratuba:{
                        name:'Barra de Camaratuba',
                        picture:'https://i.imgur.com/uMHeFjC.jpg',
                        text:'Um dos picos de surf mais constantes do estado, pois dá boas ondas o ano todo, do verão ao inverno',
                        swellDirection:['S','SE','E','NE','N'],
                        windDirection:['SE','S','NE','N'],
                        crowd:'Médio',
                        tide:'Seca ou Cheia',
                        break:'Areia',
                        season:'Ano todo'
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
                        crowd:'Baixo',
                        tide:'Seca ou Cheia',
                        break:'Areia',
                        season:'Ano todo'
                    },
                    forte:{
                        name:'Praia do Forte',
                        picture:'https://i.imgur.com/3sLJ91D.png',
                        text:'Pico próximo do centro da cidade, é uma boa escolha para surfar ondas não tão fortes porém divertidas.',
                        swellDirection:['S','SE','E','NE','N'],
                        windDirection:['SE','S','NE','N'],
                        crowd:'Baixo',
                        tide:'Seca ou Cheia',
                        break:'Areia',
                        season:'Ano todo'
                    },
                    tamba:{
                        name:'Praia do Tambá',
                        picture:'https://i.imgur.com/3NgaXTE.png',
                        text:'Pico de funcionamento constante que fornece boas ondas e valas, localizado dentro da área indigena.',
                        swellDirection:['S','SE','E','NE','N'],
                        windDirection:['SE','S','NE','N'],
                        crowd:'Baixo',
                        tide:'Seca ou Cheia',
                        break:'Areia',
                        season:'Ano todo'
                    },
                    valas:{
                        name:'Praia das valas',
                        picture:'https://i.imgur.com/OOIxDZo.jpg',
                        text:'Pelo nome da praia, o pico localizado dentro da área indigena fornece boas valas e surf constante ao longo do ano.',
                        swellDirection:['S','SE','E','NE','N'],
                        windDirection:['SE','S','NE','N'],
                        crowd:'Baixo',
                        tide:'Seca ou Cheia',
                        break:'Areia',
                        season:'Ano todo'
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
    let textArray = []
    let swellArray = []
    let windArray = []
    let crowdArray = []
    let tideArray = []
    let breakArray = []
    let seasonArray = []
    if(city){
        for(let i in city.details){
            itemArray.push(city.details[i].name)
            picArray.push(city.details[i].picture)
            textArray.push(city.details[i].text)
            swellArray.push(city.details[i].swellDirection)
            windArray.push(city.details[i].windDirection)
            crowdArray.push(city.details[i].crowd)
            tideArray.push(city.details[i].tide)
            breakArray.push(city.details[i].break)
            seasonArray.push(city.details[i].season)
        }
        console.log(swellArray)
    }
    useEffect(()=>{
        spotChangeHandler(0)
    },[props.city])
    
   return props.city !=='' ? (
        <Container className='info'>
            <Row className='firstrow'>
                <Col style={{fontFamily:"'Pacifico','cursive'",fontSize:'30px',color:'white',transition:'0.2s'}}>
                    {city.name}
                </Col>
            </Row>
            <Row className='secondrow'>
                <Col sm='2' className='menucol'>
                   <Menu 
                   spotChange = {(index)=>spotChangeHandler(index)}
                   itemArray = {itemArray}/>
                </Col>
                <Col sm='4' className='infoimage'> 
                    <Picture
                    picture = {picArray[index]}/>
                </Col>
                <Col sm='3' 
                    className='infotext'>
                    <Text text = {textArray[index]}
                          title = {itemArray[index]}  />
                </Col>
                <Col sm='3' style={{display:'grid'}}>
                    <Row style={{display:'inline-block'}}>
                        <Swell swell = {swellArray[index]}/>
                    </Row>
                    <Row style={{display:'inline-block'}}>
                        <Wind wind = {windArray[index]}/>
                    </Row>
                    <Row style={{border:'1px solid aquamarine'}}>
                        <Tide tide={tideArray[index]} /> 
                    </Row>
                    <Row style={{border:'1px solid aquamarine'}}>
                        <Break break={breakArray[index]}/>
                    </Row>
                    <Row style={{border:'1px solid aquamarine'}}>
                        <Season season ={seasonArray[index]} />
                    </Row>
                    <Row style={{border:'1px solid aquamarine'}}>
                        <Crowd crowd = {crowdArray[index]}/>
                    </Row>
                </Col>
            </Row>
        </Container>):null
}

export default info