import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchData } from '../redux/company/company';
import './Home.css';

const Home = () => {
  const home = useSelector((state) => state.homeReducer);
  const [selected, setSelected] = useState('Choose a company');
  const dispatch = useDispatch();
  const select = (e) => {
    const str = e.target.value;
    setSelected(str);
    const mySubString = str.substring(
      str.indexOf('(') + 1,
      str.lastIndexOf(')'),
    );
    dispatch(fetchData(mySubString));
  };
  return (
    <div>
      <section className="home">Section1</section>
      <section className="search-bar">
        <select id="company" name="company" value={selected} onChange={select}>
          <option value="Choose a company" disabled>Choose a company</option>
          {Object.entries(home).map(([key, value]) => (
            <option key={key} value={`${value.name} (${value.symbol})`}>
              {`${value.name} (${value.symbol})`}
            </option>
          ))}
        </select>
      </section>
      <NavLink to="/Company">{selected}</NavLink>
      <section className="cards">
        {Object.entries(home).map(([key, value]) => (
          <NavLink key={key} to="/Company">
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => dispatch(fetchData(value.symbol))}
              onClick={() => dispatch(fetchData(value.symbol))}
            >
              {value.name}
              <br />
              {value.symbol}
              <br />
              {value.exchange}
              <br />
            </div>
          </NavLink>
        ))}
      </section>
    </div>
  );
};

export default Home;
