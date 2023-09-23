import Scoreboard from './scoreboard';
import '../styles/header.css';

function Header({ bestScore, currentScore, onDifficulty, difficulty }) {
  return (
    <header>
      <div></div>
      <h1>Memory Game</h1>
      <div>
        <Scoreboard bestScore={bestScore} currentScore={currentScore} />
        <button onClick={onDifficulty}>{difficulty.difficulty}</button>
      </div>
    </header>
  );
}

export default Header;
