import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchCompany } from '../redux/company/companySlice';
// import Header from './Header';
import './Company.css';

const Company = () => {
  const param = useParams();
  const company = useSelector((state) => state.company[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompany(param.companySymbol));
  }, []);

  return (
    <>
      {/* {(company)
        ? <Header title={company.companyName} /> : <Header title="Company" />} */}
      {(company)
        ? (
          <section key={uuidv4()}>
            <section className="logo">
              <img src={company.image} alt="company logo" />
              <p>{company.companyName}</p>
            </section>
            <section className="info">
              {Object.entries(company).filter(([key]) => (key !== 'companyName' && key !== 'image')).map(([key, value]) => (
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
          </section>
        ) : <h1>Loading ...</h1>}
    </>
  );
};

export default Company;
