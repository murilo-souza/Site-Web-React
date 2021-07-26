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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quia ut veniam suscipit exercitationem numquam deserunt, animi, est necessitatibus accusamus aspernatur. Ut minus voluptatibus necessitatibus distinctio natus, aspernatur sequi vitae.
        </Text>
      </Section>
      <Section>
        <Title>Sobre 2 <hr/></Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad a voluptatem, in ea beatae placeat commodi architecto omnis odit quas ratione necessitatibus assumenda error nostrum eius ab. Sed, dicta?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur rerum, perspiciatis corporis dolor excepturi praesentium reiciendis voluptas, ad in esse id! Provident minus eius beatae. Vero tempore voluptas repellat quis?
        </Text>


        
      </Section>
    </Container>
  );
}