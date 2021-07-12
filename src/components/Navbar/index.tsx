import React ,{useState} from 'react';
import {BiMenu, BiX} from 'react-icons/bi'
import { NavbarItems, NavbarLogo, NavbarGroup, NavbarLink, IconMenu} from './styles';

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
            
                <NavbarGroup>
                    <ul><NavbarLink>Home</NavbarLink></ul>
                    <ul><NavbarLink>Serviços</NavbarLink></ul>
                    <ul><NavbarLink>Sobre Nós</NavbarLink></ul>
                    <ul><NavbarLink>Contato</NavbarLink></ul>
                </NavbarGroup>
            
        </NavbarItems>
    );
}