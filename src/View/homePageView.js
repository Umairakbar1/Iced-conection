import React, { Component } from 'react';
//     importing components
import NavBar from '../Components/NavBar/navBar';
import IcedConnection from '../Components/IcedConnection/icedConnection';
import ShoeImages from '../Components/ShoeImage/shoeImage';
import StayTuned from '../Components/StayTuned/stayTuned';
import {Container} from "react-bootstrap";
class HomePagView extends Component {
    state={}
    render() { 
        return (
            <React.Fragment>
                <div>
                    <NavBar/>
                    <div style={{backgroundColor:"#191919"}}>
                    <IcedConnection/>
                    </div>
                    <ShoeImages/>
                    <StayTuned/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default HomePagView;