import React, { Component } from 'react';
//     importing components
import {Col, Container, Row} from "react-bootstrap";
import ShoeImage3 from "../../Assests/Images/3.jpg"
import ShoeImage4 from "../../Assests/Images/4.jpg"
import ShoeImage5 from "../../Assests/Images/5.jpg"
import ShoeImage6 from "../../Assests/Images/6.jpg"
import ShoeImage7 from "../../Assests/Images/7.jpg"
import ShoeImageDiv from './shoeImageDiv';
//      importing css files
import "./shoeImage.css"
class ShoeImages extends Component {
    state={}
    render() { 
        return (
            <React.Fragment>
                <Container fluid className="bg-black">
                    <Row>
                        <Col>
                            <ShoeImageDiv />
                        </Col>
                        <Col>
                            <ShoeImageDiv Images={ShoeImage3}/>
                        </Col>
                        <Col>
                            <ShoeImageDiv Images={ShoeImage4}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ShoeImageDiv Images={ShoeImage5}/>
                        </Col>
                        <Col>
                            <ShoeImageDiv Images={ShoeImage6}/>
                        </Col>
                        <Col>
                            <ShoeImageDiv Images={ShoeImage7}/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
 
export default ShoeImages;