import { h } from 'preact';
import Carroussel from '../../components/carroussel';

import Helmet from 'preact-helmet';


const images = [
	'../../assets/car-one.webp',
	'../../assets/car-two.webp',
  ];
  
const Home = () => (
	<div>
		<Helmet	
			title="Aston Martin Homepage" 
			meta={[
				{ name: 'description', content: 'Site de presentation du site Aston Martin et de toutes ses voitures' },
				{ name: 'keywords', content: 'Aston Martin' },
			]}
		/>
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
		<div class="carroussel-homepage">
			<Carroussel images={images}/>
			<h3 class="carousel-h3">DB11</h3>
			<div class="carousel-p">
				<a class="carousel-a" href="/car">Découverte →</a>
				<a class="carousel-a" href="/car">Caractéristique →</a>
			</div>
		</div>
		
	</div>
	
);

export default Home;
