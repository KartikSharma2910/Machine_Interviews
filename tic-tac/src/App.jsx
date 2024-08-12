import { useState } from "react";

const initialState = () => Array(9).fill(null);

const App = () => {
  const [board, setBoard] = useState(initialState);
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

    if (winner) return "The winner is " + winner;
    if (!board.includes(null)) return "The game is drawn";

    return isXTurn ? "Player X Turn" : "Player O Turn";
  };

  const resetBoard = () => {
    setBoard(initialState);
    setIsXTurn(true);
  };

  return (
    <div className="wrapper">
      <div className="header">
        <div className="message">{getMessage()}</div>
        <button className="reset" onClick={resetBoard}>
          Reset Board
        </button>
      </div>
      <div className="grid">
        {board.map((b, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
