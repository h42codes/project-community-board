import "./App.css";
import Board from "./components/Board";

const gameData = [
  {
    id: 0,
    player1: "Cuba",
    player2: "Netherlands",
    date: "March 7, 2023",
    time: "11:00 PM ET",
    location: "Taichung Intercontinental Baseball Stadium (Taichung, Taiwan)",
  },
  {
    id: 1,
    player1: "Australia",
    player2: "Korea",
    date: "March 8, 2023",
    time: "10:00 PM ET",
    location: "Tokyo Dome (Tokyo, Japan)",
  },
  {
    id: 2,
    player1: "Nicaragua",
    player2: "Cardinals",
    date: "March 9, 2023",
    time: "1:05 PM ET",
    location: "Roger Dean Chevrolet Stadium (Jupiter, FL)",
  },
  {
    id: 3,
    player1: "Puerto Rico",
    player2: "Red Sox",
    date: "March 8, 2023",
    time: "6:05 PM ET",
    location: "JetBlue Park (Ft. Myers, FL)",
  },
  {
    id: 4,
    player1: "United States",
    player2: "Giants",
    date: "March 8, 2023",
    time: "9:05 PM ET",
    location: "Scottsdale Stadium (Scottsdale, AZ)",
  },
  {
    id: 5,
    player1: "United States",
    player2: "Angels",
    date: "March 9, 2023",
    time: "3:10 PM ET",
    location: "Tempe Diablo Stadium (Tempe, AZ)",
  },
  {
    id: 6,
    player1: "Dominican Rep.",
    player2: "Venezuela",
    date: "March 11, 2023",
    time: "7:00 PM ET",
    location: "loanDepot park (Miami, FL)",
  },
  {
    id: 7,
    player1: "Great Britain",
    player2: "Canada",
    date: "March 12, 2023",
    time: "3:00 PM ET",
    location: "Chase Field (Phoenix, AZ)",
  },
  {
    id: 8,
    player1: "Canada",
    player2: "United States",
    date: "March 13, 2023",
    time: "10:00 PM ET",
    location: "Chase Field (Phoenix, AZ)",
  },
  {
    id: 9,
    player1: "Puerto Rico",
    player2: "Dominican Rep.",
    date: "March 15, 2023",
    time: "7:00 PM ET",
    location: "loanDepot park (Miami, FL)",
  },
  {
    id: 10,
    player1: "United States",
    player2: "Colombia",
    date: "March 15, 2023",
    time: "10:00 PM ET",
    location: "Chase Field (Phoenix, AZ)",
  },
];

function App() {
  return (
    <div className="App">
      <h1>World Baseball Classic</h1>
      <Board />
    </div>
  );
}

export default App;
