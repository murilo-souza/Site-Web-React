import React from 'react';

import { Container, Title, Text, Section, Image} from './styles';

import Img from '../../assets/cinza-escuro.png'

export function Sobre(){
  return (
    <Container>
      <Section>
        <Title>Sobre 1<hr/></Title>
        <Image><img src={Img} alt="Foto sua" style={{width: "600px", height: "300px"}}/></Image>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto at sit saepe quos modi dolor quae eveniet quidem quam laboriosam consectetur quod et, id doloremque dolorem, necessitatibus nihil esse sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quam cupiditate reiciendis laborum enim perspiciatis, repudiandae maiores esse voluptatem animi expedita, magnam facere dolores facilis saepe aperiam, in harum.
        </Text>
      </Section>
    </Container>
  );
}