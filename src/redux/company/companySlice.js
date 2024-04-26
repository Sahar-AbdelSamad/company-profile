import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCompany = createAsyncThunk('company/fetchCompany', async (companySymbol) => {
  const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${companySymbol}?apikey=a5ccf6f99fb133a28866a64b4bef97ea `);
  const data = await response.json();
  const info = Object.entries(data).map(([key, item]) => ({
    companyName: item.companyName,
    symbol: item.symbol,
    industry: item.industry,
    ceo: item.ceo,
    country: item.country,
    address: item.address,
    fullTimeEmployees: item.fullTimeEmployees,
    phone: item.phone,
    website: item.website,
    currency: item.currency,
    sector: item.sector,
    ipoDate: item.ipoDate,
    mktCap: item.mktCap,
    lastDiv: item.lastDiv,
    price: item.price,
    isin: item.isin,
    changes: item.changes,
    cik: item.cik,
    range: item.range,
    image: item.image,
    id: key,
  }));
  return info;
});

const initialState = {};

export const companySlice = createSlice({
  name: 'company',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompany.fulfilled, (state, action) => action.payload);
  },
});

export default companySlice.reducer;
