import React from 'react';

import { Container, Title } from './styles';
import { CardWebGroup } from '../webCardGroup';
import { CardWeb } from '../webCard';


export function WebServices(){
  return (
    <Container>
        <Title>
            Serviços
            <hr />
        </Title>
        
        <CardWebGroup>
            <CardWeb
                title="Trabalista"
                text="Um advogado trabalista serve para que o seu cliente consiga seus direitos quando este for demitido"
            />
            <CardWeb
                title="Trabalista"
                text="Um advogado trabalista serve para que o seu cliente consiga seus direitos quando este for demitido"
            />
            <CardWeb
                title="Trabalista"
                text="Um advogado trabalista serve para que o seu cliente consiga seus direitos quando este for demitido"
            />
            <CardWeb
                title="Trabalista"
                text="Um advogado trabalista serve para que o seu cliente consiga seus direitos quando este for demitido"
            />
        </CardWebGroup>
    </Container>
  );
}