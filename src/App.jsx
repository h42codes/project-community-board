import "./App.css";
import Board from "./components/Board";

const gameList = [
  {
    id: 0,
    player1: "Cuba",
    player2: "Netherlands",
    date: "March 7, 2023",
    time: "11:00 PM ET",
    stadium: "Taichung Intercontinental Baseball Stadium",
    location: "Taichung, Taiwan",
  },
  {
    id: 1,
    player1: "Australia",
    player2: "Korea",
    date: "March 8, 2023",
    time: "10:00 PM ET",
    stadium: "Tokyo Dome",
    location: "Tokyo, Japan",
  },
  {
    id: 2,
    player1: "Nicaragua",
    player2: "Cardinals",
    date: "March 9, 2023",
    time: "1:05 PM ET",
    stadium: "Roger Dean Chevrolet Stadium",
    location: "Jupiter, FL",
  },
  {
    id: 3,
    player1: "Puerto Rico",
    player2: "Red Sox",
    date: "March 8, 2023",
    time: "6:05 PM ET",
    stadium: "JetBlue Park",
    location: "Ft. Myers, FL",
  },
  {
    id: 4,
    player1: "United States",
    player2: "Giants",
    date: "March 8, 2023",
    time: "9:05 PM ET",
    stadium: "Scottsdale Stadium",
    location: "Scottsdale, AZ",
  },
  {
    id: 5,
    player1: "United States",
    player2: "Angels",
    date: "March 9, 2023",
    time: "3:10 PM ET",
    stadium: "Tempe Diablo Stadium",
    location: "Tempe, AZ",
  },
  {
    id: 6,
    player1: "Dominican Rep.",
    player2: "Venezuela",
    date: "March 11, 2023",
    time: "7:00 PM ET",
    stadium: "loanDepot park",
    location: "Miami, FL",
  },
  {
    id: 7,
    player1: "Great Britain",
    player2: "Canada",
    date: "March 12, 2023",
    time: "3:00 PM ET",
    stadium: "Chase Field",
    location: "Phoenix, AZ",
  },
  {
    id: 8,
    player1: "Canada",
    player2: "United States",
    date: "March 13, 2023",
    time: "10:00 PM ET",
    stadium: "Chase Field",
    location: "Phoenix, AZ",
  },
  {
    id: 9,
    player1: "Puerto Rico",
    player2: "Dominican Rep.",
    date: "March 15, 2023",
    time: "7:00 PM ET",
    stadium: "loanDepot park",
    location: "Miami, FL",
  },
  {
    id: 10,
    player1: "United States",
    player2: "Colombia",
    date: "March 15, 2023",
    time: "10:00 PM ET",
    stadium: "Chase Field",
    location: "Phoenix, AZ",
  },
];
function App() {
  return (
    <div className="App">
      <h1>World Baseball Classic</h1>
      <Board gameList={gameList} />
    </div>
  );
}

export default App;
