import React from 'react';

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

const Eset = () => {
	return (
		<div className="main">
			<div className="container">
				<h1 className="main-title">VeraCrypt || فيراكربت</h1>
				<div className="content content-1">
					<div className="info">
						<p>
							الاسم: <span>فيراكربت</span>
							<br />
							المهمة: <span>تشفير</span> الملفات، الأقراص الصلبة، وحدات التخزين، نظام
							التشغيل
							<br />
							أنظمة التشغيل التي يعمل عليها: <span>ويندوز، ماك، لينكس</span>
							<br />
							الثمن: <span>مجاني</span>
						</p>
					</div>
					<div className="image">
						<img src="" alt="logo" />
					</div>
					<div className="how">
						<h3>كيف يعمل؟</h3>
						<p>
							يقوم فيرا كريبت بتشفير الملفات عبر إنشاء مجلد وهمي داخل جهاز الكمبيوتر، على
							شكل "ملف" محمي بكلمة سر، عند فتح "الملف" يتحول إلى "مجلد" يمكننا من أن نضع
							بداخله كافة الملفات والمجلدات التي نريد تشفيرها أو حمايتاه
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
						مختلفة،{' '}
						<span>يمكن تشبيه الملف أو الملفات بـ الكتب | وتشبيه المجلد بـ المكتبة</span>
					</q>
				</div>
				<div className="content content-3 info">
					<p>
						عند الإنتهاء من العمل على المجلد المشفر، نقوم بإغلاقه، فيعود إلى شكل ملف لا
						يمكن فتحه إلا عبر تطبيق فيرا كريبت وكلمة السر الخاصة به فقط
					</p>
					<h3>كما يمكن أيضاَ:</h3>
					<p>
						نقل أو نسخ المجلد المشفر ﻷي جهاز وعبر أي وسيلة تخزين أو إرساله ﻷي شخص في حال
						الرغبة بإرسال ملفات أو مجلدات مشفرة لشخص أو جهة ما{' '}
						<span>
							وإعطائهم كلمة السر بطريقة أٌخرى، حيث يمكنك إنشاء مجلد مشفر عبر فيراكريبت
							وإرساله إلى شخص أو جهة ما عبر البريد الإلكتروني، وإعطائهم كلمة السر عبر
							تطبيق تواصل آمن مثل Signal أو واتس آب
						</span>
					</p>
				</div>
			</div>
			<div className="container instructions">
				<div className="guid">
					<h3>يتكون هذا الدليل من ثلاثة أقسام رئيسية :</h3>
					<ul>
						<li>
							<a href="#installing">تنصيب برنامج فيرا كريبت</a>
						</li>
						<li>
							<a href="#creating">إنشاء حافظة\مجلد مشفر</a>
						</li>
						<li>
							<a href="#incrypting">تشفير الملفات والمجلدات </a>
						</li>
					</ul>
				</div>
				<div className="installing" id="installing">
					<h3>تنصيب برنامج فيرا كريبت</h3>
					<ul className="main-list">
						<li>
							الحصول على التطبيق:
							<ul className="child-list">
								<li>
									ﻷجهزة ويندوز من{' '}
									<span>
										<a href="https://launchpad.net/veracrypt/trunk/1.21/+download/VeraCrypt%20Setup%201.21.exe ">
											هنا
										</a>
									</span>
								</li>
								<li>
									ﻷجهزة ماك من{' '}
									<span>
										<a href="https://launchpad.net/veracrypt/trunk/1.21/+download/VeraCrypt_1.21.dmg ">
											هنا
										</a>
									</span>
								</li>
								<li>
									بعد تحميل التطبيق على الجهاز، وتشغيله، تظهر النافذة التالية
									<img src="" alt="one" />
								</li>
							</ul>
						</li>
						<li> نضغط على المربع بجانب عبارة "I accept the license" لتظهر اشارة [㇢]</li>
						<li>نضغط على "Next"</li>
						<li>
							نختار "Install" <br />
						</li>
						<li>
							نضغط على "Next" <br />
							<img src="" alt="two" /> <br />
							بعدها تبدأ عملية التنصيب <br />
							<img src="" alt="six" />
						</li>
						<li>
							نضغط على خيار "Install"
							<br />
							<img src="" alt="three" />
						</li>
						<li>
							عند الإنتهاء، تظهر الرسالة التالية، وتعني بأنه تم تنصيب البرنامج <br />
							نضغط على "OK" <br />
							<img src="" alt="four" /> <br />
							بعد الإنتهاء من تنصيب البرنامج، تظهر الرسالة التالية <br />
							<img src="" alt="five" /> <br />
							الخيار "Donate now" هو للتبرع للقائمات والقائمين على إعداد التطبيق
							<br />
						</li>
						<li>نضغط على خيار "Finish" ﻹنهاء الإعداد</li>
					</ul>
				</div>
				<div className="creating" id="creating">
					<h3>2- إنشاء حافظة\مجلد مشفر</h3>
					<ul className="main-list">
						بعد اكتمال تنصيب البرنامج على جهاز الكمبيوتر، نقوم بتشغيل البرنامج، عادةً يكون
						اختصار البرنامج موجود على سطح المكتب، أو ضمن قائمة "ابدأ" لأجهزة ويندوز أو
						قائمة البرامج لأجهزة ماك
						<br />
						بعد تشغيل البرنامج، تظهر النافذة التالية
						<br />
						<img src="" alt="seven" /> <br />
						<li>
							نضغط على خيار "Create Volume" لـ :
							<ul className="child-list">
								<li>إنشاء مجلد مشفر</li>
								<li>تشفير أحد الأقراص الداخلية في الجهاز أو وسائط التخزين الخارجية</li>
								<li>تشفير نظام التشغيل</li>
							</ul>
						</li>
						صفحة VeraCrypt Volume Creation Wizard <br />
						<img src="" alt="eight" />
						<ul className="child-list">
							<li>الخيار الأول: إنشاء حافظة\مجلد مشفر</li>
							<li>
								الخيار الثاني: تشفير Flash memory أو تشفير أحد الأقراص في جهاز الكمبيوتر
								"عدا القرص الذي يحوي نظام التشغيل"
							</li>
							<li>الخيار الثالث: تشفير نظام التشغيل بشكل كامل</li>
						</ul>
						حالياً، سوف نختار إنشاء مجلد مشفر
						<li>نختار الخيار الأول "Create an encrypted file container"</li>
						<li>نضغط على خيار "Next"</li>
						صفحة Volume Type <br />
						تحديد نوعية المجلد التي نريد انشائه <br />
						<img src="" alt="nine" /> <br />
						يوجد خياران:
						<ul className="child-list">
							<li>الأول: إنشاء مجلد مشفر</li>
							<li>الثاني: إنشاء مجلد مشفر مخفي</li>
						</ul>
						حالياً سوف نختار إنشاء مجلد مشفر
						<li>نختار "Standard veraCrypt volume"</li>
						<li>نضغط على خيار "Next"</li>
						صفحة Volume Location <br />
						تحديد المكان الذي نريد إنشاء المجلد فيه <br />
						<img src="" alt="ten" />
						<li>نضغط على "Select File"</li>
						نحدد المكان الذي نريد إنشاء المجلد فيه (سطح المكتب أو أي مكان آخر) <br />
						<img src="" alt="eleven" /> <br />
						<li>في حقل "File name" نكتب اسم المجلد التي نريد انشائه</li>
						<li>نضغط على خيار "Save"</li>
						<li>
							نضغط على خيار "Next" <br />
							<img src="" alt="twelve" />
						</li>
						صفحة Encryption Options <br />
						تحديد خوارزمية التشفير التي نريد استخدامها <br />
						<img src="" alt="thirteen" /> <br />
						<li>
							نختار الخوارزمية التي نريدها،
							<span> يمكن اختيار أي خوارزمية</span>
						</li>
						<li>نضغط على خيار "Next"</li>
						صفحة Volume Size <br />
						تحديد حجم المجلد التي نريد انشائه <br />
						<img src="" alt="fourteen" />
						<li>
							نكتب قيمة الحجم <br />
							<span>بعد إنشاء المجلد المشفر، لا يمكن تغيير حجمه</span>
						</li>
						<li>
							نختار مقياس الحجم: كيلو بايت - ميغا بايت - غيغا بايت - تيرا بايت
							<ul className="child-lisst">
								<li>كل 1000 كيلو بايت = 1 ميغا بايت</li>
								<li>كل 1000 ميغا بايت = 1 غيغا بايت</li>
								<li>كل 1000 غيغا بايت = 1 تيرا بايت</li>
							</ul>
						</li>
						<li>نضغط على "Next"</li>
						صفحة Volume Password <br />
						إنشاء كلمة سر للمجلد المشفر <br />
						<img src="" alt="fifteen" />
						<br />
						<li>ضمن خانة "Password" نضع كلمة السر التي نريدها</li>
						<li>ضمن خانة "Confirm" نقوم بإعادة كتابة كلمة السر مرة اُخرى</li>
						<span>
							يجب عدم نسيان أو فقدان كلمة السر، ﻷنه لا يوجد طريقة ﻹستعادة أو اعادة تعيين
							كلمة السر في حال فقدانها يمكن تغيير كلمة السر لاحقاً "بشرط وجود كلمة السر
							الحالية"
						</span>
						<li>بعد ادخال كلمة السر، نضغط على الخيار "Next"</li>
						<li>
							عند إدخال كلمة سر أقل من 20 خانة، ستظهر الرسالة التالية، نضغط على خيار "Yes"{' '}
							<br />
							<img src="" alt="sixteen" /> <br />
							صفحة Volume Format <br />
							تهيئة المجلد المشفر <br />
							<img src="" alt="seventeen" />
						</li>
						<li>نضغط على خيار "Format"</li>
						عند الإنتهاء من عملية التهيئة، تظهر الرسالة التالية، وتعني أن عملية إنشاء
						المجلد المشفر تمت بنجاح <br />
						<li>
							نضغط على خيار "OK" <br />
							<img src="" alt="eightteen" />
						</li>
						<span>
							يختلف الوقت الذي يستغرقه البرنامج بالتهيئة بحسب حجم المجلد الذي اخترناه
							(كلما زاد حجم المجلد، كلما زاد وقت التهيئة، كما يتعلق الأمر بمواصفات الجهاز
							الذي نعمل عليه)
						</span>{' '}
						<br />
						صفحة Volume Create <br />
						إنشاء مجلد جديدة مشفر <br />
						<img src="" alt="ninteen" /> <br />
						عند الرغبة بإنشاء مجلد مشفر جديد، نضغط على خيار "Next"، ونتابع الخطوات
						السابقة.
						<li>عند عدم الرغبة بإنشاء مجلد جديدة، نضغط على خيار "Exit"</li>
						<span>
							هكذا، نكون قد انشأنا مجلد مشفر، يمكننا استخدامه لحفظ كافة الملفات والمجلدات
							التي نريد تشفيرها
						</span>
					</ul>
				</div>
				<div className="incrypting" id="incrypting">
					<h3>3- تشفير الملفات والمجلدات</h3>
					<ul>
						بعد الإنتهاء من إنشاء مجلد مشفر، أو عند تشغيل برنامج "فيرا كريبت" من جديد،
						تظهر النافذة التالية: <br />
						<img src="" alt="twenty" /> <br />
						بالبداية يجب أن نقوم بفتح المجلد المشفر الذي انشأناه
						<li>نضغط على خيار "Select File"</li>
						نذهب إلى مكان وجود المجلد <br />
						<img src="" alt="twenty-one" /> <br />
						<li>نحدد المجلد الذي أنشأناه</li>
						<li>نضغط على خيار "Open"</li>
						بعد تحديد المجلد، سنقوم بتحديد اسم المجلد أو اسم القرص الذي ستفتح به <br />
						<img src="" alt="twenty-two" /> <br />
						<li>نحدد أي حرف من القائمة الموجودة</li>
						<li>نضغط على خيار "Mount"</li>
						يتم طلب كلمة السر <br />
						<img src="" alt="twenty-three" />
						<li>في حقل "Password" نضع كلمة السر الخاصة بالمجلد</li>
						<li>نضغط على خيار "OK"</li>
						ننتظر قليلاً ليتم فتح المجلد <br />
						<img src="" alt="twenty-four" /> <br />
						داخل "جهاز الكمبيوتر" نجد المجلد الذي انشأناه في هذا المثال، المجلد اسمه "M"{' '}
						<br />
						<img src="" alt="twenty-five" /> <br />
						عند الضغط على المجلد داخل جهاز الكمبيوتر، يفتح كما في الصورة التالية <br />
						<img src="" alt="twenty-six" /> <br />
						الآن، بعد إنشاء وفتح المجلد المشفر، يمكننا استخدامه عن طريق وضع كافة الملفات
						والمجلدات التي نريد تشفيرها وحمايتها بداخله <br />
						<span>
							جميع الملفات والمجلدات التي توضع داخل المجلد، تكون مشفرة ومحمية
						</span>{' '}
						<br />
						بعد الإنتهاء من العمل على المجلد، وعندما نريد إغلاقه، نعود للصفحة الرئيسية
						لبرنامج "فيرا كريبت" <br />
						<img src="" alt="twenty-secen" />
						<li>نحدد اسم المجلد</li>
						<li>ضغط على الخيار "Dismount"</li>
					</ul>
					<h3>
						<a
							href="https://drive.google.com/file/d/194tqbDrOiOVSDzNO11LBp7fmGl85q4uK/view"
							target="_blank"
							rel="noreferrer"
						>
							فيديو شرح طريقة تنصيب وعمل برنامج فيرا كريبت Vera Crypt
						</a>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Eset;
