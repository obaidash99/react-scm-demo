import React from 'react';
import Footer from './Footer';

import logo from '../assets/eraserImgs/eraser-logo.png';
import one from '../assets/eraserImgs/img1.jpg';
import two from '../assets/eraserImgs/img2.jpg';
import three from '../assets/eraserImgs/img3.jpg';
import four from '../assets/eraserImgs/img4.jpg';
import five from '../assets/eraserImgs/img5.jpg';
import six from '../assets/eraserImgs/img6.jpg';
import seven from '../assets/eraserImgs/img7.jpg';
import eight from '../assets/eraserImgs/img8.jpg';
import nine from '../assets/eraserImgs/img9.jpg';
import ten from '../assets/eraserImgs/img10.jpg';
import eleven from '../assets/eraserImgs/img11.jpg';
import twelve from '../assets/eraserImgs/img12.jpg';
import thirteen from '../assets/eraserImgs/img13.jpg';
import fourteen from '../assets/eraserImgs/img14.jpg';
import fifteen from '../assets/eraserImgs/img15.jpg';

const Eraser = () => {
	return (
		<div className="main eraser">
			<div className="container">
				<h1 className="main-title">Eraser || ايرايسر</h1>
				<div className="content content-1">
					<div className="info">
						<p>
							الاسم: <span>ايرايسر</span>
							<br />
							المهمة: <span>حذف</span> المجلدات والملفات بشكل آمن من جهاز الكمبيوتر ووسائط
							التخزين
							<br />
							أنظمة التشغيل التي يعمل عليها: <span>ويندوز</span>
							<br />
							الثمن: <span>مجاني</span>
						</p>
					</div>
					<div className="image">
						<img src={logo} alt="logo" />
					</div>
					<div className="how">
						<h3>كيف يعمل؟</h3>
						<p>
							يقوم بحذف أيقونة الملف/المجلد وتشويه البيانات بشكل معقد حيث يصعب من إمكانية
							استرجاعها عن طريق أي برنامج
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
					<h3>ما الفرق بين الحذف العادي والحذف عن طريق ايرايسر؟</h3>
					<q>
						عندما يتم حذف أي ملف <span>بشكل عادي</span> يقوم نظام التشغيل بحذف أيقونة
						الملف من واجهة المستخدم، بمعنى تقني:
						<span>
							يقوم بحذف مؤشر/رابط أيقونة الملف/المجلد مع مكان تواجده على القرص الصلب
						</span>
					</q>
					<q>
						يقوم <span>ايرايسر</span> بحذف أيقونة الملف/المجلد وتشويه البيانات بشكل معقد
						حيث يصعب من إمكانية استرجاعها عن طريق أي برنامج،
						<span>
							تتم عملية تشويه البيانات من خلال كتابة بيانات وهمية عدة مرات فوق البيانات
							المراد حذفها ينصح بتحديد خوارزمية الكتابة 7 مرات أقل شيء للوصول لنسبة تشويه
							مقبولة
						</span>
					</q>
				</div>
			</div>
			<div className="container instructions">
				<div className="disc">
					<div className="one">
						<h3>الحذف الآمن</h3>
						<ul className="child-list">
							ما هي الطريقة لحذف ملف أو مجلد من جهاز الكمبيوتر أو من وحدة التخزين (فلاش
							ميموري)؟
							<li>حذف (ديليت)</li>
							<li>Shift + Delete</li>
							<li>النقل إلى سلة المحذوفات، ثم إفراغ سلة المحذوفات</li>
						</ul>
						<ul className="child-list">
							ما هي الطريقة لحذف كافة الملفات والمجلدات من جهاز الكمبيوتر أو وحدة التخزين
							(فلاش ميموري)؟
							<li>فرمتة الجهاز أو وحدة التخزين Format</li>
						</ul>
					</div>
				</div>
				<div className="disc">
					<div className="one">
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
				<div className="disc">
					<div className="one">
						<h3>استرجاع ملفات حُذفت بشكل عادي!</h3>
						<p>
							عملية استرجاع أو استعادة الملفات المحذوفة من الكمبيوتر أو وحدة التخزين، يمكن
							أن تتم عبر برامج بسيطة ومجانية ومتوفر، لذلك، فإن جميع خيارات الحذف السابقة
							أو الشائعة (ديليت - شيفت + ديليت -النقل إلى سلة المحذوفات - إفراغ سلة
							المحذوفات - فرمتة الجهاز) <span>هي عمليات حذف غير آمنة</span>
						</p>
					</div>
					<div className="two">
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
			<div className="container instructions">
				<div className="guid">
					<h3>يتكون هذا الدليل من ثلاثة أقسام رئيسية :</h3>
					<ul>
						<li>
							<a href="#installing">تنصيب "إيريزر | Eraser" على جهاز الكمبيوتر</a>
						</li>
						<li>
							<a href="#creating">طريقة الحذف الآمن</a>
						</li>
						<li>
							<a href="#incrypting">جدولة بعض الملفات للحذف</a>
						</li>
					</ul>
				</div>
				<div className="installing" id="installing">
					<h3>1- تنصيب برنامج ايرايزر</h3>
					<ul className="main-list">
						<li>
							الحصول على التطبيق:
							<ul className="child-list">
								<li>
									لأجهزة ويندوز من{' '}
									<span>
										<a
											target="_blank"
											rel="noreferrer"
											href="https://sourceforge.net/projects/eraser/files/Eraser%206/6.2/Eraser%206.2.0.2982.exe/download"
										>
											هنا
										</a>
									</span>{' '}
									أو من{' '}
									<span>
										<a
											target="_blank"
											href="https://eraser.heidi.ie/download/"
											rel="noreferrer"
										>
											موقع التطبيق{' '}
										</a>
									</span>
								</li>
								<li>
									بعد تحميل التطبيق على الجهاز، وتشغيله، تظهر النافذة التالية <br />
									نضغط على "Next" <br />
									<img src={one} alt="one" />
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
							<img src={two} alt="two" /> <br />
						</li>
						<li>
							{' '}
							نضغط على الخيار Typical <br />
							<img src={three} alt="three" />
						</li>
						<li>
							نضغط على خيار "Install"
							<br />
							<img src={four} alt="four" />
						</li>
						<li>
							عند الإنتهاء، تظهر الرسالة التالية، وتعني بأنه تم تنصيب البرنامج <br />
							<span>
								عند تفعيل الخيار "Run Eraser" فإن البرنامج سوف يعمل عند الضغط على خيار
								"Finish"
							</span>{' '}
							<br />
							<img src={five} alt="five" /> <br />
						</li>
						<li>
							بعد تشغيل البرنامج، نقوم بضبط الإعدادات، من النافذة الرئيسية للبرنامج، نضغط
							على الخيار "Settings" <br />
							<img src={six} alt="six" />
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
							<img src={seven} alt="seven" /> <br />
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
							<img src={eight} alt="eight" /> <br />
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
							<img src={nine} alt="nine" />
						</li>
						<li>
							تظهر الصفحة التالية: نضغط على الخيار" Add Data" <br />
							<img src={ten} alt="ten" />
						</li>
						تظهر الصفحة التالية "Select Data to Erase" <br />
						<img src={eleven} alt="eleven" />
						<li>
							الخيار File: لتحديد ملف <br />
							<span>يتم تحديد الملف من الخيار Browse</span>
						</li>
						<li>
							الخيار Files in folder: تحديد عدة ملفات داخل المجلد <br />
							<span>يتم تحديد الملفات من الخيار Browse</span>
						</li>
						<li>
							الخيار Unused disk space: لحذف (تنظيف) المساحة الفارغة في أحد الأقراص الصلبة
							أو وحدة التخزين (فلاش ميموري)
							<span>
								يستخدم هذا الخيار، لتدمير الملفات والمجلدات التي تم حذفها بالطريقة
								التقليدية، قبل تنصيب برنامج "إيريزر"
							</span>
						</li>
						<li>خيار Recycle Bin: لحذف الملفات والمجلدات التي داخل "سلة المحذوفات"</li>
						بعد تحديد الخيار المناسب.
						<li>
							نذهب إلى Erasure method حيث يمكننا تحديد عدد مرات الكتابة فوق الملف أو
							المجلد
							<br />
							<span>
								عند اختيار أو ترك الخيار "Default" فإنه يتم اعتماد الإعداد التي وضعناها في
								الاعدادات سابقاً
							</span>{' '}
							<br />
							<img src={twelve} alt="twelve" />
						</li>
						<li>ثم نضغط على خيار "OK"</li>
						<ul className="child-list">
							<span>في الفقرة "Task Type"</span>
							<li>Run manually: يتم البدء بعملية الحذف يدوياً</li>
							<li>Run immediately: يتم البدء بعملية الحذف فوراً</li>
							<li>Run on restart: يتم البدء بعملية الحذف عند إعادة تشغيل الكمبيوتر</li>
						</ul>
						<img src={thirteen} alt="therteen" /> <br />
						<span>الفقرة "Data to erase" تعرف المهام التي اخترناها</span>
						<li>بعد الإنتهاء نضغط على الخيار "OK"</li>
						تظهر الصفحة الرئيسية <br />
						<img src={fourteen} alt="fourteen" /> <br />
						إن كنا اخترنا الخيار "Run immediately" فسيتم فوراً البدء بعملية الحذف، كما في
						الصورة السابقة <br />
						إن كنا اخترنا الخيار "Run manually" يجب أن نضغط بالزر اليمين على المهمة
						واختيار الخيار "Run" <br />
						<span>عند الإنتهاء من مهمة الحذف، تظهر عبارة Completed</span> <br />
						<img src={fifteen} alt="fifteen" />
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
			<Footer />
		</div>
	);
};

export default Eraser;
