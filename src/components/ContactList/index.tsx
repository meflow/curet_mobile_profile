import { ICONS } from '@/assets/icons';
import './ContactList.css';

function ArrowIcon() {
  return (
    <svg className="contact-list__arrow" fill="none" viewBox="0 0 16 16">
      <path
        d={ICONS.arrowRight}
        stroke="#90A1B9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
    </svg>
  );
}

const NAVER_MAP_URL =
  'https://map.naver.com/p/search/%EB%84%A4%EC%8A%A4%ED%8A%B8%EC%86%94%EB%A3%A8%EC%85%98/place/2033624447?placePath=%3Fbk_query%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=bk_query%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26x%3D%26y%3D&searchType=place';

export default function ContactList() {
  return (
    <div className="contact-list">
      <div className="contact-list__inner">
        <a href="tel:010-3129-8248" className="contact-list__item">
          <span className="contact-list__label">휴대전화</span>
          <div className="contact-list__value-group">
            <span className="contact-list__value">010-3129-8248</span>
            <ArrowIcon />
          </div>
        </a>

        <a href="mailto:frecklesworks@gmail.com" className="contact-list__item">
          <span className="contact-list__label">이메일</span>
          <div className="contact-list__value-group">
            <span className="contact-list__value">frecklesworks@gmail.com</span>
            <ArrowIcon />
          </div>
        </a>

        <a
          href={NAVER_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-list__item"
        >
          <span className="contact-list__label">주소</span>
          <div className="contact-list__value-group">
            <span className="contact-list__value contact-list__value--right">
              서울특별시 서초구 서운로 13 지하1층
            </span>
            <ArrowIcon />
          </div>
        </a>
      </div>
    </div>
  );
}
