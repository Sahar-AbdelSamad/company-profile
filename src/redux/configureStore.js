import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import companyReducer from './company/company';
import homeReducer, { fetchCompanies } from './homePage/home';

const reducer = combineReducers({
  companyReducer, homeReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
store.dispatch(fetchCompanies());
export default store;
