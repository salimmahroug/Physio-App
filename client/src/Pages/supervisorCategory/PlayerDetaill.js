import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../PagesCss/Playerdetaill.css'
import Profile from '../../Components/playerDetaille/Profile';
import Case from '../../Components/playerDetaille/Case';
import History from '../../Components/playerDetaille/History';
import Quiz from '../../Components/playerDetaille/Quiz';
import Analyse from '../../Components/playerDetaille/Analyse';

function PlayerDetaill() {
  const [currentViewdetalle, setCurrentViewdetalle] = useState(null);
  const location = useLocation();
  const [playerId, setPlayerId] = useState(null); // État pour stocker l'ID du joueur

  useEffect(() => {
    switch (location.pathname) {
      case '/dashboard/Detaille/Profile':
        setCurrentViewdetalle(<Profile playerId={playerId} />); // Passer l'ID du joueur à Profile
        break;
      case '/dashboard/Detaille/Case':
        setCurrentViewdetalle(<Case/>); // Passer l'ID du joueur à Case
        break;
      case '/dashboard/Detaille/History':
        setCurrentViewdetalle(<History  />); // Passer l'ID du joueur à History
        break;
      case '/dashboard/Detaille/Quiz':
        setCurrentViewdetalle(<Quiz/>); // Passer l'ID du joueur à Quiz
        break;
      case '/dashboard/Detaille/Analyse':
        setCurrentViewdetalle(<Analyse  />); // Passer l'ID du joueur à Analyse
        break;
      default:
        setCurrentViewdetalle(<Profile />); // Passer l'ID du joueur à Profile par défaut
    }
  }, [location, playerId]);

  return (
    <div className='player-detaille'>
      <h1>player name</h1>
      <ul>
        <Link to={"/dashboard/Detaille/Case"} className='link-detaill'>Case</Link >
        <Link to={"/dashboard/Detaille/History"} className='link-detaill'>History</Link >
        <Link to={"/dashboard/Detaille/Profile"} className='link-detaill'>Profile</Link >
        <Link to={"/dashboard/Detaille/Quiz"} className='link-detaill'>Quiz</Link >
        <Link to={"/dashboard/Detaille/Analyse"} className='link-detaill'>Analyse</Link >
      </ul>
      <div className='detaille-content'>
        {currentViewdetalle}
      </div>
    </div>
  )
}

export default PlayerDetaill