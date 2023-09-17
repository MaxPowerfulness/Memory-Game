import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Header from './header';
import CardCont from './cards';
import '../styles/App.css';

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [difficulty, setDifficulty] = useState({ difficulty: 'Easy', number: 4 });
  const [gameCharacterData, setGameCharacterData] = useState([]);
  const [characters, setCharacters] = useState(['treecko', 'torchic', 'mudkip', 'pikachu']);

  // Changes the difficulty of the game by creating more pokemons to choose from.
  // Changes difficulty and characters state variables
  function changeDifficulty() {
    setGameCharacterData([]);
    if (difficulty.difficulty === 'Easy') {
      setDifficulty({ ...difficulty, difficulty: 'Medium', number: 8 });
      setCharacters(['silcoon', 'cascoon', 'seedot', 'ralts', 'nincada', 'plusle', 'minun', 'bellossom']);
    } else if (difficulty.difficulty === 'Medium') {
      setDifficulty({ ...difficulty, difficulty: 'Hard', number: 12 });
      setCharacters([
        'muk',
        'grimer',
        'weezing',
        'koffing',
        'lileep',
        'armaldo',
        'cradily',
        'sceptile',
        'vileplume',
        'cacnea',
        'kecleon',
        'tropius',
      ]);
    } else {
      setDifficulty({ ...difficulty, difficulty: 'Easy', number: 4 });
      setCharacters(['treecko', 'torchic', 'mudkip', 'pikachu']);
    }
  }

  // Fetches pokemon data from the pokemon api. A new call is made when difficulty is changed
  useEffect(() => {
    let characterData = [];
    async function fetchData() {
      for (let i = 0; i < characters.length; i++) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${characters[i]}`, {
          mode: 'cors',
        });
        let data = await response.json();
        console.log('data', data);
        characterData.push({ name: data.name, image: data.sprites.front_default });
      }
      setGameCharacterData(gameCharacterData.concat(characterData));
    }
    fetchData();
  }, [difficulty]);

  return (
    <>
      <Header
        bestScore={bestScore}
        currentScore={currentScore}
        onDifficulty={changeDifficulty}
        difficulty={difficulty}
      />
      <CardCont characters={gameCharacterData} />
    </>
  );
}

export default App;
