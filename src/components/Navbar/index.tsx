import React ,{useState} from 'react';
import {BiMenu, BiX} from 'react-icons/bi'
import { NavbarItems, NavbarLogo, NavbarLink, IconMenu} from './styles';
import './nav.css';

export function Navbar(){
    const [clicked, setClicked] = useState(false);

    function handleClick(){
        setClicked(!clicked);
    }

    return (
        <>
            <NavbarItems>
                <NavbarLogo to="/">Adv Maurilio</NavbarLogo>
                <IconMenu onClick={handleClick}>
                    {
                        clicked ? 
                        <BiX style={{color:'white'}}/> 
                        : 
                        <BiMenu style={{color:'white'}}/>
                        
                    }
                </IconMenu>
                    

                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        <NavbarLink to="/" activeStyle>Home</NavbarLink>
                        <NavbarLink to="/servicos" activeStyle>Serviços</NavbarLink>
                        <NavbarLink to="/sobre" activeStyle>Sobre Nós</NavbarLink>
                        <NavbarLink to="/contato" activeStyle>Contato</NavbarLink>
                    </ul>
                
            </NavbarItems>
        </>
    );
}