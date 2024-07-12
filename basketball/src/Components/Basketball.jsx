import React from 'react'
import './Basketball.css'
import img from '../assets/img.png.webp'
const Basketball = ({name, image, position, stats}) => {
  return (
    <div className="player-card">
      <img src={img} alt={name} className="player-image" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>
      <div className="player-stats">
        <p>Points per Game: {stats.pointsPerGame}</p>
        <p>Assists per Game: {stats.assistsPerGame}</p>
        <p>Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
}
    
      
 
export default Basketball;
