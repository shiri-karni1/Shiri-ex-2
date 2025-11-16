"use client";
import styles from "./page.module.css";
import { useState } from "react";

interface SquareProps {
  value: 'X' | 'O' | null;
  onSquareClick: () => void;
  squareClass: string;
}

// ----------------------------------------------------
// Square - component for each square on the board
// ----------------------------------------------------

function Square({ value, onSquareClick, squareClass }: SquareProps) {
  return (
    <button className={squareClass} onClick={onSquareClick}>
      {value}
    </button>
  );
}

// ----------------------------------------------------
// Board - main component managing the game state
// ----------------------------------------------------
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // what happens when a square is clicked
  function handleClick(i:number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  // determine the status message

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
// render the board
  return (
    <div className={styles.mainContainer}>
      <p className = {styles.titles}>Let's Play Tic Tac Toe!</p>
      <div className={styles.page}>
        <div className={styles.boardRow}>
          <Square  squareClass={styles.square} value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square squareClass={styles.square} value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square squareClass={styles.square} value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className={styles.boardRow}>
          <Square squareClass={styles.square} value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square squareClass={styles.square} value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square squareClass={styles.square} value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className={styles.boardRow}>
          <Square squareClass={styles.square} value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square squareClass={styles.square} value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square squareClass={styles.square} value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <div className={styles.status}>{status}</div>
        <div className = {styles.refresh}> Refresh to start a new game</div>
      </div>
    </div>
  );
}
// determine if there's a winner
function calculateWinner(squares: ('X' | 'O' | null)[]): 'X' | 'O' | null {
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