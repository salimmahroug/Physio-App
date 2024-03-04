import React from 'react'
import './PagesCss/Home.css'

function home() {

  return (
    <div className='Home-Container'>
        <div className='section-1'>
          <div className='header'>
            <img src="../Assets/img/physioApp1.png" alt="logo" />         
          <div className='div-title'>
            <h1 className='homr-title'>physio for club management app</h1>
            <p className='title-p'>ClubManager delivers an unprecedented leap in member experience with everything needed to grow a successful club</p>
          </div>
          <div className='phone-section'>
          </div>
          </div>
          <button className='signin-butn'>slogin</button>
        </div>
    </div>
  )
}

export default home