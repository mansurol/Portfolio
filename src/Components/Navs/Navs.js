import React from 'react';
import './Navs.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


const Navs = () => {
    return (
       <div >
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><span className="logoDesing">Mansorol-Islam</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto ">
 
    <Nav.Link href="#home"><span className="BorderBottom">HOME</span></Nav.Link>
    <Nav.Link href="#about"><span className="BorderBottom">ABOUT</span></Nav.Link>
    <Nav.Link href="#projects"><span className="BorderBottom">PROJECTS</span></Nav.Link>
    <Nav.Link href="#blogs"><span className="BorderBottom">BLOGS</span></Nav.Link>
    <Nav.Link href="#contact"><span className="BorderBottom">CONTACT</span></Nav.Link>
    <Nav.Link href="#resume"><span className="BorderBottom"> <FontAwesomeIcon icon={faDownload}/> RESUME</span></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>







       </div>
    );
};

export default Navs;
