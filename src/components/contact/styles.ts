import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    justify-content: center;
    margin-bottom:40px;
    padding: 35px;
`;

export const Title = styled.h1`
    margin-top: 25px;
    margin-bottom: 45px;
    text-align: center;
    font-size: 4.5rem;
` 

export const  Description = styled.div`
    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Image = styled.div`
    margin-right: 35px;
`;

export const Text = styled.p`
    font-size: 27px;
    text-align: left;
    color: #fff;
    @media screen and (max-width: 960px){
        text-align: center;
    }
`;

export const Linha = styled.div`
    display: flex;
    flex-direction: row; 
    @media screen and (max-width: 960px){
        flex-direction: column;
    }

`