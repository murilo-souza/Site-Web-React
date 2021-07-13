import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom'
import { WebRoutes } from './web.routes';

export function Routes(){
  return (
    <Router>
        <WebRoutes/>
    </Router>
  );
}