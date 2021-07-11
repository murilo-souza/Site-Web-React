import React from 'react'
import { Container } from './styles';
import { CarouselHome } from '../../components/Carousel';
import { Services } from '../../components/Services';
import {Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
    return (
        <Container>
            <CarouselHome/>
            <Jumbotron style={{width: '100%'}}>
                <Services/>
            </Jumbotron>
        </Container>
    );
}


