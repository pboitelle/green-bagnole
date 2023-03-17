import { h } from 'preact';
import style from './style.css';

const Home = () => {
	return (
		<div class={style.home}>
			<a href="https://preactjs.com">
				<img src="../../assets/preact-logo.svg" alt="Preact Logo" height="160" width="160" />
			</a>
			<video width="640" height="360" controls>
				<source src="./assets/pub_voiture.mp4" type="video/mp4"></source>
			</video>
		</div>
	);
};


export default Home;
