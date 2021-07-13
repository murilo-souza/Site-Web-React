import React from 'react';
import {Card} from 'react-bootstrap'

interface Props{
    title: string,
    text: string,
}

export function CardWeb({title, text}: Props){
  return (
    <Card>
        <Card.Body>
            <Card.Title style={{textAlign:'center'}}>{title}</Card.Title>
            <Card.Text style={{textAlign:'center'}}>{text}</Card.Text>
        </Card.Body>
    </Card>
  );
}