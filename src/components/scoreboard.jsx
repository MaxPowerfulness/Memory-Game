import { useState } from 'react';

function Scoreboard({ bestScore, currentScore }) {
  return (
    <div>
      <p>Best Score: {bestScore}</p>
      <p>Current Score: {currentScore}</p>
    </div>
  );
}

export default Scoreboard;
