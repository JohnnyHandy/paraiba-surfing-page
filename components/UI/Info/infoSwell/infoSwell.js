import React from 'react'

import {NorthSwell,NorthEastSwell,EastSwell,SouthEastSwell,SouthSwell} from '../../Swell/swell'

const swell = (props)=>{
    let swellElement 
    swellElement = props.swell ? props.swell.map((i,index)=>{
        switch(i){
            case 'N':
                return(<NorthSwell/>)
            break
            case 'NE':
                return(<NorthEastSwell/>)
            break
            case 'E' :
                return(<EastSwell/>)
            break
            case 'SE':
                return(<SouthEastSwell/>)
            break
            case 'S':
                return(<SouthSwell/>)
            break
            default:''
            return  null
            break
        }     
    }):null
    return (
        <>
          <h5>Swell</h5>
          <div style={{display:'flex',justifyContent:'center'}}>
          {swellElement}
          </div>
          
        </>
    )
}

export default swell