import '../styles/scoreboard.css';

function Scoreboard({ bestScore, currentScore }) {
  return (
    <div id="scoreboard">
      <p>Best Score: {Math.max(...bestScore)}</p>
      <p>Current Score: {currentScore}</p>
    </div>
  );
}

export default Scoreboard;
