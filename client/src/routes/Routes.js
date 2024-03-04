import React from 'react';
import { Route,  Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Auth from '../Auth/Login';
import Page from '../Pages/Page';
import Dashboard from '../Pages/supervisorCategory/Dashboard';
import AddPlayerForm from '../Pages/supervisorCategory/AddPlayer'


function Routers() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/login" element={<Auth/>} />
                <Route path="/page" element={<Page/>}  />
                <Route path="/Dashboard" element={<Dashboard/>}  />
                <Route path="/AddPlayer" element={<AddPlayerForm/>}  />
            </Routes>
        </>
    );
} 

export default Routers;
