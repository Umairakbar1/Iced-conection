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
                        <Col >
                            <div className="stay-tuned-text-colom">
                            <p className="stay-tuned-heading">Stay Tuned</p>
                            <p className="stay-tuned-heading-description">We are now just around the corner from the OFFICIAL Iced Out Connection sneaker NFT drop! With thousands of the freshest and rarest collectables NFTs.</p>
                            <p className="stay-tuned-heading-description">ERC20 | NFT | PARTNERSHIPS | ORIGINALS</p>
                            <p className="stay-tuned-heading-email">Trademark@Sneakerforce.com</p>
                            <p className="stay-tuned-heading-phone">0410-4170-291</p>
                            <div>
                                <label className="stay-tuned-label">Name *</label>
                                <input className="stay-tuned-input" type="text" placeholder="Enter your name"/>
                                <label className="stay-tuned-label">Email *</label>
                                <input className="stay-tuned-input" type="email" placeholder="Enter your email"/>
                                <label className="stay-tuned-label">Subject</label>
                                <input className="stay-tuned-input" type="email" placeholder="Type the subject"/>
                                <label className="stay-tuned-label">Message</label>
                                <textarea rows="4" className="stay-tuned-input" placeholder="Type your message here..."/>
                                <button className="stay-tuned-submit-button">Submit</button>
                            </div>
                            </div>
                        </Col>
                        <Col className="gutter-0 p-0 m-0">
                            <img src={StayTunedShoeImage} width="100%"/>
                        </Col>
                    </Row>
                    <p className="footer-text">©2021 by SNEAKERFORCE. Proudly created by Ve</p>
                </div>
            </React.Fragment>
        );
    }
}
 
export default StayTuned;