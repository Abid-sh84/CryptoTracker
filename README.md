# Crypto Price Tracker

A real-time cryptocurrency price tracker built with React and Redux Toolkit that simulates WebSocket updates to display live cryptocurrency data.

![Screen Recording 2025-04-24 123401](https://github.com/user-attachments/assets/b69ea953-d2a5-43ef-b072-e896ebcca31f)


## Features

- **Real-time Price Updates**: Simulated WebSocket updates every 2 seconds
- **Comprehensive Data Display**: Shows key metrics including price, percentage changes (1h, 24h, 7d), market cap, volume, and supply information
- **Visual Price Trends**: 7-day price charts for each cryptocurrency
- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Color-Coded Changes**: Green for positive and red for negative price movements

## Tech Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Build Tool**: Vite
- **Styling**: CSS with responsive design
- **Data Visualization**: SVG-based charts


## Project Architecture
```
crypto-price-tracker/
│
├── src/
│   ├── app/
│   │   └── store.js              # Redux store configuration
│   │
│   ├── components/
│   │   ├── CryptoTable.jsx       # Main table component
│   │   ├── CryptoTable.css       # Table styling
│   │   └── PriceChart.jsx        # SVG chart component
│   │
│   ├── features/
│   │   └── cryptoSlice.js        # Redux slice for crypto data
│   │
│   ├── utils/
│   │   └── dataGenerator.js      # Utilities for generating mock data
│   │
│   ├── App.jsx                   # Main application component
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Application entry point
```

## How It Works
Instead of using WebSockets for real-time data, this application:

Generates Simulated Data: Uses the dataGenerator.js utility to create realistic crypto price data
Updates on Interval: Refreshes data every 2 seconds using setInterval in App.jsx
Manages State with Redux: All data flows through Redux Toolkit for centralized state management
Updates UI Efficiently: React components re-render only when their data changes

## Setup Instructions
Prerequisites
Node.js (v16 or later)
npm or yarn


## Clone the repository

```
git clone https://github.com/Abid-sh84/CryptoTracker.git
cd CryptoTracker/crypto-price-tracker
```

## Install dependencies

```
npm install
# or
yarn
```
## Start the development server:

```
npm run dev
# or
yarn dev
```
## Open your browser and navigate to:

```
http://localhost:5173
```
## Future Enhancements
Integration with real cryptocurrency APIs
Sorting and filtering options
Historical data views
Dark/Light theme toggle
Currency conversion options
Persistent settings with localStorage

## Notes
This application uses simulated data that changes at regular intervals to demonstrate the concept of real-time tracking, without the complexity of WebSocket implementation. This approach provides a similar user experience while being easier to set up and maintain.
