import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { MdKeyboardVoice } from 'react-icons/md';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ title }) => (
  <header className="header">
    {
      (title !== 'Companies') ? <NavLink to="/company-profile"><IoIosArrowBack data-testid="back" /></NavLink> : <p />
    }

    {
      title && <p>{title}</p>
    }
    <ul className="icons">
      <li><MdKeyboardVoice /></li>
      <li><FiSettings /></li>
    </ul>
  </header>
);

Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: 'Companies',
};
export default Header;
