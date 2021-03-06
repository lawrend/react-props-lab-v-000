import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['black', 'red'];

class Spaceship extends React.Component {
    render () {
        return (
            <div className="spaceship">
            <h1>{this.props.name}</h1>
            <p>Speed: {this.props.speed}</p>
            <p>Rockets: {this.props.hasRockets}</p>
            <p>Colors: {this.props.colors.join(", ")}</p>
            </div>
        )
    }
};

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: colors
};


export default Spaceship;
