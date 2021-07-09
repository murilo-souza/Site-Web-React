import React from 'react'
import { Container } from './styles';
import { CarouselHome } from '../../components/Carousel';
import { Services } from '../../components/Services';

export const Home = () => {
    return (
        <Container>
            <CarouselHome/>
            <Services/>
        </Container>
    );
}


