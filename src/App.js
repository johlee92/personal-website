import React from 'react';
import './App.css'
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import HomePage from './components/homePage/HomePage.js';

function App() {
  return (
    <main className='App'>
      <Header />
      <div className='content-container'>
        <HomePage />
      </div>
      <Footer />
    </main>
  );
}

export default App;