import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../PagesCss/Dashboard.css'

const Dashboard = ({ selectedSubCategory, userData }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (selectedSubCategory.subCategory) {
      fetchPlayers();
    }
  }, [selectedSubCategory]);

  const fetchPlayers = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }
      const response = await axios.post(`http://localhost:5000/api/player/category/${selectedSubCategory.subCategory}`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPlayers(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const deletePlayer = async (playerId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }
      await axios.delete(`http://localhost:5000/api/player/${playerId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // Mise à jour de la liste des joueurs après la suppression
      setPlayers(players.filter(player => player._id !== playerId));
      console.log('Player deleted successfully');
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  return (
    <div className='dashboard'>
      <div className='button-add'>
        <button className="Add-button"> <Link to="/dashboard/supervisor/AddPlayer">Add Player</Link></button>
      </div>
      <h4>Dashboard</h4>
      <div className="players-list">
        <h5>List of  Players {selectedSubCategory.subCategory}</h5>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player._id}>
                <td><Link to={`/player/${player._id}`}>
                  {player.firstname} {player.lastname}
                </Link></td>
                <td>{player.category}</td>
                <td>{player.position}</td>
                <td><button className='delete-button' onClick={() => deletePlayer(player._id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f7a399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button></td>
              </tr>
            ))}
          </tbody>        
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
