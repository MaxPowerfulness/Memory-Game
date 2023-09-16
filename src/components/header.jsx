import Scoreboard from './scoreboard';

function Header({ bestScore, currentScore }) {
  return (
    <header>
      <h1>Memory Game</h1>
      <Scoreboard bestScore={bestScore} currentScore={currentScore} />
    </header>
  );
}

export default Header;
