import { useState } from 'react';
import { useEffect } from 'react';
import Header from './header';
import CardCont from './cards';
import PopUp from './popUp';
import '../styles/App.css';

function App() {
  const [bestScore, setBestScore] = useState([0]);
  const [currentScore, setCurrentScore] = useState(0);
  const [difficulty, setDifficulty] = useState({ difficulty: 'Easy', number: 4 });
  const [gameCharacterData, setGameCharacterData] = useState([]);
  const [characters, setCharacters] = useState(['treecko', 'torchic', 'mudkip', 'pikachu']);
  const [selectionList, setSelectionList] = useState([]); // Keeps track of characters that have been selected
  const [trigger, setTrigger] = useState(false);

  // Resets user selection list
  function clearSeletionList() {
    setSelectionList([]);
  }

  // Adds 1 point to the current score
  function addOnePoint() {
    setCurrentScore(currentScore + 1);
  }

  // Resets current score back to 0
  function resetCurrentScore() {
    setCurrentScore(0);
  }

  // Stores scores after each round
  function assignBestScore() {
    setBestScore([...bestScore, currentScore + 1]);
  }

  // Toggles the boolean to control the PopUp display
  function togglePopUp() {
    setTrigger(!trigger);
  }

  // Resets the game by clearing selectionList and currentScore
  function resetGame() {
    togglePopUp();
    setCurrentScore(0);
    clearSeletionList();
  }

  // Changes the difficulty of the game by creating more pokemons to choose from.
  // Changes difficulty and characters state variables
  function changeDifficulty() {
    setCurrentScore(0);
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
      <CardCont
        characters={gameCharacterData}
        selectionList={selectionList}
        trigger={trigger}
        currentScore={currentScore}
        clearSeletionList={clearSeletionList}
        resetCurrentScore={resetCurrentScore}
        addOnePoint={addOnePoint}
        assignBestScore={assignBestScore}
        togglePopUp={togglePopUp}
      />
      <PopUp trigger={trigger} resetGame={resetGame} />
    </>
  );
}

export default App;
