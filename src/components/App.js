import React, { Component } from 'react';

import Header from './appPL/Header';
import Welcome from './appPL/Welcome';
import Portfolio from './appPL/Portfolio';
import Contact from './appPL/Contact';

import HeaderEN from './appEN/Header';
import WelcomeEN from './appEN/Welcome';
import PortfolioEN from './appEN/Portfolio';
import ContactEN from './appEN/Contact';

import '../styles/App.css';

class App extends Component {
  state = {
    language: 'pl',
  }
  setLanguage = (language) => {
    this.setState({
      language,
    })
  }



  scroll = () => {
    let id = setInterval(() => {

      window.scrollBy(0, 4);
      if (window.pageYOffset >= window.innerHeight)
        clearInterval(id);
    }, 1)

  }
  render() {
    return (
      <div className="App">
        {this.state.language === 'pl' ? <>
          <Header scroll={this.scroll} language={this.state.language} setLanguage={this.setLanguage} />
          <Welcome />
          <Portfolio />
          <Contact />
        </> : <>
            <HeaderEN scroll={this.scroll} language={this.state.language} setLanguage={this.setLanguage} />
            <WelcomeEN />
            <PortfolioEN />
            <ContactEN />
          </>
        }

      </div>

    );
  }
}

export default App;
