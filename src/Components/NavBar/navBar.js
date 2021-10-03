import React, { Component } from 'react';
import { Navbar,Nav ,Container } from "react-bootstrap";
import logos from "../../Assests/Images/logos.PNG";
import lockIcon from "../../Assests/Images/lockIcon.PNG";
//    importing css files
import "./navBars.css";
class NavBar extends Component {
    state={}
    render() { 
        return (
            <React.Fragment>
                <div style={{backgroundColor:"black",color:"white",padding:"40px 5% 0px 5%"}}>
                <div className="log-in-div">
                    <p className="log-in-text healvetica-roman">Log in <img className="log-in-lock-image" src={lockIcon} alt="lock"/></p>
                </div>
                <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Navbar.Brand ><p className="iced-connection-headings healvetica-bold"><img src={logos}/> iced out connection</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                    <Nav.Link className="nav-link text-white healvetica-roman"></Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link className="nav-link text-white healvetica-roman">Home</Nav.Link>
                    <Nav.Link className="nav-link text-white healvetica-roman">About</Nav.Link>
                    <Nav.Link className="nav-link text-white healvetica-roman">How to Buy</Nav.Link>
                    <Nav.Link className="nav-link text-white healvetica-roman">Members</Nav.Link>
                    <Nav.Link className="nav-link text-white healvetica-roman">Forum</Nav.Link>
                    <Nav.Link className="nav-link text-white healvetica-roman">Shop</Nav.Link>
                    <Nav.Link className="nav-link text-white healvetica-roman">Discord</Nav.Link>
                    <Nav.Link className="nav-link text-white healvetica-roman">Twitter</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                
                </Navbar>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NavBar;