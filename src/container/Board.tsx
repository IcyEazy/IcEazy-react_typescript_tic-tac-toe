"use client";

import Square from "@/components/Square";
import React, { useEffect, useState } from "react";

type Player = "X" | "O" | "BOTH" | null;

const calculateWinner = (squares: Player[]) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  const [winner, setWinner] = useState<Player>(null);

  const setSquareValue = (idx: number) => {
    const newData = squares.map((val, i) => {
      if (i === idx) {
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
  };

  useEffect(() => {
    const winna = calculateWinner(squares);
    if (winna) {
      setWinner(winna);
    }

    if (!winna && !squares.filter((square) => !square).length) {
      setWinner("BOTH");
    }
  }, [squares]);

  return (
    <div className="board">
      {!winner && <p>Hey {currentPlayer}, it&apos;s your turn </p>}
      {winner && winner !== "BOTH" && <p>Congratulations to Player {winner}</p>}
      {winner && winner === "BOTH" && (
        <p>Congratulations to you both, it&apos;s a tie!</p>
      )}
      <div className="grid">
        {Array(9)
          .fill(null)
          .map((_, idx) => {
            return (
              <Square
                winner={winner}
                key={idx}
                onClick={() => setSquareValue(idx)}
                value={squares[idx]}
              />
            );
          })}
      </div>
      <button className="reset" onClick={reset}>
        RESET
      </button>
    </div>
  );
}

export default Board;
