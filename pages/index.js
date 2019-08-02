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
    <div>
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
                        <CardImg src='https://i.imgur.com/phgLcZa.jpg'/>
                        <CardFooter>Mataraca</CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
        <hr/>
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
                max-height:150px
            }
            .img{
                height:170px
            }
            `}
        </style>
    </div>

)}


export default landing