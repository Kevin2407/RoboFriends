import React, { Component, Fragment } from 'react';
import Card from './Card';

class ListaRobots extends Component {
    render() {
        return (
            <Fragment>
                {this.props.robots.map((r,i)=>(<Card key={i} id={r.id} name={r.name} email={r.email}></Card>))}
            </Fragment>
        );
    }
}

export default ListaRobots;