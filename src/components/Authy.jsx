import React from 'react';

import logo from '../assets/authyImgs/logo.png';
import download from '../assets/authyImgs/download.png';

import img1 from '../assets/authyImgs/img1.png';
import img2 from '../assets/authyImgs/img2.png';
import img3 from '../assets/authyImgs/img3.png';
import img4 from '../assets/authyImgs/img4.png';
import img5 from '../assets/authyImgs/img5.png';
import img6 from '../assets/authyImgs/img6.png';
import img7 from '../assets/authyImgs/img7.png';
import img8 from '../assets/authyImgs/img8.png';

import pass1 from '../assets/authyImgs/pass1.png';
import pass2 from '../assets/authyImgs/pass2.png';

import add1 from '../assets/authyImgs/add1.png';
import add2 from '../assets/authyImgs/add2.png';
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
import add13 from '../assets/authyImgs/add13.png';
import add14 from '../assets/authyImgs/add14.png';
import add15 from '../assets/authyImgs/add15.png';
import add16 from '../assets/authyImgs/add16.png';
import add17 from '../assets/authyImgs/add17.png';
import add18 from '../assets/authyImgs/add18.png';

const Authy = () => {
	return (
		<div class="main authy">
			<div class="container">
				<h1 class="main-title">Authy || أوثي</h1>
				<div class="content content-1">
					<div class="info">
						<p>
							الاسم: <span>أوثي</span>
							<br />
							المهمة: <span>
								إضافة طبقة حماية أخرى غير اسم المستخدم وكلمة المرور
							</span>{' '}
							وتسمى <span>التحقق بخطوتين</span> <br />
							أنظمة التشغيل التي يعمل عليها: <span>ويندوز، ماك أندرويد، آيفون "IOS"</span>
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
							يقوم برنامج Authy بتقديم خدمة التحقق بخطوتين (2FA) بحيث يكون إدخال اسم
							المستخدم وكلمة المرور باعتبارها الخطوة الأولى و رمز التحقق المرسل الى
							التطبيق على هاتفك الذكي "على تطبيق أوثي" هي الخطوة الثانية
						</p>
					</div>
				</div>
				<div class="content content-2 info">
					<h3>يمتاز برنامج أوثي بالتالي:</h3>
					<p>
						يمكن من خلال البرنامج وضع خطوة تحقق أخرى لمعظم البرامج الموجودة عبر الانترنت
						مثل : (حسابات التواصل الاجتماعي، حساب البريد الالكتروني، برامج حفظ البيانات
						وأي تطبيق أو منصة تدعم هذه الميزة)
					</p>
				</div>
			</div>

			<div class="container instructions">
				<div class="guid">
					<h3>يتكون هذا الدليل من قسمين رئيسيين :</h3>
					<ul>
						<li>
							<a href="#installing">تنصيب "Authy | أوثي" على جهاز الكمبيوتر</a>
						</li>
						<li>
							<a href="#creating">طريقة الاستخدام</a>
						</li>
					</ul>
				</div>
				<div class="installing" id="installing">
					<h3>1- تنصيب برنامج أوثي</h3>
					<ul class="main-list">
						<li>
							الحصول على التطبيق:
							<ul class="child-list">
								<li>
									لجميع الأجهزة نضغط{' '}
									<span>
										<a
											href="https://authy.com/download/"
											target="_blank"
											rel="noreferrer"
										>
											هنا
										</a>
									</span>
								</li>
								<li>
									تظهر الصفحة التالية، نقوم باختيار المناسب بحسب الجهاز الخاص بنا <br />
									<img src={download} alt="download" />
								</li>
							</ul>
						</li>
						<li>
							بعد تحميل التطبيق نقوم بفتحه، تظهر النافذة التالية:
							<div class="special">
								<ul class="child-list">
									<li>نقوم بإدخال رمز الدولة الخاص بنا</li>
									<li>نقوم بإدخال رقم الهاتف المحمول</li>
									<li>
										نضغط <span>"Submit"</span>
									</li>
								</ul>
								<div class="image">
									<img src={img1} alt="one" />
								</div>
							</div>
						</li>
						<li>
							عند الضغط على "Submit" تظهر النافذة التالية:
							<div class="special">
								<ul class="child-list">
									<li>نقوم بإدخال الايميل الشخصي</li>
									<li>
										نضغط <span>"Submit"</span>
									</li>
								</ul>
								<div class="image">
									<img src={img3} alt="three" />
								</div>
							</div>
						</li>
						<li>
							عند الضغط على "Submit" تظهر النافذة التالية: وهي لتأكيد الحساب، حيث يقوم
							التطبيق بارسال كود سري بأحد الطريق التي تختارها في الخطوة التالية، ثم تقوم
							بإدخال هذا الكود لتأكيد الحساب
							<div class="special">
								<ul class="child-list">
									<li>
										في حال كنت تمتلك حساب Authy مسبقا تقوم باختيار هذا الخيار ليتم التأكيد
										عن طريق الحساب الموجود على جهاز آخر
									</li>
									<li>لإرسال الكود عن طريق واتساب || Whatsapp</li>
									<li>
										لإرسال الكود عن طريق رسالة SMS على رقم الهاتف المحمول الذب سبق
										وأدخلناه
									</li>
									<li>
										لتلقي الكود عن طريق مكالمة صوتية عادية على الرقم الذي سبق وأدخلناه
									</li>
								</ul>
								<div class="image">
									<img src={img4} alt="four" />
								</div>
							</div>
						</li>
						<li>
							بعد اختيار الطريقة المناسبة، يقوم التطبيق بإرسال رسالة تحتوي على كود نقوم
							بإدخال في المكان المخصص لها كما في الصورة التالية{' '}
							<div class="special">
								<ul class="child-list">
									<li>نقوم بإدخال كود التأكيد</li>
									<li>
										في حال أردنا تغيير الطريقة التي نتلقى بها كود التأكيد، نضغط على هذا
										الخيار فيقوم بإعادتنا إلى الخطوة السابقة
									</li>
								</ul>
								<div class="image">
									<img src={img5} alt="five" />
								</div>
							</div>
						</li>
						<li>
							تظهر الصفحة التالية بعد تأكيد الحساب، وهي الواجهة الرئيسية للتطبيق
							<div class="special">
								<ul class="child-list">
									<li>لإضافة بيانات حساب جديد تريد استخدام التطبيق عليه</li>
									<li>
										"Tokens:" جميع العناصر المحفوظة داخل البرنامج (مثال: حساب الجيميل)
									</li>
									<li>"Requests:" طلبات الدخول من العناصر المحفوظة</li>
									<li>"Settings:" إعدادات الحساب</li>
								</ul>
								<div class="image">
									<img src={img6} alt="six" />
								</div>
							</div>
						</li>
						<li>
							{' '}
							لتعيين كلمة سر للتطبيق، نقوم بالضغط على <span>"Settings"</span> لتظهر
							النافذة التالية:
							<br />
							<div class="special">
								<ul class="shild-list">
									<li>
										"General:" إعدادات الحساب وكلمة المرور، <span>نضغط على General</span>
									</li>
									<li>"Accounts:" العناصر التي تم إضافتها للبرنامج</li>
									<li>
										"Devices:" الاجهزة المرتبطة بالبرنامج (حيث يمكن العمل عليه من الهاتف
										المحمول)
									</li>
								</ul>
								<div class="image">
									<img src={img7} alt="seven" />
								</div>
							</div>
						</li>
						<li>
							تظهر النافذة التالية:
							<div class="special">
								<ul class="child-list">
									<li>لتغيير رقم الهاتف المحمول</li>
									<li>لتغيير الايميل</li>
									<li>الكود الخاص بحسابنا على تطبيق Authy</li>
									<li>
										لتعيين كلمة سر للتطبيق، نضغط على <span>"Enable"</span> تظهر النافذة
										التالية <br />
									</li>
								</ul>
								<div class="image">
									<img src={img8} alt="eight" />
								</div>
							</div>
						</li>
						<li>
							تظهر نافذة إنشاء كلمة سر كالتالي:
							<div class="special">
								<ul class="child-list">
									<li>
										نقوم بإنشاء كلمة سر وحفظها، ثم إدخالها في المكان المخصص، ثم نضغط على{' '}
										<span>Enable</span>
									</li>
								</ul>
								<div class="image">
									<img src={pass1} alt="pass1" />
								</div>
							</div>
						</li>
						<li>
							نقوم بتأكيد كلمة السر
							<div class="special">
								<ul class="child-list">
									<li>
										نكتب كلمة السر مرة أخرى في الحقل المخصص للتأكيد ثم نضغط على{' '}
										<span>Confirm</span>
									</li>
								</ul>
								<div class="image">
									<img src={pass2} alt="pass2" />
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="creating" id="creating">
					<h3>2- لإضافة حساب على تطبيق أوثي وتفعيل التحقق بخطوتين:</h3>
					<div>
						<ul class="main-list">
							<li>
								<div class="special">
									<ul class="child-list">
										نقوم بالضغط على <span>إشارة الزائد "+"</span> لإضافة حساب
									</ul>
									<div class="image">
										<img src={add1} alt="add1" />
									</div>
								</div>
							</li>
							<li>
								<div class="special">
									<ul class="child-list">
										تظهر النافذة التالية، تحتوي على حقل لإدخال رمز خاص بالحساب الذي نريد
										ربطه بتطبيق أوثي
									</ul>
									<div class="image">
										<img src={add2} alt="add2" />
									</div>
								</div>
							</li>
							<li>
								للحصول على الرمز الخاص بحساب جوجل:
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
									<li>
										نبحث عن "التحقق بخطوتين" أو "Two-step authentication" ونضغط عليها
									</li>
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
										نختار إرسال رسالة نصية لإرسال كود أو رمز لتأكيد أن الرقم الذي سبق
										إدخاله متاح
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
									<li>نقوم بالضغط على "هل يتعذر مسح الرمز ضوئياَ؟"</li>
								</ul>
								<img src={add13} alt="add13" />
							</li>
							<li>
								{' '}
								تظهر النافذة التالية:
								<ul class="child-list">
									<li>
										نقوم بنسخ الكود الظاهر في الصورة، ثم لصقه في الحقل المخصص له في تطبيق
										أوثي كما في الخطوة التالية
									</li>
									<li>نضغط على "التالي" أو "Next"</li>
								</ul>
								<img src={add14} alt="add14" />
							</li>
							<li>
								{' '}
								نقوم بفتح نافذة تطبيق أوثي التي تركناها في الخطوة الأولى:
								<div class="special">
									<ul class="child-list">
										<li>ننسخ الكود الذي أخذناه من الخطوة السابقة في الحقل المخصص له</li>
									</ul>
									<div class="image">
										<img src={add15} alt="add15" />
									</div>
								</div>
							</li>
							<li>
								{' '}
								تظهر النافذة التالية:
								<div class="special">
									<ul class="child-list">
										<li>نقوم باختيار اسم الحساب الذي نريد أن يظهر به</li>
										<li>نختار الصورة الخاصة به من القائمة</li>
										<li>نضعط على "Save"</li>
									</ul>
									<div class="image">
										<img src={add16} alt="add16" />
									</div>
								</div>
							</li>
							<li>
								{' '}
								تظهر النافذة التالية:
								<div class="special">
									<ul class="child-list">
										يظهر لنا رمز مؤلف من 6 أرقام يتم توليده عشوائيا من جديد كل 30 ثانية:
										<li>نقوم بنسخ الرمز ولصقه في الخطوة التالية</li>
									</ul>
									<div class="image">
										<img src={add17} alt="add17" />
									</div>
								</div>
							</li>
							<li>
								{' '}
								نعود إلى المتصفح
								<ul class="child-list">
									<li>نقوم بلصق الكود في الحقل المخصص له ثم نضغط على "إثبات الصحة"</li>
								</ul>
								<img src={add18} alt="add18" />
							</li>
							<li>
								الآن تم إضافة خطوة تسجيل ثانية لحساب الـ Gmail، لذلك عند التسجيل من جديد
								سوف يطلب منك كلمة السر والرمز الموجود في تطبيق أوثي، أي خطوتين للتسجيل وهو
								معنى <span>"التحقق بخطوتين"</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Authy;
