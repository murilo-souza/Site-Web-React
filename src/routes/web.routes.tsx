import React from 'react';
import {Switch, Route} from 'react-router-dom'


import {NavbarWeb} from '../components/Navbar'
import {Home} from '../Pages/Home'
import {Servicos} from '../Pages/Servicos'
import { Footer } from '../components/Footer';

export function WebRoutes(){
  return (
    <>
        <NavbarWeb/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/servicos" component={Servicos}/>
        </Switch>
        <Footer/>
    </>
  );
}