import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Cards from './cards';
import Profile from '../routes/profile';


const App = () => (
  <div id="app">
    <Header />
    <main>
      <div class="container">
        <div>
          <Router>
            <Home path="/" />
          </Router>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
