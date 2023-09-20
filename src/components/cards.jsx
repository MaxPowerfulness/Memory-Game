import { v4 } from 'uuid';

function CardCont({ characters, selectionList, clearSeletionList, resetCurrentScore, addOnePoint, assignBestScore }) {
  let cardDeck = characters.map((character) => {
    return (
      <Card
        key={v4()}
        name={character.name}
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
      <ul>{cardDeck}</ul>
      <p>Test</p>
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
      console.log('selectionList', selectionList);
    } else {
      selectionList.push(name);
      addOnePoint();
      shuffleCharList(characters);
      console.log('selectionList', selectionList);
    }
  }

  return (
    <li onClick={cardSelectionAction}>
      <div>
        <h2>{name}</h2>
        <img src={picture} alt="Character" />
      </div>
    </li>
  );
}
export default CardCont;
