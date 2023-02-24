import { useState } from "react";
import "./Board.css";
import Card from "./Card";
import SearchBar from "./SearchBar";

const Board = ({ gameList }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  let filteredGames = gameList.filter((game) => {
    return (
      game.player1.toLowerCase().includes(searchInput.toLowerCase()) ||
      game.player2.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  filteredGames = searchInput ? filteredGames : gameList;

  return (
    <div className="Board">
      <div className="search-container">
        <SearchBar handleChange={handleInputChange} value={searchInput} />
      </div>
      <div className="cards-container">
        {filteredGames.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Board;
