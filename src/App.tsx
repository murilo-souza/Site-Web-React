import React from 'react';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import {Home} from './Pages/Home';
import {Sobre} from './Pages/Sobre';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/Home' exact component={Home} />
        <Route path='/Sobre' component={Sobre} />
      </Switch>
    </Router>
  );
}

export default App;
