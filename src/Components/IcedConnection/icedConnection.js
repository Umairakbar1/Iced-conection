import React, { Component } from 'react';
//  import components
import {Container} from "react-bootstrap"
//  import images
import IcedShoeImage from "../../Assests/Images/iced.PNG";
import RangeField from "./rangeField";
//  importing css files
import "./icedConnection.css";
class IcedConnection extends Component {
        state = {}
    render() { 
        return (
            <React.Fragment>
                <Container fluid>
                <div className="iced-main-container">
                    <img src={IcedShoeImage} className="iced-connection-image" />
                    <div className="iced-text-div">
                        <h1>
                            iced out CONNECTION<sup>SM</sup>
                        </h1>
                        <p className="who-we-are-heading healvetica-roman">WHO WE ARE</p>
                        <p className="iced-connection-description healvetica-roman">With a dedicated team focused on the progression of culture through visual inspirations and the provision of knowledge, IOC's devotion and commitment will make it one of the premier online destinations for a cryptocurrency and style combo.</p>
                        {/* <button className="iced-connect-button healvetica-roman">Connect</button> */}
                        <p className="buy-iced-out-heading">Buy A iced out</p>
                        <p className="buy-iced-out-pararaph">Become a citizen of iced out for just .02 =</p>
                        <div className="iced-buy-div">
                            <div className="iced-buy-div-main">
                                <p>Let me get</p>
                                <div>
                                    <RangeField/>
                                </div>
                                <p>iced out for</p>
                                <p>0.02</p>
                            </div>
                            <button>Mint</button>
                        </div>
                    </div>
                </div>
                </Container>
            </React.Fragment>
        );
    }
}
 
export default IcedConnection;