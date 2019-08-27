import React,{useState,useEffect} from 'react'
import {Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const infoMenu = (props)=>{
    console.log(props.itemArray)
    let itemName = null
    let heightStyle = null
    itemName = props.itemArray ? props.itemArray.map((i,index)=>{
        heightStyle = 100/props.itemArray.length
        let style = {height:heightStyle.toString()+'%'}
        return (<Row className='menu' style={style} onClick={()=>{props.spotChange(index)}} id={index} key={index}>{i}</Row>)
    }):null

    return <div className='infoMenu'>{itemName}</div>
}

export default infoMenu