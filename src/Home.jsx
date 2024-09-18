import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/satellitesleuthlogo.png'
import { useNavigate } from 'react-router-dom';
function Home () {

    const navigate = useNavigate();

    const goToGame = () => {
      navigate('/game');
    };

  return (
    <>
    <div className='mainContainer'>
      <img className='logo' src={logo} alt="" />
      <div className='buttons'>
        <button className='playButton' onClick={goToGame}>Play</button>
        <button className='howToPlayButton'>How To Play</button>
        
      </div>
      </div>
    </>
  );
};

export default Home;