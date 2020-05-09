import React from 'react';
import './App.css'
import ErrorBoundary from './components/errorBoundary/ErrorBoundary.js';
import Header from './components/header/Header.js';
import { Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js';
import HomePage from './components/homePage/HomePage.js';
import AboutMe from './components/aboutMe/AboutMe.js';
import ContactForm from './components/contactForm/ContactForm.js';
import Journals from './components/journals/Journals.js';
import JournalPage from './components/journalPage/JournalPage.js';
import Projects from './components/projects/Projects.js';
import PersonalWebsiteContext from './personalWebsiteContext.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journals: [],
      projects: []
    }
  }

  // function to fetch the latest journals and projects from the api
  dataFetch = () => {
  }

  componentDidMount() {
    // fetch the data to set state accordingly
    // this.dataFetch();
  }

  render() {
    const contextValue = {
      journals: this.state.journals,
      projects: this.state.projects
    }

    return (
      <main className='App'>
        <PersonalWebsiteContext.Provider value={contextValue}>
          <ErrorBoundary>
            <Header />
            <div className='content-container'>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutMe} />
              <Route exact path='/contact' component={ContactForm} />
              <Route exact path='/journal' component={Journals} />
              <Route path='/journal/:journalId' component={JournalPage} />
              <Route exact path='/projects' component={Projects} />
            </div>
            <Footer />
          </ErrorBoundary>
        </PersonalWebsiteContext.Provider>
      </main>
    );
  }
}

export default App;