import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import nasdaq from '../images/nasdaq.png';
import dowjones from '../images/dowjones.png';
import Header from './Header';
import './Home.css';

const Home = () => {
  const home = useSelector((state) => state.homeReducer);
  const [companyInfo, setCompanyInfo] = useState('');
  const [selected, setSelected] = useState('');
  const [search, setSearch] = useState('');

  const select = (e) => {
    setCompanyInfo(e.target.value);
    const symbol = e.target.value.slice(0, 8);
    setSelected(symbol);
  };

  const filteredData = home.filter((company) => {
    const data = Object.keys(company).some((key) => {
      const res = company[key].toLowerCase().includes(selected.toLowerCase())
      && company[key].toLowerCase().includes(search.toLowerCase());
      return res;
    });
    return data;
  });
  return (
    <>
      <Header />
      <section className="homeSection1">
        <ul className="nasdaq">
          <li>Nasdaq 100</li>
          <li><img src={nasdaq} alt="nasdaq" /></li>
        </ul>
        <ul className="dowjones">
          <li>Dow Jones</li>
          <li><img src={dowjones} alt="dowjones" /></li>
        </ul>
      </section>
      <section className="search-bar">
        <input type="search" placeholder="Search Company Name or Symbol" value={search} onChange={(e) => setSearch(e.target.value)} />
        <select id="company" name="company" value={companyInfo} onChange={select}>
          <option value="">Choose a company</option>
          {Object.entries(home).map(([key, value]) => (
            <option key={key} value={`${value.name} (${value.symbol})`}>
              {`${value.name} (${value.symbol})`}
            </option>
          ))}
        </select>
      </section>

      <section className="cards">
        {filteredData === '' ? Object.entries(home).map(([key, value]) => (
          <Link key={key} to={`/${value.symbol}`}>
            <ul>
              <li className="companyName">
                {value.name}
                <span style={{ fontWeight: 300 }}>{`   (${value.symbol})`}</span>
              </li>
              <li>
                {value.exchange}
              </li>
            </ul>
          </Link>
        )) : Object.entries(filteredData).map(([key, value]) => (
          <Link key={key} to={`/${value.symbol}`}>
            <ul>
              <li className="companyName">
                {value.name}
                <span style={{ fontWeight: 300 }}>{`   (${value.symbol})`}</span>
              </li>
              <li>
                {value.exchange}
              </li>
            </ul>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Home;
