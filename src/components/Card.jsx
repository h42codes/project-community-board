import "./Card.css";

const Card = ({ game }) => {
  return (
    <div className="Card">
      <div className="Card__date">
        <div>{game.date}</div>
      </div>
      <div className="Card__title">
        {game.player1} {<br />}vs{<br />} {game.player2}
      </div>
      <div className="Card__content">
        <div className="time">{game.time}</div>
        <hr />
        <div className="stadium">{game.stadium}</div>
        <div className="location">{game.location}</div>
      </div>
      <button className="Card__button">Preview</button>
    </div>
  );
};

export default Card;
