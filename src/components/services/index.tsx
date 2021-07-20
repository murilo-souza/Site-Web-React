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
                title="xxxxxxxxxx"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus volutpat mi, ac blandit ex luctus quis. Proin nisl arcu, placerat ut velit eget, vehicula tincidunt neque."
            />
            <CardWeb
                title="xxxxxxxxxx"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus volutpat mi, ac blandit ex luctus quis. Proin nisl arcu, placerat ut velit eget, vehicula tincidunt neque."
            />
            <CardWeb
                title="xxxxxxxxxx"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus volutpat mi, ac blandit ex luctus quis. Proin nisl arcu, placerat ut velit eget, vehicula tincidunt neque."
            />
            <CardWeb
                title="xxxxxxxxxx"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus volutpat mi, ac blandit ex luctus quis. Proin nisl arcu, placerat ut velit eget, vehicula tincidunt neque."
            />
        </CardWebGroup>
    </Container>
  );
}