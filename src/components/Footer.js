import React from 'react';
import footerImg from '../assets/veraCryptImgs/image13.jpg';

const Footer = () => {
	return (
		<footer>
				<div className="footer">
					<div className="image">
						<a href="https://scm.bz/" target="_blank" rel="noreferrer">
							<img src={footerImg} alt="footer-img" />
						</a>
					</div>
					<div className="footer-content">
						<ul>
							<li>
								<a href="#home">الصفحة الرئيسية</a>
							</li>
							<li>
								<a href="#applications">التطبيقات</a>
							</li>
						</ul>
					</div>
				</div>
			<div className="copy-right">
				<p className="copy">Copyright SCM &copy; 2022</p>
			</div>
		</footer>
	);
};

export default Footer;
