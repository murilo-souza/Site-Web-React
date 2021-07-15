import React from 'react';

import { Container, Title, Image, Text, Linha, Description } from './styles';
import Img4 from '../../assets/cinza-escuro.png'


export function AboutUs(){
  return (
    <Container>
        <Title>
          Sobre nós
          <hr/>
        </Title>
        <Linha>
          <Image>
            <img src={Img4}/>
          </Image>
          <Description>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo erat, lobortis id pellentesque id, mattis ut leo. Curabitur vel feugiat urna.  Donec dignissim, leo ut aliquam vulputate, tortor lectus condimentum odio, vel bibendum erat nisi et neque. Curabitur rhoncus felis eu diam facilisis, non imperdiet eros posuere. Donec ullamcorper ipsum nec condimentum lacinia
            </Text>
          </Description>
        </Linha>
        
    </Container>
  );
}