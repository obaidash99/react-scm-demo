import React from 'react';

import logo from '../assets/zoomImgs/logo.png';

import one from '../assets/zoomImgs/img1.png';
import two from '../assets/zoomImgs/img2.png';
import three from '../assets/zoomImgs/img3.png';
import four from '../assets/zoomImgs/img4.png';
import five from '../assets/zoomImgs/img5.png';
import six from '../assets/zoomImgs/img6.png';
import seven from '../assets/zoomImgs/img7.png';
import eight from '../assets/zoomImgs/img8.png';
import nine from '../assets/zoomImgs/img9.png';
import ten from '../assets/zoomImgs/img10.png';
import eleven from '../assets/zoomImgs/img11.png';
import twelve from '../assets/zoomImgs/img12.png';
import thirteen from '../assets/zoomImgs/img13.png';

import mobile1 from '../assets/zoomImgs/mobile1.jpg';
import mobile2 from '../assets/zoomImgs/mobile2.jpg';
import mobile3 from '../assets/zoomImgs/mobile3.jpg';
import mobile4 from '../assets/zoomImgs/mobile4.jpg';
import mobile5 from '../assets/zoomImgs/mobile5.jpg';
import mobile6 from '../assets/zoomImgs/mobile6.jpg';
import mobile7 from '../assets/zoomImgs/mobile7.jpg';
import mobile8 from '../assets/zoomImgs/mobile8.jpg';
import mobile9 from '../assets/zoomImgs/mobile9.jpg';
import mobile10 from '../assets/zoomImgs/mobile10.jpg';
import mobile11 from '../assets/zoomImgs/mobile11.jpg';

const Zoom = () => {
	return (
		<div class="main zoom">
			<div class="container">
				<h1 class="main-title">Zoom || زووم</h1>
				<div class="content content-1">
					<div class="info">
						<p>
							الاسم: <span>زووم</span>
							<br />
							المهمة: إمكانية <span>التواصل</span> عبر الجهاز المحمول والهاتف الذكي بين
							الاشخاص
							<br />
							أنظمة التشغيل المتاح عليها: <span>
								ويندوز، ماك، أندرويد، وأيفون IOS
							</span>{' '}
							<br />
							الثمن: مجاني ويحتوي على بعض الخدمات المدفوعة
						</p>
					</div>
					<div class="image">
						<img src={logo} alt="logo" />
					</div>
					<div class="how">
						<h3>كيف يعمل؟</h3>
						<p>
							يقدم برنامج زووم إمكانية التواصل عبر الجهاز المحمول والهاتف الذكي بين
							الاشخاص ويستخدم معظم الأحيان لإجراء الاجتماعات الخارجية و الندوات العامة.
							يقدم زووم خيارات عدة لادارة الاتصال بين الطرفين المتصليين عن طريق واجهه
							المستخدم البسيطة
						</p>
					</div>
				</div>
			</div>

			<div class="container instructions">
				<div class="guid">
					<h3>يتكون هذا الدليل من ثلاثة أقسام رئيسية :</h3>
					<ul>
						<li>
							<a href="#installing">طريقة الاستخدام على أجهزة الكمبيوتر</a>
						</li>
						<li>
							<a href="#creating">طريقة الاستخدام على أجهز الموبايل</a>
						</li>
					</ul>
				</div>
				<div class="installing" id="installing">
					<h3>1- طريقة الاستخدام على أجهزة الكمبيوتر:</h3>
					<ul class="main-list">
						<li>
							الدخول إلى الموقع الرسمي:
							<ul class="child-list">
								<li>
									نضغط{' '}
									<span>
										<a href="https://zoom.us/" target="_blank" rel="noreferrer">
											هنا
										</a>
									</span>
								</li>
								<li>
									تظهر الصفحة التالية، نقوم بالبحث عن "Sign Up Free" عن طريق النقط عند
									العلامة كما الصورة ونضغط عليها <br />
									<img src={one} alt="one" />
								</li>
							</ul>
						</li>
						<li>
							تظهر الصفحة التالية، نقوم بإدخال تاريخ ميلادنا في الحقل المخصص "السنة فقط"{' '}
							<br />
							<img src={two} alt="two" />
						</li>
						<li>
							تظهر الصفحة التالية: <br />
							نقوم بإدخال الإيميل الشخصي في الحقل المخصص ثم نضغط "Continue" <br />
							<img src={three} alt="three" />
						</li>
						<li>
							يقوم تطبيق زووم بإرسال رمز تأكيد إلى الايميل السابق إدخاله، يكون الايميل
							الوارد بعنوان "Zoom"، نأخذ الكود ونضعه في المكان المخصص ثم نضغط "Verify"{' '}
							<br />
							<img src={four} alt="four" />
						</li>
						<li>
							بعد التأكيد تظهر الصفحة التالية، نقوم بملئ الحقول كالتالي:
							<ul class="child-list">
								<li>الاسم الأول</li>
								<li>الاسم الثاني أو الكنية</li>
								<li>كلمة سر جديدة</li>
								<li>تأكيد كلمة السر</li>
								<li>نضغط على "Continue"</li>
							</ul>
							<img src={five} alt="five" />
						</li>
						<li>
							تظهر الصفحة التالية وتعني أنه تم إنشاء الحساب بنجاح، نضغط على "Let's Go"
							<img src={six} alt="six" />
						</li>
						<li>
							نقوم بتحميل التطبيق من{' '}
							<span>
								<a href="https://zoom.us/download" target="_blank" rel="noreferrer">
									هنا
								</a>
							</span>
							، تظهر الصفحة التالية، نضغط على "Download" <br />
							<img src={seven} alt="seven" />
						</li>
						<li>
							بعد التحميل، نقوم بفتح التطبيق، تظهر لنا النافذة التالية: <br />
							<ul class="child-list">
								<li>إذا كنا نريد الانضمام إلى اجتماع عن طريق رابط أو اسم هذا الاجتماع</li>
								<li>
									لتسجيل الدخول وعمل اجتماع جديد أو الانضمام إلى اجتماع عن طريق الحساب
									الشخصي
								</li>
							</ul>
							<img src={eight} alt="eight" />
						</li>
						<li>
							عند الضغط على الخيار الأول في الخطوة السابقة، تظهر النافذة التالية:
							<div class="special">
								<ul class="child-list">
									<li>
										ندخل الكود الخاص بالاجتماع، أو نقوم بنسخ لينك الاجتماع في هذا الحقل
									</li>
									<li>ندخل الاسم الذي نريد الظهور به في الاجتماع</li>
									<li>لتذكر أو حفظ الاسم للدخول به في الاجتماعات مستقبلاً</li>
									<li>
										عند تفعيل هذا الخيار، يقوم بغلق المايكروفون عند الدخول إلى الاجتماع
									</li>
									<li>
										عند تفعيل هذا الخيار، يقوم بغلق الكاميرا عند الدخول إلى الاجتماع
									</li>
									<li>نضغط "Join" للانضمام</li>
								</ul>
								<div class="image">
									<img src={nine} alt="nine" />
								</div>
							</div>
						</li>
						<li>
							عند الضغط على الخيار الثاني في الخطوة رقم 8، تظهر النافذة التالية:
							<div class="special">
								<ul class="child-list">
									<li>ندخل الايميل الذي أنشأنا حساب زووم عن طريقه</li>
									<li>ندخل كلمة السر السابق إنشاؤها</li>
									<li>نضغط "Sign in" لتسجيل الدخول</li>
									<li>
										عند تفعيل هذا الخيار، يقوم التطبيق بحفظ بيانات تسجيل الدخول تلقائيا
									</li>
								</ul>
								<div class="image">
									<img src={ten} alt="ten" />
								</div>
							</div>
						</li>
						<li>
							بعد تسجيل الدخول، تظهر النافذة التالية وهي الواجهة الرئيسية لحسابنا على
							زووم:
							<ul class="child-list">
								<li>لإنشاء اجتماع جديد</li>
								<li>
									للانضمام إلى اجتماع، تظهر قائمة مثل الخطوة رقم 9، نتبع نفس الخطوات
								</li>
								<li>
									لجدولة اجتماع في المستقبل، تظهر نافذة نحدد منها تاريخ الاجتماع وفترته
									الزمنية
								</li>
								<li>لمشاركة الشاشة</li>
							</ul>
							<img src={eleven} alt="eleven" />
						</li>
						<li>
							عند إنشاء اجتماع جديد، تظهر النافذة التالية وهي الواجهة الرئيسية للاجتماع في
							تطبيق زووم: <br />
							<div class="special">
								<ul class="child-list">
									<li>للتحكم بالميكروفون، فتح وإغلاق</li>
									<li>للتحكم بالكاميرا فتح وإغلاق</li>
									<li>لرؤية قائمة الأشخاص في الاجتماع</li>
									<li>لفتح نافذة المحادثة داخل الاجتماع</li>
									<li>لمشاركة الشاشة خلال الاجتماع</li>
									<li>لتسجيل الاجتماع وحفظه على الجهاز الخاص بنا</li>
									<li>لتفعيل ميزة الترجمة في حال كان الاجتماع بلغة أخرى</li>
									<li>للتفاعل مع الاجتماع، كطريقة للمشاركة والتفاعل مع المتحدث</li>
									<li>لفتح قائمة التطبيقات التي يمكن إضافتها إلى زووم</li>
									<li>
										لفتح الوايت بورد، وهي مساحة للرسم والكتابة داخل التطبيق تستخدم للشرح
										والتوضيح
									</li>
									<li>لإنهاء الاجتماع أو الخروج منه</li>
									<li>
										تفتح قائمة تحتوى على خيارات خاصة بالاجتماع، تفاصيلها في الخدوة التالية
									</li>
								</ul>
								<div class="image">
									<img src={twelve} alt="twleve" />
								</div>
							</div>
						</li>
						<li>
							تفتح قائمة تحتوى على خيارات خاصة بالاجتماع كالتالي:
							<div class="special">
								<ul class="child-list">
									<li>لقفل الاجتماع، بحيث لا يستطيع أحد الدخول</li>
									<li>
										لتفعيل خاصية الانتظار، بحيث ينتظر المنضمين إلى الاجتماع الاذن من مدير
										الاجتماع ليقوم بإدخالهم
									</li>
									<li>لإخفاء الصورة الشخصية</li>
									<li>
										السماح للإعضاء بالتالي:{' '}
										<span>
											مشاركة الشاشة - مشاركة في المحادثة الكتابية - إعادة تسمية أنفسهم
											داخل الاجتماع - كتم الصوت الخاص بهم - فتح الكاميرا الخاصة بهم -
											مشاركة مساحة الشرح أو الوايت بورد
										</span>
									</li>
									<li>
										إلغاء كافة المميزات للإعضاء في الاجتماع، مثل قفل كافة الكاميرات،
										وإلغاء مشاركة الشاشة لدى الجميع.. الخ
									</li>
								</ul>
								<div class="image">
									<img src={thirteen} alt="thirteen" />
								</div>
							</div>
						</li>
					</ul>
				</div>

				<div class="creating" id="creating">
					<h3>2- طريقة الاستخدام على أجهزة الموبايل:</h3>
					<div>
						<ul class="main-list">
							<li>
								لأجهزة أندرويد{' '}
								<span>
									<a
										href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings"
										target="_blank"
										rel="noreferrer"
									>
										هنا
									</a>
								</span>
							</li>
							<li>
								لأجهزة أيفون{' '}
								<span>
									<a
										href="https://apps.apple.com/us/app/zoom-one-platform-to-connect/id546505307"
										target="_blank"
										rel="noreferrer"
									>
										هنا
									</a>
								</span>
							</li>
							<li>
								بعد تحميل التطبيق، نقوم بفتحه، تظهر الصفحة التالية:
								<div class="special">
									<ul class="child-list">
										<li>للانضمام إلى اجتماع ما عن طريق لينك أو الكود الخاص بالاجتماع</li>
										<li>لإنشاء حساب جديد على زووم</li>
										<li>لتسجيل الدخول إلى حساب زووم</li>
									</ul>
									<div class="image">
										<img src={mobile1} alt="mob1" />
									</div>
								</div>
							</li>
							<li>
								عند الضغط على "Join a Meeting" في الخطوة السابقة، تظهر الصفحة التالية:
								<div class="special">
									<ul class="child-list">
										<li>
											نقوم بإدخال الكود الخاص بالاجتماع أو نسخ اللينك الخاص به في هذا
											الحقل
										</li>
										<li>نقوم بإدخال الاسم الذي نريد الظهور به</li>
										<li>عند تفعيل هذا الخيار يقوم بإغلاق المايكروفون عند الدخول</li>
										<li>عند تفعيل هذا الخيار يقوم بإغلاق الكاميرا عند الدخول</li>
										<li>"Join" للانضمام للاجتماع</li>
									</ul>
									<div class="image">
										<img src={mobile2} alt="mob2" />
									</div>
								</div>
							</li>
							<li>
								عند الضغط على "Sign Up" في الخطوة الرابعة سابقا، تظهر الصفحة التالية:
								<div class="special">
									<ul class="child-list">
										<li>
											نقوم بإدخال تاريخ ميلادنا،{' '}
											<span>لا يقوم تطبيق زووم بتسجيل هذه البيانات</span>
										</li>
										<li>تظهر نافذة لإدخال تاريخ الميلاد، عند الانتهاء نضغط على "Set"</li>
									</ul>
									<div class="image">
										<img src={mobile3} alt="mob3" />
									</div>
								</div>
							</li>
							<li>
								عند الضغط على "Set"، تظهر الصفحة التالية:
								<div class="special">
									<ul class="child-list">
										<li>نقوم بإدخال الايميل الذي نريد إنشاء الحساب عن طريقه</li>
										<li>ندخل الاسم الأول الخاص بنا</li>
										<li>ندخل الاسم الثاني</li>
										<li>نضغط "Sign Up" للتسجيل</li>
									</ul>
									<div class="image">
										<img src={mobile4} alt="mob4" />
									</div>
								</div>
							</li>
							<li>
								عند الانتهاء من الخطوة السابقة، تظهر الصفحة التالية:
								<div class="special">
									<ul class="child-list">
										وتعني أنه تم إرسال رسالة تأكيد إلى الايميل الذي تم إدخاله في الخطوات
										السابقة
									</ul>
									<div class="image">
										<img src={mobile5} alt="mob5" />
									</div>
								</div>
							</li>
							<li>
								نفتح الايميل الشخصي ونبحث في البريد الوارد عن رسالة بعنوان "Zoom"، نقوم
								بفتحها فتظهر الصفحة التالية:
								<div class="special">
									<ul class="child-list">
										نقوم بالضغط على "ACTIVATE ACCOUNT" لبدء عملية تفعيل الحساب
									</ul>
									<div class="image">
										<img src={mobile6} alt="mob6" />
									</div>
								</div>
							</li>
							<li>
								عند تنفيذ الخطوة السابقة، تظهر الصفحة التالية:
								<div class="special">
									<ul class="child-list">
										<li>ندخل الاسم الأول الخاص بنا</li>
										<li>ندخل الاسم الثاني</li>
										<li>نقوم بإنشاء كلمة سر</li>
										<li>نقوم بإدخال كلمة السر مرة أخرى للتأكيد</li>
										<li>نضغط "Continue"</li>
									</ul>
									<div class="image">
										<img src={mobile7} alt="mob7" />
									</div>
								</div>
							</li>
							<li>
								قد تظهر الصفحة التالية:
								<div class="special">
									<ul class="child-list">وتعني أنه تم إنشاء الحساب بنجاح</ul>
									<div class="image">
										<img src={mobile8} alt="mob8" />
									</div>
								</div>
							</li>
							<li>
								نقوم بالعودة إلى تطبيق زووم، ثم نضغط على "Sign in" لتسجيل الدخول إلى
								الحساب، تظهر الصفحة التالية
								<div class="special">
									<ul class="child-list">
										<li>نقوم بإدخال الايميل الذي سبق إنشاء الحساب عن طريقه</li>
										<li>نقوم بإدخال كلمة السر</li>
										<li>نضغط "Sign In" للدخول إلى الحساب</li>
									</ul>
									<div class="image">
										<img src={mobile9} alt="mob9" />
									</div>
								</div>
							</li>
							<li>
								تظهر الصفحة التالية، وهي الصفحة الرئيسية الخاصة بتطبيق زووم على الموبايل
								<div class="special">
									<ul class="child-list">
										<li>لإنشاء اجتماع جديد</li>
										<li>للانضمام إلى اجتماع معين بالكود أو بالرابط الخاص بالاجتماع</li>
										<li>لجدولة اجتماع مستقبلاً</li>
										<li>لعمل مشاركة للشاشة</li>
									</ul>
									<div class="image">
										<img src={mobile10} alt="mob10" />
									</div>
								</div>
							</li>
							<li>
								عند الانضمام إلى اجتماع ما بأي طريقة من الطرق السابقة، تظهر الصفحة
								التالية، وهي الواجهة الرئيسية للاجتماع على تطبيق زووم
								<div class="special">
									<ul class="child-list">
										نقوم بالاختيار بين بيانات الهاتف المحمول أو شبكة الانترنت "Wifi" لبدء
										التحدث في الاجتماع:
										<li>"Wifi" لاختيار شبكة الانترنت</li>
										<li>"Cellular Data" لاختيار شبكة الهاتف المحمول</li>
									</ul>
									<div class="image">
										<img src={mobile11} alt="mobile11" />
									</div>
								</div>
							</li>
							<li>
								<span>
									باقي الخيارات في الواجهة الرئيسية مطابقة للخيارات التي سبق شرحها في
									واجهة التطبيق على أجهزة الكمبيوتر
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Zoom;
