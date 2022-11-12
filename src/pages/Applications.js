import React from 'react';
import { Link } from 'react-router-dom';

import authy from '../assets/authy.png';
import microAuth from '../assets/microsoft-auth.png';
import veraCrypt from '../assets/veracrypt.png';
import bitwarden from '../assets/bitwarden.png';
import eset from '../assets/eset.png';
import eraser from '../assets/eraser.png';
import zoom from '../assets/zoom.png';
import jitsi from '../assets/jitsi.png';
import nordvpn from '../assets/nordvpn.png';
import mailvelope from '../assets/mailvelope.png';
import workspace from '../assets/workspace.png';
import other from '../assets/other.png';

const Applications = () => {
	return (
		<div className="applications" id="applications">
			<div className="container">
				<h2>التطبيقات المستخدمة</h2>
				<div className="content">
					<Link to="/applications/Eset">
						<div className="card">
							<h4>East Smart Security - إيست سيكيوريتي</h4>
							<img src={eset} alt="eset" />
							<p>الحماية من الفيروسات وتشفير البيانات</p>
						</div>
					</Link>
					<Link to="/applications/Veracrypt">
						<div className="card">
							<h4>VeraCrypt - فيراكربت</h4>
							<img src={veraCrypt} alt="veracrypt" />
							<p>تشفير البيانات محلياَ</p>
						</div>
					</Link>
					<Link to="/applications/Eraser">
						<div className="card">
							<h4>Eraser - ايرسير </h4>
							<img src={eraser} alt="eraser" />
							<p>الحذف الآمن للبيانات</p>
						</div>
					</Link>
					<Link to="/applications/Bitwarden">
						<div className="card">
							<h4>Bitwarden - بت واردن</h4>
							<img src={bitwarden} alt="bitwarden" />
							<p>إدارة بيانات تسجيل الدخول</p>
						</div>
					</Link>
					<Link to="/applications/Authy">
						<div className="card">
							<h4>Authy - أوثي</h4>
							<img src={authy} alt="authy" />
							<p>التحقق بخطوتين عند تسجيل الدخول</p>
						</div>
					</Link>
					<Link to="/applications/MicrosoftAuth">
						<div className="card">
							<h4>Microsoft Authenticator - مايكروسوفت أوثونتكاتور</h4>
							<img src={microAuth} alt="microsoft-auth" />
							<p>نظام الويندوز الافتراضي باستخدام - الفي ام وير</p>
						</div>
					</Link>
					<Link to="/applications/Nord">
						<div className="card">
							<h4>NordVPN - نورد في بي إن</h4>
							<img src={nordvpn} alt="nordvpn" />
							<p>الاتصال الآمن بالانترنت</p>
						</div>
					</Link>
					<Link to="/applications/Workspace">
						<div className="card">
							<h4>Google Workspace - جوجل وورك سبيس</h4>
							<img src={workspace} alt="workspace" />
							<p>تطبيقات جوجل: (جوجل دوكس - جوجل شيتس..)</p>
						</div>
					</Link>
					<Link to="/applications/Mailvelope">
						<div className="card">
							<h4>Mailvelope - الميل فيلوب</h4>
							<img src={mailvelope} width="200px" alt="mailvelope" />
							<p>تشفير الإيميلات والمرفقات</p>
						</div>
					</Link>
					<Link to="/applications/Jitsi">
						<div className="card">
							<h4>Jitsi - جيتسي</h4>
							<img src={jitsi} alt="jitsi" />
							<p>منصة تواصل اجتماعي آمن - مكالمات فيديو</p>
						</div>
					</Link>
					<Link to="/applications/Zoom">
						<div className="card">
							<h4>Zoom - زووم</h4>
							<img src={zoom} alt="zoom" />
							<p>منصة تواصل اجتماعي آمن - مكالمات فيديو</p>
						</div>
					</Link>
					<Link to="/applications/Other">
						<div className="card">
							<h4>Other - تطبيقات أخرى</h4>
							<img src={other} alt="other" />
							<p>المزيد من التطبيقات - للاطلاع عليها</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Applications;
