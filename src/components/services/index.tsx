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
                title="Serviço 1"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus volutpat mi, ac blandit ex luctus quis. Proin nisl arcu, placerat ut velit eget, vehicula tincidunt neque."
            />
            <CardWeb
                title="Serviço 2"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus volutpat mi, ac blandit ex luctus quis. Proin nisl arcu, placerat ut velit eget, vehicula tincidunt neque."
            />
            <CardWeb
                title="Serviço 3"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus volutpat mi, ac blandit ex luctus quis. Proin nisl arcu, placerat ut velit eget, vehicula tincidunt neque."
            />
            <CardWeb
                title="Serviço 4"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus volutpat mi, ac blandit ex luctus quis. Proin nisl arcu, placerat ut velit eget, vehicula tincidunt neque."
            />
        </CardWebGroup>
    </Container>
  );
}