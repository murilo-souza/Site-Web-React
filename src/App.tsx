import React from 'react';
import './App.css'
import {Navbar} from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './Pages/Home'
import {Servicos} from './Pages/Servicos'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/servicos" component={Servicos}/>
      </Switch>
    </Router>
  );
}

export default App;
