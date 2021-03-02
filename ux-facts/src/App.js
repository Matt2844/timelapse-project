import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Facts from './components/Facts'
import './App.css';

function App () {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/facts" component={Facts} />
      </Switch>
    </div>
  );
}

export default App;
