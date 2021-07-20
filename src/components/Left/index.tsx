import React from 'react';
import { Container, Title, Text } from './styles';

interface Props{
  title: string;
  text: string;
}


export function Left({title, text}: Props){
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
}