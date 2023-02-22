import "./Card.css";

const Card = ({ game }) => {
  return (
    <div className="Card">
      <div className="Card__title">
        {game.player1} VS {game.player2}
      </div>
      <div className="Card__content">
        <div>{game.stadium}</div>
        <div>{game.location}</div>
      </div>
      <button className="Card__button">Preview</button>
    </div>
  );
};

export default Card;
