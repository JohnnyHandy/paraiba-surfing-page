import React, {useState} from 'react'
import Media from 'react-media'

import Info from '../components/UI/Info/info'
import Selector from '../components/UI/Selector/selector'
import Brasil from '../assets/images/br.svg'
import Britain from '../assets/images/gb.svg'

import './index.css'


const landing = ()=>{
    const [lang,setLang] = useState('PT-BR')
    const [city, setCity] = useState(undefined);
    const spotChangeHandler=(cityName)=>{
        cityName !== city ? setCity(cityName) : setCity(undefined)
    }
    let info = city ? <Info city={city} lang={lang}/> : null
    return(
    <div className='title'>
        <Media query={{small: "(max-width: 430px)"}}>
        {matches => matches ? (
            <div style={{width:'100%', height:'23px', backgroundColor:'blue',display:'inline-flex'}}>
                    <img className='img' style={{height:'18px', width:'30px', marginBottom:'8px'}} src={Brasil} alt='PT-BR' onClick={()=>setLang('PT-BR')}/>
                    <img className='img'style={{height:'18px', width: '30px', marginBottom:'8px'}} src={Britain} alt='EN-GB' onClick ={()=>setLang('EN-GB')}/>
            </div>
        ) : (
            <div style={{width:'100%', height:'23px', backgroundColor:'red',display:'inline-flex'}}>
                    <img className='img' style={{height:'18px', width:'30px', marginBottom:'8px'}} src={Brasil} alt='PT-BR' onClick={()=>setLang('PT-BR')}/>
                    <img className='img'style={{height:'18px', width: '30px', marginBottom:'8px'}} src={Britain} alt='EN-GB' onClick ={()=>setLang('EN-GB')}/>

            </div>
        )}
            
        </Media>
        {/**<div style={{width:'100%', height:'23px', backgroundColor:'transparent',display:'inline-flex'}}>
             {/*<p style={{float:'left'}}>Paraiba Surfing Page</p>*/}
            {/**<div style={{height:'inherit',width:'80px', marginLeft:'0'}}>
                <img className='img' style={{height:'18px', width:'30px', marginBottom:'8px'}} src={Brasil} alt='PT-BR' onClick={()=>setLang('PT-BR')}/>
                <img className='img'style={{height:'18px', width: '30px', marginBottom:'8px'}} src={Britain} alt='EN-GB' onClick ={()=>setLang('EN-GB')}/>
            </div>
        </div>*/}
        <h1>{ lang === 'PT-BR' ? 'Bem vindo ao Paraiba Surfing Website' : 'Welcome to Paraíba Surfing Page'}</h1>
            <h3>{ lang === 'PT-BR' ? 'Encontre os informações acerca dos melhores picos de surf da região!': 'Meet the best surfing breaks in Paraíba!'}</h3>
        <hr/>
        <Selector
        city={city} 
        spotChange = {(data)=>spotChangeHandler(data)}
        info={info}/>
        <hr/>

        <Media query={{minWidth:430}}>
        {info}
        </Media>
        
        <style jsx global>
            {`
            @import url('https://fonts.googleapis.com/css?family=Bitter|Lato|Pacifico&display=swap');
            body{
                background:url('https://images.pexels.com/photos/835615/pexels-photo-835615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
                background-size: cover;
                background-repeat: no-repeat;
                background-attachment: fixed;
            }
            div .title{
                text-align:center;
                display:table;
                margin:auto;
            }
            
            .infoMenu{
                height:100%;
                text-align:center
            }

            .menu{
                background-color:lightblue;
                border-style:solid;
                border-width:1px 0 1px 0;
                display:flex;
                align-items:center;
                justify-content:center;
                font-family:'Bitter';
                transition:0.2s;
                cursor:pointer  
            }

            .menu:hover {
                color:white
            }

            

            .infoimage{
                display:flex;
                align-items:center;
                justify-content:center
            }

            .infotext{
                display:inline-block;
                text-justify:inter-word;
                margin:auto
            }

            .firstrow{
                height:45px
            }

            .secondrow{
                height:320px
            }
            h1{
                color:white;
                font-family:'Lato',sans-serif;
                padding:20px
            }
            h3{
                color:white;
                font-family:'Bitter',sans-serif;
                letter-spacing:2px
            }
            .card-footer{
                margin:0;
                max-width:180px;
                text-align:center;
                padding:5px 10px;
            }
            `}
        </style>
    </div>

)}



export default (landing)