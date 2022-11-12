import React from 'react';

import logo from '../assets/jitsiImgs/logo.png';

import img1 from '../assets/jitsiImgs/img1.png';
import img2 from '../assets/jitsiImgs/img2.png';
import img3 from '../assets/jitsiImgs/img3.png';
import img4 from '../assets/jitsiImgs/img4.png';
import img5 from '../assets/jitsiImgs/img5.png';
import img6 from '../assets/jitsiImgs/img6.png';
import img7 from '../assets/jitsiImgs/img7.png';
import img8 from '../assets/jitsiImgs/img8.png';
import img9 from '../assets/jitsiImgs/img9.png';
import img10 from '../assets/jitsiImgs/img10.png';
import img11 from '../assets/jitsiImgs/img11.png';
import img12 from '../assets/jitsiImgs/img12.png';
import img13 from '../assets/jitsiImgs/img13.png';

import mob1 from '../assets/jitsiImgs/mobile1.jpg';
import mob2 from '../assets/jitsiImgs/mobile2.jpg';
import mob3 from '../assets/jitsiImgs/mobile3.jpg';
import mob4 from '../assets/jitsiImgs/mobile4.jpg';
import mob5 from '../assets/jitsiImgs/mobile5.jpg';
import mob6 from '../assets/jitsiImgs/mobile6.jpg';

const Jitsi = () => {
	return (
		<div class="main bitwarden">
			<div class="container">
				<h1 class="main-title">Jitsi || جيتسي</h1>
				<div class="content content-1">
					<div class="info">
						<p>
							الاسم: <span>جيتسي</span>
							<br />
							المهمة: هو <span>منصة آمنة</span> ﻹجراء الإتصالات أو الإجتماعات
							<br />
							أنظمة التشغيل التي يعمل عليها: <span>ويندوز، أندرويد، آيفون "IOS"</span>
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
							يؤمن جيتسي حماية البيانات حيث تكون البيانات المرسلة بين الطرفين مشفرة من قبل
							جيتسي
						</p>
					</div>
				</div>
				<div class="content content-2 info">
					<h3>يمتاز برنامج جيتسي بالتالي:</h3>
					<ul class="child-list">
						<li>إنشاء قناة مشفرة للاتصال</li>
						<li>
							<span>المجهولية:</span> حيث لا يوجد حاجة لإنشاء حساب أو إدخال أية معلومات
							شخصية لإجراء محادثة
						</li>
						<li>
							يمكن إجراء المحادثة أو الإجتماع عبر متصفح الإنترنت بدون الحاجة لتنصيب
							التطبيق على الجهاز "يمكن تنصيب تطبيق "جيتسي" على اجهزة الكمبيوتر أو هواتف
							آندرويد و IOS"
						</li>
					</ul>
				</div>
			</div>
			<div class="container instructions">
				<div class="guid">
					<h3>يتكون هذا الدليل من قسمين رئيسيين:</h3>
					<ul>
						<li>
							<a href="#installing">استخدام تطبيق جيتسي عن طريق الموقع الرسمي الخاص به</a>
						</li>
						<li>
							<a href="#creating">روابط تحميل التطبيق على جميع المنصات</a>
						</li>
						<li>
							<a href="#incrypting">استخدام التطبيق عن طريق الهاتف المحمول</a>
						</li>
					</ul>
				</div>
				<div class="installing" id="installing">
					<h3>استخدام تطبيق جيتسي عن طريق الموقع الرسمي:</h3>
					<ul class="main-list">
						<li>
							الوصول إلى الموقع:
							<ul class="child-list">
								<li>
									عن طريق الرابط{' '}
									<span>
										<a href="https://meet.jit.si/" target="_blank" rel="noreferrer">
											هنا
										</a>
									</span>{' '}
									<br />
									تظهر الصفحة التالية، نضغط على:
									<ul class="child-list">
										<li>
											نقوم بإدخال الاسم الخاص بالمكالمة أو الاجتماع الذي نريده، يمكن أن
											يكون أي اسم
										</li>
										<li>نضغط على بدأ الاتصال "Start Meeting"</li>
									</ul>
									<img src={img1} alt="one" /> <br />
								</li>
							</ul>
						</li>
						<li>
							تظهر النافذة التالية في أعلى شمال الصفحة، نضغط على <span>"Allow"</span>{' '}
							وتعني السماح للموقع بالوصول إلى الكاميرا والمايكروفون لاتمام المكالمة <br />
							<img src={img2} alt="two" />
						</li>
						<li>
							تظهر الصفحة التالية: <br />
							<ul class="child-list">
								<li>نقوم بادخال الاسم الذي نريد الظهور به في المكالمة أو الاجتماع</li>
								<li>نتأكد أن المايكروفون والكاميرا في حالة الإغلاق كما في الصورة</li>
								<li>
									نضغط على <span>"Join Meeting"</span> للانضمام إلى المكالمة
								</li>
								<img src={img3} alt="three" /> <br />
							</ul>
						</li>
						<li>
							تظهر الصفحة التالية، وهي الواجهة الخاصة بالمكالمات في برنامج جيتسي <br />
							<img src={img4} alt="four" /> <br />
						</li>
						<li>
							نشرح في النقاط التالية أهم العناصر في هذه الواجهة <br />
							<ul class="child-list">
								<li>في حال أردنا أن نغير الاسم الذي نظهر به</li>
								<li>للتحكم بالمايكروفون، فتحه أو إغلاقه</li>
								<li>للتحكم بالكاميرا، فتحها أو إغلاقها</li>
								<li>
									لمشاركة الشاشة الخاصة بنا بحيث يراها كل من في هذه المكالمة أو الاجتماع
								</li>
								<li>لفتح قائمة المحادثة "شات" مع الأعضاء المتواجدين في المكالمة</li>
								<li>لرفع اليد أو طلب الإذن للتحدث</li>
								<li>لرؤية الأعضاء المتواجدين في المكالمة</li>
								<li>لإظهار الأعضاء المتواجدين في المكالمة</li>
								<li>
									عند الضغط على الثلاث نقاط تظهر القائمة التالية:
									<img src={img5} alt="five" />
									<ul class="child-list">
										<li>
											{' '}
											"Invite people": لدعوة أشخاص جدد، تظهر النافذة التالية، عند نسخ
											اللينك الظاهر في النافذة التالية وإرساله إلى من نريده أن ينضم إلى
											المكالمة <br />
											<img src={img6} alt="six" />
										</li>
										<li>
											"Performance settings": لضبط خيارات الإتصال بحسب جودة الإنترنت
										</li>
										<li>"View full screen": فتح نافذة الاتصال بكامل الشاشة</li>
										<li>
											"Security options": للتحكم بإعدادت الاتصال، تظهر النافذة التالية{' '}
											<br />
											<img src={img7} alt="seven" />
											<ul class="child-list">
												<li>
													"Enable Lobby": نفعل هذا الخيار، ويعني أن الأشخاص الجدد لا
													يستطيعون الانصمام إلى الاتصال إلى أن يسمح لهم مدير الاتصال، أو
													الأدمن
												</li>
												<li>
													"Add Password": نضغط على هذا الخيار، يظهر حقل إدخال خاص بإنشاء
													كلمة سر للإتصال، بحيث لا يستطيع أحد الانضمام إلى الاتصال إلا
													بإدخال كلمة السر هذه
												</li>
												<li>
													"Enabel End-to-End Encryption": تفعيل خاصية تشفير المكالمات، هذه
													الخاصية تحت التجربة من قبل شركة جيتسي وتعمل حاليا على المتصفحات
													فقط
												</li>
											</ul>
										</li>
										<span>نعود للقائمة السابقة</span>
										<br />
										<img src={img5} alt="five" />
										<li>"Start recording": لتسجيل الاتصال وحفظه على الجهاز الخاص بنا</li>
										<li>
											"Start live stram": لبدء بث مباشر لهذا الاتصال وعرضه عن طريق يوتيوب
										</li>
										<li>
											"Share video": لمشاركة مقطع فيديو في الاتصال، نضغط على هذا الخيار،
											ثم ندخل لينك الفيديو ونضغط على "Share"
										</li>
										<li>"Share audio": لمشاركة مقطع صوتي في الاتصال</li>
										<li>"Noise suppression": لعزل الضوضاء</li>
										<li>
											"Select background": لتحديد صورة أو خلقية تظهر خلفنا عند فتح
											الكاميرا
										</li>
										<li>
											"Speaker stats": يمكن من خلال هذا الخيار، رؤية الوقت الذي تكلمت\تكلم
											فيه كم متصلة و متصل
										</li>
										<li>
											"Settings": اعدادات الاتصال، عند الضغط على هذا الخيار، تظهر النافذة
											التالية: <br />
											تحتوي على إعدادت عامة بالاتصال، يفضل تركها كما هي.
											<img src={img8} alt="eight" />
											<ul class="child-list">
												<li>
													عند الضغط على <span>"Profile"</span> يمكنك تغيير الاسم الخاص بك
													في الاتصال في الحقل الأول، وادخال الايميل الشخصي عند الحاجة في
													الحقل الثاني <br />
													<img src={img9} alt="nine" />
												</li>
												<li>
													<span>"Moedrator":</span> يمكنك تغيير بعض الاعدادات الخاصة بك
													كمدير للاتصال، مثل:
													<ul class="child-list">
														<li>
															الخيار <span>“Everyone starts muted":</span> عند تفعيل هذا
															الخيار (وضع علامة ✓)، فإن أي شخص تدخل أو يدخل غرفة المحادثة
															سيكون الميكروفون بحالة "كتم"
														</li>
														<li>
															خيار <span>“Everyone starts hidden":</span>عند تفعيل هذا
															الخيار، فإن أي شخص تدخل أو يدخل غرفة المحادثة ستكون الكاميرا
															بحالة "إغلاق"
														</li>
														<li>
															<span>"Everyone follow me":</span> عند تفعيل هذا الخيار،
															سيكون جميع المنضمين إلى الاتصال في حالة متابعة لك كمدير لهذا
															الاتصال
														</li>
														<li>
															<span>"Mute reaction sounds for everyone":</span> عند تفعيل
															هذا الخيار، يلغى صوت التفاعلات الخاصة بالمحادثة في الاتصال
														</li>
														<img src={img10} alt="ten" />
													</ul>
												</li>
												<li>
													<span>"Calendar":</span>لربط التقويم عن طريق جوجل أو مايكروسوفت
													بتطبيق جيتسي، بحيث ينظم مواعيد الاتصالات ويضيفها إلى التقويم
													الخاص بك <br />
													<img src={img11} alt="eleven" />
												</li>
												<li>
													<span>"Sounds":</span> خيارات خاصة بالأصوات في هذا الاتصال، لا
													مشكلة في تركها كما هي <br />
													<img src={img12} alt="twelve" />
												</li>
												<li>
													<span>"More":</span>خيارات أكثر عن الاتصال، نتركها كما هي <br />
													<img src={img13} alt="thirteen" />
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="creating" id="creating">
					<h3>يمكن تحميل التطبيق على جميع المنصات واستخدامه من خلالها:</h3>
					<div>
						<ul class="child-list">
							لتحميل التطبيق:
							<li>
								على أجهزة ويندوز{' '}
								<span>
									<a
										href="https://github.com/jitsi/jitsi/releases/download/Jitsi-2.10/jitsi-2.10.5550-x64.exe"
										target="_blank"
										rel="noreferrer"
									>
										هنا
									</a>
								</span>
							</li>
							<li>
								على أجهزة ماك{' '}
								<span>
									<a
										href="https://github.com/jitsi/jitsi/releases/download/Jitsi-2.10/jitsi-2.10.5550.dmg"
										target="_blank"
										rel="noreferrer"
									>
										هنا
									</a>
								</span>
							</li>
							<li>
								على أجهزة أندرويد{' '}
								<span>
									<a
										href="https://play.google.com/store/apps/details?id=org.jitsi.meet&hl=en"
										target="_blank"
										rel="noreferrer"
									>
										هنا
									</a>
								</span>
							</li>
							<li>
								على أجهزة IOS أيفون{' '}
								<span>
									<a
										href="https://apps.apple.com/in/app/jitsi-meet/id1165103905"
										target="_blank"
										rel="noreferrer"
									>
										هنا
									</a>
								</span>
							</li>
							<li>
								يمكنك زيارة الصفحة الرسمية الخاصة بموقع تطبيق جيتسي، تحتوى على مختلف روابط
								التحميل لجميع أنظمة التشغيل من{' '}
								<span>
									<a href="https://jitsi.org/downloads/" target="_blank" rel="noreferrer">
										هنا
									</a>
								</span>
							</li>
						</ul>
					</div>
					<h4>
						<span>
							إذا كنت تستخدم التطبيق على جهاز كمبيوتر، يفضل استخدامه عن طريق الموقع الرسمي
							وليس عن طريق التطبيق الخاص به، أما إذا كنت تريد إجراء الاتصال عن طريق هاتف
							محمول فبإمكانك تحميل التطبيق على الهاتف المحمول من الروابط المذكورة أعلاه،
							وسيتم شرح استخدام التطبيق على الهواتف المحمولة في الفقرة التالية
						</span>
					</h4>
				</div>
				<div class="incrypting" id="incrypting">
					<h3>استخدام التطبيق على الهاتف المحمول: نظام تشغيل أندرويد || Android </h3>
					<ul class="main-list">
						<li>
							عند تحميل التطبيق ثم فتحه، تظهر النافذة التالية: <br />
							<img src={mob1} alt="mobile1" /> <br />
							نقوم بإدخال اسم غرفة المحادثة التي نريد الدخول إليها، أو اسم غرفة المحادثة
							التي نريد إنشاءها
						</li>
						<li>
							أسفل النافذة السابقة، تجد الشكل كالصورة التالية: <br />
							<img src={mob2} alt="mobile2" /> <br />
							نقوم بالضغط على <span>"Settings"</span> لفتح قائمة الإعدادات
						</li>
						<li>
							تظهر النافذة التالية، تحتوي على بعض الإعدادات الخاصة بالاتصال ومنها: <br />
							<ul class="child-list">
								<li>
									<span>"Display name"</span> لتغيير الاسم الخاص بك
								</li>
								<li>
									<span>"Email"</span> لإدخال الايميل الشخصي عند الحاجه <br />
									<img src={mob3} alt="mobile3" />
								</li>
								<li>
									<span>"Server URL"</span> عنوان مخدم الإتصال، يوجد عدد من المواقع تقدم
									خدمة الاتصال عبر جيتسي، في حال الرغبة باستخدام أحدها، يمكن إضافة رابط
									الموقع هنا
									<img src={mob4} alt="mobile4" />
								</li>
								<li>
									<span>"Start with audio muted"</span> عند تفعيل هذا الخيار ستبدأ الاتصال
									والمايكروفون الخاص بك في حالة إغلاق أو كتم وستحتاج لتفعيله
								</li>
								<li>
									<span>"Start with video muted"</span> شبيه بالخيار السابق ولكنه يخص
									الكاميرا، أي أنك ستدخل الاتصال والكاميرا الخاصة بك مقفلة
								</li>
								<li>
									<span>"Hide self view"</span> ويعني إخفاء النافذة الخاصة بك داخل الاتصال
									والتركيز على نوافذ باقي الأشخاص في غرفة المحادثة
								</li>
							</ul>
						</li>
						<li>
							{' '}
							عند بدء الاتصال أو إنشاء اتصال جديد كما هو موضح في الخطوة الأولى أعلاه، تظهر
							الواجهة الرئيسية للاتصال كما في الصورة التالية:
							<div class="special">
								<ul class="child-list">
									<li>لفتح وتشغيل المايكروفون والكاميرا</li>
									<li>
										لدعوة أشخاص جدد للاتصال عن طريق نسخ اللينك وإرساله لأي جهة اتصال على
										هاتفنا المحمول
									</li>
									<li>لدخول المحادثة الخاصة بالاتصال والمشاركة فيها</li>
									<li>
										لفتح خيارات عديدة، مشابهه تماما للخيارات الموجودة في نسخة التطبيق على
										المتصفح المذكورة أعلى هذا الدليل <br /> هناك خيار جديد خاص بنسخة
										الهاتف المحمول وهو <span>"Car mode"</span> ويعني وضع قيادة السيارة،
										حيث يقوم التطبيق باختصار الواجهة الرئيسية للتطبيق بحيث تصبح بسيطة سهلة
										الاستخدام أثناء القيادة
									</li>
									<li>لإنهاء الاتصال</li>
									<li>للتغيير بين الكامرتين الأمامية والخلفية إن كنا نستخدم الكاميرا</li>
									<li>لفتح وكتم صوت الاتصال</li>
								</ul>
								<div class="image">
									<img src={mob6} alt="mobile6" />
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Jitsi;
