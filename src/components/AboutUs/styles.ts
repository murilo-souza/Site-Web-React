import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    justify-content: center;
    padding: 35px;
`;

export const Title = styled.h1`
    padding-top: 20px;
    padding-bottom: 70px;
    text-align: center;
    font-size: 4.5rem;
    color: #fff;
`;

export const Image = styled.div`
    margin-right: 35px;
    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
    }
`;

export const  Description = styled.div`
    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
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