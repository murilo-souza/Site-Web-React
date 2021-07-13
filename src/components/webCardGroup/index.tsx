import React, {ReactNode} from 'react';

import {CardDeck} from 'react-bootstrap'

interface Props{
    children: ReactNode
}

export function CardWebGroup({children}: Props) {
  return (
    <CardDeck>
        {children}
    </CardDeck>
  );
}