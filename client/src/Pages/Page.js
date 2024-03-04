// Page.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PagesCss/Pages.css'


function Page() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  const logoutUser = () => {
    try {
      localStorage.setItem('token', '');
      window.location.href = '/';
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };

  return (
    <div>
      <h1>Page</h1>
      <button onClick={logoutUser}>Logout</button>
      <Link to="/AddPlayer" className='link'>addplayer</Link>
    </div>
  );
}

export default Page;
