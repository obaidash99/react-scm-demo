import React from 'react';
import logo from '../assets/veracrypt.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Veracrypt = () => {
	return (
		<div className="main">
			<div className="container">
				<h1 className="main-title">VeraCrypt || فيراكربت</h1>
				<div className="content">
					<div className="info">
						<ul>
							<li>
								الاسم: <span>فيراكربت</span>
							</li>
							<li>
								المهمة: <span>تشفير</span> الملفات، الأقراص الصلبة، وحدات التخزين، نظام
								التشغيل
							</li>
							<li>
								أنظمة التشغيل التي يعمل عليها: <span>ويندوز، ماك، لينكس</span>
							</li>
							<li>
								الثمن: <span>مجاني</span>
							</li>
						</ul>
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
				<div className="differnce info">
					<h3>ما هو الفرق بين المجلد والملف؟</h3>
					<q>
						<span>الملف:</span> هو مكان لتخزين البيانات، مثل: ملف وورد، ملف جداول اكسل
						صورة، أغنية
					</q>
					<q>
						<span>المجلد:</span> هو مكان لتخزين الملفات، يمكن للمجلد أن يحتوي ملفات مختلفة
						*يمكن تشبيه الملف أو الملفات بـ الكتب | وتشبيه المجلد بـ المكتبة
					</q>
				</div>
				<Link to="/applications">
					<FontAwesomeIcon icon="fa-solid fa-angles-down" className="go-down" />
				</Link>
			</div>
		</div>
	);
};

export default Veracrypt;
