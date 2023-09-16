import { useState } from 'react';
import { useEffect } from 'react';
import Header from './header';
import CardCont from './cards';
import '../styles/App.css';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [difficulty, setDifficulty] = useState({ difficulty: 'easy', number: 4 });
  const easyModeChars = ['Homer Simpson', 'Marge Simpson', 'Bart Simpson', 'Lisa Simpson'];

  const characters = [];

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      let promise = fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${easyModeChars[i]}`, {
        mode: 'cors',
      });
      promise
        .then((response) => response.json())
        .then((data) => {
          characters.push({ name: data[0].character, image: data[0].image });
          console.log('data', data[0].character);
        });
    }
    console.log('list', characters);
  }, [difficulty]);

  return (
    <>
      <Header bestScore={bestScore} currentScore={currentScore} />
      <CardCont characters={characters} difficulty={difficulty} />
    </>
  );
}

export default App;
