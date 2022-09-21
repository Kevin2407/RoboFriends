import React, { Component, Fragment } from 'react';
import 'tachyons';
import {robots} from './robots';
import ListaRobots from './Components/ListaRobots';


class App extends Component {

  render() {
    return (
      <Fragment>
        <ListaRobots robots={robots}></ListaRobots>
      </Fragment>
    );
  }
}

export default App;
