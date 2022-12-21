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
							<a href="#creating">طريقة الحذف الآمن</a>
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
										بعد تحميل التطبيق على الجهاز، وتشغيله، تظهر النافذة التالية <br />
										نضغط على "Next" <br />
										<div className="image">
											<img src={shred1} alt="one" />
										</div>
									</div>
								</li>
							</ul>
						</li>
						<li>
							<span>
								نضغط على المربع بجانب عبارة "I accept the terms in the license Agreement"
								لتظهر اشارة [㇢]
							</span>
							<br />
							ثم نضغط على الخيار Next <br />
							<img alt="two" /> <br />
						</li>
						<li>
							{' '}
							نضغط على الخيار Typical <br />
							<img alt="three" />
						</li>
						<li>
							نضغط على خيار "Install"
							<br />
							<img alt="four" />
						</li>
						<li>
							عند الإنتهاء، تظهر الرسالة التالية، وتعني بأنه تم تنصيب البرنامج <br />
							<span>
								عند تفعيل الخيار "Run Eraser" فإن البرنامج سوف يعمل عند الضغط على خيار
								"Finish"
							</span>{' '}
							<br />
							<img alt="five" /> <br />
						</li>
						<li>
							بعد تشغيل البرنامج، نقوم بضبط الإعدادات، من النافذة الرئيسية للبرنامج، نضغط
							على الخيار "Settings" <br />
							<img alt="six" />
						</li>
						من صفحة "Settings" سنقوم بضبط اﻹعدادت الافتراضية لعملية الحذف <br />
						<span>
							يقوم الحذف الآمن على طريقة، حذف الملف أو الملفات، ثم الكتابة فوقها عدة مرات
							متتالية ببيانات ذات نمط مناسب، لتكون عملية الإسترجاع صعبة جداً إن لم تكن
							مستحيلة
						</span>{' '}
						<br />
						يقدم برنامج"إيريزر | Eraser" خيار الكتابة مرة أو 2 أو 3 أو 7 أو 35 مرة فوف
						الملف الذي يتم حذفه، كلما زاد عدد مرات الكتابة فوق الملف المحذوف، تتعقد عملية
						استعادة الملف، ويأخذ حذف الملف وقت أطول بحسب حجمه
						<li>
							من الخيار "Default file erasure method" نحدد خوارزمية وعدد المرات التي نريد
							أن يتم بها الكتابة فوق الملف الذي نريد حذفه <br />
							<span>الخيار الأفضل هو Gutmann بحيث يقوم بالكتابة 35 مرة</span> <br />
							يمكن الاختيار بينه وبين الخيارات الاُخرى التي تقوم بالكتابة بين 3 و 7 مرات
							<img alt="seven" /> <br />
						</li>
						<li>
							بعد تحديد الخيار، نقوم بحفظ الإعدادات عبر الضغط على الخيار "Save Settings"
							في أعلى الصفحة
						</li>
					</ul>
				</div>
				<div className="creating" id="creating">
					<h3>2- حذف ملف عن طريق البرنامج</h3>
					<ul className="main-list">
						بعد حفظ الاعدادات، نقوم بإغلاق البرنامج
						<li>
							الآن، لحذف أي ملف أو مجلد بطريقة آمنة، نضغط بالزر اليمين على أي ملف أو مجلد{' '}
							<br />
							<span>نضغط على الخيار Eraser من القائمة</span>
							<ul className="child-list">
								عند الضغط على الخيار Eraser يظهر خياران:
								<li>الخيار: Erase | يقوم بعملية الحذف فوراً</li>
								<li>
									الخيار: Erase on Restart | يقوم بعملية الحذف عند إعادة تشغيل جهاز
									الكمبيوتر
								</li>
							</ul>
							<img alt="eight" /> <br />
							<span>
								يعتمد الوقت الذي يحتاجه البرنامج لحذف الملف أو المجلد، على حجم الملف أو
								المجلد وعلى عدد مرات الكتابة فوق الملف المحذوف، التي اخترناها في الاعدادات
							</span>
						</li>
					</ul>
				</div>
				<div className="incrypting" id="incrypting">
					<h3>3- جدولة بعض الملفات للحذف</h3>
					<ul className="main-list">
						يمكن إضافة (جدولة) حذف عدد من الملفات والمجلدات وخيارات اُخرى <br />
						<li>
							من الصفحة الرئيسية للبرنامج، نضغط باليمين داخل المساحة البيضاء، ثم نضغط على
							الخيار "New Task" <br />
							<img alt="nine" />
						</li>
						<li>
							<div className="special">
								<ul className="child-list">
									تظهر الصفحة التالية: نضغط على الخيار" Add Data" <br />
								</ul>
								<div className="image">
									<img alt="ten" />
								</div>
							</div>
						</li>
						<li>
							<div className="special">
								<ul className="child-list">
									تظهر الصفحة التالية "Select Data to Erase" <br />
									<li>
										الخيار File: لتحديد ملف <br />
										<span>يتم تحديد الملف من الخيار Browse</span>
									</li>
									<li>
										الخيار Files in folder: تحديد عدة ملفات داخل المجلد <br />
										<span>يتم تحديد الملفات من الخيار Browse</span>
									</li>
									<li>
										الخيار Unused disk space: لحذف (تنظيف) المساحة الفارغة في أحد الأقراص
										الصلبة أو وحدة التخزين (فلاش ميموري)
										<span>
											يستخدم هذا الخيار، لتدمير الملفات والمجلدات التي تم حذفها بالطريقة
											التقليدية، قبل تنصيب برنامج "إيريزر"
										</span>
									</li>
									<li>
										خيار Recycle Bin: لحذف الملفات والمجلدات التي داخل "سلة المحذوفات"
									</li>
								</ul>
								<div className="image">
									<img alt="eleven" />
								</div>
							</div>
						</li>
						<li>
							<div className="special">
								<ul className="child-list">
									بعد تحديد الخيار المناسب. <br />
									<li>
										نذهب إلى Erasure method حيث يمكننا تحديد عدد مرات الكتابة فوق الملف أو
										المجلد
									</li>
									<span>
										عند اختيار أو ترك الخيار "Default" فإنه يتم اعتماد الإعداد التي
										وضعناها في الاعدادات سابقاً
									</span>
									<li>ثم نضغط على خيار "OK"</li>
								</ul>
								<div className="image">
									<img alt="twelve" />
								</div>
							</div>
						</li>
						<li>
							<div className="special">
								<ul className="child-list">
									<span>في الفقرة "Task Type"</span>
									<li>Run manually: يتم البدء بعملية الحذف يدوياً</li>
									<li>Run immediately: يتم البدء بعملية الحذف فوراً</li>
									<li>
										Run on restart: يتم البدء بعملية الحذف عند إعادة تشغيل الكمبيوتر
									</li>
									<span>الفقرة "Data to erase" تعرف المهام التي اخترناها</span>
									<li>بعد الإنتهاء نضغط على الخيار "OK"</li>
								</ul>
								<div className="image">
									<img alt="therteen" />
								</div>
							</div>
						</li>
						<li>
							تظهر الصفحة الرئيسية <br />
							<img alt="fourteen" /> <br />
							إن كنا اخترنا الخيار "Run immediately" فسيتم فوراً البدء بعملية الحذف، كما
							في الصورة السابقة <br />
							إن كنا اخترنا الخيار "Run manually" يجب أن نضغط بالزر اليمين على المهمة
							واختيار الخيار "Run" <br />
						</li>
						<li>
							<span>عند الإنتهاء من مهمة الحذف، تظهر عبارة Completed</span> <br />
							<img alt="fifteen" />
						</li>
					</ul>
					<h3>
						<a
							href="https://drive.google.com/file/d/1nPc9kM9DMmEX-jARplYa5X5q9742BWiI/view"
							target="_blank"
							rel="noreferrer"
						>
							فيديو شرح طريقة تنصيب وعمل برنامج إيريزر | Eraser
						</a>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Ishredder;
