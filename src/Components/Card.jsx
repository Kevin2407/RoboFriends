import React, { Component, Fragment } from 'react';

class Card extends Component {
    render() {
        return (
            <Fragment>
                <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                    <img src={`https://robohash.org/${this.props.id}?200x200`} alt="robot" />
                    <div>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.email}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Card;
