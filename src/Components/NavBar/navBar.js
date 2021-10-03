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
                <div style={{backgroundColor:"black",color:"white",padding:"40px 6% 10px 6%"}}>
                <div className="log-in-div">
                    <p>Log in <img src={lockIcon} alt="lock"/></p>
                </div>
                <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            
                <Navbar.Brand ><p className="iced-connection-headings"><img src={logos}/> iced out connection</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Nav>
                    <Nav.Link className="nav-link text-white">Home</Nav.Link>
                    <Nav.Link className="nav-link text-white">About</Nav.Link>
                    <Nav.Link className="nav-link text-white">How to Buy</Nav.Link>
                    <Nav.Link className="nav-link text-white">Members</Nav.Link>
                    <Nav.Link className="nav-link text-white">Forum</Nav.Link>
                    <Nav.Link className="nav-link text-white">Shop</Nav.Link>
                    <Nav.Link className="nav-link text-white">Discord</Nav.Link>
                    <Nav.Link className="nav-link text-white">Twitter</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
                
                </Navbar>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NavBar;