import { v4 } from 'uuid';
import '../styles/card.css';

function CardCont({ characters, selectionList, clearSeletionList, resetCurrentScore, addOnePoint, assignBestScore }) {
  function upperCaseFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  let cardDeck = characters.map((character) => {
    let correctName = upperCaseFirstLetter(character.name);
    return (
      <Card
        key={v4()}
        name={correctName}
        picture={character.image}
        selectionList={selectionList}
        clearSeletionList={clearSeletionList}
        resetCurrentScore={resetCurrentScore}
        addOnePoint={addOnePoint}
        characters={characters}
        assignBestScore={assignBestScore}
      />
    );
  });
  return (
    <main>
      <ul id="cardList">{cardDeck}</ul>
    </main>
  );
}

function Card({
  name,
  picture,
  resetCurrentScore,
  clearSeletionList,
  selectionList,
  addOnePoint,
  characters,
  assignBestScore,
}) {
  // Shuffles the order of the cards
  function shuffleCharList(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function cardSelectionAction() {
    if (selectionList.includes(name)) {
      assignBestScore();
      resetCurrentScore();
      clearSeletionList();
    } else {
      selectionList.push(name);
      addOnePoint();
      shuffleCharList(characters);
    }
  }

  return (
    <li onClick={cardSelectionAction} className="card">
      <div className="cardProperties">
        <h2>{name}</h2>
        <img src={picture} alt="Character" />
      </div>
    </li>
  );
}
export default CardCont;
