import React from 'react';
import { useSelector } from 'react-redux';
import PriceChart from './PriceChart';
import './CryptoTable.css';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  // Logo mapping for each cryptocurrency
  const logoUrls = {
    BTC: "https://toppng.com/public/uploads/preview/bitcoin-png-bitcoin-logo-transparent-background-11562933997uxok6gcqjp.png",
    ETH: "https://blog.logomyway.com/wp-content/uploads/2021/11/Ethereum-logo.png",
    USDT: "https://tse2.mm.bing.net/th/id/OIP.s8NWcbfXt_rjYuZ-qvT4nAHaHa?rs=1&pid=ImgDetMain",
    BNB: "https://www.liblogo.com/img-logo/bn2812b2a7-bnb-logo-bnb-cryptocurrencies-free-icon-icon-icons-com.png",
    SOL: "https://www.liblogo.com/img-logo/so2809s56c-solana-logo-solana-crypto-logo-png-file-png-all.png"
  };

  // Generate mock price history data for each asset
  const generatePriceHistory = (basePrice, change7d) => {
    const trend = parseFloat(change7d);
    const priceHistory = [];
    const days = 7;
    
    for (let i = 0; i < days; i++) {
      // Create a somewhat smooth trend line with some randomness
      const trendFactor = (i / days) * trend * 0.05;
      const randomFactor = (Math.random() - 0.5) * 0.02;
      const dayPrice = basePrice * (1 + trendFactor + randomFactor);
      priceHistory.push(dayPrice);
    }
    
    return priceHistory;
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>#</th><th>Logo</th><th>Name</th><th>Symbol</th><th>Price ($)</th>
            <th>1h %</th><th>24h %</th><th>7d %</th>
            <th>Market Cap</th><th>24h Volume</th><th>Circulating Supply</th><th>Max Supply</th><th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => {
            const priceHistory = generatePriceHistory(parseFloat(asset.price), asset.change7d);
            const chartColor = asset.change7d > 0 ? "#00C853" : "#FF3D00";
            const logoUrl = logoUrls[asset.symbol] || asset.logo; // Use mapped logo or fallback to asset logo
            
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={logoUrl} alt={asset.symbol} width="20" height="20" className="crypto-logo" /></td>
                <td>{asset.name}</td>
                <td>{asset.symbol}</td>
                <td>${asset.price}</td>
                <td className={asset.change1h > 0 ? 'green' : 'red'}>{asset.change1h}%</td>
                <td className={asset.change24h > 0 ? 'green' : 'red'}>{asset.change24h}%</td>
                <td className={asset.change7d > 0 ? 'green' : 'red'}>{asset.change7d}%</td>
                <td>{asset.marketCap}</td>
                <td>{asset.volume24h}</td>
                <td>{asset.circulating}</td>
                <td>{asset.maxSupply}</td>
                <td className="chart-cell">
                  <div style={{ width: '60px', height: '30px' }}>
                    <PriceChart data={priceHistory} color={chartColor} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;