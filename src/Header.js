import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Number Guesser</h1>
        <p>We picked a secret number between 0 and 100, now you get to guess what it is. Best of luck!</p>
      </div>
    )
  }
}
