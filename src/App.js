import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    const style = {
      fontWeight: 600
    }
    return (
      <div className="App">
        <p>
          Hi, I’m <strong>Phillip</strong>.<br/>
            <strong style={style}>Software Engineer</strong> at <a href="http://verve.co">Code for Africa</a>.
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
