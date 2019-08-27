import React,{useState,useEffect} from 'react'
import {Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const infoMenu = (props)=>{
    console.log(props.itemArray)
    let itemName = null
    itemName = props.itemArray ? props.itemArray.map((i,index)=>{
        return (<Row className='menu' onClick={()=>{props.spotChange(index)}} id={index} key={index}>{i}</Row>)
    }):null

    return(
        <div>
            {itemName}
        </div>
    )
}

export default infoMenu