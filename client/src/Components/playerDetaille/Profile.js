import React from 'react'
import '../component css/Profile.css'

function Profile({ playerId }) {
  console.log("Player ID:", playerId);
  return (
    <div className='profile-player'>
      <div className='nav-profile'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="Description de l'image" />
       <div className='birth-name'>
        <h1>player name</h1>
        <p>date birth</p>
       </div>
       <span className="menu-icon" >&#8942;</span>
      </div>

      <div className='profile-detaille'>
        <div className='profile-section1'>
          <h1>Email</h1>
          <p>amine.sefi@gmail.com</p>
          <h1>Phone number</h1>
          <p>445272872525</p>
          <h1>ID</h1>
          <p>a11123321</p>
          <h1>BMI</h1>
          <p>normal</p>
        </div>
        <div className='profile-section2'>
          <h1>Positon</h1>
          <p>Height</p>
          <h1>1.82m</h1>
          <p>a11123321</p>
          <h1>Weight</h1>
          <p>27kg</p>
        </div>
        <div className='img-stad'>
        <img className='stad-profile ' src={require('../../Assets/img/Football_field 1.png')} alt="Mon icône" />
        <img className='img-position position2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="Description de l'image" />
        <img className='img-position position3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="Description de l'image" />
        <img className='img-position position4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="Description de l'image" />
        <img className='img-position position5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="Description de l'image" />
        <img className='img-position position6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="Description de l'image" />
        <img className='img-position position7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="Description de l'image" />
        <img className='img-position position8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="Description de l'image" />
        <img className='img-position position9' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="Description de l'image" />
        <img className='img-position position10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="Description de l'image" />
        <img className='img-position position11' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" alt="Description de l'image" />       
        </div>
      </div>
    </div>

  )
}

export default Profile