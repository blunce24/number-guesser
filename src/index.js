import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Game from './Game';

class Root extends React.Component {
  state = { secretNumber: this.generateSecretNumber() }

  generateSecretNumber() {
    return Math.floor(Math.random() * 101);
  }

  render() {
    return (
      <div>
        <Header />
        <Game secretNumber={this.state.secretNumber} />
        <button onClick={ () => this.setState({secretNumber: this.generateSecretNumber() }) }>Reset Number!</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('container')
);
