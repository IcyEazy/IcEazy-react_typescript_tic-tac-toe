import React from "react";

type Player = "X" | "O" | "BOTH" | null;

interface SquareProps {
  winner: Player;
  value: Player;
  onClick: () => void;
}

function Square({ winner, value, onClick }: SquareProps) {
  if (!value) {
    return (
      <button
        title="button"
        onClick={onClick}
        className="square"
        disabled={Boolean(winner)}
      />
    );
  }
  return (
    <button className={`square square_${value.toLocaleLowerCase()}`} disabled>
      {value}
    </button>
  );
}

export default Square;
