import React from 'react'

import {NorthWind,NorthEastWind,EastWind,SouthEastWind,SouthWind} from '../../Wind/wind'

const wind = (props)=>{
    let windElement 
    windElement = props.wind ? props.wind.map((i,index)=>{
        switch(i){
            case 'N':
                return(<NorthWind/>)
            break
            case 'NE':
                return(<NorthEastWind/>)
            break
            case 'E' :
                return(<EastWind/>)
            break
            case 'SE':
                return(<SouthEastWind/>)
            break
            case 'S':
                return(<SouthWind/>)
            break
            default:''
            return  null
            break
        }     
    }):null
    return (
        <div>
            <h5 style={{color:'white'}}>{props.lang === 'PT-BR' ? 'Vento' : 'Wind' }</h5>
            <div style={{display:'flex',justifyContent:'center',marginBottom:'5px'}}>
            {windElement}
            </div>
            
        </div>
    )
}

export default wind