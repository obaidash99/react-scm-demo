import React from 'react';

import logo from '../assets/esetImgs/logo.png';
import one from '../assets/esetImgs/eset1.png';
import two from '../assets/esetImgs/eset2.png';
import three from '../assets/esetImgs/eset3.png';
import four from '../assets/esetImgs/eset4.png';
import five from '../assets/esetImgs/eset5.png';
import six from '../assets/esetImgs/eset6.png';
import seven from '../assets/esetImgs/eset7.png';
import eight from '../assets/esetImgs/eset8.png';

const Eset = () => {
	return (
		<div class="main eset">
			<div class="container">
				<h1 class="main-title">ESET || إي إس إي تي</h1>
				<div class="content content-1">
					<div class="info">
						<p>
							الاسم: <span>إي إس إي تي</span>
							<br />
							المهمة:{' '}
							<span>
								أنتي فايروس أو مضاد فايروسات لحماية البيانات من البرمجيات الخبيثة
							</span>{' '}
							<br />
							أنظمة التشغيل المتاح عليها: <span>ويندوز وماك</span> <br />
							الثمن:{' '}
							<span>
								مدفوع، يتم توفيره مجانا للعاملين في المركز السوري للإعلام وحرية التعبير
							</span>
						</p>
					</div>
					<div class="image">
						<img src={logo} alt="logo" />
					</div>
					<div class="how">
						<h3>كيف يعمل؟</h3>
						<p>
							برنامج الـESET هو برنامج أنتي فايروس لحماية البيانات من البرمجيات الخبيثة.
							يقوم أيضاً بتشفير البيانات من أجل حمايتها من الاختراق ويتيح خيارات عدة
							لحماية بيانات المستخدم والبطاقات البنكيه والهوية.
						</p>
					</div>
				</div>
			</div>
			<div class="container instructions">
				<div class="guid">
					<h3>يتكون هذا الدليل من ثلاثة أقسام رئيسية :</h3>
					<ul>
						<li>
							<a href="#installing">تنصيب برنامج إي إس إي تي</a>
						</li>
						<li>
							<a href="#using">طريقة الاستخدام</a>
						</li>
					</ul>
				</div>
				<div class="installing" id="installing">
					<h3>1- تنصيب برنامج إي إس إي تي</h3>
					<h4>
						<span>
							يقوم المركز السوري للإعلام وحرية التعبير بتوفير نسخ مجانية من البرنامج عن
							طريق إرسال رابط يحتوي على البرنامج، نقوم بتنزيله على جهازنا الخاص
						</span>
					</h4>
					<ul class="mail-list">
						<li>
							بعد إتمام تحميل البرنامج على جهازنا الخاص، نقوم بفتحه فتظهر النافذة التالية:
							<ul class="child-list">نضغط على "Continue" لبدء عملية التنزيل</ul>
							<img src={one} alt="eset1" />
						</li>
						<li>
							تبدأ عملية التنصيب كما في النافذة التالية: <br />
							<img src={two} alt="eset2" />
						</li>
						<li>
							بعد الانتهاء عملية تنصيب البرنامج تظهر النافذة التالية: وتعني أنه تم تنصيب
							البرنامج بنجاح <br />
							<img src={three} alt="eset3" />
						</li>
						<li>
							قد تظهر النافذة التالية وهي طلب لإعادة تشغيل الجهاز الخاص بنا، من الأفضل أن
							نقوم بهذه الخطوة <br />
							<img src={four} alt="eset4" />
						</li>
					</ul>
				</div>
				<div class="using" id="using">
					<h3>2- طريقة الاستخدام</h3>
					<ul class="main-list">
						<li>
							{' '}
							بعد إعادة تشغيل الجهاز الخاص بنا، نقوم بالبحث عن "eset" في مكان البحث بجانب
							قائمة إبدأ في شريط المهام <br />
							<ul class="child-lsit">نقوم بفتح برنامج "ESET Endpoint Security"</ul>
							<img src={five} alt="eset5" />
						</li>
						<li>
							عند فتح البرنامج تظهر النافذة التالية: وفيها معلومات عن التحديثات الخاصة
							بالبرنامج وتاريخ انتهاء رخصته <br />
							<img src={six} alt="eset6" />
						</li>
						<li>
							نفتح قائمة "Computer Scan" لتظهر النافذة التالية:
							<ul class="child-list">
								<li>"Scan your computer": لفححص جميع محتويات جهاز الكمبيوتر</li>
								<li>"Custom scan": لفحص أجزاء معينة في الجهاز</li>
								<li>
									"Removable media scan": إذا أردنا أن نقوم بفحص هارد أو أي جهاز خارجي،
									نقوم بتوصيله بالكمبيوتر ليتم تفعيل هذا الخيار ونقوم بعملية الفحص
								</li>
								<li>"Repeat last scan": لإعادة آخر عملية فحص تمت على هذا الجهاز</li>
							</ul>
							<img src={seven} alt="eset7" />
						</li>
						<li>
							عند اختيار "Custom scan" في الخطوة السابقة، تظهر النافذة التالية:
							<ul class="child-list">
								<li>نقوم باختيار الأجزاء أو الأقراص التي نريد فحصها</li>
								<li>نضغط على "Scan" لبدء عملية الفحص</li>
								<li>
									إذا كان الحساب الخاص بنا على جهاز الكمبيوتر هو حساب الأدمن فيمكننا أن
									نضغط على "Scan as Adminstrator"
								</li>
							</ul>
							<img src={eight} alt="eset8" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Eset;
