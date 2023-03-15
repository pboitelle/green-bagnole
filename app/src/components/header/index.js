import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<picture>
				<source srcSet="../../assets/SELLCAR.avif" type="image/avif" />
				<source srcSet="image.webp" type="image/webp" />
				<img height="75" width="75" decoding="async" loading="lazy" src="../../assets/SELLCAR.avif" alt="an avif image" />
				</picture>
			<h1>Preact CLI</h1>
			
		</a>
		<nav>
			<Link activeClassName={style.active} href="/">
				Home
			</Link>
			<Link activeClassName={style.active} href="/profile">
				Me
			</Link>
			<Link activeClassName={style.active} href="/profile/john">
				John
			</Link>
		</nav>
	</header>
);

export default Header;
