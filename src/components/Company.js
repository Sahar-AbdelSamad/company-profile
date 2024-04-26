import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { fetchCompany } from '../redux/company/companySlice';
import './Company.css';

const Company = ({ setTitle }) => {
  const param = useParams();
  const company = useSelector((state) => state.company[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompany(param.companySymbol));
    setTitle(param.companySymbol);
  }, []);
  return (
    <>
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
Company.propTypes = {
  setTitle: PropTypes.func,
};
Company.defaultProps = {
  setTitle: (''),
};
export default Company;
