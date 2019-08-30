import React from 'react'

const text = (props)=>{
    const textStyle = {
        color:'white'
    }
    return(
        <>
        <h3 style={textStyle} >{props.title}</h3>
        <p style={textStyle}>{props.text}</p>
        </>
    )
}

export default text