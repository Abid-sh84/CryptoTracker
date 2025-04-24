import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCryptoData } from './features/cryptoSlice';
import CryptoTable from './components/CryptoTable';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCryptoData());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
};

export default App;
