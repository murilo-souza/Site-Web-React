import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 100px;
    
`;

export const Section = styled.div`
    padding-left: 65px;
    padding-right: 65px;
    margin-bottom: 45px;
`;

export const Title = styled.h1`
    font-size: 70px;
    text-align: center;
    margin-bottom: 45px;
`;

export const Text = styled.p`
    font-size: 27px;
    text-align: justify;
    @media screen and (max-width: 960px){
        text-align: center;
    }
`

export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;

`;

