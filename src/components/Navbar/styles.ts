import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'

export const NavbarItems = styled.nav`
    background: linear-gradient(#424242, #5F5F5F, #424242);
    height: 13vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    @media screen and (max-width: 960px){
        position: relative;
    
    }
`;

export const NavbarLogo = styled.h1`
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    @media screen and (max-width: 960px){
        position: absolute;
        top: 0;
        left: 0;
        bottom: 40px;
        transform: translate(25%, 50%);
    }
`;

export const IconMenu = styled.div`
    display: none;
    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        padding-bottom:-50px;
    }
`;

export const NavbarMobile = styled.div`
   @media screen and (max-width: 960px){
       .navbar{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 500px;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
       }

       .navbar.active{
            background-color: #5F5F5F;
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
       }
   }
`;

export const NavbarGroup = styled.ul`
        display: grid;
        grid-template-columns: repeat(4, auto);
        grid-gap: 10px;
        list-style: none;
        text-align: center;
        width: 70vw;
        justify-content: end;
        margin-right: 2rem;


    
`;


export const NavbarLink = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    padding:0.75rem;
    margin-left: 30px;
    margin-top: 15px;

    &:hover{
        background-color: #6D6D6D;
        border-Radius: 20px;
        transition: all 0.2s ease-out;
        text-decoration: none;
        color: #fff;
        @media screen and (max-width: 960px){
            background-color: #6D6D6D;
            border-radius: 0;
           
        }
    }

    @media screen and (max-width: 960px){
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-right: 0rem;
        padding-left:0rem;
        width: 100%;
        display: table;
        margin-left:0
    }

`
