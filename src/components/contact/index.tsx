import React from 'react';

import { Container, Title, Row, Image, Text, Description, Column, DescriptionTitle} from './styles';

import img5 from '../../assets/retangulo-cinza.png'

export function Contact(){
  return (
    <Container>
        <Title>
            Contato
            <hr/>
        </Title>
        <Row>
            <Image>
                <img src={img5} alt="foto do predio" />
            </Image>
            <Description>
              <Column>
                <Row>
                  <hr />
                  <DescriptionTitle>Endereço</DescriptionTitle>
                </Row>
              </Column>
            </Description>
        </Row>
    </Container>
  );
}