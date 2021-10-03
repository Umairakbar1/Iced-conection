import React, { Component } from 'react';
//  import components
import {Container} from "react-bootstrap"
//  import images
import IcedShoeImage from "../../Assests/Images/iced.PNG";
//  importing css files
import "./icedConnection.css";
class IcedConnection extends Component {
    state={}
    render() { 
        return (
            <React.Fragment>
                <Container fluid>
                <div className="iced-main-container">
                    <img src={IcedShoeImage} className="iced-connection-image" />
                    <div className="iced-text-div">
                        <p className="iced-connection-heading">ICED OUT CONNECTION<sup className="iced-sm-text">SM</sup></p>
                        <p className="who-we-are-heading">WHO WE ARE</p>
                        <p className="iced-connection-description">With a dedicated team focused on the progression of culture through visual inspirations and the provision of knowledge, IOC's devotion and commitment will make it one of the premier online destinations for a cryptocurrency and style combo.</p>
                        <button className="iced-connect-button">Connect</button>
                    </div>
                </div>
                </Container>
            </React.Fragment>
        );
    }
}
 
export default IcedConnection;