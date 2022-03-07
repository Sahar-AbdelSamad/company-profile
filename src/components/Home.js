import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div>
    <section className="home">Section1</section>
    <section className="search-bar">Section2</section>
    <NavLink to="/Company">Section3</NavLink>
  </div>
);

export default Home;
