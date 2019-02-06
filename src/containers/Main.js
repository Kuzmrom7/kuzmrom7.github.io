import React, { Component } from 'react';
import Personal from '../components/Personal';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return <Personal />;
  }
}

export default Main;
