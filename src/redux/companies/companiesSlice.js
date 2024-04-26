import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
  const responseDowjones = await fetch('https://financialmodelingprep.com/api/v3/dowjones_constituent?apikey=a5ccf6f99fb133a28866a64b4bef97ea ');
  const dataDowjones = await responseDowjones.json();
  const infoDowjones = dataDowjones.map((item) => ({
    symbol: item.symbol,
    name: item.name,
    exchange: 'Dow Jones Industrial Average (DJIA)',
  }));

  const responseNasdaq100 = await fetch('https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=a5ccf6f99fb133a28866a64b4bef97ea ');
  const dataNasdaq100 = await responseNasdaq100.json();
  const infoNasdaq100 = dataNasdaq100.map((item) => ({
    symbol: item.symbol,
    name: item.name,
    exchange: 'Nasdaq-100',
  }));
  return [...infoDowjones, ...infoNasdaq100];
});

const initialState = [];

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.fulfilled, (state, action) => action.payload);
  },
});

export default companiesSlice.reducer;
