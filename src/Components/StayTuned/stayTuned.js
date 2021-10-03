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
                            <p className="stay-tuned-heading healvetica-bold">Stay Tuned</p>
                            <p className="stay-tuned-heading-description healvetica-roman">We are now just around the corner from the OFFICIAL Iced Out Connection sneaker NFT drop! With thousands of the freshest and rarest collectables NFTs.</p>
                            <p className="stay-tuned-heading-description healvetica-roman">ERC20 | NFT | PARTNERSHIPS | ORIGINALS</p>
                            <p className="stay-tuned-heading-email healvetica-roman">Trademark@Sneakerforce.com</p>
                            <p className="stay-tuned-heading-phone healvetica-roman" >0410-4170-291</p>
                            <div>
                                <label className="stay-tuned-label healvetica-roman">Name *</label>
                                <input className="stay-tuned-input healvetica-roman" type="text" placeholder="Enter your name"/>
                                <label className="stay-tuned-label healvetica-roman">Email *</label>
                                <input className="stay-tuned-input healvetica-roman" type="email" placeholder="Enter your email"/>
                                <label className="stay-tuned-label healvetica-roman">Subject</label>
                                <input className="stay-tuned-input healvetica-roman" type="email" placeholder="Type the subject"/>
                                <label className="stay-tuned-label healvetica-roman">Message</label>
                                <textarea rows="4" className="stay-tuned-input healvetica-roman" placeholder="Type your message here..."/>
                                <button className="stay-tuned-submit-button healvetica-roman">Submit</button>
                            </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="gutter-0 p-0 m-0 image-coloum">
                            <img src={StayTunedShoeImage} className="stay-tuned-image" />
                        </Col>
                    </Row>
                    <p className="footer-text">©2021 by SNEAKERFORCE. Proudly created by Ve</p>
                </div>
            </React.Fragment>
        );
    }
}
 
export default StayTuned;