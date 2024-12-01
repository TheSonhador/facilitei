
import React from 'react';
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact Component={Home} />
      </Switch>
    </BrowserRouter>
  );
}