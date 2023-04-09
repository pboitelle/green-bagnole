import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<picture>
				<source srcSet="../../assets/aston-martin-logo-png-transparent.webp" type="image/webp" />
				<img height="90" width="90" decoding="async" loading="lazy" src="../../assets/aston-martin-logo-png-transparent.webp" alt="an avif image" />
			</picture>
			
		</a>
		<nav>
			<Link activeClassName={style.active} href="/">
				Home
			</Link>
			<Link activeClassName={style.active} href="/car">
				Voiture
			</Link>
		</nav>
	</header>
);

export default Header;
