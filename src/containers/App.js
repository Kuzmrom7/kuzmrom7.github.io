import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Stat from './Stat';
import Header from '../components/Header';

const App = () => (
  <div className="App">
    <section className="hero is-fullheight is-default is-bold">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/ftm_stat" component={Stat} />
      </Switch>
    </section>
  </div>
);

export default App;
