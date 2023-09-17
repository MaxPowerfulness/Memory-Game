import { v4 } from 'uuid';

function CardCont({ characters }) {
  console.log('card chars', characters);
  let cardDeck = characters.map((character) => <Card key={v4()} name={character.name} picture={character.image} />);
  return (
    <main>
      <ul>{cardDeck}</ul>
      <p>Test</p>
    </main>
  );
}

function Card({ name, picture }) {
  return (
    <li>
      <div>
        <h2>{name}</h2>
        <img src={picture} alt="Character" />
      </div>
    </li>
  );
}
export default CardCont;
