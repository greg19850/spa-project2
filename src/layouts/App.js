import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Head from "./Head";
import Menu from "./Menu";
import Page from "./Page";
import Foot from "./Foot";

import '../styles/App.css';

class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className='app'>
          <header>
            {<Head />}
          </header>
          <main>
            <aside>
              {<Menu />}
            </aside>
            <section className='page'>
              {<Page />}
            </section>
          </main>
          <footer>
            {<Foot />}
          </footer>
        </div >
      </Router>
    );
  }
}

export default App;
