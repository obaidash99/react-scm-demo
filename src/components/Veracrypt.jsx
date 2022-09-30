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
							بداخله كافة الملفات والمجلدات التي نريد تشفيرها أو حمايتاه،
						</p>
					</div>
				</div>
				<Link to="/applications">
					<FontAwesomeIcon icon="fa-solid fa-angles-down" className="go-down" />
				</Link>
			</div>
		</div>
	);
};

export default Veracrypt;
