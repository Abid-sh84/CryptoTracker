import { createSlice } from '@reduxjs/toolkit';
import { generateRandomCryptoData } from '../utils/dataGenerator';

const initialState = {
  assets: generateRandomCryptoData(),
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCryptoData: (state) => {
      state.assets = generateRandomCryptoData();
    },
  },
});

export const { updateCryptoData } = cryptoSlice.actions;
export default cryptoSlice.reducer;
