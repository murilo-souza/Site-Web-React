import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import { WebRoutes } from './web.routes';
import { ScrollToTop } from '../components/ScrollToTop';

export function Routes(){
  return (
    <Router>
        <ScrollToTop/>
        <WebRoutes/>
    </Router>
  );
}