import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardTitle,Col,Row,Button} from 'reactstrap'

const conditions = ()=>{
    return(
        <div>
            <Card>
                <Row>
                    <CardTitle>Best conditions</CardTitle>
                </Row>
                <Row>
                    <Col sm='4'>
                        Wind
                    </Col>
                    <Col sm='6'>
                        Conditions
                    </Col>
                </Row>
                <Row>
                    <Col sm='4'>
                        Swell
                    </Col>
                    <Col sm='6'>
                        Conditions
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default conditions