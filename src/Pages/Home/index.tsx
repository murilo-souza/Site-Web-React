import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Section, Container } from './styles';
import {BackgroundWeb} from '../../components/Background'

import {WebServices} from '../../components/services'
import { WebCarousel } from '../../components/carousel';
import {AboutUs} from '../../components/AboutUs'


export function Home(){
  return (
      <Container>
        <WebCarousel/>
        <Section>
          <WebServices/>
        </Section>
        <Section>
          <BackgroundWeb>
            <AboutUs/>
          </BackgroundWeb>
        </Section>
      </Container>
  );
}