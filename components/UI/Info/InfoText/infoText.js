import React from 'react'

const text = (props)=>{
    const titleStyle = {
        color:'black'
    }
    return(
        <>
        <h3 style={titleStyle} >{props.title}</h3>
        <p>{props.text}</p>
        </>
    )
}

export default text