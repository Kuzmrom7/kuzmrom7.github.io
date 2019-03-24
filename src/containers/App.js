import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';


const App = () => (
  <div className="App">
    <section className="hero is-fullheight is-default is-bold">
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </section>
  </div>
);

export default App;
