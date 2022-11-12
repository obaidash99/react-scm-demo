import React from 'react';

import logo from '../assets/microsoft-auth.png';

import mob1 from '../assets/microsoftImgs/mob1.jpg';
import mob2 from '../assets/microsoftImgs/mob2.jpg';
import mob3 from '../assets/microsoftImgs/mob3.jpg';
import mob4 from '../assets/microsoftImgs/mob4.jpg';

import add3 from '../assets/authyImgs/add3.png';
import add4 from '../assets/authyImgs/add4.png';
import add5 from '../assets/authyImgs/add5.png';
import add6 from '../assets/authyImgs/add6.png';
import add7 from '../assets/authyImgs/add7.png';
import add8 from '../assets/authyImgs/add8.png';
import add9 from '../assets/authyImgs/add9.png';
import add10 from '../assets/authyImgs/add10.png';
import add11 from '../assets/authyImgs/add11.png';
import add12 from '../assets/authyImgs/add12.png';
import add13 from '../assets/microsoftImgs/add13.png';
import add18 from '../assets/authyImgs/add18.png';

const MicrosoftAuth = () => {
	return (
		<div class="main bitwarden">
			<div class="container">
				<h1 class="main-title">Microsoft Authenticator || مايكروسوفت أوثنتيكيتور</h1>
				<div class="content content-1">
					<div class="info">
						<p>
							الاسم: <span>مايكروسوفت أوثنتيكيتور</span>
							<br />
							المهمة: <span>
								إضافة طبقة حماية أخرى غير اسم المستخدم وكلمة المرور
							</span>{' '}
							وتسمى <span>التحقق بخطوتين</span> <br />
							أنظمة التشغيل التي يعمل عليها: <span> أندرويد، آيفون "IOS"</span>
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
							يقوم برنامج مايكروسوفت أوثنتيكيتور بتقديم خدمة التحقق بخطوتين (2FA) بحيث
							يكون إدخال اسم المستخدم وكلمة المرور باعتبارها الخطوة الأولى و رمز التحقق
							المرسل الى التطبيق على هاتفك الذكي "على تطبيق مايكروسوفت أوثنتيكيتور" هي
							الخطوة الثانية
						</p>
					</div>
				</div>
				<div class="content content-2 info">
					<h3>يمتاز برنامج مايكروسوفت أوثنتيكيتور بالتالي:</h3>
					<p>
						يمكن من خلال البرنامج وضع خطوة تحقق أخرى لمعظم البرامج الموجودة عبر الانترنت
						مثل : (حسابات التواصل الاجتماعي، حساب البريد الالكتروني، برامج حفظ البيانات
						وأي تطبيق أو منصة تدعم هذه الميزة)
					</p>
				</div>
			</div>

			<div class="container instructions">
				<div class="guid">
					<h3>يحتوي هذا الدليل على شرح لطريقة استخدام التطبيق وربطه بحساب جوجل:</h3>
				</div>
				<div class="installing" id="installing">
					<h3>1- ضبط حساب جوجل</h3>
					<ul class="main-list">
						<li>
							<ul class="child-list">
								<li>
									لتحميل التطبيق على أجهزة أندرويد من{' '}
									<span>
										<a
											href="https://play.google.com/store/apps/details?id=com.azure.authenticator&hl=en_US&gl=US"
											target="_blank"
											rel="noreferrer"
										>
											هنا
										</a>
									</span>
								</li>
								<li>
									لتحميل التطبيق على أجهزة آيفون من{' '}
									<span>
										<a
											href="https://apps.apple.com/us/app/microsoft-authenticator/id983156458"
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
							بعد تحميل التطبيق نقوم بفتحه
							<div class="special">
								<ul class="child-list">ظهر الصفحة التالية، نقوم بالضغط على "Accept"</ul>
								<div class="image">
									<img src={mob1} alt="mob1" />
								</div>
							</div>
						</li>
						<li>
							<div class="special">
								<ul class="child-list">
									تظهر الصفحة التالية وهي الصفحة الرئيسية لتطبيق مايكروسوفت أوثنتيكيتور
									<li>
										نقوم بالضغط على
										<span>"Scan a QR code"</span>
									</li>
								</ul>
								<div class="image">
									<img src={mob2} alt="mob2" />
								</div>
							</div>
						</li>
						<li>
							تظهر الصفحة التالية
							<div class="special">
								<ul class="child-list">
									<li>
										نقوم بإعطاء إمكانية الوصول للتطبيق ليستطيع استخدام الكاميرا، نضغط على
										OK{' '}
									</li>
									<li>
										في حالة كنا نستخدم موبايل بنظام أندرويد تظهر لنا نافذة مختلفة، نضغط
										على "Allow while using the app" أو "السماح عند استخدام التطبيق"
									</li>
								</ul>
								<div class="image">
									<img src={mob3} alt="mob3" />
								</div>
							</div>
						</li>
						<li>
							عند السماح للتطبيق باستخدام الكاميرا، تفتح الكاميرا لقراءة أو مسح رمز QR
						</li>
						<li>
							للحصول على الرمز "QR" الخاص بحساب جوجل:
							<ul class="child-list">
								<li> نذهب إلى المتصفح، نضغط على الصورة أعلى يمين أو يسار المتصفح</li>
								<li>نضغط على إدارة حسابك أو "Manage your google account"</li>
								<img src={add3} alt="add3" />
							</ul>
						</li>
						<li>
							{' '}
							تظهر الصفحة التالية:
							<ul class="child-list">
								<li>في القائمة الجانبية، نضغط على الأمان أو "Security"</li>
								<li>نبحث عن "التحقق بخطوتين" أو "Two-step authentication" ونضغط عليها</li>
							</ul>
							<img src={add4} alt="add4" />
						</li>
						<li>
							{' '}
							تظهر الصفحة التالية:
							<ul class="child-list">
								<li>نضغط على "البدء" أو "Get started"</li>
							</ul>
							<img src={add5} alt="add5" />
						</li>
						<li>
							{' '}
							تظهر الصفحة التالية:
							<ul class="child-list">
								<li>
									نقوم بإدخال كلمة السر الخاصة بحسابنا على جوجل ثم نضغط على "التالي" أو
									"Next"
								</li>
							</ul>
							<img src={add6} alt="add6" />
						</li>
						<li>
							{' '}
							تظهر الصفحة التالية:
							<ul class="child-list">
								<li>
									نقوم باختيار الدولة وإدخال رقم الهاتف المحمول الذي نريد ربطه بالحساب
								</li>
								<li>
									نختار إرسال رسالة نصية لإرسال كود أو رمز لتأكيد أن الرقم الذي سبق إدخاله
									متاح
								</li>
								<li>نضغط "إرسال" أو "Send"</li>
							</ul>
							<img src={add7} alt="add7" />
						</li>
						<li>
							{' '}
							تظهر الصفحة التالية:
							<ul class="child-list">
								<li>
									نقوم بإدخال الرمز الذي تم إرساله إلى الرقم في الخطوة السابقة، ثم نضغط
									على "التالي" أو "Next"
								</li>
							</ul>
							<img src={add8} alt="add8" />
						</li>
						<li>
							{' '}
							تظهر الصفحة التالية:
							<ul class="child-list">
								<li>نضغط على "تشغيل" لتفعيل ميزة التحقق بخطوتين عن طريق رقم الهاتف</li>
							</ul>
							<img src={add9} alt="add9" />
						</li>
						<li>
							{' '}
							تظهر الصفحة التالية وتعني أنه تم التفعيل: <br />
							<img src={add10} alt="add10" />
						</li>
						<li>
							{' '}
							في نفس الصفحة السابقة ننزل لأسفل قليلا لنجد "تطبيق Authenticator" نضغط على
							السهم بجانبها <br />
							<img src={add11} alt="add11" />
						</li>
						<li>
							{' '}
							تظهر الصفحة التالية:
							<ul class="child-list">
								<li>نضغط على "إعداد تطبيق المصادقة"</li>
							</ul>
							<img src={add12} alt="add12" />
						</li>
						<li>
							{' '}
							تظهر النافذة التالية:
							<ul class="child-list">
								<li>
									نقوم بتصوير الكود الظاهر في الصفحة عن طريق تطبيق مايكروسوفت أوثنتيكيتور
								</li>
							</ul>
							<img src={add13} alt="add13" />
						</li>
						<li>
							بعد أن يتم تصوير الكود تظهر الصفحة التالية
							<div class="special">
								<ul class="child-list">
									<li>
										وتحتوي على كود، مما يعني أنه تم إضافة الحساب الخاص بنا على تطبيق
										مايكروسوفت أوثنتيكيتور
									</li>
									<li>نقوم بنسخ الكود الظاهر في الشاشة للصقه في الخطوة التالية</li>
								</ul>
								<div class="image">
									<img src={mob4} alt="mob4" />
								</div>
							</div>
						</li>
						<li>
							{' '}
							نعود إلى المتصفح
							<ul class="child-list">
								<li>نقوم بلصق الكود في الحقل المخصص له ثم نضغط على "إثبات الصحة"</li>
							</ul>
							<img src="./assets/authyImgs/add18.png" alt="add18" />
						</li>
						<li>
							الآن تم إضافة خطوة تسجيل ثانية لحساب الـ Gmail، لذلك عند التسجيل من جديد سوف
							يطلب منك كلمة السر والرمز الموجود في تطبيق أوثي، أي خطوتين للتسجيل وهو معنى{' '}
							<span>"التحقق بخطوتين"</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MicrosoftAuth;
