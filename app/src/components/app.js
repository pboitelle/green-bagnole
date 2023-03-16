import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Cards from '../routes/cards';
import Profile from '../routes/profile';

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Home path="/" />
				{/* <Cards path="/cards/" /> */}
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
			<Cards />
		</main>
	</div>
);

export default App;
