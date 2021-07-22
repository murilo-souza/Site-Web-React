import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'


export const NavbarLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    padding:0.4rem;
    margin-left: 20px;
    cursor: pointer;
    font-size: 30px;
    &:hover{
        text-decoration:none;
        background-color: #6D6D6D;
        border-Radius: 10px;
        transition: all 0.2s ease-out;
        text-decoration: none;
        color: #fff;
    }
    
`;



export const NavbarLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding:0.75rem;
    margin-left: 30px;
    margin-top: 15px;
    cursor: pointer;
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

`;

export const CommunicationLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-left: 30px;
    margin-top: 15px;
    cursor: pointer;
    padding:0.75rem;

    &:hover{
        background-color:#00bb2d ;
        border-Radius: 20px;
        transition: all 0.2s ease-out;
        text-decoration: none;
        color: #fff;
        @media screen and (max-width: 960px){
            background-color: #00bb2d ;
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

`;


