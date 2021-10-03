import React, { Component } from 'react';
//     importing components
import {Container} from "react-bootstrap";
import ShoeImage from "../../Assests/Images/2.jpg";
//      importing icons
//      importing css files
import "./shoeImage.css"
class ShoeImageDiv extends Component {
    state={}
    render() { 
        return (
            <React.Fragment>
                <Container fluid className="bg-black">
                    <div className="shoe-image-div">
                        <img className="show-image" src={this.props.Images?this.props.Images:ShoeImage} alt="shoe Images"/>
                        <div className="heart-icon">
                            <span>Heart</span>
                        </div>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}
 
export default ShoeImageDiv;