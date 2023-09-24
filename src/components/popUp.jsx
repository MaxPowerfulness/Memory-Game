import '../styles/popUp.css';

function PopUp({ trigger, resetGame }) {
  return trigger ? (
    <div className="popUp">
      <div className="popUpInner">
        <p>Congrats!</p>
        <button onClick={resetGame}>Play Again?</button>
      </div>
    </div>
  ) : (
    ''
  );
}

export default PopUp;
