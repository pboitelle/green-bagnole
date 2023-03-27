import { h } from 'preact';
import Carroussel from '../../components/carroussel';

const images = [
  '../../assets/car-one.webp',
  '../../assets/car-two.webp',
];
const Home = () => (
	<div>
		<div class='background-container'>
			<video autoplay loop muted id="background-video">
				<source src="./assets/bg-video.mp4" type="video/mp4"/>
			</video>
			<div id="content">
				<h2>Aston Martin</h2>
				<p>Ce qu'aime la britanique ce n'ai pas seulement la voiture ou la course, c'est son paysage, protégez le.</p>
				<p>Pour un cours trajet, privilégié la marche ou le vélo au lieu d'une voiture</p>
			</div>
		</div>
		<Carroussel images={images} />
	</div>
	
);

export default Home;
