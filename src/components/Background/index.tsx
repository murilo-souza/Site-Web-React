import React, {ReactNode} from 'react';

import { Background } from './styles';

interface Props{
    children: ReactNode,
}

export function BackgroundWeb({children}: Props){
  return (
    <Background>
        {children}
    </Background>
  );
}