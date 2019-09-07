import React, {useState,useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './info.css'

import * as actionTypes from '../../../assets/utility/actionTypes'
import * as cityData from './data/data'

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
            city = props.lang === 'PT-BR' ? cityData.joaoPessoaPT : cityData.joaoPessoaEN
            break
        case actionTypes.CABEDELO:
            city= props.lang === 'PT-BR' ? cityData.cabedeloPT : cityData.cabedeloEN
            break
        case actionTypes.CONDE:
            city= props.lang === 'PT-BR' ? cityData.condePT : cityData.condeEN
            break
        case actionTypes.MATARACA:
            city= props.lang == 'PT-BR' ? cityData.mataracaPT : cityData.mataracaEN
            break
        case actionTypes.BAIA_DA_TRAICAO:
            city= props.lang === 'PT-BR' ? cityData.baiaDaTraicaoPT : cityData.baiaDaTraicaoEN
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
                        <Swell lang ={props.lang} swell = {swellArray[index]}/>
                    </Row>
                    <Row style={{display:'inline-block'}}>
                        <Wind lang = {props.lang} wind = {windArray[index]}/>
                    </Row>
                    <Row style={{border:'1px solid aquamarine'}}>
                        <Tide lang = {props.lang} tide={tideArray[index]} /> 
                    </Row>
                    <Row style={{border:'1px solid aquamarine'}}>
                        <Break lang = {props.lang} break={breakArray[index]}/>
                    </Row>
                    <Row style={{border:'1px solid aquamarine'}}>
                        <Season lang = {props.lang} season ={seasonArray[index]} />
                    </Row>
                    <Row style={{border:'1px solid aquamarine'}}>
                        <Crowd lang = {props.lang} crowd = {crowdArray[index]}/>
                    </Row>
                </Col>
            </Row>
        </Container>):null
}

export default info