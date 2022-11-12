import React from 'react';

import logo from '../assets/bitwardenImgs/logo.png';

import create1 from '../assets/bitwardenImgs/create1.png';
import create2 from '../assets/bitwardenImgs/create2.png';
import create3 from '../assets/bitwardenImgs/create3.png';
import create4 from '../assets/bitwardenImgs/create4.png';

import secure1 from '../assets/bitwardenImgs/secure1.png';
import secure2 from '../assets/bitwardenImgs/secure2.png';
import secure3 from '../assets/bitwardenImgs/secure3.png';
import secure4 from '../assets/bitwardenImgs/secure4.png';
import secure5 from '../assets/bitwardenImgs/secure5.png';
import secure6 from '../assets/bitwardenImgs/secure6.png';

import add1 from '../assets/bitwardenImgs/addextension1.png';
import add2 from '../assets/bitwardenImgs/addextension2.png';
import add3 from '../assets/bitwardenImgs/addextension3.png';
import add4 from '../assets/bitwardenImgs/addextension4.png';
import add5 from '../assets/bitwardenImgs/addextension5.png';
import add6 from '../assets/bitwardenImgs/addextension6.png';
import add7 from '../assets/bitwardenImgs/addextension7.png';
import add8 from '../assets/bitwardenImgs/addextension8.png';
import add9 from '../assets/bitwardenImgs/addextension9.png';
import add10 from '../assets/bitwardenImgs/addextension10.png';
import add11 from '../assets/bitwardenImgs/addextension11.png';
import add12 from '../assets/bitwardenImgs/addextension12.png';

const Bitwarden = () => {
	return (
		<div class="main bitwarden">
			<div class="container">
				<h1 class="main-title">Bitwarden || بت فاردن</h1>
				<div class="content content-1">
					<div class="info">
						<p>
							الاسم: <span>بت فاردن</span>
							<br />
							المهمة: <span>حفط</span> بيانات تسجيل الدخول لكافة الحسابات، أي حفظ: "اسم
							المستخدم وكلمة المرور"
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
							يحفظ كلمات السر وبيانات تسجيل الدخول المهمة بشكل آمن وسري وسهل الاستخدام،
							كما يمكن من خلاله مشاركة كلمات السر وبيانات البطاقات البنكية بين الأجهزة
							الشخصية عن طريق إنشاء حساب، ثم تسجيل الدخول إليه{' '}
							<span>بكلمة سر رئيسية</span> على مختلف الأجهزة الشخصية
						</p>
					</div>
				</div>
				<div class="content content-2 info">
					<h3>هل يستطيع ملّاك أو مطوروا تطبيق بت فاردن الوصول إلى بيانات المستخدمين؟</h3>
					<q>
						لا بالتأكيد، لأن كلمات السر المحفوظة خلال التطبيق يتم تشفيرها قبل أن يتم
						تخزينها بحيث لا يستطيع أحد الوصول إليها إلا بعد فك التشفير عنها، وهو أمر شبه
						مستحيل. يمكن الوصول إلى كلمات السر الخاصة بنا عن طريق تسجيل الدخول بكلمة سر
						رئيسية فقط.
					</q>
				</div>
				<div class="content content-2 info">
					<h3>ما هي كلمة السر الرئيسية؟</h3>
					<q>
						هي كلمة السر الوحيدة التي يتوجب عليك حفظها في مكان آمن يسهل الرجوع إليه عند
						الحاجه، يتم إنشاؤها بشكل تلقائي عن طريق مولّد كلمات سر بت فاردن عند إنشاء
						الحساب، يتوجب عليك استخدامها لتسجيل الدخول بها عند الحاجه للوصول لكلمات السر
						المخزنة على حساب بت فاردن، لذلك تعتبر رئيسية لأهميتها
					</q>
				</div>
				<div class="content content-2 info">
					<h3>في حال نسيان كلمة السر الرئيسية!</h3>
					<q>
						<span>
							في حال نسيان كلمة السر الرئيسية، لا يمكن إعادة تعيينها أو استعادتها،
							وبالتالي لا يمكن الوصول لبيانات تسجيل الدخول المحفوظة على الحساب مرة أخرى
							ويعتبر الحساب في هذه الحالة بلا فائدة
						</span>
					</q>
				</div>
			</div>
			<div class="container">
				<div class="disc">
					<div class="one">
						<h3>الحذف الآمن</h3>
						<ul class="child-list">
							ما هي الطريقة لحذف ملف أو مجلد من جهاز الكمبيوتر أو من وحدة التخزين (فلاش
							ميموري)؟
							<li>حذف (ديليت)</li>
							<li>Shift + Delete</li>
							<li>النقل إلى سلة المحذوفات، ثم إفراغ سلة المحذوفات</li>
						</ul>
						<ul class="child-list">
							ما هي الطريقة لحذف كافة الملفات والمجلدات من جهاز الكمبيوتر أو وحدة التخزين
							(فلاش ميموري)؟
							<li>فرمتة الجهاز أو وحدة التخزين Format</li>
						</ul>
					</div>
				</div>
				<div class="disc">
					<div class="one">
						<h3>ولكن!</h3>
						<p>
							هل الحذف بالطرق السابقة، يعني أن الملف أو المجلد الذي قمنا بحذفه، لا يمكن
							استرجاعه؟ الجواب: لا!.. فإن الملفات والمجلدات التي يتم حذفها بالطرق السابقة،
							قابلة للاسترجاع!
							<span>
								حيث يمكن استرجاع ملفات ومجلدات من جهاز الكمبيوتر أو وحدة التخزين بعد أشهر
								وسنوات من حذفها، ويمكن استرجاع الملفات والمجلدات من جهاز الكمبيوتر أو وحدة
								التخزين بعد عدة مرات من الفورمات
							</span>
						</p>
					</div>
				</div>
				<div class="disc">
					<div class="one">
						<h3>استرجاع ملفات حُذفت بشكل عادي!</h3>
						<p>
							عملية استرجاع أو استعادة الملفات المحذوفة من الكمبيوتر أو وحدة التخزين، يمكن
							أن تتم عبر برامج بسيطة ومجانية ومتوفر، لذلك، فإن جميع خيارات الحذف السابقة
							أو الشائعة (ديليت - شيفت + ديليت -النقل إلى سلة المحذوفات - إفراغ سلة
							المحذوفات - فرمتة الجهاز) <span>هي عمليات حذف غير آمنة</span>
						</p>
					</div>
					<div class="two">
						<h3>سؤال!</h3>
						<p>
							هل يوجد طريقة لحذف الملفات والمجلدات من جهاز الكمبيوتر أو وسائط التخزين
							بطريقة آمنة، وغير قابلة للاستعادة؟ الجواب: <span>نعم يوجد تطبيقات</span>{' '}
							تقوم بحذف الملفات والمجلدات من جهاز الكمبيوتر ووسائط التخزين{' '}
							<span>بطريقة آمنة</span> ، وسيتم في الفقرة التالية، شرح كيفية تنصيب وإعداد
							تطبيق ERASER للحذف الآمن
						</p>
					</div>
				</div>
			</div>

			<div class="container instructions">
				<div class="guid">
					<h3>يتكون هذا الدليل من ثلاثة أقسام رئيسية :</h3>
					<ul>
						<li>
							<a href="#installing">إنشاء حساب على موقع بت فاردن</a>
						</li>
						<li>
							<a href="#creating">إلغاء حفظ المتصفح للبيانات الشخصية</a>
						</li>
						<li>
							<a href="#incrypting">إضافة بت فاردن إلى المتصفح وطريقة الاستخدام</a>
						</li>
						<span>
							سوف نستخدم متصفح جوجل كروم في هذا الدليل، حيث يعتبر المتصفح الأكثر استخداماَ
							في الوقت الحالي.
						</span>
					</ul>
				</div>
				<div class="installing" id="installing">
					<h3>1- إنشاء حساب على موقع بت فاردن</h3>
					<ul class="main-list">
						<li>
							الوصول إلى الموقع:
							<ul class="child-list">
								<li>
									عن طريق الرابط{' '}
									<span>
										<a href="https://bitwarden.com/" rel="noreferrer" target="_blank">
											هنا
										</a>
									</span>{' '}
									<br />
									تظهر الصفحة التالية، نضغط على "Get Started"
									<img src={create1} alt="one" /> <br />
								</li>
							</ul>
						</li>
						<li>
							تظهر الصفحة التالية، نملأ الحقول كالتالي:
							<br />
							<ul class="child-list">
								<li>الايميل الشخصي</li>
								<li>الاسم</li>
								<li>كلمة السر الرئيسية</li>
								<li>تأكيد لكلمة السر الرئيسية مرة أخرى</li>
								<li>
									نكتب تلميح عن كلمة السر الرئيسية، مثلا: تلميح عن مكان حفظها في حالة
									نسيانها للعودة إليها
								</li>
								<li>نضغط على المربع لتظهر اشارة [㇢]</li>
								<li>نضغط "Create Account"</li>
							</ul>
							<img src={create2} alt="two" />
						</li>
						<li>
							تظهر الصفحة التالية: <br />
							نضغط على "Send Email" <span>لتأكيد الايميل الالكتروني</span> <br />
							<img src={create3} alt="three" /> <br />
							<ul class="child-list">
								<span>- كيف يتم تأكيد الايميل الالكتروني؟</span>
								<li>
									عند الضغط على "Send Email" يتم إرسال بريد الكتروني إلى ايميلك الشخصي
									الذي أدخلته في الخطوة السابقة
								</li>
								<li>
									نفتح الايميل الشخصي ثم نضغط على البريد الوارد ونبحث عن رسالة بعنوان{' '}
									<span>"Bitwarden - Verify You Email"</span>
								</li>
								<li>
									نفتح هذه الرسالة ونضغط على <span>"Verify Email Address Now"</span>
								</li>
								<li>
									عند الضغط على <span>"Verify Email Address Now"</span> يتم تحويل الصفحة
									إلى صفحة تسجيل الدخول الخاصة بموقع بت فاردن
								</li>
								<li>
									نسجل الدخول بالايميل وكلمة السر الرئيسية اللذين تم إدخالهما في الخطوة
									الثانية
								</li>
							</ul>
						</li>
						<li>
							تظهر الصفحة التالية وتعني أنه <span>تم تفعيل وإنشاء</span> الحساب بنجاح{' '}
							<br />
							<img src={create4} alt="four" /> <br />
						</li>
					</ul>
				</div>
				<div class="creating" id="creating">
					<h3>2- إلغاء حفظ المتصفح للبيانات الشخصية</h3>
					<ul class="main-list">
						بعد إنشاء الحساب كما هو موضح في الخطوات السابقة، نفتح متصفح جوجل كروم
						<li>
							في أعلى يمين الشاشة، نضغط على صورة الحرف بجانب النقاط الثلاثة، تحت علامة X
							<br />
							<span>يمكن أن يكون الحرف مختلف، لا مشكلة في ذلك</span>
							<ul class="child-list">
								عند الضغط على صورة الحرف تظهر القائمة التالية أسفل الصورة مباشرةَ
								<li>نضغط على صورة المفتاح الصغيرة الموضحة كما في الصورة</li>
							</ul>
							<img src={secure1} alt="five" /> <br />
						</li>
						<li>
							نتأكد من إلغاء أو إغلاق الخيارين المشار إليهما بحيث يكونان كما في الصورة{' '}
							<br />
							<span>
								بإلغاء هذين الخيارين لن يقدم لك المتصفح خيار حفظ بيانات تسجيل الدخول مرة
								أخرى، كما أنه لن يملأ حقول بيانات تسجيل الدخول بشكل تلقائي مرة أخرى
							</span>
							<img src={secure2} alt="six" />
						</li>
						<li>
							في نفس الصفحة، نضغط على صورة الحرف الصغيرة في أعلى يمين الشاشة كما في الخطوة
							الأولى، ثم نضغط على الدائرة في المنتصف كما هو موضح،{' '}
							<span>وتعني الدخول إلى إعدادات بطاقات الدفع الالكتروني</span>
							<img src={secure3} alt="seven" />
						</li>
						<li>
							نتأكد من إلغاء أو إغلاق الخيارين المشار إليهما بحيث يكونان كما في الصورة
							التالية
							<br />
							<span>
								بإلغاء هذين الخيارين لن يقوم المتصفح بحفظ بيانات البطاقات البنكية والدفع
								الالكتروني، كما لن يقوم بملئ هذه الحقول بشكل تلقائي مرة أخرى
							</span>
							<img src={secure4} alt="eight" />
						</li>
						<li>
							في نفس الصفحة، نضغط على صورة الحرف الصغيرة في أعلى يمين الشاشة كما في الخطوة
							الأولى، ثم نضغط على الدائرة الأخير كما في الصورة التالية{' '}
							<span>وتعني الدخول إلى إعدادات الموقع والعناوين الشخصية</span>
							<br />
							<img src={secure5} alt="nine" />
						</li>
						<li>
							تظهر الصفحة التالية، نتأكد من إلغاء أو إغلاق الخيار المشار إليه بحيث يكون
							كما في الصورة <br />
							<span>
								بإلغاء هذا الخيار لن يقوم المتصفح بحفظ عنوانك أو موقعك الحالي ولن يقوم
								بملئ هذه البيانات في الحقول التي تطلبها مرة أخرى
							</span>{' '}
							<br />
							<img src={secure6} alt="ten" />
						</li>
					</ul>
				</div>
				<div class="incrypting" id="incrypting">
					<h3>3- إضافة بت فاردن إلى المتصفح وطريقة الاستخدام</h3>
					<ul class="main-list">
						<li>
							الوصول إلى الموقع:
							<ul class="child-list">
								<li>
									عن طريق الرابط{' '}
									<span>
										<a
											href="https://bitwarden.com/download/"
											rel="noreferrer"
											target="_blank"
										>
											هنا
										</a>
									</span>
									<br />
									ننزل في الصفحة إلى الأسفل قليلاَ حتى نجد قسم إضافات المتصفح{' '}
									<span>"Web Browser"</span> <br />
									نضغط على متصفح جوجل كروم "Google Chrome"
									<img src={add1} alt="eleven" />
									<br />
								</li>
							</ul>
						</li>
						<li>
							تظهر الصفحة التالية: نضغط على الخيار" Add to Chrome" ليبدأ تحميل الإضافة
							<br />
							<img src={add2} alt="twelve" />
						</li>
						<li>
							بعد انتهاء تحميل الإضافة، تظهر النافذة التالية: نضغط على الخيار{' '}
							<span>"Add extension"</span>
							<br />
							<img src={add3} alt="thirteen" />
						</li>
						<li>
							تظهر الصفحة التالية: وهي عبارة عن ترحيب من بت فاردن،
							<span>يمكنك إغلاقها</span> <br />
							<img src={add4} alt="fourteen" />
						</li>
						<li>
							في أعلى يمين الشاشة نضغط على الشكل الصغير كما هو موضح في الصورة، ثم نضغط على
							صورة الدبوس الصغير بجانب
							<span>"Bitwarden"</span> وذلك لتثبيت إضافة بت فاردن في شريط الأدوات
							<br />
							<img src={add5} alt="fifteen" />
						</li>
						<li>
							عند ظهور علامة بت فاردن "علامة الدرع" نضغط عليها لتظهر النافذة التالية: نضغط
							على
							<span>"Login"</span>
							<br />
							<img src={add6} alt="sixteen" />
						</li>
						<li>
							تظهر نافذة تسجيل الدخول إلى حساب بت فاردن، ندخل الايميل وكلمة السر الرئيسية
							التي تم إنشاؤها سابقاَ
							<br />
							<img src={add7} alt="seventeen" /> <br />
							بعد إدخال بيانات تسجيل الدخول، نضغط زر "Enter" أو نضغط على "Login" كما هو
							موضح في الصورة السابقة
						</li>
						<li>
							تظهر النافذة التالية، وتعني أنه تم تسجيل الدخول إلى حساب بت فاردن بنجاح{' '}
							<br />
							لإضافة بيانات تسجيل دخول لموقع ما، نضغط على إشارة الزائد "+" كما في الصورة
							<img src={add8} alt="eighteen" />
						</li>
						<li>
							تظهر النافذة التالية، نقوم بإدخال الحقول الخاصة ببيانات تسجيل الدخول
							كالتالي: <br />
							<img src={add9} alt="nineteen" />
							<ul class="child-list">
								<li>
									اسم الموقع الخاص بهذه البيانات، مثلا:{' '}
									<span>فيسبوك، نكتب رابط الموقع: facebook.com</span>
								</li>
								<li>
									اسم المستخدم أو الايميل الالكتروني، يعتمد ذلك على الموقع المراد تسجيل
									البيانات عليه، في حالة فيسبوك نقوم بإدخال الايميل الالكتروني
								</li>
								<li>كلمة سر حسابنا على فيسبوك</li>
								<li>
									رابط الموقع كاملاَ، نجده في شريط البحث في أعلى الصفحة كما هو موضح في
									الصورة: <span>في حالة فيسبوك مثلا: https://www.facebook.com</span>
								</li>
								<li>
									نضغط حفظ <span>"Save"</span> في أعلى يمين النافذة
								</li>
							</ul>
							<li>
								<span>
									يمكن تكرار الخطوات السابقة لتسجيل وحفظ بيانات أي موقع مختلف، واستخدامها
									لاحقا عن طريق بت فاردن
								</span>{' '}
								<br />
							</li>
							<li>
								بعد الانتهاء من الخطوات السابقة، نذهب إلى الموقع الذي نريد تسجيل الدخول
								إليه، في هذا المثال: موقع فيسبوك،{' '}
								<span>
									نلاحظ ظهور رقم واحد "1" بجانب علامة الدرع الخاصة بإضافة بت فاردن كما هو
									موضح في الصورة التالية
								</span>
							</li>{' '}
							<br />
							<img src={add10} alt="twenty" />
						</li>
						<li>
							نقوم بالضغط على علامة الدرع، تظهر نافذة بت فاردن، نضغط على بيانات تسجيل
							الدخول الخاصة بموقع فيسبوك
							<br />
							<img src={add11} alt="twenty-one" />
						</li>
						<li>
							نلاحظ بعد تنفيذ الخطوة السابقة أن البيانات تم ملؤها بشكل تلقائي <br />
							<img src={add12} alt="twenty-two" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Bitwarden;
