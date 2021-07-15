import React from 'react';
import { NavbarLink, NavbarLogo} from './styles';
import './nav.css';
import {Navbar, Container, Nav} from 'react-bootstrap'

export function NavbarWeb(){

    return (
        <Navbar variant="dark" expand="lg" fixed="top" className="NavbarStyled">
                <Container>
                    <Navbar.Brand><NavbarLogo to='/'>Adv Maurilio</NavbarLogo></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link><NavbarLink to='/'>Home</NavbarLink></Nav.Link>
                        <Nav.Link><NavbarLink to='/Servicos'>Serviços</NavbarLink></Nav.Link>
                        <Nav.Link><NavbarLink to='/Sobre'>Sobre Nós</NavbarLink></Nav.Link>
                        <Nav.Link><NavbarLink to='/Contato'>Contato</NavbarLink></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    );
}