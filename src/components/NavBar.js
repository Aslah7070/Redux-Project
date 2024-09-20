import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './componentStyle/Navbar.module.css'; 
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"


const NavBar = () => {
    const navigate=useNavigate()
   const product= useSelector((state)=>state.cart.value)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Heading on the left side */}
        <Navbar.Brand href="#home" className={styles.brand}>Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links for Products and Cart on the right side */}
          <Nav className={styles.navLinks}>
            <Nav.Link onClick={()=>navigate("/")}>Products</Nav.Link>
            <Nav.Link onClick={()=>navigate("/cart")}>Cart{product.length}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

