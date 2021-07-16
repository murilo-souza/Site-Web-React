import React from 'react';

import { Container, Title, Row, Image, Text, Description, Column, DescriptionTitle} from './styles';

import img5 from '../../assets/retangulo-cinza.png'

import {Line} from '../Line'

export function Contact(){
  return (
    <Container>
        <Title>
            Contato
            <hr/>
        </Title>
        <Row>
            <Description>
              <Column>
                <DescriptionTitle>Endereço:</DescriptionTitle>
                <Text>Rua xxxxxxxxx xxxxxx xxxxx, Vila xxxxxxx N° 123</Text>
                
                <DescriptionTitle>Telefone:</DescriptionTitle>
                <Text>(15) 32102-6732</Text>
                
                <DescriptionTitle>Celular:</DescriptionTitle>
                <Text>(15) 9912102-6732</Text>
                
                <DescriptionTitle>E-mail:</DescriptionTitle>
                <Text>xxxxxx.xxxxxxxx123@gmail.com</Text>
                
              </Column>
            </Description>
            <Image>
                <img src={img5} alt="foto do predio" style={{width: "366px", height:" 557px"}} />
            </Image>
        </Row>
    </Container>
  );
}