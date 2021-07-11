import React from 'react';
import {Card} from 'react-bootstrap'


interface Props{
    title: string,
    content: string,
}


export function CardComponent({title, content}: Props){
  return (
    <Card style={{width: '20rem'}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}