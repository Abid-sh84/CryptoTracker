export const generateRandomCryptoData = () => {
    const sample = [
      {
        name: 'Bitcoin', symbol: 'BTC', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        price: 30000, marketCap: '600B', volume24h: '30B', circulating: '19M', maxSupply: '21M',
      },
      {
        name: 'Ethereum', symbol: 'ETH', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
        price: 2000, marketCap: '240B', volume24h: '15B', circulating: '120M', maxSupply: '∞',
      },
      {
        name: 'Tether', symbol: 'USDT', logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
        price: 1, marketCap: '80B', volume24h: '50B', circulating: '80B', maxSupply: '∞',
      },
      {
        name: 'BNB', symbol: 'BNB', logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
        price: 250, marketCap: '40B', volume24h: '1B', circulating: '160M', maxSupply: '200M',
      },
      {
        name: 'Solana', symbol: 'SOL', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png',
        price: 25, marketCap: '10B', volume24h: '500M', circulating: '400M', maxSupply: '∞',
      },
    ];
  
    return sample.map((crypto) => {
      const change = () => (Math.random() * 10 - 5).toFixed(2);
      return {
        ...crypto,
        price: (crypto.price * (1 + Math.random() * 0.02 - 0.01)).toFixed(2),
        change1h: change(),
        change24h: change(),
        change7d: change(),
        volume24h: (parseFloat(crypto.volume24h) * (1 + Math.random() * 0.05 - 0.025)).toFixed(2),
      };
    });
  };