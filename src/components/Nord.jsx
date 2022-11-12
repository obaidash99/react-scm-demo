import React from 'react';

import logo from '../assets/nordvpn.png';

import one from '../assets/nordImgs/img1.png';
import two from '../assets/nordImgs/img2.png';
import three from '../assets/nordImgs/img3.png';
import four from '../assets/nordImgs/img4.png';
import five from '../assets/nordImgs/img5.png';
import six from '../assets/nordImgs/img6.png';
import seven from '../assets/nordImgs/img7.png';
import eight from '../assets/nordImgs/img8.png';
import nine from '../assets/nordImgs/img9.png';

import mob1 from '../assets/nordImgs/mob1.jpg';
import mob2 from '../assets/nordImgs/mob2.jpg';
import mob3 from '../assets/nordImgs/mob3.jpg';
import mob4 from '../assets/nordImgs/mob4.jpg';
import mob5 from '../assets/nordImgs/mob5.jpg';
import mob6 from '../assets/nordImgs/mob6.jpg';

const Nord = () => {
	return (
		<div class="main workspace">
			<div class="container">
				<h1 class="main-title">NordVPN || نورد في بي إن</h1>
				<div class="content content-1">
					<div class="info">
						<p>
							الاسم: <span>نورد في بي إن</span>
							<br />
							المهمة: إنشاء <span>اتصال شبكي محمي</span> عند استخدام الشبكات العامة
							<br />
							أنظمة التشغيل التي يعمل عليها: <span>ويندوز و</span> <span>ماك</span>
							<br />
							الثمن: <span>مجاني</span>
						</p>
					</div>
					<div class="image">
						<img src={logo} alt="logo" />
					</div>
					<div class="how">
						<h3>كيف يعمل؟</h3>
						<p>
							يقوم البرنامج بإنشاء اتصال شبكي محمي عند استخدام الشبكات العامة و تشفير
							البيانات والمعلومات الخاصة بك على شبكة الانترنت و يقوم بإخفاء هويتك
							الإلكترونية
						</p>
					</div>
				</div>
			</div>

			<div class="container instructions">
				<div class="guid">
					<h3>يتكون هذا الدليل من ثلاثة أقسام رئيسية :</h3>
					<ul>
						<li>
							<a href="#installing">إضافة نورد إلى المتصفح</a>
						</li>
						<li>
							<a href="#creating">استخدام نورد على أجهزة الموبايل</a>
						</li>
					</ul>
				</div>
				<div class="installing" id="installing">
					<h3>1- إضافة نورد إلى المتصفح</h3>
					<ul class="main-list">
						<li>
							إضافة نورد إلى المتصفحات التالية:
							<ul class="child-list">
								<li>
									متصفح جوجل كروم من{' '}
									<span>
										<a
											href="https://chrome.google.com/webstore/detail/nordvpn-vpn-proxy-for-pri/fjoaledfpmneenckfbpdfhkmimnjocfa"
											target="_blank"
											rel="noreferrer"
										>
											هنا
										</a>
									</span>
								</li>
								<li>
									متصفح فاير فوكس من{' '}
									<span>
										<a
											href="https://addons.mozilla.org/en-US/firefox/addon/nordvpn-proxy-extension/"
											target="_blank"
											rel="noreferrer"
										>
											هنا
										</a>
									</span>
								</li>
							</ul>
						</li>
						<span>
							سوف نستخدم متصفح جوجل كروم في هذا الدليل، حيث يعتبر المتصفح الأكثر استخداماَ
							في الوقت الحالي.
						</span>
						<li>
							عند الضغط على الرابط السابق، تفتح الصفحة التالية، نقوم بالضغط على{' '}
							<span>"إضافة إلى Chrome"</span>
							<br />
							<img src={one} alt="one" />
						</li>
						<li>
							تظهر النافذة التالية: <br />
							نضغط على "Add extension" لإضافة نورد إلى المتصفح
							<img src={two} alt="two" /> <br />
						</li>
						<li>
							تظهر النافذة التالية وتعني أنه <span>تم إضافة</span> نورد إلى المتصفح بنجاح{' '}
							<br />
							<img src={three} alt="three" />
						</li>
						<li>
							نضغط مكان العلامة كما في الصورة لإضافة نورد إلى شريط المهام الخاص بالمتصفح
							<img src={four} alt="four" />
						</li>
						<li>
							تظهر علامة نورد أو اللوجو الخاص به على شريط المهام بلون باهت، ويعني أنه غير
							مفعل، نقوم بالضغط على اللوجو لتظهر النافذذة التالية: نقوم بالضغط على{' '}
							<span>"Log in"</span>
							<br />
							<img src={five} alt="five" />
						</li>
						<li>
							تظهر الصفحة التالية: نقوم بإدخال الإيميل الخاص بحساب نورد، ثم نضغط على
							"Continue". <br />{' '}
							<span>نحصل على الإيميل عن طريق المركز السوري للإعلام وحرية التعبير</span>{' '}
							<br />
							<img src={six} alt="six" />
						</li>
						<li>
							تظهر الصفحة التالية، نقوم بإدخال كلمة السر التي حصلنا عليها ثم نضغط على "Log
							in"
							<br />
							<img src={seven} alt="seven" />
						</li>
						<li>
							بعد التسجيل بنجاح، نضغط على اللوجو الخاص بنورد لتظهر النافة التالية: <br />
							<img src={eight} alt="eight" />
						</li>
						<li>
							نضغط على إحدى البلدان الظاهرة في القائمة، أو نقوم بالبحث عن بلد معين
							لاستخدام السيرفر أو الخادم منها،
							<span>يفضل استخدام بلدان أوروبا الشمالية أو الغربية</span>
						</li>
						<li>
							بعد اختيار البلد واتمام الاتصال تظهر كلمة "Connected" باللون الأخضر وتعني أن
							الاتصال آمن وقيد التفعيل
						</li>
					</ul>
				</div>
				<div class="creating" id="creating">
					<h3>2- استخدام نورد على أجهزة الموبايل</h3>
					<ul class="main-list">
						<li>
							لتحميل نورد على أجهزة الموبايل:
							<ul class="child-list">
								<li>
									على نظام أندرويد{' '}
									<span>
										<a
											href="https://play.google.com/store/apps/details?id=com.nordvpn.android&hl=ar&gl=US"
											target="_blank"
											rel="noreferrer"
										>
											هنا
										</a>
									</span>
								</li>
								<li>
									على نظام IOS لأجهزة آيفون{' '}
									<span>
										<a
											href="https://apps.apple.com/us/app/nordvpn-vpn-fast-secure/id905953485"
											target="_blank"
											rel="noreferrer"
										>
											هنا
										</a>
									</span>
								</li>
							</ul>
						</li>
						<li>
							نقوم بتحميل التطبيق، نفتحه فتظهر الصفحة التالية: <br />
							<div class="special">
								<ul class="child-list">نقوم بالضغط على "LOG IN" لتسجيل الدخول</ul>
								<div class="image">
									<img src={mob1} alt="mob1" />
								</div>
							</div>
						</li>
						<li>
							تظهر الصفحة التالية:
							<div class="special">
								<ul class="child-list">
									<li>نقوم بإدخال الايميل ثم نضغط على "Continue"</li>
									<li>تظهر الصفحة التالية، نقوم بإدخال كلمة السر قم نضغط على "Log in"</li>
								</ul>
								<div class="image">
									<img src={mob2} alt="mob2" />
									<img src={mob3} alt="mob3" />
								</div>
							</div>
						</li>
						<li>
							عند إتمام تسجيل الدخول
							<div class="special">
								<ul class="child-list">
									يقوم التطبيق بإعادتنا إلى الواجهة الرئيسية للبرنامج على أجهزة الموبايل،
									وهي كالتالي:
								</ul>
								<div class="image">
									<img src={mob4} alt="mob4" />
								</div>
							</div>
						</li>
						<li>
							نسحب الشاشة السابقة لأعلى لتظهر خيارات البلدان
							<div class="special">
								<ul class="child-list">
									<li>نقوم باختيار بلد معين لاستخدام السيرفرات عن طريقه</li>
									<span>يفضل اختيار إحدى بلدان أوروبا الشمالة أو الغربية</span>
								</ul>
								<div class="image">
									<img src={mob5} alt="mob5" />
								</div>
							</div>
						</li>
						<li>
							تظهر كلمة "Connecting"
							<div class="special">
								<ul class="child-list">
									وتعني أن التطبيق يقوم بالاتصال،{' '}
									<span>
										عند اتمام الاتصال تظهر كلمة "Protected" أو "Connected" باللون الأخضر
										وتعني أن الاتصال آمن وقيد التفعيل
									</span>
								</ul>
								<div class="image">
									<img src={mob6} alt="mob6" />
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nord;
