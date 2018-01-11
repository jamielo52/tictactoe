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
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
    }

    this.getInitialState = this.getInitialState.bind(this);
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
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
    }
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
    const location = this.state[value];

    if (location === 'X' || location === 'O') {
      alert(`${value} is already marked pick another location`);
    } else {

      this.setState({
        [value]: this.state.mark,
        count: this.state.count+1,
      }, this.winCondition);
    }
  }

  winCondition() {
    console.log(this.state, this.state.mark)
    if (this.state[1] === this.state.mark && this.state[2] === this.state.mark && this.state[3] === this.state.mark ) {
      this.setState({
        winner: true
      });
    } else if (this.state[4] === this.state.mark && this.state[5] === this.state.mark && this.state[6] === this.state.mark ) {
      this.setState({
        winner: true
      });
    } else if (this.state[7] === this.state.mark && this.state[8] === this.state.mark && this.state[9] === this.state.mark ) {
      this.setState({
        winner: true
      });
    } else if (this.state[1] === this.state.mark && this.state[4] === this.state.mark && this.state[7] === this.state.mark ) {
      this.setState({
        winner: true
      });
    } else if (this.state[2] === this.state.mark && this.state[5] === this.state.mark && this.state[8] === this.state.mark ) {
      this.setState({
        winner: true
      });
    } else if (this.state[3] === this.state.mark && this.state[6] === this.state.mark && this.state[9] === this.state.mark ) {
      this.setState({
        winner: true
      });
    } else if (this.state[1] === this.state.mark && this.state[5] === this.state.mark && this.state[9] === this.state.mark ) {
      this.setState({
        winner: true
      });
    } else if (this.state[3] === this.state.mark && this.state[5] === this.state.mark && this.state[7] === this.state.mark ) {
      this.setState({
        winner: true
      });
    } else {
      this.playerTurn();
    }

  }

  clearBoard() {
    this.setState(this.getInitialState());
  }


  render() {
    return (
      <div className="center">
        <h1 className="top-vh-sm">Let's Play Tic Tac Toe</h1>
        <div>Player {this.state.player}'s turn, click on grid to place {this.state.mark}</div>

        {this.state.winner ? (<div className="status">Player {this.state.player} WON!</div>) : null}
        {this.state.count === 9 ? (<div className="status">DRAW!</div>) : null}

        <div className="container top-vh-sm">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-4 grid border-btm border-right" onClick={() => {this.markBoard('1')}}>
                  { this.state[1] === 'X' ? (<i className="fas fa-times"></i>) : null }
                  { this.state[1] === 'O' ? (<i className="far fa-circle"></i>) : null}
                </div>
                <div className="col-md-4 grid border-btm border-right" onClick={() => {this.markBoard('2')}}>
                  { this.state[2] === 'X' ? (<i className="fas fa-times"></i>) : null }
                  { this.state[2] === 'O' ? (<i className="far fa-circle"></i>) : null}
                </div>
                <div className="col-md-4 grid border-btm" onClick={() => {this.markBoard('3')}}>
                  { this.state[3] === 'X' ? (<i className="fas fa-times"></i>) : null }
                  { this.state[3] === 'O' ? (<i className="far fa-circle"></i>) : null}
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 grid border-btm border-right" onClick={() => {this.markBoard('4')}}>
                  { this.state[4] === 'X' ? (<i className="fas fa-times"></i>) : null }
                  { this.state[4] === 'O' ? (<i className="far fa-circle"></i>) : null}
                </div>
                <div className="col-md-4 grid border-btm border-right" onClick={() => {this.markBoard('5')}}>
                  { this.state[5] === 'X' ? (<i className="fas fa-times"></i>) : null }
                  { this.state[5] === 'O' ? (<i className="far fa-circle"></i>) : null}
                </div>
                <div className="col-md-4 grid border-btm" onClick={() => {this.markBoard('6')}}>
                  { this.state[6] === 'X' ? (<i className="fas fa-times"></i>) : null }
                  { this.state[6] === 'O' ? (<i className="far fa-circle"></i>) : null}
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 grid border-right" onClick={() => {this.markBoard('7')}}>
                  { this.state[7] === 'X' ? (<i className="fas fa-times"></i>) : null }
                  { this.state[7] === 'O' ? (<i className="far fa-circle"></i>) : null}
                </div>
                <div className="col-md-4 grid border-right" onClick={() => {this.markBoard('8')}}>
                  { this.state[8] === 'X' ? (<i className="fas fa-times"></i>) : null }
                  { this.state[8] === 'O' ? (<i className="far fa-circle"></i>) : null}
                </div>
                <div className="col-md-4 grid" onClick={() => {this.markBoard('9')}}>
                  { this.state[9] === 'X' ? (<i className="fas fa-times"></i>) : null }
                  { this.state[9] === 'O' ? (<i className="far fa-circle"></i>) : null}
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>

        {(this.state.winner === false) || (this.state.count !== 9) ? (<button type="button" className="btn btn-refresh" onClick={this.clearBoard}>Start Over</button>) : null}

      </div>
    );
  }
}


export default App;
