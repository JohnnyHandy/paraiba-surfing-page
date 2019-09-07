import React from 'react'

import {NorthSwell,NorthEastSwell,EastSwell,SouthEastSwell,SouthSwell} from '../../Swell/swell'

const swell = (props)=>{
    let swellElement 
    swellElement = props.swell ? props.swell.map((i,index)=>{
        switch(i){
            case 'N':
                return(<NorthSwell key={i}/>)
            break
            case 'NE':
                return(<NorthEastSwell key={i}/>)
            break
            case 'E' :
                return(<EastSwell key={i}/>)
            break
            case 'SE':
                return(<SouthEastSwell key={i}/>)
            break
            case 'S':
                return(<SouthSwell key={i}/>)
            break
            default:''
            return  null
            break
        }     
    }):null
    return (
        <div>
          <h5 style={{color:'white'}}>Swell</h5>
          <div style={{display:'flex',justifyContent:'center',marginBottom:'5px'}}>
          {swellElement}
          </div>
        </div>
    )
}

export default swell