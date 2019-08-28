import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Info from '../components/UI/Info/info'
import Selector from '../components/UI/Selector/selector'


const landing = ()=>{
    const [city, setCity] = useState(undefined);
    const spotChangeHandler=(city)=>{
       setCity(city)
       console.log(city)
    }
    let info = city ? <Info city={city}/> : null
    return(
    <div className='title'>
        <h1>Welcome to Paraíba Surfing Page</h1>
            <h3>Meet the best surfing breaks in Paraíba, and also the best conditions to surf!</h3>
        <hr/>
        <Selector spotChange = {(data)=>spotChangeHandler(data)}  />
        <hr/>
        {info}
        <style jsx global>
            {`
            @import url('https://fonts.googleapis.com/css?family=Bitter|Lato&display=swap');
            body{
                background:url('https://i.imgur.com/obY0LIq.jpg');
                background-size: cover;
            }
            div .title{
                text-align:center;
                display:table;
                margin:auto;
            }
            .info{
                height:350px;
                width:100%;
                background-color:white;
            }

            .info .col{
                border:1px solid black
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
                justify-content:center    
            }

            .menucol{
                border-style:solid;
                border-width: 0px 1px;
                background-color:lightblue
            }

            .infotext{
                display:flex;
                align-items:center;
                justify-content:center
            }

            .firstrow{
                height:30px
            }

            .secondrow{
                height:300px
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
            .zoom{
                transition:.2s;
            }
            .zoom:hover{
                transform:scale(1.2);
            }
            img{
                max-height:100%;
                max-width:100%
            }
            .card-img{
                max-height:150px;
                min-height:120px
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