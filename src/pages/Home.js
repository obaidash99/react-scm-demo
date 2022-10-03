import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Footer from '../components/Footer';
import Applications from './Applications';

const Home = () => {
	return (
		<div className="home">
			<div dir="rtl" className="container">
				<div className="content">
					<h1>لماذا يجب أن نلتزم بتطبيقات محددة للتواصل؟</h1>
					<p>
						نظراً لأهمية وحساسية البيانات المرتبطة بطبيعة عمل المركز ولضمان توفر درجة جيدة
						من الأمن الرقمي لجميع الزملاء/الزميلات في المركز وحماية تواصلهم/ن الداخلي
						والخارجي يسعى القسم التقني لإيجاد الحلول المناسبة وتوفير الأدوات الضرورية
						لانجاز المهام المطلوبة والحفاظ على بيانات المركز وأفراده من أي أخطار محتملة
					</p>
					<hr />
					<h2>
						هذا التدريب يسلط الضوء على التحديات الرقمية الحالية والحلول المتوفرة والمقترحة
						من قبل القسم التقني
					</h2>
					<Link to="/applications">
						<FontAwesomeIcon icon="fa-solid fa-angles-down" className="go-down" />
					</Link>
				</div>
			</div>
			<Applications />
		</div>
	);
};

export default Home;
