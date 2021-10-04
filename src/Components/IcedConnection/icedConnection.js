import React, { Component } from 'react';
//  import components
import {Container} from "react-bootstrap"
//  import images
import IcedShoeImage from "../../Assests/Images/iced.PNG";
import { Line, Circle } from 'rc-progress';
import ProgressBar from 'react-customizable-progressbar'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import Slider from 'react-input-slider';
import RangeField from "./rangeField";
//  importing css files
import "./icedConnection.css";
class IcedConnection extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          value: { x: 10, y: 10 },
        };
      }
    render() { 
        return (
            <React.Fragment>
                <Container fluid>
                <div className="iced-main-container">
                    <img src={IcedShoeImage} className="iced-connection-image" />
                    <div className="iced-text-div">
                        <p className="iced-connection-heading healvetica-bold">ICED OUT CONNECTION<sup className="iced-sm-text">SM</sup></p>
                        <p className="who-we-are-heading healvetica-roman">WHO WE ARE</p>
                        <p className="iced-connection-description healvetica-roman">With a dedicated team focused on the progression of culture through visual inspirations and the provision of knowledge, IOC's devotion and commitment will make it one of the premier online destinations for a cryptocurrency and style combo.</p>
                        {/* <button className="iced-connect-button healvetica-roman">Connect</button> */}
                        <p className="buy-arbibac-heading">Buy A Arbibayc</p>
                        <p className="buy-arbibac-pararaph">Become a citizen of Arbibayc for just .02 =</p>
                        <div className="iced-buy-arbibayc-div">
                            <div className="iced-buy-arbibayc-div-main">
                                <p>Let me get</p>
                                <div>
                                    <RangeField/>
                                </div>
                                <p>Arbibayc for</p>
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