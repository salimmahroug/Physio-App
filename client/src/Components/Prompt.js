import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/prompt.css';

const Prompt = ({ onClose, userData, selectedCategory,setSelectedSubCategory }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const promptRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (promptRef.current && !promptRef.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
    
            if (
                userData[selectedCategory.category][selectedCategory.index] === password
            ) {
                onClose();

                setSelectedSubCategory({ subCategory: selectedCategory.subCategory }); 
                
                if (selectedCategory.category === 'supervisorCategory') {
                    navigate('/dashboard/supervisor');
                } else if (selectedCategory.category === 'technicalStaffCategory' && selectedCategory.index === 0) {
                    navigate('/dashboard/technical-staff');
                } else if (selectedCategory.category === 'playerCategory' && selectedCategory.index === 0) {
                    navigate('/dashboard/player');
                } else {
                    navigate('/Pages');
                }
            } else {
                setError('Incorrect password');
            }
        } catch (error) {
            console.error('Error checking password:', error);
            setError('An error occurred. Please try again later.');
        }
    };
    return (
        <div className="prompt-overlay">
            <div className="prompt-container" ref={promptRef}>
                <h2>Enter Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={error ? 'error' : ''}
                        />
                        {error && <p className="error-message">{error}</p>}
                    </div>
                    <button type="submit" className="bttn">Submit</button>
                </form>
            </div>
        </div>
    );
};
export default Prompt;
