import styled from 'styled-components';
import {NavLink as Link} from  'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background: #00171F;
    height: 80px;
    display: flex;
    padding: 0.5rem calc((100vw-1000px)/2);
    z-index: 10;
`;

export const NavImg = styled(Link)`
    display: flex;
    align-items: center;
    justify-Content: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    margin-left: 30px

`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    justify-Content: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &:hover
    { 
        text-decoration:none;
        color: #739495
    } 

    &.active{
        color: #739495
    };
    
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width:768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: 60px;
    width: 100vh;

    @media screen and (max-width:768px){
        display: none;
    }
`

