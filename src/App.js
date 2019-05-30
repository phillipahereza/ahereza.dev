import React, { Component } from "react";
import "./App.css";
import resume from "./files/resume.pdf";

class App extends Component {
  render() {
    const style = {
      fontWeight: 600
    };

    const underlineStyle = {
      textDecoration: 'underline'
    }
    return (
      <div className="App">
        <p>
          Hi, I’m <strong>Phillip</strong>.<br />
          <strong style={style}>Software Engineer</strong> at{" "}
          <a href="http://codeforafrica.org">Code for Africa</a>.
        </p>

        <section className="social">
          <p>Follow me on:</p>

          <ul>
            <li>
              <a
                href="https://github.com/phillipahereza"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github{" "}
                <span role="img" aria-label="smiley face">
                  🐙
                </span>
              </a>
            </li>
          </ul>

          <p>Download my <a href={resume} style={underlineStyle}>Resumé</a></p>
        </section>

        <footer>
          <p>
            This website will be updated as I learn React{" "}
            <span role="img" aria-label="smiley face">
              ☺️
            </span>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
