import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import nasdaq from '../images/nasdaq.png';
import dowjones from '../images/dowjones.png';
import './Home.css';
import { fetchCompanies } from '../redux/companies/companiesSlice';

const Home = ({ setTitle }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies());
    setTitle('Companies');
  }, []);
  const home = useSelector((state) => state.companies);
  const [companyInfo, setCompanyInfo] = useState('');
  const [symbol, setSymbol] = useState('');
  const [search, setSearch] = useState('');

  const selectCompany = (e) => {
    setSearch('');
    setCompanyInfo(e.target.value);
    setSymbol(e.target.childNodes[e.target.selectedIndex].id);
  };
  const filteredData = home.filter((item) => {
    const filterValue = Object.keys(item).some((key) => {
      const searchedItem = item[key].toLowerCase().includes(search.toLowerCase());
      const selectedItem = item[key].toLowerCase().includes(symbol.toLowerCase());
      return searchedItem && selectedItem;
    });
    return filterValue;
  });

  return (
    <>
      <section className="homeSection1">
        <ul className="nasdaq">
          <li>Nasdaq-100</li>
          <li><img src={nasdaq} alt="Nasdaq-100" /></li>
        </ul>
        <ul className="dowjones">
          <li>Dow Jones Industrial Average</li>
          <li><img src={dowjones} alt="Dow Jones Industrial Average (DJIA)" /></li>
        </ul>
      </section>
      <section className="search-bar">
        <input
          type="search"
          placeholder="Search Company Name or Symbol"
          value={search}
          onChange={(e) => {
            setSymbol('');
            setCompanyInfo('');
            setSearch(e.target.value);
          }}
        />
        <select id="company" name="company" value={companyInfo} onChange={selectCompany}>
          <option value="">Choose a company</option>
          {Object.entries(home).map(([key, value]) => (
            <option key={key} id={`${value.symbol}`} value={`${value.name} (${value.symbol})`}>
              {`${value.name} (${value.symbol})`}
            </option>
          ))}
        </select>
      </section>
      <section className="cards">
        {Object.entries(filteredData || home).map(([key, value]) => (
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
Home.propTypes = {
  setTitle: PropTypes.func,
};
Home.defaultProps = {
  setTitle: (''),
};

export default Home;
