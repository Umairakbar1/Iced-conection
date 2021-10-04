import React, { Component } from 'react';
//    importing components
import {Col, Container, Row} from "react-bootstrap";
//     importing images
import StayTunedShoeImage from "../../Assests/Images/8.PNG";
//    importring css files
import "./stayTuned.css"
class StayTuned extends Component {
    state={}
    render() { 
        return (
            <React.Fragment>
                <div fluid className="stay-tuned-main-div">
                    <Row className="stay-tuned-row">
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="stay-tuned-text-colom">
                            <h3>Stay Tuned</h3>
                            <p>We are now just around the corner from the OFFICIAL Iced Out Connection sneaker NFT drop! With thousands of the freshest and rarest collectables NFTs.</p>
                            <p>ERC20 | NFT | PARTNERSHIPS | ORIGINALS</p>
                            <p>Trademark@Sneakerforce.com</p>
                            <p>0410-4170-291</p>
                            <div className="form-div">
                                <label>Name *</label>
                                <input type="text" placeholder="Enter your name"/>
                                <label>Email *</label>
                                <input type="email" placeholder="Enter your email"/>
                                <label>Subject</label>
                                <input type="email" placeholder="Type the subject"/>
                                <label>Message</label>
                                <textarea rows="4" placeholder="Type your message here..."/>
                                <button>Submit</button>
                            </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="gutter-0 p-0 m-0 image-coloum">
                            <img src={StayTunedShoeImage} alt="Shoe Image" />
                        </Col>
                    </Row>
                    <p className="footer-text">©2021 by SNEAKERFORCE. Proudly created by Ve</p>
                </div>
            </React.Fragment>
        );
    }
}
 
export default StayTuned;