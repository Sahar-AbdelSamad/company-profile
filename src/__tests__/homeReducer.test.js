import homeReducer from '../redux/homePage/home';

describe('Testing for FETCH_COMPANIES_SUCCESS action in homeReducer ', () => {
  test('When the action is FETCH_COMPANIES_SUCCESS, the state will have the data added from the payload', () => {
    const state = [ {
        symbol : "CRM",
        name : "Salesforce.Com Inc",
        sector : "Technology",
        subSector : "Technology",
        headQuarter : "San Francisco, CALIFORNA",
        dateFirstAdded : "2020-08-31",
        cik : "0001108524",
        founded : "2004-06-23"
      }, {
        symbol : "WBA",
        name : "Walgreens Boots Alliance Inc",
        sector : "Healthcare",
        subSector : "Healthcare",
        headQuarter : "Deerfield, ILLINOIS",
        dateFirstAdded : "2018-06-26",
        cik : "0001618921",
        founded : "2014-12-31"
      }];

    const FETCH_COMPANIES_SUCCESS = 'company-profile/company/FETCH_COMPANIES_SUCCESS';
    const action = { type: FETCH_COMPANIES_SUCCESS, payload: state };
    const result = homeReducer([], action);
    expect(result).toEqual(state);
  });
});

describe('When we give a wrong action to homeReducer', () => {
  test('When we give a wrong action to homeReducer, the state will not change', () => {
    const state = [ {
      symbol : "CRM",
      name : "Salesforce.Com Inc",
      sector : "Technology",
      subSector : "Technology",
      headQuarter : "San Francisco, CALIFORNA",
      dateFirstAdded : "2020-08-31",
      cik : "0001108524",
      founded : "2004-06-23"
    }, {
      symbol : "WBA",
      name : "Walgreens Boots Alliance Inc",
      sector : "Healthcare",
      subSector : "Healthcare",
      headQuarter : "Deerfield, ILLINOIS",
      dateFirstAdded : "2018-06-26",
      cik : "0001618921",
      founded : "2014-12-31"
    }];

    const WRONG_ACTION = 'company-profile/company/WRONG_ACTION';
    const action = { type: WRONG_ACTION, payload: state };
    const result = homeReducer([], action);
    expect(result).toEqual([]);
  });
});