import React from 'react';
import footerImg from '../assets/veraCryptImgs/image13.jpg';

const Footer = () => {
	return (
		<footer>
			<div class="container">
				<div class="footer">
					<div class="image">
						<a href="https://scm.bz/" target="_blank" rel="noreferrer">
							<img src={footerImg} alt="footer-img" />
						</a>
					</div>
					<div class="footer-content">
						<ul>
							<li>
								<a href="index.html#home">الصفحة الرئيسية</a>
							</li>
							<li>
								<a href="index.html#applications">التطبيقات</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="copy-right">
				<p class="copy">Copyright SCM &copy; 2022</p>
			</div>
		</footer>
	);
};

export default Footer;
