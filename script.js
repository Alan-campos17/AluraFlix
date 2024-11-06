// src/components/Menu/index.js
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'

const Menu = () => {
  const navigate = useNavigate();

  let signOut = () => {
    localStorage.setItem('token', '')
    navigate('/login');
  }

  return (
    <nav className="Menu">
      <img className="Logo" src={Logo} alt="AluraFlix logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}} />
      <Button onClick={() => navigate('/videos')}>
        Videos
      </Button>
      <Button onClick={() => navigate('/categories')}>
        Categories
      </Button>
      <Button onClick={() => navigate('/register/videos')}>
        New Video
      </Button>
      <Button onClick={signOut} style={{color: 'red'}}>
        Sign Out
      </Button>
    </nav>
  );
}

export default Menu;