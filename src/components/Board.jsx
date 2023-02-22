import "./Board.css";
import Card from "./Card";

const Board = ({ gameList }) => {
  return (
    <div className="Board">
      {gameList.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Board;
