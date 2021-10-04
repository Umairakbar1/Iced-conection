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
                <div className="navbar-main-contaier">
                <div className="log-in-div">
                    <p>Log in <img src={lockIcon} alt="lock"/></p>
                </div>
                <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                        <Navbar.Brand >
                            <p className="iced-connection-headings">
                                <img src={logos}/> 
                                iced out connection
                            </p>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link></Nav.Link>
                        </Nav>
                        <Nav className="nav-items">
                            <p>Home</p>
                            <p>About</p>
                            <p>How to Buy</p>
                            <p>Members</p>
                            <p>Forum</p>
                            <p>Shop</p>
                            <p>Discord</p>
                            <p>Twitter</p>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NavBar;