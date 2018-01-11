import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      player: 1,
      mark: 'X',
      winner: false,
      count: 0,
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

    this.getInitialState = this.getInitialState.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.playerTurn = this.playerTurn.bind(this);
    this.markBoard = this.markBoard.bind(this);
    this.winCondition = this.winCondition.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
  }

  getInitialState() {
    return {
      player: 1,
      mark: 'X',
      winner: false,
      count: 0,
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
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    })
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
    if (this.state[value] === 'X' || this.state[value] === 'O') {
      alert(`${value} is already marked pick another location`);
    } else {

      this.setState({
        [value]: this.state.mark,
        count: this.state.count+1,
      })
      this.playerTurn();
    }
    this.winCondition();
  }

  winCondition() {
    if (this.state[1] === this.state.mark && this.state[2] === this.state.mark && this.state[3] === this.state.mark ) {
      this.setState({
        winner: true
      })
    }
    if (this.state[4] === this.state.mark && this.state[5] === this.state.mark && this.state[6] === this.state.mark ) {
      this.setState({
        winner: true
      })
    }
    if (this.state[7] === this.state.mark && this.state[8] === this.state.mark && this.state[9] === this.state.mark ) {
      this.setState({
        winner: true
      })
    }
    if (this.state[1] === this.state.mark && this.state[4] === this.state.mark && this.state[7] === this.state.mark ) {
      this.setState({
        winner: true
      })
    }
    if (this.state[2] === this.state.mark && this.state[5] === this.state.mark && this.state[8] === this.state.mark ) {
      this.setState({
        winner: true
      })
    }
    if (this.state[3] === this.state.mark && this.state[6] === this.state.mark && this.state[9] === this.state.mark ) {
      this.setState({
        winner: true
      })
    }
    if (this.state[1] === this.state.mark && this.state[5] === this.state.mark && this.state[9] === this.state.mark ) {
      this.setState({
        winner: true
      })
    }
    if (this.state[3] === this.state.mark && this.state[5] === this.state.mark && this.state[7] === this.state.mark ) {
      this.setState({
        winner: true
      })
    }
  }

  clearBoard() {
    this.setState(this.getInitialState());
  }


  render() {
    return (
      <div className="center">
        <h1 className="top-vh-md">Let's Play Tic Tac Toe</h1>
        <div>Player {this.state.player}'s turn, click on grid to place {this.state.mark}</div>

        {this.state.winner ? (<div>Player {this.state.player} WON!</div>) : null}
        {this.state.count === 9 ? (<div>DRAW!</div>) : null}

        <div className="container top-vh-lg">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
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
            <div className="col-md-4"></div>
          </div>
        </div>

        {this.state.winner ? (<button type="button" className="btn btn-primary" onClick={this.clearBoard}>Clear</button>) : null}
        {this.state.count === 9 ? (<button type="button" className="btn btn-primary" onClick={this.clearBoard}>Clear</button>) : null}

      </div>
    );
  }
}


export default App;
