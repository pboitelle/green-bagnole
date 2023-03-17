import { h } from 'preact';
import style from './style.css';

const Cards = () => {
	return (
		<div class={style.home}>
			<a href="https://preactjs.com">
				<img src="../../assets/preact-logo.svg" alt="Preact Logo" height="160" width="160" />
			</a>
			<h1>ICI ON AFFICHE LES Cards</h1>



			<body>
				<div class="wrapper">
					<div class="container">
						<div class="banner-image"></div>
						<img src="https://placekitten.com/300/300" alt="" class="profile-image"></img>
						<h1 class="name">Keith Kitten</h1>
						<p class="description">My name is not Keith, but I am a Kitten. This is just basically dummy text. Do not be fooled by the dogs - Cats rule, dogs drool!</p>
						<button class="btn">Follow</button>
					</div>
					<div class="container">
						<div class="banner-image"></div>
						<img src="https://placekitten.com/300/300" alt="" class="profile-image"></img>
						<h1 class="name">Keith Kitten</h1>
						<p class="description">My name is not Keith, but I am a Kitten. This is just basically dummy text. Do not be fooled by the dogs - Cats rule, dogs drool!</p>
						<button class="btn">Follow</button>
					</div>
					<div class="container">
						<div class="banner-image"></div>
						<img src="https://placekitten.com/300/300" alt="" class="profile-image"></img>
						<h1 class="name">Keith Kitten</h1>
						<p class="description">My name is not Keith, but I am a Kitten. This is just basically dummy text. Do not be fooled by the dogs - Cats rule, dogs drool!</p>
						<button class="btn">Follow</button>
					</div>
					<div class="container">
						<div class="banner-image"></div>
						<img src="https://placekitten.com/300/300" alt="" class="profile-image"></img>
						<h1 class="name">Keith Kitten</h1>
						<p class="description">My name is not Keith, but I am a Kitten. This is just basically dummy text. Do not be fooled by the dogs - Cats rule, dogs drool!</p>
						<button class="btn">Follow</button>
					</div>
					<div class="container">
						<div class="banner-image"></div>
						<img src="https://placekitten.com/300/300" alt="" class="profile-image"></img>
						<h1 class="name">Keith Kitten</h1>
						<p class="description">My name is not Keith, but I am a Kitten. This is just basically dummy text. Do not be fooled by the dogs - Cats rule, dogs drool!</p>
						<button class="btn">Follow</button>
					</div>
				</div>
			</body>
			
		</div>
		
	);
};

const Resource = props => {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
};

export default Cards;
