import { v4 } from 'uuid';

function CardCont({ characters, selectionList, clearSeletionList, resetCurrentScore, addOnePoint }) {
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

function Card({ name, picture, resetCurrentScore, clearSeletionList, selectionList, addOnePoint }) {
  function cardSelectionAction() {
    if (selectionList.includes(name)) {
      resetCurrentScore();
      clearSeletionList();
      console.log('selectionList', selectionList);
    } else {
      selectionList.push(name);
      addOnePoint();
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
