import React from 'react';

import logo from '../assets/ishredderImgs/logo.jpg';
import shred1 from '../assets/ishredderImgs/shred1.jpg';
import shred2 from '../assets/ishredderImgs/shred2.jpg';
import shred3 from '../assets/ishredderImgs/shred3.jpg';
import shred4 from '../assets/ishredderImgs/shred4.jpg';
import shred5 from '../assets/ishredderImgs/shred5.jpg';
import shred6 from '../assets/ishredderImgs/shred6.jpg';
import shred7 from '../assets/ishredderImgs/shred7.jpg';
import shred8 from '../assets/ishredderImgs/shred8.jpg';
import shred9 from '../assets/ishredderImgs/shred9.jpg';
import shred10 from '../assets/ishredderImgs/shred10.jpg';
import shred11 from '../assets/ishredderImgs/shred11.jpg';
import shred12 from '../assets/ishredderImgs/shred12.jpg';
import shred13 from '../assets/ishredderImgs/shred13.jpg';
import shred14 from '../assets/ishredderImgs/shred14.jpg';
import shred15 from '../assets/ishredderImgs/shred15.jpg';
import shred16 from '../assets/ishredderImgs/shred16.jpg';

const Ishredder = () => {
	return (
		<div className="main shred">
			<div className="container">
				<h1 className="main-title">iShredder || آي شريدير</h1>
				<div className="content content-1">
					<div className="info">
						<p>
							الاسم: <span>آي شريدير</span>
							<br />
							المهمة: <span>حذف</span> المجلدات والملفات وكافة الوسائط الأخرى بشكل آمن من
							أجهزة الهاتف المحمول
							<br />
							أنظمة التشغيل التي يعمل عليها: <span>أندرويد</span>
							<br />
							الثمن: <span>مجاني</span> ويقدم بعض الخدمات المدفوعة
						</p>
					</div>
					<div className="image">
						<img src={logo} alt="logo" />
					</div>
					<div className="how">
						<h3>كيف يعمل؟</h3>
						<p>
							يقوم بحذف الملفات بشكل آمن بحيث لا يمكن استرجاعها لاحقاً بأي شكل
							<br />
						</p>
					</div>
				</div>
				<div className="content content-2 info">
					<h3>ما هو الفرق بين المجلد والملف؟</h3>
					<q>
						<span>الملف:</span> هو مكان لتخزين البيانات، مثل: ملف وورد، ملف جداول اكسل،
						صورة، أو أغنية
					</q>
					<q>
						<span>المجلد:</span> هو مكان لتخزين الملفات، يمكن للمجلد أن يحتوي ملفات
						مختلفة،
						<span>يمكن تشبيه الملف أو الملفات بـ الكتب | وتشبيه المجلد بـ المكتبة</span>
					</q>
				</div>
				<div className="content content-2 info">
					<h3>ما الفرق بين الحذف العادي والحذف عن طريق آي شريدير؟</h3>
					<q>
						عندما يتم حذف أي ملف <span>بشكل عادي</span> يقوم نظام التشغيل بحذف أيقونة
						الملف من واجهة المستخدم، بمعنى تقني:
						<span>
							{' '}
							يقوم بحذف مؤشر/رابط أيقونة الملف/المجلد مع مكان تواجده على ذاكرة الهاتف
							المحمول أو توفير مساحته على الذاكرة ليتم استخدامها مرة أخرى
						</span>
					</q>
					<q>
						يقوم <span>آي شريدير</span> بحذف أيقونة الملف/المجلد وتشويه البيانات بشكل معقد
						حيث يصعب من إمكانية استرجاعها عن طريق أي برنامج،
						<span>
							{' '}
							تتم عملية تشويه البيانات من خلال كتابة بيانات وهمية عدة مرات فوق البيانات
							المراد حذفها.
						</span>
					</q>
				</div>
			</div>
			<div className="container instructions">
				<div className="disc">
					<div className="one">
						<h3>الحذف الآمن</h3>
						<ul className="child-list">
							ما هي الطريقة لحذف ملف، مجلد، تطبيق، صورة أو غيرها من الوسائط على الهاتف
							المحمول، بطريقة عادية بدون استخدام برامج مخصصة للحذف ال
							<li>
								نضغط على الملف المراد حذفه بشكل متواصل حتى تظهر نافذة تحتوي على خيارات، أو
								تظهر بعض الخيارات في مكان ما على شاشة الهاتف المحمول، من ضمنها نبحث على
								خيار الحذف
							</li>
						</ul>
					</div>
				</div>
				<div className="disc">
					<div className="one">
						<h3>ولكن!</h3>
						<p>
							هل الحذف بالطريقة السابقة، يعني أن الملف أو المجلد الذي قمنا بحذفه، لا يمكن
							استرجاعه؟ الجواب: لا!.. فإن الملفات والمجلدات التي يتم حذفها بالطرق السابقة،
							قابلة للاسترجاع!{' '}
							<span>
								حيث يمكن استرجاع ملفات ومجلدات من الهاتف المحمول بعد أشهر وسنوات من حذفها،
								ويمكن استرجاع الملفات والمجلدات التي تم حذفها مسبقاً بشكل عادي
							</span>
						</p>
					</div>
				</div>
				<div className="disc">
					<div className="one">
						<h3>استرجاع ملفات حُذفت بشكل عادي!</h3>
						<p>
							عملية استرجاع أو استعادة الملفات المحذوفة من الهاتف المحمول يمكن أن تتم عبر
							برامج بسيطة ومجانية ومتوفرة، لذلك، فإن خيارات الحذف السابقة أو الشائعة{' '}
							<span>هي عمليات حذف غير آمنة</span>
						</p>
					</div>
					<div className="two">
						<h3>سؤال!</h3>
						<p>
							هل يوجد طريقة لحذف الملفات والمجلدات من الهاتف المحمول بطريقة آمنة، وغير
							قابلة للاستعادة؟ الجواب: <span>نعم يوجد تطبيقات</span> تقوم بحذف الملفات
							والمجلدات من الهاتف المحمول <span>بطريقة آمنة</span> ، وسيتم في الفقرة
							التالية، شرح كيفية تحميل وإعداد تطبيق iShredder للحذف الآمن
						</p>
					</div>
				</div>
			</div>
			<div className="container instructions">
				<div className="guid">
					<h3>يتكون هذا الدليل من ثلاثة أقسام رئيسية :</h3>
					<ul>
						<li>
							<a href="#installing">تحميل "آي شريدير | iShredder" على الهاتف المحمول</a>
						</li>
						<li>
							<a href="#creating">حذف أو اتلاف المساحة الفارغة في الهاتف المحمول:</a>
						</li>
						<li>
							<a href="#incrypting">اختيار ملفات معينة وحذفها بطريقة آمنة:</a>
						</li>
					</ul>
				</div>
				<div className="installing" id="installing">
					<h3>1- تحميل برنامج آي شريدير</h3>
					<ul className="main-list">
						<li>
							الحصول على التطبيق:
							<ul className="child-list">
								<li>
									نضغط على الرابط من{' '}
									<span>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://play.google.com/store/apps/details?id=com.projectstar.ishredder.android.standard"
										>
											هنا
										</a>
									</span>{' '}
								</li>
								<li>
									<div className="special">
										بعد تحميل التطبيق على الجهاز، وتشغيله، تظهر النافذة التالية نضغط على
										"Skip" <br />
										<div className="image">
											<img src={shred1} alt="one" />
										</div>
									</div>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className="creating" id="creating">
					<h3>2- حذف أو اتلاف المساحة الفارغة في الهاتف المحمول:</h3>
					<ul className="main-list">
						<li>
							عند فتح التطبيق مرة أخرى، أو بعد الضغط على "Skip" كما في الخطوة السابقة،
							تظهر الصفحة التالية:
							<div className="special">
								<ul className="child-list">
									<li>
										"Selective erasing": لرؤية المساحة الفارغة المتاحة على الهاتف المحمول،
										والتي يوفر التطبيق إمكانية الكتابة فوقها بحيث يستحيل بعدها استعادة أي
										بيانات سابقة
									</li>
									<li>
										"File Explorer": يتيح إمكانية تصفح جميع ملفات الهاتف المحمول ثم حذفها
										بطريقة آمنة
									</li>
								</ul>
								<div className="image">
									<img src={shred2} alt="two" /> <br />
								</div>
							</div>
						</li>
						<li>
							عند الضغط على أي من الخيارين السابقين تظهر النافذة التالية:
							<div className="special">
								<ul className="shild-list">
									<li>
										وهي للسماح لتطبيق آي شريدير بالوصول إلى ملفات الهاتف المحمول وجهات
										الاتصال ليستطيع حذفها بشكل آمن
									</li>
									<li>
										نضغط على "PERMIT" ليتم تحويلنا إلى الصفحة التالية "في الخطوة التالية"
									</li>
								</ul>
								<div className="image">
									<img src={shred3} alt="three" />
								</div>
							</div>
						</li>
						<li>
							بعد الضغط على "PERMIT" يتم تحويلنا إلى الإعدادات:
							<div className="special">
								<ul className="shild-list">
									<li>
										نبحث عن تطبيق آي شريدير "iShredder" ونتأكد من تفعيل الخيار بجانبه بحيث
										يكون باللون الأزرق كما هو في الصورة
									</li>
									<li>نعود إلى التطبيق ونضغط على "PERMIT" مرة أخرى </li>
								</ul>
								<div className="image">
									<img src={shred4} alt="four" />
								</div>
							</div>
						</li>
						<li>
							نضغط على "PERMIT" مرة أخرى لتظهر النافذة التالية:
							<div className="special">
								<ul className="shild-list">
									<li>نضغط على "سماح" لنعطي للتطبيق صلاحية الوصول إلى جهات الاتصال</li>
								</ul>
								<div className="image">
									<img src={shred5} alt="five" />
								</div>
							</div>
						</li>
						<li>
							نضغط على أحد الخيارين الرئيسين:
							<div className="special">
								<ul className="shild-list">
									<li>
										"Selective erasing": لرؤية المساحة الفارغة المتاحة على الهاتف المحمول،
										والتي يوفر التطبيق إمكانية الكتابة فوقها بحيث يستحيل بعدها استعادة أي
										بيانات سابقة
									</li>
									<li>
										"File Explorer": يتيح إمكانية تصفح جميع ملفات الهاتف المحمول ثم حذفها
										بطريقة آمنة
									</li>
								</ul>
								<div className="image">
									<img src={shred2} alt="two" />
								</div>
							</div>
						</li>
						<li>
							نضغط على الخيار "Selective erasing" لتظهر الصفحة التالية:
							<div className="special">
								<ul className="shild-list">
									<li>نقوم بتحديد الخيارات المتاحة والتي نريد حذفها بشكل آمن</li>
									<li>نضغط على "SELECT DATA" ليتم نقلنا إلى الخطوة التالية</li>
								</ul>
								<div className="image">
									<img src={shred6} alt="six" />
								</div>
							</div>
						</li>
						<li>
							بعد الضغط على "SELECT DATA" في الصورة السابقة، تظهر الصفحة التالية:
							<div className="special">
								<ul className="shild-list">
									<li>
										نقوم بتحديد خوارزمية الحذف والكتابة فوق الملفات ليتم حذفها بطريقة
										آمنة، من الأفضل أن نختار الخيار "Random"
									</li>
								</ul>
								<div className="image">
									<img src={shred7} alt="seven" />
								</div>
							</div>
						</li>
						<li>
							بعد اختيار آلية أو خوارزمية الحذف الآمن، نضغط على "SELECT A METHOD" في
							الصورة السابقة لتظهر النافذة التالية:
							<div className="special">
								<ul className="shild-list">
									<li>
										نقوم بوضع علامة الصح ✓ لتأكيد الحذف الآمن، بحيث لن يمكن استعادة هذه
										الملفات، أو الملفات السابقة والتي سبق حذفها بشكل آمن.
									</li>
									<li>نضغط على "SHRED" وتعني بدأ الحذف أو الإتلاف</li>
								</ul>
								<div className="image">
									<img src={shred8} alt="eight" />
								</div>
							</div>
						</li>
						<li>
							تظهر الصفحة التالية ويظهر فيها عداد أو مؤشر على عملية الحذف، تستغرق بعض
							الوقت بحسب حجم الملفات التي تم اختيارها
							<div className="special">
								<ul className="shild-list">
									<li>
										في حال أردنا إيقاف عملية الحذف لأي سبب كان، نضغط على "STOP" أسفل
										الشاشة، لتظهر نافذة تسأل عن تأكيد إيقاف عملية الحذف، نضغط على "OK"
										لإيقاف الحذف
									</li>
								</ul>
								<div className="image">
									<img src={shred9} alt="nine" />
								</div>
							</div>
						</li>
						<li>
							عند اكتمال الحذف، تظهر الصفحة التالية، وتحتوي على تقرير الحذف:
							<div className="special">
								<ul className="shild-list">
									<li>
										ويحتوي التقرير على معلومات الوقت والتاريخ الخاص بعملية الحذف، طريقة
										الحذف والخورازيمة المستخدمة وغيرها من المعلومات
									</li>
									<li>نضغط على "GO HOME" للعودة إلى الصفحة الرئيسية للتطبيق</li>
								</ul>
								<div className="image">
									<img src={shred10} alt="ten" />
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className="incrypting" id="incrypting">
					<h3>3- اختيار ملفات معينة وحذفها بطريقة آمنة</h3>
					<ul className="main-list">
						<li>
							بالعودة إلى الصفحة الرئيسية للتطبيق بعد الضغط على "GO HOME" في الخطوة
							السابقة أو الخروج من التطبيق و العودة إليه مرة أخرى، تظهر الصفحة التالية:
							<div className="special">
								<ul className="child-list">
									<li>
										"Selective erasing": لرؤية المساحة الفارغة المتاحة على الهاتف المحمول،
										والتي يوفر التطبيق إمكانية الكتابة فوقها بحيث يستحيل بعدها استعادة أي
										بيانات سابقة
									</li>
									<li>
										"File Explorer": يتيح إمكانية تصفح جميع ملفات الهاتف المحمول ثم حذفها
										بطريقة آمنة
									</li>
								</ul>
								<div className="image">
									<img src={shred2} alt="two" />
								</div>
							</div>
						</li>
						<li>
							نقوم بالضغط على الخيار "File Explorer" لتصفح ملفات الهاتف المحمول، تظهر
							الصفحة التالية:
							<div className="special">
								<ul className="child-list">
									<li>الذاكرة الداخلية للهاتف المحمول، نقوم بالضغط عليها</li>
									<li>
										قد تظهر خيارات أخرى في حال كان لدينا قرص ذاكرة خارجية مدمج في الهاتف
										المحمول
									</li>
								</ul>
								<div className="image">
									<img src={shred11} alt="eleven" />
								</div>
							</div>
						</li>
						<li>
							بعد الضغط على خيار الذاكرة الداخلية في الخطوة السابقة، تظهر الصفحة التالية:
							<div className="special">
								<ul className="child-list">
									<li>
										تحتوي على جميع الملفات الموجودة على الهاتف المحمول ضمن الذاكرة
										الداخلية، والتي يستطيع التطبيق حذفها بشكل آمن
									</li>
									<li>
										نقوم بالبحث عن أي ملف نريد حذفه، كمثال: سنقوم بحذف ملف صوتي بالضغط على
										خيار "Music"
									</li>
								</ul>
								<div className="image">
									<img src={shred12} alt="twleve" />
								</div>
							</div>
						</li>
						<li>
							تظهر الصفحة التالية:
							<div className="special">
								<ul className="child-list">
									<li>
										نقوم باختيار الملف الصوتي الذي نريد حذفه ونضغط عليه لمدة طويلة حتى
										يظهر خيار الحذف كصورة صغيرة أعلى يمين الشاشة
									</li>
								</ul>
								<div className="image">
									<img src={shred13} alt="thirteen" />
								</div>
							</div>
						</li>
						<li>
							نضغط على خيار الحذف أعلى يمين الشاشة لتظهر النافذة التالية:
							<div className="special">
								<ul className="child-list">
									<li>
										نقوم بتحديد خوارزمية الحذف والكتابة فوق الملفات ليتم حذفها بطريقة
										آمنة، من الأفضل أن نختار الخيار "Random"
									</li>
								</ul>
								<div className="image">
									<img src={shred14} alt="fourteen" />
								</div>
							</div>
						</li>
						<li>
							بعد اختيار آلية أو خوارزمية الحذف، تظهر النافذة التالية لتأكيد عملية الحذف
							الآمن:
							<div className="special">
								<ul className="child-list">
									<li>
										نقوم بتفعيل الخيار الموجود في النافذة بوضع علامة الصح ✓ لتأكيد الحذف
										الآمن
									</li>
									<li>نضغط على "SHRED" لبدء عملية الحذف</li>
								</ul>
								<div className="image">
									<img src={shred15} alt="fifteen" />
								</div>
							</div>
						</li>
						<li>
							تظهر الصفحة التالية ويظهر فيها عداد أو مؤشر على عملية الحذف، تستغرق بعض
							الوقت بحسب حجم الملفات التي تم اختيارها
							<div className="special">
								<ul className="shild-list">
									<li>
										في حال أردنا إيقاف عملية الحذف لأي سبب كان، نضغط على "STOP" أسفل
										الشاشة، لتظهر نافذة تسأل عن تأكيد إيقاف عملية الحذف، نضغط على "OK"
										لإيقاف الحذف
									</li>
								</ul>
								<div className="image">
									<img src={shred16} alt="sixteen" />
								</div>
							</div>
						</li>
						<li>
							عند اكتمال الحذف، تظهر الصفحة التالية، وتحتوي على تقرير الحذف:
							<div className="special">
								<ul className="shild-list">
									<li>
										ويحتوي التقرير على معلومات الوقت والتاريخ الخاص بعملية الحذف، طريقة
										الحذف والخورازيمة المستخدمة وغيرها من المعلومات
									</li>
									<li>نضغط على "GO HOME" للعودة إلى الصفحة الرئيسية للتطبيق</li>
								</ul>
								<div className="image">
									<img src={shred10} alt="ten" />
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Ishredder;
