import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      player: 1,
      mark: 'X',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
    }

    this.handleInput = this.handleInput.bind(this);
    this.playerTurn = this.playerTurn.bind(this);
    this.markBoard = this.markBoard.bind(this);
    this.winCondition = this.winCondition.bind(this);
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    })

    console.log(this.state.position)
  }

  playerTurn() {
    if (this.state.player === 1) {
      this.setState({
        player: 2,
        mark: 'O',
      });
    } else {
      this.setState({
        player: 1,
        mark: 'X',
      });
    }
  }

  markBoard(value) {
    console.log('im clicking', value)

    if (this.state[value] === 'X' || this.state[value] === 'O') {
      alert(`${value} is already marked pick another location`);
    } else {
      this.setState({
        [value]: this.state.mark
      })
      this.playerTurn();
    }
    this.winCondition();
  }

  winCondition() {
    console.log('win?', this.state[1], this.state[2], this.state[3])
    if (this.state[1] === this.state.mark && this.state[2] === this.state.mark && this.state[3] === this.state.mark ) {
      alert(`PLAYER ${this.state.player} WON!`)
    }
  }


  render() {
    return (
      <div className="center">
        <h1>Let's Play Tic Tac Toe</h1>
        <div>Player {this.state.player}'s turn, click on grid to place {this.state.mark}</div>

        <div className="container">
          <div className="row">
            <div className="col-md-4" onClick={() => {this.markBoard('1')}}>{this.state[1]}</div>
            <div className="col-md-4" onClick={() => {this.markBoard('2')}}>{this.state[2]}</div>
            <div className="col-md-4" onClick={() => {this.markBoard('3')}}>{this.state[3]}</div>
          </div>
          <div className="row">
            <div className="col-md-4" onClick={() => {this.markBoard('4')}}>{this.state[4]}</div>
            <div className="col-md-4" onClick={() => {this.markBoard('5')}}>{this.state[5]}</div>
            <div className="col-md-4" onClick={() => {this.markBoard('6')}}>{this.state[6]}</div>
          </div>
          <div className="row">
            <div className="col-md-4" onClick={() => {this.markBoard('7')}}>{this.state[7]}</div>
            <div className="col-md-4" onClick={() => {this.markBoard('8')}}>{this.state[8]}</div>
            <div className="col-md-4" onClick={() => {this.markBoard('9')}}>{this.state[9]}</div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
