import React from 'react';
import { Container, Title, Text, Column, Row, Image } from './styles';

interface Props{
  title: string;
  text: string;
  Img: string;
  Alt: string;
}


export function Left({title, text, Img, Alt}: Props){
  return (
    <Container>
      <Row>
        <Image>
          <img src={Img} alt={Alt} style={{width: '200px', height: '200px'}}/>
        </Image>
        <Column>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </Column>
      </Row>
    </Container>
  );
}