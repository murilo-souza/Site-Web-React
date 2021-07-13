import React from 'react';
import {WebServices} from '../../components/services'
import { Section, Container } from './styles';
import { WebCarousel } from '../../components/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home(){
  return (
      <Container>
        <Section>
          <WebCarousel/>
        </Section>
        <Section>
          <WebServices/>
        </Section>
      </Container>
  );
}