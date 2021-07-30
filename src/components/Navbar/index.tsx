import React from 'react';

import { NavbarLink, NavbarLogo, CommunicationLink} from './styles';
import './nav.css';
import {Navbar, Container, Nav} from 'react-bootstrap';

import Img from '../../assets/whatsapp.png'

export function NavbarWeb(){

    return (
        <Navbar variant="dark" expand="lg" fixed="top" className="NavbarStyled">
                <Container>
                        <Navbar.Brand><NavbarLogo to='/'>Logo</NavbarLogo></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link><NavbarLink to='/'>Home</NavbarLink></Nav.Link>
                            <Nav.Link><NavbarLink to='/Servicos'>Serviços</NavbarLink></Nav.Link>
                            <Nav.Link><NavbarLink to='/Sobre-Nos'>Sobre Nós</NavbarLink></Nav.Link>
                            <Nav.Link href="#">
                                <CommunicationLink>
                                    Fale Agora <img src={Img} alt='Logo' style={{width:'25px', height:'25px' }}/>
                                </CommunicationLink>
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                </Container>
        </Navbar>
    );
}