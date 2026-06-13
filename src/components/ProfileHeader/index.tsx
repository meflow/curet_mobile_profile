import profilePhoto from '@/assets/images/profile-photo.webp';
import curetLogo from '@/assets/images/curet-logo.webp';
import './ProfileHeader.css';

export default function ProfileHeader() {
  return (
    <div className="profile-header">
      <div className="profile-header__photo-wrapper">
        <img
          src={profilePhoto}
          alt="김상연 대표"
          className="profile-header__photo"
        />
      </div>

      <div className="profile-header__overlay">
        <div className="profile-header__content">
          <div className="profile-header__info-row">
            <div className="profile-header__name-block">
              <p className="profile-header__title">대 표</p>
              <p className="profile-header__name">김 상 연</p>
              <p className="profile-header__company">큐렛 주식회사</p>
            </div>

            <div className="profile-header__logo-block">
              <div className="profile-header__logo-inner">
                <img
                  src={curetLogo}
                  alt="큐렛 로고"
                  className="profile-header__logo"
                />
              </div>
            </div>
          </div>

          <div className="profile-header__service-btn">
            <div className="profile-header__service-btn-inner">
              <p className="profile-header__service-label">
                헬스케어 사업 운영 및 메디컬서비스 제공
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
