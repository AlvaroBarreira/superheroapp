import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Logo from '../../Images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router';
import './NavBar.css'

function NavBar() {

    const history = useHistory();

    //Function LogOut 
    const closeSession = () => {
        sessionStorage.removeItem("token");
        history.push('/')
    }

    return (

        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand className="navbar-brand" href="/"><img className="logo" src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="drop">
                       
                            <NavDropdown.Item size="20px" onClick={closeSession}>Log Out</NavDropdown.Item>
                     
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar
