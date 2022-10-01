import React from 'react';
import logo from '../assets/veracrypt.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import one from '../assets/veraCryptImgs/img1-1.jpg';
import two from '../assets/veraCryptImgs/img1-2.jpg';
import three from '../assets/veraCryptImgs/img1-3.jpg';
import four from '../assets/veraCryptImgs/img1-4.jpg';
import five from '../assets/veraCryptImgs/img1-5.jpg';
import six from '../assets/veraCryptImgs/img1-33.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';
// import one from '../assets/veraCryptImgs/img1-1.jpg';

const Veracrypt = () => {
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
						<img src={logo} alt="logo" />
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
					<Link to="">
						<FontAwesomeIcon icon="fa-solid fa-angles-down" className="go-down" />
					</Link>
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
				<div className="intro">
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
									<img src={one} alt="one" />
								</li>
							</ul>
						</li>
						<li> نضغط على المربع بجانب عبارة "I accept the license" لتظهر اشارة [㇢]</li>
						<li>نضغط على "Next"</li>
						<li>
							نختار "Install" <br />
							<img src={three} alt="three" />
						</li>
						<li>
							نضغط على "Next" <br />
							<img src={two} alt="two" /> <br />
							بعدها تبدأ عملية التنصيب <br />
							<img src={six} alt="seven" />
						</li>
						<li>
							عند الإنتهاء، تظهر الرسالة التالية، وتعني بأنه تم تنصيب البرنامج <br />
							نضغط على "OK" <br />
							<img src={four} alt="four" />
						</li>
					</ul>
				</div>
				<div className="creating" id="creating"></div>
				<div className="incrypting" id="incrypting"></div>
			</div>
		</div>
	);
};

export default Veracrypt;
