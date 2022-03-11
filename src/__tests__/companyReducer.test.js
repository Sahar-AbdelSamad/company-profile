import companyReducer from '../redux/company/company';

describe('Testing for FETCH_SUCCESS action in companyReducer ', () => {
  test('When the action is FETCH_SUCCESS, the state will have the data added from the payload', () => {
    const state = [{
        symbol: "NKE",
        price: 126.03,
        beta: 0.97244,
        volAvg: 6377218,
        mktCap: 199291240448,
        lastDiv: 1.1600000000000001,
        range: "120.8-179.1",
        changes: -0.91999817,
        companyName: "NIKE, Inc.",
       currency: "USD",
        cik: "0000320187",
        isin: "US6541061031",
        cusip: "654106103",
        industry: "Footwear & Accessories",
        website: "https://www.nike.com",
        ceo: "Mr. John Donahoe",
        sector: "Consumer Cyclical",
        country: "US",
        fullTimeEmployees: "73300",
        phone: "15036713173",
        zip: "97005-6453",
        dcfDiff: -8.59,
        dcf: 132.175,
        ipoDate: "1990-10-17"
      } ];

      const FETCH_SUCCESS = 'company-profile/company/FETCH_SUCCESS';
    const action = { type: FETCH_SUCCESS, payload: state };
    const result = companyReducer([], action);
    expect(result).toEqual(state);
  });
});

describe('When we give a wrong action to companyReducer', () => {
  test('When we give a wrong action to companyReducer, the state will not change', () => {
    const state = [{
        symbol: "NKE",
        price: 126.03,
        beta: 0.97244,
        volAvg: 6377218,
        mktCap: 199291240448,
        lastDiv: 1.1600000000000001,
        range: "120.8-179.1",
        changes: -0.91999817,
        companyName: "NIKE, Inc.",
       currency: "USD",
        cik: "0000320187",
        isin: "US6541061031",
        cusip: "654106103",
        industry: "Footwear & Accessories",
        website: "https://www.nike.com",
        ceo: "Mr. John Donahoe",
        sector: "Consumer Cyclical",
        country: "US",
        fullTimeEmployees: "73300",
        phone: "15036713173",
        zip: "97005-6453",
        dcfDiff: -8.59,
        dcf: 132.175,
        ipoDate: "1990-10-17"
      } ];

    const WRONG_ACTION = 'company-profile/company/WRONG_ACTION';
    const action = { type: WRONG_ACTION, payload: state };
    const result = companyReducer([], action);
    expect(result).toEqual([]);
  });
});