import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Course.css'



const Course = (props) => {
    //console.log("course", typeof (props.data))
    return (
        <div>
            <Container>
                <div className="course-list">
                    <Row>
                        {/* course card items */}
                        {
                            props.data.map(every =>
                                <div className="items">
                                    <Col md={2}>
                                        <div>
                                            <Image src={every.image} height={70} width={70}></Image>
                                        </div>
                                    </Col>
                                    <Col md={10} >
                                        <div>
                                            <h5>{every.name}</h5>
                                            <span>By : {every.by}</span>
                                            <h5>${every.price}</h5>
                                            <span>{every.level}</span><br />
                                            <span>Rating : {every.rating}</span> <br /> <span>{every.students}k students</span>
                                            <br></br>
                                            <Button className="button" onClick={() => props.clickHandle({ every })} > Enrol Now </Button>
                                        </div>
                                    </Col>
                                </div>
                            )
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Course;