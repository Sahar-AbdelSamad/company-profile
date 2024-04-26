import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companies/companiesSlice';
import companyReducer from './company/companySlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    company: companyReducer,
  },
});

export default store;
