import React, { Component } from 'react';
//     importing components
import NavBar from '../Components/NavBar/navBar';
import IcedConnection from '../Components/IcedConnection/icedConnection';
import ShoeImages from '../Components/ShoeImage/shoeImage';
import StayTuned from '../Components/StayTuned/stayTuned';
import {Container} from "react-bootstrap";
import MessageIcon from "../Assests/Images/message.PNG";
import "./homePageView.css";
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
                    <button className="lets-chat-button healvetica-bold"><img style={{marginRight:"10px"}} src={MessageIcon}/>Let's Chat!</button>
                </div>
            </React.Fragment>
        );
    }
}
 
export default HomePagView;