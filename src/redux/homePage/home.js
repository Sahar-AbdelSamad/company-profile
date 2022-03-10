const FETCH_COMPANIES_SUCCESS = 'company-profile/company/FETCH_COMPANIES_SUCCESS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANIES_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;

export const fetchCompaniesSuccess = (payload) => ({
  type: FETCH_COMPANIES_SUCCESS,
  payload,
});

export const fetchCompaniesOnNasdaq100 = () => async (dispatch) => {
  const response = await fetch('https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=db0b4c8add691463c952ec6896c9d51b');
  const data = await response.json();
  const info = data.map((item) => ({ symbol: item.symbol, name: item.name }));
  dispatch(fetchCompaniesSuccess(info));
};

export const fetchComp = () => async (dispatch) => {
  const responseDowjones = await fetch('https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=db0b4c8add691463c952ec6896c9d51b');
  const dataDowjones = await responseDowjones.json();
  const infoDowjones = dataDowjones.map((item) => ({
    symbol: item.symbol,
    name: item.name,
    exchange: 'New York Stock Exchange NYSE',
  }));
  const responseNasdaq100 = await fetch('https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=db0b4c8add691463c952ec6896c9d51b');
  const dataNasdaq100 = await responseNasdaq100.json();
  const infoNasdaq100 = dataNasdaq100.map((item) => ({
    symbol: item.symbol,
    name: item.name,
    exchange: 'Nasdaq Global Select NASDAQ',
  }));
  const info = [...infoDowjones, ...infoNasdaq100];
  dispatch(fetchCompaniesSuccess(info));
};

export const fetchCompanies = () => (dispatch) => {
  dispatch(fetchComp());
};
