import { h } from 'preact';

const Footer = () => (
	<footer class="footer">
		<div class="footer_container">
            <picture>
				<source srcSet="../../assets/aston-martin-logo-png-transparent.webp" type="image/webp" class="footer_logo"/>
				<img height="90" width="90" decoding="async" loading="lazy" src="../../assets/aston-martin-logo-png-transparent.webp" alt="an avif image" />
			</picture>
			<nav>
				<ul>
					<li><a href="#">Link 1</a></li>
					<li><a href="#">Link 2</a></li>
					<li><a href="#">Link 3</a></li>
					<li><a href="#">Link 4</a></li>
				</ul>
			</nav>
		</div>
	</footer>
);

export default Footer;
