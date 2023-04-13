import { h } from 'preact';
import Router from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Car from './car';


const App = () => (
  <div id="app">
    <Header />
    <main>
      <div class="container">
        <div>
          <Router>
            <Home path="/" />
            <Car path="/car" />
          </Router>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
