import React from 'react';

import logo from '../assets/other.png';

import virus1 from '../assets/otherImgs/virus1.png';
import virus2 from '../assets/otherImgs/virus2.png';
// import virus3 from '../assets/otherImgs/virus3.png';

import pass1 from '../assets/otherImgs/pass1.png';

const Other = () => {
	return (
		<div class="main other">
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

				<div class="installing" id="whatsapp">
					<h3>1- WhatsApp || واتسآب</h3>
					<p>
						هو تطبيق للمحادثات المكتوبة، ويدعم خدمة المكالمات في بعض الدول، يعتبر آمناً
						نوعاً ما لأنه يدعم تشفير الرسائل داخل المحادثات، أي أنه عند إرسالك لشيء ما لأي
						جهة اتصال كانت، يتم تشفير المحادثة بالكامل حتى يتم إرسالها إلى جهة الاتصال
						المعنية فيتم فك التشفير عنها عند وصولها. بهذا الشكل لا يستطيع أحد من جهة تطبيق
						واتساب أو مشغليه الاطلاع على محتوى هذه الرسائل إلا بعد فك التشفير عنها وهو ما
						يعتبر أمراً معقداً جداً.
					</p>
					<ul className="child-list">
						لتحميل التطبيق على مختلف الأجهزة، ندخل على الرابط{' '}
						<span>
							<a
								href="https://www.whatsapp.com/download/"
								target="_blank"
								rel="noreferrer"
							>
								هنا
							</a>{' '}
						</span>
						ثم نختار نظام التشغيل الخاص بجهازنا الشخصي ليبدأ التحميل.
					</ul>
				</div>

				<div class="creating" id="signal">
					<h3>2- Signal || سيجنال</h3>
					<p>
						هو تطبيق للمحادثات المكتوبة ويدعم خدمة مكالمات الفيديو بدقة عالية، كما يحتوي
						على المميزات التالية:
					</p>
					<ul className="child-list">
						<li>يتعامل بشكل مثالي مع جودة الانترنت الضعيفة</li>
						<li>يوفر أيضا خدمة تشفير المحادثات بشكل مشابه لتطبيق الواتسآب</li>
						<li>
							يوفر أيضاً التشفير للنسخ الاحتياطية على عكس الواتسآب، أي أنه عند عمل نسخة
							احتياطية على تطبيق السيجنال يتم تشفيرها بحيث لا يستطيع الوصول إليها إلا
							الطرف صاحب النسخة.
						</li>
						<li>
							يوفر ميزة أمان الشاشة والتي تمنع حتى المستخدم من عمل سكرين شوت أو لقطة شاشة
							للمحادثة
						</li>
						<li className="child-list">
							لتحميل التطبيق على مختلف الأجهزة، ندخل على الرابط{' '}
							<span>
								<a
									href="https://signal.org/en/download/"
									target="_blank"
									rel="noreferrer"
								>
									هنا
								</a>{' '}
							</span>
							ثم نختار نظام التشغيل الخاص بجهازنا الشخصي ليبدأ التحميل.
						</li>
					</ul>
				</div>

				<div class="creating" id="virus">
					<h3>2- VirusTotal || فايروس توتال</h3>
					<p>
						يستخدم هذا الموقع أو التطبيق لفحص الملفات أو الروابط لمعرفة ما إذا كانت تحتوي
						على ملفات أو فيروسات ضارة بالأجهزة
					</p>
					<ul className="child-list">
						<li className="child-list">
							لفتح الموقع من{' '}
							<span>
								<a
									href="https://www.virustotal.com/gui/home/upload"
									target="_blank"
									rel="noreferrer"
								>
									هنا
								</a>{' '}
							</span>
							لتظهر الصفحة التالية: <br />
							<img src={virus1} alt="virus1" /> <br />
							<span>
								يمكنك تصفح الملفات على جهازك واختيار أحدها ليتم فحصها عن طريق خيار "Choose
								file"
							</span>
						</li>
						<li>
							عند الضغط على تبويب "URL" يظهر كالتالي: يمكنك نسخ أي رابط تريد فحصه للتأكد
							من صحته قبل استخدامه <br />
							<img src={virus2} alt="virus2" />
						</li>
						{/* <li>
							عند الضغط على تبويب "SEARCH" يظهر كالتالي: يمكنك البحث عن اي شيء تريده لتظهر
							النتائج بشكل آمن
							<br />
							<img src={virus3} alt="virus3" />
						</li> */}
					</ul>
				</div>

				<div class="creating" id="passowrd">
					<h3>2- Password Generator || إنشاء كلمات مرور</h3>
					<p>
						يعمل هذ الموقع على إنشاء كلمات مرور معقدة لاستخدامها في تأمين حساباتنا
						الشخصية،
					</p>
					<ul className="child-list">
						للوصول إلى الموقع نضغط على الرابط{' '}
						<span>
							<a
								href="https://www.nexcess.net/web-tools/secure-password-generator/"
								target="_blank"
								rel="noreferrer"
							>
								هنا
							</a>{' '}
						</span>
						لتظهر الصفحة التالية:
						<li>لأنشاء كلمة مرور معقدة مكونة من أحرف كبيرة وصغيرة وأرقام ورموز</li>
						<li>لإنشاء كلمة مرور مكونة من كلمات يسهل حفظها مع أرقام لتكون معقدة قليلا</li>
						<img src={pass1} alt="pass1" />
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Other;
