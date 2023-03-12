import React from 'react'; //"coração do react"
import ReactDOM from 'react-dom/client'; //web
import './index.css';

  function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    handleClick(i) {
      const history = this.state.history;
      const current = history[history.length - 1];
      const squares = this.state.squares.slice(); //slice -> cópia do array p modificar
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({ //troca de turnos X e O
        history: history.concat([{
          squares: squares,
        }]),
        xIsNext: !this.state.xIsNext,
      });
    }

    renderSquare(i) { //desenha um quadrado
      return (
        <Square 
          value={this.props.squares[i]} //quadrado recebe X, O ou null
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {  
      return (
        <div>
          <div className="board-row"> 
            {this.renderSquare(0)} 
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        xIsNext: true,
      };
    }

    render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = calculateWinner(current.squares);
      let status;
      if(winner) {
        status = 'Winner: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className="game"> {/* orgnaiza os componentes */}
          <div className="game-board"> {/* organiza o tabuleiro */}
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info"> {/* organiza informações */}
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root")); /* renderiza o componente */
  root.render(<Game />);
  

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
