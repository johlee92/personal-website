import React from 'react';
import './App.css'
import ErrorBoundary from './ErrorBoundary.js';
import Header from './components/header/Header.js';
import { Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js';
import HomePage from './components/homePage/HomePage.js';
import AboutMe from './components/aboutMe/AboutMe.js';
import ContactForm from './components/contactForm/ContactForm.js';
import Journal from './components/journal/Journal.js';
import Projects from './components/projects/Projects.js';


function App() {
  return (
    <main className='App'>
      <ErrorBoundary>
        <Header />
        <div className='content-container'>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutMe} />
          <Route exact path='/contact' component={ContactForm} />
          <Route exact path='/journal' component={Journal} />
          <Route exact path='/projects' component={Projects} />
        </div>
        <Footer />
      </ErrorBoundary>
    </main>
  );
}

export default App;