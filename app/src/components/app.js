import { h } from 'preact';
import Router from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Car from './car';
import Cards from './cards';


const App = () => (
  <div id="app">
    <Header />
    <main>
      <div class="container">
        <div>
          <Router>
            <Home path="/" />
            <Car path="/car" />
            <Cards path="/cards" />
          </Router>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
