import React from 'react';
import { Container } from './styles';
import { CardComponent } from '../Card';

export function Services(){
  return (
    
    <Container>
        <h1>Serviços</h1>
        <CardComponent
          title="Trabalista"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend sem vel dui cursus tincidunt. Pellentesque quis cursus ligula, sit amet finibus nulla. Curabitur ornare felis mi, finibus tempus sapien rhoncus cursus."
        />
    </Container>
    
  );
}