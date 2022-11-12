import React from 'react';

import logo from '../assets/mailVelopeImgs/logo.svg';

import export1 from '../assets/mailVelopeImgs/export1.png';
import export2 from '../assets/mailVelopeImgs/export2.png';
import export3 from '../assets/mailVelopeImgs/export3.png';

import import2 from '../assets/mailVelopeImgs/import2.png';
import import3 from '../assets/mailVelopeImgs/import3.png';

import add1 from '../assets/mailVelopeImgs/add1.png';
import add2 from '../assets/mailVelopeImgs/add2.png';
import add3 from '../assets/mailVelopeImgs/add3.png';
import add4 from '../assets/mailVelopeImgs/add4.png';
import add5 from '../assets/mailVelopeImgs/add5.png';
import add6 from '../assets/mailVelopeImgs/add6.png';
import add7 from '../assets/mailVelopeImgs/add7.png';
import add8 from '../assets/mailVelopeImgs/add8.png';
import add9 from '../assets/mailVelopeImgs/add9.png';
import add22 from '../assets/mailVelopeImgs/add22.png';

import send1 from '../assets/mailVelopeImgs/send1.png';
import send2 from '../assets/mailVelopeImgs/send2.png';
import send3 from '../assets/mailVelopeImgs/send3.png';
import send4 from '../assets/mailVelopeImgs/send4.png';
import send5 from '../assets/mailVelopeImgs/send5.png';

const Mailvelope = () => {
	return (
		<div class="main mailvelope">
			<div class="container">
				<h1 class="main-title">Mailvelope || ميل فيلوب</h1>
				<div class="content content-1">
					<div class="info">
						<p>
							الاسم: <span>ميل فيلوب</span>
							<br />
							المهمة: <span>تشفير الايميلات والمرفقات</span> <br />
							يعمل على المتصفحات التالية:{' '}
							<span> فايرفوكس، جوجل كروم، ومايكروسوفت إيدج</span>
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
							بسبب أهمية المراسلات والايميلات التي نقوم بها بشكل يومي، وجب علينا حماية
							البيانات من الخطر. هنا جاء دور إضافة الميل فيلوب، وهي إضافة لمتصفح الانترنت
							مثل كروم وفايرفوكس تتيح لنا الإضافة تشفير الايميلات المرسلة من قبلنا بمفاتيح
							تشفير ومفاتيح فك تشفير نقوم بمشاركتها مع الجهة المستقبلة
						</p>
					</div>
				</div>
				<div class="content content-2 info">
					<h3>يمتاز الميل فيلوب بالتالي:</h3>
					<p>
						يمكن من خلاله إرسال ملفات مرفقة داخل الإيميل، يقوم بتشفيرها بشكل تلقائي ويتم
						فك التشفير عنها عن طريق رمز أو مفتاح خاص.
						<span class="special-span">
							لا يقدم الإيميل العادي هذه الخدمة حيث يرفض إرسال ملفات مشفرة مسبقاَ; بمعنى:
							لو قمنا بتشفير ملف عن طريق برنامج{' '}
							<a href="veracrypt.html" target="_blank">
								فيرا كريب
							</a>{' '}
							لا يقبل الإيميل أن يرسله إلا إذا أرسلناه بغير تشفير
						</span>
					</p>
				</div>
			</div>

			<div class="container instructions">
				<div class="guid">
					<h3>يتكون هذا الدليل من ثلاثة أقسام رئيسية :</h3>
					<ul>
						<li>
							<a href="#installing">إضافة الميل فيلوب إلى المتصفح </a>
						</li>
						<li>
							<a href="#creating">إعدادات الحساب: أضافة وتصدير الكود الخاص بنا</a>
						</li>
						<li>
							<a href="#sending">لإرسال إيميل مشفر عن طريق الميل فيلوب:</a>
						</li>
					</ul>
				</div>
				<div class="installing" id="installing">
					<h3>1- إضافة الميل فيلوب إلى المتصفح:</h3>
					<ul class="main-list">
						<li>
							الحصول على التطبيق:
							<ul class="child-list">
								<li>
									لجميع المتصفحات نضغط{' '}
									<span>
										<a href="https://mailvelope.com/en" target="_blank" rel="noreferrer">
											هنا
										</a>
									</span>
								</li>
								<li>
									تظهر الصفحة التالية، نقوم بالضغط على "Download Mailvelope" <br />
									<img src={add1} alt="add1" />
								</li>
							</ul>
						</li>
						<li>
							تظهر الصفحة التالية، نضغط على "إضافة إلى Chrome" <br />
							<img src={add22} alt="add22" />
						</li>
						<li>
							تظهر النافذة التالية، نضغط على "Add Extension" <br />
							<img src={add2} alt="add2" />
						</li>
						<li>
							{' '}
							نضغط على الإشارة في شريط المهام أعلى يمين المتصفح، كما الصورة: تظهر النافذة
							التالية، نقوم بتثيبيت الإضافة في شريط المهام عن طريق الضغط على صورة الدبوس.
							<img src={add3} alt="add3" />
						</li>
						<li>
							يظهر لوجو الميل فيلوب في شريط المهام بعد تثبيته، نضغط عليه لتظهر النافذة
							التالية: نصغط على "Let's start"
							<br />
							<img src={add4} alt="add4" />
						</li>
						<li>
							{' '}
							تظهر الصفحة التالية، نضغط على "Generate Key" لإنشاء كوود التشفير الخاص
							بالإيميل الحالي: <br />
							<img src={add5} alt="add5" />
							<li>
								نقوم بإدخال البيانات الشخصية كالتالي:
								<ul class="child-list">
									<li>الاسم كاملاَ</li>
									<li>البريد الالكتروني الذي نريد إرسال ايميلات مشفرة عن طريقه</li>
									<li>
										إنشاء كلمة مرور خاصة بكود التشفير، يجب تذكرها جيداَ لأنها غير قابلة
										للاسترجاع
									</li>
									<li>إعادة كتابة كلمة المرور للتأكيد</li>
								</ul>
								<img src={add6} alt="add6" />
							</li>
							<li>
								{' '}
								تظهر النافذة التالية وتعني أنه يتم إنشاء كود التشفير الخاص بالإيميل:
								<img src={add7} alt="seven" />
							</li>
							بعد أن تنتهي النافذة في الخطوة السابقة، تظهر الصفحة التالية وتحتوي على كود
							التشفير، ومعلومات الحساب التي سبق إدخالها <br />
							<img src={add8} alt="eight" />
						</li>
					</ul>
				</div>

				<div class="creating" id="creating">
					<h3>2- إعدادات الحساب: أضافة وتصدير الكود الخاص بنا:</h3>
					<ul class="main-list">
						<li>
							{' '}
							من نفس الصفحة السابقة نقوم بالضفط على خيار "Options" من شريط المهام، تظهر
							الصفحة التالية:
							<ul class="child-list">
								<li>نضغط على "Key Directories"</li>
								<li>
									نقوم بإلغاء الخيارين الأول والثاني في القائمة الأولى كما هو موضح في
									الصورة
								</li>
							</ul>
							<img src={add9} alt="nine" />
						</li>
						<li>
							من شريط المهام، نضغط على "Key Management": ثم نضغط على السهم بجانب معلومات
							الحساب كما هو موضح في الصورة
							<br />
							<img src={export1} alt="export1" />
						</li>
						<li>
							تظهر الصفحة التالية: نضغط على "Export"{' '}
							<span>
								لنقوم بتصدير أو إرسال كود التشفير الخاص بنا لجهات الاتصال التي نريد
								استقبال أو إرسال إيميلات مشفرة لهم
							</span>{' '}
							<br />
							<img src={export2} alt="export2" />
						</li>
						<li>
							نقوم بنسخ الكود الظاهر في النافذة التالية، ونرسله إلى جهات الاتصال <br />
							<img src={export3} alt="export3" />
						</li>
						<li>
							لتسجيل أو إضافة كود تشفير خاص بأحد جهات الاتصال نقوم بفتح قائمة "Key
							Management" من شريط المهام: ثم نضغط على "Import"
							<br />
							<img src={export1} alt="import1" />
						</li>
						<li>
							تفتح الصفحة التالية، وتحتوي على قسمين كالتالي:
							<ul class="child-list">
								<li>
									القسم الأول: لإضافة الملف الذي يحتوي على كود التشفير الخاص بأحد جهات
									الاتصال
								</li>
								<li>القسم الثاني: لنسخ كود التشفير في المكان المخصص</li>
								<li>
									نختار الطريقة المناسبة ثم نضغط على "Import Keys" لإتمام إضافة الكود
								</li>
							</ul>
							<img src={import2} alt="import2" />
						</li>
						<li>
							{' '}
							تظهر النافذة التالية وتحتوي على معلومات جهة الاتصال التي تم إضافة كود
							التشفير الخاص بها. نضغط على "Confirm" <br />
							<img src={import3} alt="import3" />
						</li>
					</ul>
				</div>

				<div class="sending" id="sending">
					<h3>3- لإرسال إيميل مشفر عن طريق الميل فيلوب:</h3>
					<ul class="main-list">
						<li>
							ندخل على الإيميل الخاص بنا كالتالي: <br />
							<ul class="child-list">
								<li>نفتح نافذة الـ"Mail"</li>
								<li>نضغط على اللوجو</li>
							</ul>
							<img src={send1} alt="send1" />
						</li>
						<li>
							يقوم المتصفح بتحويلنا إلى الصفحة التالية، نقوم بتسجيل الدخول إلى الحساب الذي
							سبق وأدخلناه إلى الميل فيلب <br />
							<img src={send2} alt="send2" />
						</li>
						<li>
							نختار الإيميل من القائمة التالية ونسجل الدخول عن طريقه: <br />
							<img src={send3} alt="send3" />
						</li>
						<li>
							نضغط على "Allow" للسماح للميل فيلوب بالوصول إلى الإيميل:
							<img src={send4} alt="send4" />
						</li>
						<li>
							نعود إلى صفحة الإيميل الشخصي، أو إلى الخطوة الأولى: عند الضغط على اللوجو
							الخاص بالميل فيلوب تظهر النافذة التالية:
							<ul class="child-list">
								وهي نافذة إرسال الإيميلات عن طريق الميل فيلوب:
								<li>
									نكتب إيميل جهة الاتصال التي نريد التواصل معها.{' '}
									<span>
										يجب أن يكون هذا الإيميل ضمن جهات الاتصال التي تم إضافتها مسبقاً
									</span>
								</li>
								<li>"Subject": نكتب موضوع الإيميل</li>
								<li>"Message": نكتب محتوى الرسالة أو الإيميل التي نريد إرسالها مشفرة</li>
								<li>"Attachements": لإرفاق ملفات يتم تشفيرها خلال إرسال الإيميل</li>
							</ul>
							<img src={send5} alt="send5" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Mailvelope;
