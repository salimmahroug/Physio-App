import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../PagesCss/AddPlayer.css'


function AddPlayerForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    date: '',
    category: '',
    position: '',
    height: '',
    weight: '',
    phoneNumber: '',
    idNumber: '',
    Urlimage: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await axios.post('http://127.0.0.1:5000/api/player', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Player added:', response.data);
      
      // Utilisation de la fonction navigate pour naviguer vers la page du tableau de bord du superviseur
      navigate('/page');
      
    } catch (error) {
      console.error('Error adding player:', error);
      console.log('Error details:', error.response.data);
      console.log('Status code:', error.response.status);
    }
  };
  
  return (
    <div className='add-player-container'>
      <h2>Add New Player</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
        <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} />
        <input type="text" name="height" placeholder="Height" value={formData.height} onChange={handleChange} />
        <input type="text" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} />
        <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        <input type="text" name="idNumber" placeholder="ID Number" value={formData.idNumber} onChange={handleChange} />
        <input type="text" name="Urlimage" placeholder="Image URL" value={formData.Urlimage} onChange={handleChange} />
        <button type="submit">Add Player</button>
        <Link to="/dashboard/supervisor">Go to Supervisor Dashboard</Link>
      </form>
    </div>
  );
}

export default AddPlayerForm;
