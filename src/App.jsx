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
    url: "https://www.mlb.com/gameday/cuba-vs-netherlands/2023/03/07/719542/preview",
  },
  {
    id: 1,
    player1: "Australia",
    player2: "Korea",
    date: "March 8, 2023",
    time: "10:00 PM ET",
    stadium: "Tokyo Dome",
    location: "Tokyo, Japan",
    url: "https://www.mlb.com/gameday/australia-vs-korea/2023/03/08/719530/preview",
  },
  {
    id: 2,
    player1: "Nicaragua",
    player2: "Cardinals",
    date: "March 9, 2023",
    time: "1:05 PM ET",
    stadium: "Roger Dean Chevrolet Stadium",
    location: "Jupiter, FL",
    url: "https://www.mlb.com/gameday/nicaragua-vs-cardinals/2023/03/09/719204/preview",
  },
  {
    id: 3,
    player1: "Puerto Rico",
    player2: "Red Sox",
    date: "March 8, 2023",
    time: "6:05 PM ET",
    stadium: "JetBlue Park",
    location: "Ft. Myers, FL",
    url: "https://www.mlb.com/gameday/puerto-rico-vs-red-sox/2023/03/08/719223/preview",
  },
  {
    id: 4,
    player1: "United States",
    player2: "Giants",
    date: "March 8, 2023",
    time: "9:05 PM ET",
    stadium: "Scottsdale Stadium",
    location: "Scottsdale, AZ",
    url: "https://www.mlb.com/gameday/united-states-vs-giants/2023/03/08/719208/preview",
  },
  {
    id: 5,
    player1: "United States",
    player2: "Angels",
    date: "March 9, 2023",
    time: "3:10 PM ET",
    stadium: "Tempe Diablo Stadium",
    location: "Tempe, AZ",
    url: "https://www.mlb.com/gameday/united-states-vs-angels/2023/03/09/719195/preview",
  },
  {
    id: 6,
    player1: "Dominican Rep.",
    player2: "Venezuela",
    date: "March 11, 2023",
    time: "7:00 PM ET",
    stadium: "loanDepot park",
    location: "Miami, FL",
    url: "https://www.mlb.com/gameday/dominican-rep-vs-venezuela/2023/03/11/719514/preview",
  },
  {
    id: 7,
    player1: "Great Britain",
    player2: "Canada",
    date: "March 12, 2023",
    time: "3:00 PM ET",
    stadium: "Chase Field",
    location: "Phoenix, AZ",
    url: "https://www.mlb.com/gameday/great-britain-vs-canada/2023/03/12/719517/preview",
  },
  {
    id: 8,
    player1: "Canada",
    player2: "United States",
    date: "March 13, 2023",
    time: "10:00 PM ET",
    stadium: "Chase Field",
    location: "Phoenix, AZ",
    url: "https://www.mlb.com/gameday/canada-vs-united-states/2023/03/13/719520/preview",
  },
  {
    id: 9,
    player1: "Puerto Rico",
    player2: "Dominican Rep.",
    date: "March 15, 2023",
    time: "7:00 PM ET",
    stadium: "loanDepot park",
    location: "Miami, FL",
    url: "https://www.mlb.com/gameday/puerto-rico-vs-dominican-rep/2023/03/15/719506/preview",
  },
  {
    id: 10,
    player1: "United States",
    player2: "Colombia",
    date: "March 15, 2023",
    time: "10:00 PM ET",
    stadium: "Chase Field",
    location: "Phoenix, AZ",
    url: "https://www.mlb.com/gameday/united-states-vs-colombia/2023/03/15/719515/preview",
  },
];
function App() {
  return (
    <div className="App">
      <h1>⚾️ World Baseball Classic ⚾️</h1>
      <Board gameList={gameList} />
    </div>
  );
}

export default App;
