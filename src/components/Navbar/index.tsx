import React ,{useState} from 'react';
import {BiMenu, BiX} from 'react-icons/bi'
import { NavbarItems, NavbarLogo, NavbarLink, IconMenu, NavbarGroup} from './styles';
import './nav.css';

export function Navbar(){
    const [clicked, setClicked] = useState(false);

    function handleClick(){
        setClicked(!clicked);
    }

    return (
        <NavbarItems>
            <NavbarLogo>Adv Maurilio</NavbarLogo>
            <IconMenu onClick={handleClick}>
                {
                    clicked ? 
                    <BiX style={{color:'white'}}/> 
                    : 
                    <BiMenu style={{color:'white'}}/>
                    
                }
            </IconMenu>
                
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        <ul><NavbarLink>Home</NavbarLink></ul>
                        <ul><NavbarLink>Serviços</NavbarLink></ul>
                        <ul><NavbarLink>Sobre Nós</NavbarLink></ul>
                        <ul><NavbarLink>Contato</NavbarLink></ul>
                </ul>
            
        </NavbarItems>
    );
}