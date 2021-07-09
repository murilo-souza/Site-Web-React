import React from 'react';

import { Card, Content, Title } from './styles';

interface Props{
    title: string,
    content: string,
}


export function CardComponent({title, content}: Props){
  return (
    <Card>
        <Title>{title}</Title>
        <Content>{content}</Content>
    </Card>
  );
}