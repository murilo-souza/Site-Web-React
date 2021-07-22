import React from 'react';

import { Container } from './styles';

import {Left} from '../../components/Left'
import quadrado from '../../assets/cinza-escuro.png'

export function Servicos(){
  return (
    <Container>
        <Left
          Img={quadrado}
          Alt='Quadrado Cinza'
          title='Serviço 1'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex in illum modi itaque. Vel hic aliquam quasi earum cum repellat in velit ab cumque! Quod molestias voluptates numquam placeat.'
        />
        <hr/>
        <Left
          Img={quadrado}
          Alt='Quadrado Cinza'
          title='Serviço 2'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex in illum modi itaque. Vel hic aliquam quasi earum cum repellat in velit ab cumque! Quod molestias voluptates numquam placeat.'
        />
        <hr/>
        <Left
          Img={quadrado}
          Alt='Quadrado Cinza'
          title='Serviço 3'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex in illum modi itaque. Vel hic aliquam quasi earum cum repellat in velit ab cumque! Quod molestias voluptates numquam placeat.'
        />
        <hr/>
        <Left
          Img={quadrado}
          Alt='Quadrado Cinza'
          title='Serviço 4'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ex in illum modi itaque. Vel hic aliquam quasi earum cum repellat in velit ab cumque! Quod molestias voluptates numquam placeat.'
        />
    </Container>
  );
}