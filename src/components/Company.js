import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './Company.css';

const Company = () => {
  const company = useSelector((state) => state.companyReducer);
  return (
    <>
      <section className="logo">
        <img src={company[0].image} alt="company logo" />
      </section>
      <section>
        {Object.entries(company[0]).map(([key, value]) => (
          <div className="info" key={uuidv4()}>
            <div className="keys">
              {key}
            </div>
            <div className="Value">
              {value}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Company;
