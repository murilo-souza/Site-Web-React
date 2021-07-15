import React from 'react';

import { Container, Title, Linha, Image, Text, Description} from './styles';

import img5 from '../../assets/retangulo-cinza.png'

export function Contact(){
  return (
    <Container>
        <Title>
            Contato
            <hr/>
        </Title>
        <Linha>
            <Image>
                <img src={img5} alt="foto do predio" />
            </Image>
            <Description>
                
            </Description>
        </Linha>
    </Container>
  );
}