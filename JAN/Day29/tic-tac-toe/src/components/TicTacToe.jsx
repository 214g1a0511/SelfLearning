import { useState } from "react";
import "./TicTacToe.css";
import winSound from '../assets/victorymale-version-230553.mp3'
import clickSound from "../assets/sound-1-167181.mp3"
import xwin from "../assets/Logo-4-remix1-ezgif.com-video-to-gif-converter.gif"
import owin from "../assets/ologo.gif"
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const win=new Audio(winSound)
  const click=new Audio(clickSound)
  const checkWinner = (squares) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let [a, b, c] of winningCombinations) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        win.play()

        return squares[a];

      }
    }
    return null;
  };

  const handleClick = (index) => {
    click.play()
    if (board[index] || checkWinner(board)) return;//to check if already the cell is occupied or game is already over

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = checkWinner(board);
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="container">
      <h1 className="title">Tic-Tac-Toe</h1>
      
      {winner && <p className="winner">Winner: {winner}</p>}
      {/*{winner==="X" &&<img src={xwin}/>}
      {winner==="O" &&<img src={owin}/>}*/}



      <button onClick={resetGame} className="reset-button">Reset</button>

    </div>
  );
};

export default TicTacToe;
