function Scoreboard({ bestScore, currentScore }) {
  return (
    <div>
      <p>Best Score: {Math.max(...bestScore)}</p>
      <p>Current Score: {currentScore}</p>
    </div>
  );
}

export default Scoreboard;
