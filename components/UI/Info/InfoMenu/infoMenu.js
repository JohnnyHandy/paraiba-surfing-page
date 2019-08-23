import React,{useState,useEffect} from 'react'
import {Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const infoMenu = (props)=>{
    let itemName = null
    let itemArray = []
    for(let i in props.details){
        itemArray.push(props.details[i].name)
    }
    itemName = itemArray ? itemArray.map((i,index)=>{
        return <Row className='menu' onClick={()=>props.spotChange(i)} id={index} key={index}>{i}</Row>
    }):null

    return(
        <div>
            {itemName}
        </div>
    )
}

export default infoMenu