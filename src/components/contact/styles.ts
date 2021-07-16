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
    width: 50%;
    padding-left: 100px;
    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Image = styled.div`
    //margin-right: 70px;
    margin-left: 70px;
    
`;

export const Text = styled.p`
    font-size: 25px;
    text-align: left;
    margin-bottom: 40px;
    @media screen and (max-width: 960px){
        text-align: center;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row; 
    @media screen and (max-width: 960px){
        flex-direction: column;
    }

`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DescriptionTitle = styled.h3`
    font-size: 35px;
    text-align: left;
    
`;