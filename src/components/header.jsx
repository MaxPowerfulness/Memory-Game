import Scoreboard from './scoreboard';

function Header({ bestScore, currentScore, onDifficulty, difficulty }) {
  return (
    <header>
      <h1>Memory Game</h1>
      <Scoreboard bestScore={bestScore} currentScore={currentScore} />
      <button onClick={onDifficulty}>{difficulty.difficulty}</button>
    </header>
  );
}

export default Header;
