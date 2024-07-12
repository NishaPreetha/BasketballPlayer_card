import React from 'react'
import './App.css'
import Basketball from './Components/Basketball'

function App() {
  const player = {
    name: "LeBron James",
    image: "https://example.com/lebron.jpg", 
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  };

  return (
    <div className="App">
      <Basketball
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
}

 

export default App
