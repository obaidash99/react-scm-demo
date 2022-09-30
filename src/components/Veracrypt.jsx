import React from 'react';
import logo from '../assets/veracrypt.png';

const Veracrypt = () => {
	return (
		<div className="main">
			<div className="container">
				<h1 className="main-title">VeraCrypt || فيراكربت</h1>
				<div className="content">
					<div className="info">
						<p>
							الاسم: <span>فيراكربت</span>
						</p>
						<p>
							المهمة: <span>تشفير</span> الملفات، الأقراص الصلبة، وحدات التخزين، نظام
							التشغيل
						</p>
						<p>
							أنظمة التشغيل التي يعمل عليها: <span>ويندوز، ماك، لينكس</span>
						</p>
						<p>
							الثمن: <span>مجاني</span>
						</p>
					</div>
					<div className="image">
						<img src={logo} alt="logo" width="300px" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Veracrypt;
