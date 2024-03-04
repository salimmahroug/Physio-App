// Auth.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginUser from '../API/Api'
import './Login.css';


function Auth() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await loginUser(username, password); 
            console.log('Login response:', response);
            const token = response.access_token;
            localStorage.setItem('token', token);
            console.log('Token stored in localStorage:', token);
            setError(null);
            setSuccessMessage('Logged in successfully.');
            navigate('/page');
        } catch (error) {
            console.error('Login failed:', error);
            setError('Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <>
                <link rel="stylesheet" href="style.css" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <title>Login Form Using HTML And CSS Only</title>
                <div className="container" id="container">
                    <div className="form-container log-in-container">
                        <form onSubmit={handleLogin}>
                            <h1 className='H1-Login'>Login</h1>
                            <span>use your account</span>
                            <input 
                            className='input-login'
                            type="text"
                            placeholder="Email or Phone"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                            <input
                             className='input-login'
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                            <button className='boutton-login' type="submit" disabled={loading}>
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>
                        {error && <p className='P-error' style={{ color: 'red' }}>{error}</p>}
                        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                            <Link to="/" className='home-link'>return to home page</Link>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}
export default Auth;