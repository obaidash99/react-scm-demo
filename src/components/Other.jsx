import React from 'react';

import logo from '../assets/other.png';

const Other = () => {
	return (
		<div class="main authy">
			<div class="container">
				<h1 class="main-title">Other Applications || تطبيقات أخرى</h1>
				<div class="content content-1">
					<div class="info">
						<p>
							<span>
								يوجد بعد التطبيقات الأخرى التي ينصح بها المركز السوري للإعلام وحرية
								التعبير والتي تعتبر آمنة، ويوصى باستخدامها.
							</span>
						</p>
					</div>
					<div class="image">
						<img src={logo} alt="logo" />
					</div>
					<div class="how">
						<h3>ما هي هذه التطبيقات؟</h3>
						<div class="a-links">
							<ul class="child-list apps">
								<li>
									<a href="#whatsapp">WhatsApp</a>
								</li>
								<li>
									<a href="#signal">Signal</a>
								</li>
								<li>
									<a href="#virus">VirusTotal</a>
								</li>
								<li>
									<a href="#passowrd">Password Generator</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="container instructions">
				<div class="guid">
					<h3>يتكون هذا الدليل من شروحات بسيطة للتطبيقات التالية:</h3>
					<ul>
						<li>
							<a href="#whatsapp">WhatsApp || واتسآب</a>
						</li>
						<li>
							<a href="#signal">Signal || سيجنال</a>
						</li>
						<li>
							<a href="#virus">VirusTotal || فايروس توتال</a>
						</li>
						<li>
							<a href="#passowrd">Password Generator || إنشاء كلمات مرور</a>
						</li>
					</ul>
				</div>

				<div class="installing" id="installing">
					<h3>1- WhatsApp || واتسآب</h3>
				</div>

				<div class="creating" id="creating">
					<h3>2- لإضافة حساب على تطبيق أوثي وتفعيل التحقق بخطوتين:</h3>
				</div>
			</div>
		</div>
	);
};

export default Other;
