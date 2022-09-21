import React, { Component } from 'react';

class Busqueda extends Component {
    render() {
        return (
            <React.Fragment>
                <input type="search" placeholder='Introduzca un robot' className='pa3 ba b--green bg.lightest-blue' onChange={this.props.SearchChange}/>
            </React.Fragment>
        );
    }
}

export default Busqueda;