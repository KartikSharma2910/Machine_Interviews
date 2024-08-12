import React, { useState } from "react";

const initialValue = () => Array(9).fill(null);

const App = () => {
  const [board, setBoard] = useState(initialValue);
  const [isXTurn, setIsXTurn] = useState(true);

  const WINNING_PATHS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATHS.length; i++) {
      const [a, b, c] = WINNING_PATHS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);

    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const getMessage = () => {
    const winner = calculateWinner(board);

    if (winner) return "The winner is player " + winner;

    if (!board.includes(null)) return "Game is draw";

    return "Player " + isXTurn ? "X Turn" : "O Turn";
  };

  const resetBoard = () => {
    setBoard(initialValue);
    setIsXTurn(true);
  };

  return (
    <div className="game">
      <div className="status">
        {getMessage()}
        <button className="reset" onClick={resetBoard}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              key={index}
              disabled={calculateWinner(board)}
              className="cell"
              onClick={() => handleClick(index)}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
