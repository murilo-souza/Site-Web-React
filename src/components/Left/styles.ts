import styled from 'styled-components';

export const Container = styled.div`

`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    font-size: 35px;
    text-align: start;
`;

export const Text = styled.p`
    font-size: 25px;
    text-align: start;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
    }
`;

export const Image = styled.div`
    width: 200px;
    height: 200px;
    margin-right: 30px;
    @media screen and (max-width: 960px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;