import React from 'react';

import logo from '../assets/workspace.png';

import cal1 from '../assets/workspaceImgs/cal1.png';
import cal2 from '../assets/workspaceImgs/cal2.png';
import cal4 from '../assets/workspaceImgs/cal4.png';

import chat1 from '../assets/workspaceImgs/chat1.png';
import chat2 from '../assets/workspaceImgs/chat2.png';

import drive1 from '../assets/workspaceImgs/drive1.png';
import drive2 from '../assets/workspaceImgs/drive2.png';
import drive3 from '../assets/workspaceImgs/drive3.png';
import drive4 from '../assets/workspaceImgs/drive4.png';
import drive5 from '../assets/workspaceImgs/drive5.png';

import gmail1 from '../assets/workspaceImgs/gmail1.png';
import gmail2 from '../assets/workspaceImgs/gmail2.png';
import gmail3 from '../assets/workspaceImgs/gmail3.png';
import gmail4 from '../assets/workspaceImgs/gmail4.png';
import gmail5 from '../assets/workspaceImgs/gmail5.png';

import meet1 from '../assets/workspaceImgs/meet1.png';
import meet2 from '../assets/workspaceImgs/meet2.png';
import meet3 from '../assets/workspaceImgs/meet3.png';

const Workspace = () => {
	return (
		<div class="main workspace">
			<div class="container">
				<h1 class="main-title">Google Workspace || جوجل وورك سبيس</h1>
				<div class="content content-1">
					<div class="info">
						<p>
							الاسم: <span>جوجل وورك سبيس</span>
							<br />
							المهمة: <span>خدمات</span> عدة تقدمها جوجل لتسهيل عملية التواصل وتخزين
							البيانات
							<br />
							أنظمة التشغيل التي يعمل عليها: <span>ويندوز، ماك أندرويد، آيفون "IOS"</span>
							<br />
							الثمن: <span>مجاني</span>
						</p>
					</div>
					<div class="image">
						<img src={logo} alt="logo" />
					</div>
					<div class="how">
						<h3>أهم الخدمات التي يقدمها:</h3>
						<div class="a-links">
							<ul class="child-list apps">
								<li>
									<a href="#gmail">Gmail</a>
								</li>
								<li>
									<a href="#calender">Calender</a>
								</li>
								<li>
									<a href="#meet">Google Meet</a>
								</li>
								<li>
									<a href="#drive">Google Drive</a>
								</li>
								<li>
									<a href="#chat">Chat</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="content content-2 info" id="gmail">
					<h3>
						خدمة جيميل أو البريد الإلكتروني{' '}
						<a
							href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
							target="_blank"
							rel="noreferrer"
						>
							"Gmail"
						</a>
					</h3>
					<ul class="child-list new">
						تظهر الصفحة التالية عند الدخول إلى Gmail وهي الواجهة الرئيسية للبريد
						الإلكتروني <br />
						<img src={gmail1} alt="one" />
						<li>
							لكتابة إيميل جديد وإرساله أو لتصفح البريد المرسل أو الوارد <br />
							<img src={gmail2} alt="two" />
						</li>
						<li>
							للدخول إلى Google Chat لإرسال رسالة عادية إلى إحدى جهات الاتصال،{' '}
							<span>
								قد تظهر الرسالة التالية أسفل الشاشة وهي لتفعيل إشعارات سطح المكتب، يمكن
								تفعيلها أو إلغاؤها حسب الرغبة
							</span>{' '}
							<br />
							<img src={gmail3} alt="three" />
						</li>
						<li>
							لإنشاء غرفة محادثة جديدة أو للانضمام إلى غرفة موجودة مسبقاً <br />
							<img src={gmail4} alt="four" />
						</li>
						<li>
							{' '}
							للذهاب إلى Google Meet لإنشاء اتصال أو مكالمة فيديو
							<img src={gmail5} alt="five" />
						</li>
					</ul>
				</div>

				<div class="content content-2 info" id="calender">
					<h3>
						خدمة التقويم من جوجل{' '}
						<a
							href="https://calendar.google.com/calendar/u/0/r?tab=rc"
							target="_blank"
							rel="noreferrer"
						>
							"Calender"
						</a>
					</h3>
					<ul class="child-list new">
						تظهر الصفحة التالية عند الدخول إلى Calender وهي الواجهة الرئيسية للتقويم من
						جوجل <br />
						<li>
							<ul class="child-list">
								<li>لتغيير طريقة عرض التقويم بحيث يكون أسبوعيا أو شهريا أو غير ذلك</li>
								<li>
									نضغط على النقطة الحمراء مكان المربع الخاص باليوم والساعة في الوقت الحالي
									لإضافة حدث ما أو غيره
								</li>
								<li>لإنشاء حدث أو غيره</li>
								<img src={cal1} alt="one" />
							</ul>
						</li>
						<li>
							<span>
								بعد الضغط على علامة إنشاء حدث جديد كما في الخطوة رقم "2" سابقاً، تظهر
								النافذة التالية:
							</span>
							<br />
							<ul class="child-list">
								<li>لإضافة عنوان للحدث</li>
								<li>لاختيار نوع الحدث أو غيره</li>
								<li>
									لإضافة رابط لجوجل ميت في حال كان الحدث عبارة عن مكالمة أو اجتماع أو غيره
								</li>
								<img src={cal2} alt="two" />
								<li>
									عند الضغط على خيارات إضافية تظهر صفحة لإضافة تفاصيل أكثر عن الحدث
									كالتالي:
									<ul class="child-list">
										<li>لإضافة أشخاص إلى الحدث</li>
										<li>
											لإرسال إشعار تذكير قبل موعد الحدث بعشر دقائق على سبيل المثال، ويمكن
											تغيير الوقت من المكان المخصص
										</li>
										<li>لاختيار المنطقة الزمنية</li>
										<li>لإضافة وصف أو تفاصيل معينة أخرى عن الحدث</li>
										<img src={cal4} alt="four" />
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</div>

				<div class="content content-2 info" id="meet">
					<h3>
						خدمة الاتصال ومكالمات الفيديو من جوجل{' '}
						<a
							href="https://meet.google.com/?hs=197&pli=1&authuser=0"
							target="_blank"
							rel="noreferrer"
						>
							"Google Meet"
						</a>
					</h3>
					<ul class="child-list new">
						تظهر الصفحة التالية عند الدخول إلى Googe Meet وهي الواجهة الرئيسية لجوجل ميت{' '}
						<br />
						<li>
							<ul class="child-list">
								<li>
									ندخل اسم الاجتماع الذي نريد الانضمام إليه، نحصلع على هذا الاسم من الشخص
									الذي دعانا إلى الاجتماع أو المكالمة
								</li>
								<li>
									نضغط على "الانضمام" للانضمام إلى المكالمة، هذا في حال كنا نريد الانضمام
									إلى مكالمة موجودة بالفعل
								</li>
								<li>
									إذا كنا نريد إنشاء مكالمة جديدة، نكتب الاسم في الحقل المخصص ثم نضغط على
									"اجتماع جديد"
								</li>
								<img src={meet1} alt="one" />
							</ul>
						</li>
						<li>
							<span>
								بعد الضغط على "اجتماع جديد" في القائمة السابقة، تظهر النافذة التالية:
							</span>
							<br />
							<ul class="child-list">
								<li>
									لإنشاء اجتماع في وقت لاحق، ثم أخذ الرابط الذي يظهر في النافذة وإرساله
									إلى من الأشخاص المنضمين
								</li>
								<li>لبدء اجتماع فوري</li>
								<li>
									لإضافة هذا الاجتماع إلى التقويم الخاص بجوجل ثم إنشاء حدث يخص هذا
									الاجتماع
								</li>
								<img src={meet2} alt="two" />
								<li>
									عند الضغط على "اجتماع لوقت لاحق" تظهر النافذة التالية، نقوم بنسخ الرابط
									الموجود وإرساله لمن يريد الانضمام:
									<img src={meet3} alt="three" />
								</li>
							</ul>
						</li>
					</ul>
				</div>

				<div class="content content-2 info" id="drive">
					<h3>
						خدمة إدارة الملفات من جوجل{' '}
						<a
							href="https://drive.google.com/drive/my-drive"
							target="_blank"
							rel="noreferrer"
						>
							"Google Drive"
						</a>
					</h3>
					<ul class="child-list new">
						تظهر الصفحة التالية عند الدخول إلى Googel Drive وهي الواجهة الرئيسية لجوجل
						درايف <br />
						<li>
							<ul class="child-list">
								<li>لإنشاء ملف أو مجلد جديد</li>
								<li>يحتوي على أكثر الملفات التي تم فتحها</li>
								<li>يحتوي على الملفات الخاصة بي</li>
								<li>يحتوي على الملفات التي تم مشاركتها معي</li>
								<li>يحتوي على المفات التي عملت عليها مؤخراً</li>
								<li>يحتوي على الملفات التي تم تمييزها بعلامة النجمة</li>
								<li>سلة المهملات</li>
								<img src={drive1} alt="one" />
							</ul>
						</li>
						<li>
							<span>
								عند الضغط على "جديد" كما في الخطوة رقم "1" سابقاً، تظهر النافذة التالية:
							</span>
							<br />
							<ul class="child-list">
								<li>ﻹنشاء مجلد جديد</li>
								<li>لتحميل ملف من جهاز الكمبيوتر إلى غوغل درايف</li>
								<li>لتحميل مجلد من جهاز الكمبيوتر إلى غوغل درايف</li>
								<li>ﻹنشاء مستند نصي (شبيه بملف مايكروسوفت وورد)</li>
								<li>ﻹنشاء جدول بيانات (شبيه بملف مايكروسوفت اكسل)</li>
								<li>ﻹنشاء ملف عرض تقديمي (شبيه بملف مايكروسوفت بوربوينت)</li>
								<li>لإنشاء نموذج أو فورم (يحتوي على أسئلة وأجوبة)</li>
								<img src={drive2} alt="two" />
							</ul>
						</li>
						<li>
							<span>
								لمشاركة ملف مع شخص آخر، نضغط بزر الفأرة اليمين على الملف، ونختار مشاركة
								كما الصروة التالية:
							</span>{' '}
							<br />
							<ul class="child-list">
								<img src={drive3} alt="three" />
							</ul>
						</li>
						<li>
							<span>تظهر النافذة التالية:</span> <br />
							<ul class="child-list">
								<li>نكتب ايميل الشخص الذي نريد مشاركة الملف معه</li>
								<li>"حصري": تعني أن الملف سيفتح مع الشخص المذكور أعلاه فقط</li>
								<li>
									"المركز السوري للإعلام وحرية التعبير": وتعني أن أي شخص ينتمي للمركز
									يستطيع فتح الملف
								</li>
								<li>
									"أي شخص لديه الرابط": وتعني أن أي شخص يحصل على رابط الملف يستطيع فتحه
								</li>
								<img src={drive4} alt="four" />
							</ul>
						</li>
						<li>
							<span>
								بعد تحدد الأشخاص الذين نريد المشاركة معهم، تظهر النافذة التالية:
							</span>{' '}
							<br />
							<ul class="child-list">
								<li>في الحقل، نكتب محتوى الرسالة لإرسال الملف معها</li>
								<li>
									"مشاهد": تعني أن الشخص أعلاه يستطيع قراءة الملف فقط، دون تعليق أو تعديل
								</li>
								<li>"معلق": يستطيع التعليق فقط بدون التعديل</li>
								<li>"محرر": يستطيع التعديل والتعليق</li>
								<li>يمكننا نسخ الرابط وإرساله لمن نريد</li>
								<img src={drive5} alt="five" />
							</ul>
						</li>
					</ul>
				</div>

				<div class="content content-2 info" id="chat">
					<h3>
						خدمة المحادثات أو الشات من جوجل{' '}
						<a href=" https://mail.google.com/chat/u/0/#chat/welcome" target="_blank">
							"Chat"
						</a>
					</h3>
					<ul class="child-list new">
						<li>
							تظهر الصفحة التالية عند الدخول إلى Googe Chat وهي الواجهة الرئيسية لجوجل شات
						</li>
						<img src={chat1} alt="one" />
					</ul>
					{/* </li> */}
					<li>
						<span>عند الضغط على علامة الزائد كما في الصورة، تظهر النافذة التالية:</span>
						<ul class="child-list new">
							<li>لبدء محادثة جماعية، يتم إضافة جهات الاتصال عند الضغط على هذا الخيار</li>
							<li>
								إنشاء مساحة عمل، تظهر نافذة عند الضغط على هذا الخيار، يتم ملؤها بالمعلومات
								المطلوبة عن هذه المساحة
							</li>
							<li>لتصفح مساحات العمل الموجودة على الحساب</li>
							<li>لقبول أو رفض طلبات الرسائل التي تصل إلينا</li>
							<img src={chat2} alt="two" />
						</ul>
					</li>
					{/* </ul> */}
				</div>
			</div>
		</div>
	);
};

export default Workspace;
