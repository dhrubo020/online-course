import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Enrolled.css'
const Enrolled = (props) => {
    const items = props.data;
    console.log("enrol", typeof(items));
    
    return (
        <div className="enrolled-container">
            <Container fluid>
                {/* enrolled item list small view in cart */}
                {
                    items.map( every => 
                        <Row className="enrolled-items">
                            <Col sm={3} >
                                <div>
                                    <Image src={every.image} height={40} width={40}></Image>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div>
                                <p>{every.name}</p>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div>
                                    <h5>${every.price}</h5>
                                </div>
                            </Col>
                        </Row>
                    )
                }
                
            </Container>
        </div>
    );
};

export default Enrolled;