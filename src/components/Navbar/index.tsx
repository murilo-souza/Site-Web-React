import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavImg} from './styles'
import Logo from '../../assets/maurilio.png'


const NavBar = () => {
    return (
        <>
           <Nav>
                <NavImg to='/Home'>
                    <img src={Logo} alt="Logo_adv" height="120" width="120" />
                </NavImg>
                <Bars/>
                <NavMenu>
                    <NavLink to='/Home'>
                        Home
                    </NavLink>
                    <NavLink to='/Sobre'>
                        Sobre
                    </NavLink>
                    <NavLink to='/Serviço'>
                        Serviços
                    </NavLink>
                    <NavLink to='/Contato'>
                        Contato
                    </NavLink>
                </NavMenu>
            </Nav> 
        </>
    )
}

export default NavBar
