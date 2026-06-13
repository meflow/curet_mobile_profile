import './OrgChart.css';

const ORG_ITEMS = [
  { name: 'Nest Solution',    descs: ['- 병·의원 컨설팅'] },
  { name: '반듯한 네트워크',   descs: ['- 병원 네트워크 서비스'] },
  { name: '미플로우',          descs: ['- 외국인 환자 유치 사업', '- 맞춤형 마케팅 및 광고서비스'] },
  { name: '올웨이즈 온',       descs: ['- 식품 사업부'] },
  { name: 'W 메디컬솔루션',    descs: ['- 의료 소모품 전문'] },
];

export default function OrgChart() {
  return (
    <div className="org-chart">
      <div className="org-chart__inner">
        <h2 className="org-chart__heading">큐렛 사업 조직도</h2>
        <ul className="org-chart__list">
          {ORG_ITEMS.map((item) => (
            <li key={item.name} className="org-chart__item">
              <span className="org-chart__bullet">•</span>
              <div className="org-chart__item-content">
                <p className="org-chart__item-name">{item.name}</p>
                {item.descs.map((desc) => (
                  <p key={desc} className="org-chart__item-desc">{desc}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
