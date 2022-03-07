import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';
import './Header.css';

const Header = () => (
  <header className="header">
    <NavLink to="/"><IoIosArrowBack /></NavLink>
    <p>Companies</p>
    <div>
      <MdKeyboardVoice style={{ marginRight: 20 }} />
      <FiSettings />
    </div>
  </header>
);

export default Header;
