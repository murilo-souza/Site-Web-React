import React from 'react';
import { Container } from './styles';
import { CardComponent } from '../Card';

export function Services(){
  return (
    
    <Container>
        <h1>Serviços</h1>
        <CardComponent
          title="Trabalista"
          content="orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales nunc sit amet metus finibus, sit amet aliquam tellus fermentum. Etiam purus urna, ullamcorper consectetur lacus porta, blandit hendrerit lacus."
        />
    </Container>
    
  );
}