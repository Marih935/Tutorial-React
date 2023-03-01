import React from 'react'; //"coração do react"
import ReactDOM from 'react-dom/client'; //web
import './index.css';

class Square extends React.Component {
    render() { //desenha componente
      return (
        <button className="square"> 
          {/* TODO */}
        </button> //importa css
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) { //desenha um quadrado
      return <Square />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
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
    render() {
      return (
        <div className="game"> {/* orgnaiza os componentes */}
          <div className="game-board"> {/* organiza o tabuleiro */}
            <Board />
          </div>
          <div className="game-info"> {/* organiza informações */}
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  