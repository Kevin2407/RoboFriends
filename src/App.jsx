import React, { Component  } from 'react';
import 'tachyons';
import {robots} from './robots';
import ListaRobots from './Components/ListaRobots';
import Busqueda from './Components/Busqueda';


class App extends Component {

  constructor(){
    super();
    this.state = {
      robots: robots,
      busqueda: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ busqueda: event.target.value });
  }

  render() {
    const robotsFiltrados = this.state.robots.filter(r => r.name.toLowerCase().includes(this.state.busqueda.toLowerCase()));
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Busqueda SearchChange={this.onSearchChange}/>
        <br />
        <ListaRobots robots={robotsFiltrados}/>
      </div>
    );
  }
}

export default App;
