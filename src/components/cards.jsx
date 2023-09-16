function CardCont({ characters, difficulty }) {
  let cardDeck = [];
  let i = 0;
  while (i < difficulty.number) {
    cardDeck.push(<Card name={characters[i].name} picture={characters[i].image} />);
    i++;
  }
  return <main>{cardDeck}</main>;
}

function Card({ name, picture }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={picture} alt="Character" />
    </div>
  );
}
export default CardCont;
