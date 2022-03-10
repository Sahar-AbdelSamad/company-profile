import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from '../redux/company/company';
import Header from './Header';
import './Company.css';

const Company = () => {
  const param = useParams();
  const company = useSelector((state) => state.companyReducer[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(param.companySymbol));
  }, []);

  return (
    <>
      {(company)
        ? <Header title={company.companyName} /> : <Header title="Company" />}
      {(company)
        ? (
          <NavLink key={uuidv4()} to={`/${company.symbol}`}>
            <section className="logo">
              <img src={company.image} alt="company logo" />
              <p>{company.companyName}</p>
            </section>
            <section className="info">
              {Object.entries(company).filter(([key]) => (key !== 'companyName')).map(([key, value]) => (
                <div className="item" key={uuidv4()}>
                  <div className="key">
                    { key }
                  </div>
                  <div>
                    {value}
                  </div>
                </div>
              ))}
            </section>
          </NavLink>
        ) : <h1>Loading ...</h1>}
    </>
  );
};

export default Company;
