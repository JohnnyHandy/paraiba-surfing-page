import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Media from 'react-media'

import Info from '../components/UI/Info/info'
import Selector from '../components/UI/Selector/selector'


const landing = ()=>{
    const [city, setCity] = useState(undefined);
    const spotChangeHandler=(cityName)=>{
        cityName !== city ? setCity(cityName) : setCity(undefined)
    }
    let info = city ? <Info city={city}/> : null
    return(
    <div className='title'>
        <h1>Welcome to Paraíba Surfing Page</h1>
            <h3>Meet the best surfing breaks in Paraíba, and also the best conditions to surf!</h3>
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
                background:url('https://images.pexels.com/photos/1667003/pexels-photo-1667003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
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