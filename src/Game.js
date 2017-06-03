import React from 'react';

export default class Game extends React.Component {
  state = { guess: '', guessResponse: '', totalGuesses: 0 }

  setGuessValue(e) {
    const parsedInt = parseInt(e.target.value, 10);
    if (isNaN(parsedInt)) {
      return;
    } else {
      this.setState({ guess: parsedInt });
    }
  }

  compareNumbers() {
    this.setState({ totalGuesses: this.state.totalGuesses + 1});
    if (this.state.guess === this.props.secretNumber) {
      this.setState({ guessResponse: 'You are correct! What a guesser!' });
    } else {
      this.setState({ guessResponse: 'Incorrect. Guess again!'});
    }
  }

  render() {
    console.log(this.props.secretNumber);
    return (
      <div>
        <div>
          <h1>Enter a guess!</h1>
          <h3>You guessed: {this.state.guess}</h3>
          <h3>{ this.state.guessResponse }</h3>
          <input onChange={ this.setGuessValue.bind(this) } />
          <button onClick={ this.compareNumbers.bind(this) }>Submit!</button>
        </div>
        <div>
          <h2>Total guesses: { this.state.totalGuesses }</h2>
        </div>
      </div>
    )
  }
}
