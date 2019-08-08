import React, {useState} from 'react'
import {Button,Container,Row,Col,Card,CardImg,CardFooter} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const landing = ()=>{
    const items = [
        {
          src:'',  
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src:'',
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src:'',
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ];

    const [count, setCount] = useState(0);
    
    return(
    <div className='title'>
        <h1>Welcome to Paraíba Surfing Page</h1>
            <h3>Meet the best surfing breaks in Paraíba, and also the best conditions to surf!</h3>
        <hr/>
        <Container>
            <Row>
                <Col>
                    <Card className='zoom img'>
                            <CardImg src='https://i.imgur.com/WQKMYT0.jpg'/>
                            <CardFooter>João Pessoa</CardFooter>
                    </Card>
                </Col>
                <Col>
                    <Card className='zoom img'>
                        <CardImg src='https://i.imgur.com/yG5jADA.jpg'/>
                        <CardFooter>Cabedelo</CardFooter>
                    </Card>
                </Col>
                <Col>
                    <Card className='zoom img'>
                        <CardImg src='https://i.imgur.com/6L9glWJ.jpg'/>
                        <CardFooter>Conde</CardFooter>
                    </Card>
                </Col>
                <Col>
                    <Card className='zoom img'>
                        <CardImg src='https://i.imgur.com/S68CG5u.jpg'/>
                        <CardFooter>Baía da Traição</CardFooter>
                    </Card>
                </Col>
                <Col>
                    <Card className='zoom img'>
                        <CardImg src='https://i.imgur.com/XOjoAvH.png'/>
                        <CardFooter>Mataraca</CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
        <hr/>
        <Container className='info'>
            <Row>
                <Col sm='2'>
                    Cidade
                </Col>
                <Col sm='10'>
                    Pico
                </Col>
            </Row>
            <Row>
                <Col sm='2'>
                    <Row>
                        Pico 1
                    </Row>
                    <Row>
                        Pico 2
                    </Row> 
                    <Row>
                        Pico 3
                    </Row>
                    <Row>
                        Pico 4
                    </Row>
                </Col>
                <Col sm='4'> 
                    Foto
                </Col>
                <Col sm='4'>
                    Texto
                </Col>
                <Col sm='2'>
                    <Row>
                        Swell
                    </Row>
                    <Row>
                        Swell 
                    </Row>
                    <Row>
                        Wind
                    </Row>
                    <Row>
                        Wind
                    </Row>
                </Col>
            </Row>
        </Container>
        
        <style jsx global>
            {`
            @import url('https://fonts.googleapis.com/css?family=Bitter|Lato&display=swap');
            body{
                background:url('https://i.imgur.com/obY0LIq.jpg');
                background-size: cover;
            }
            div{
                text-align:center;
                display:table;
                margin:auto;
            }
            .info{
                height:200px;
                width:600px;
                background-color:white
            }

            .info .col{
                border:1px solid black
            }
            .info .row{
                border:1px solid black
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
                max-height:150px
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


export default landing