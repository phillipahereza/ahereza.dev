import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';


function initializeReactGA() {
  ReactGA.initialize('UA-123791717-1');
  ReactGA.pageview('/homepage');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Hi, I’m <strong>Phillip</strong>.<br/>
            <strong>Software Engineer</strong> at <a href="http://verve.co">Code for Africa</a>.
      </p>

          <section className='social'>

            <p>Follow me on:</p>

            <ul>
            <li><a href="https://twitter.com/phillipAhereza">Twitter 🐦</a></li>
            <li><a href="https://github.com/phillipahereza">Github 🐙</a></li>
            </ul>

          </section>

          <footer>
            <p>This website will be updated as I learn React ☺️</p>
          </footer>
              
      </div>
    );
  }
}

export default App;
