import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    justify-content: center;
    margin-bottom:40px;
`;

export const Title = styled.h1`
    margin-top: 60px;
    margin-bottom: 50px;
    text-align: center;
    font-size: 4.5rem;
    color: #fff;
`;

export const Image = styled.div`
    width: 50%;
    margin-right: 35px;
    margin-left: 35px;
    @media screen and (max-width: 960px){
        
    }
`;

export const  description = styled.div`
    width: 50%
`;

export const Text = styled.p`
    font-size: 27px;
    text-align: left;
    color: #fff;
`;

export const Linha = styled.div`
    display: flex;
    flex-direction: row; 
    @media screen and (max-width: 960px){
        flex-direction: column;
    }

`