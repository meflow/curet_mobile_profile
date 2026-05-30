import svgPaths from "./svg-l470gbmhed";
import imgImageCuret from "../큐렛_로고.png";
import profilePhoto from "../________4_.png";

function Container3() {
  return (
    <div className="h-[78px] relative shrink-0 w-[95.271px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid not-italic relative size-full">
        <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[28px] left-0 text-white text-[20px] top-0 w-[95.271px]">대 표</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-bold leading-[20px] left-0 text-white/90 text-[24px] top-[35.67px] whitespace-nowrap">김 상 연</p>
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[40px] left-0 text-white/90 text-[14px] top-[57.67px] whitespace-nowrap">큐렛 주식회사</p>
      </div>
    </div>
  );
}

function ImageCuret() {
  return (
    <div className="h-[120px] relative shrink-0 w-[121px]" data-name="Image (Curet)">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100%] left-0 max-w-none top-[13.93%] w-full" src={imgImageCuret} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[78px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <ImageCuret />
    </div>
  );
}

function Container4() {
  return (
    <div className="shrink-0 w-full" data-name="Container">
      <div className="bg-white h-[38px] rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-full flex items-center justify-center" data-name="Button">
        <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-bold leading-[16px] not-italic text-[#314158] text-[14px] text-center whitespace-nowrap">헬스케어 사업 운영 및 메디컬서비스 제공</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[400px] relative rounded-bl-[24px] rounded-br-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-full overflow-hidden" style={{ backgroundImage: "linear-gradient(150.983deg, rgb(241, 245, 249) 0%, rgb(239, 246, 255) 50%, rgb(241, 245, 249) 100%)" }} data-name="Container">
      {/* Profile Photo Background */}
      <div className="absolute inset-0 flex items-end justify-center">
        <img
          src={profilePhoto}
          alt="Profile"
          className="h-full w-auto object-cover object-top"
          style={{
            objectPosition: 'center 10%',
            maxWidth: 'none'
          }}
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pt-20 pb-8">
        <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative">
          <Container2 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[56px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.33px] whitespace-nowrap">휴대전화</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#1d293d] text-[14px] top-[-0.33px] whitespace-nowrap">010-3129-8248</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[120.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text1 />
        <Icon />
      </div>
    </div>
  );
}

function Link() {
  return (
    <a href="tel:010-3129-8248" className="content-stretch flex h-[52.667px] items-center justify-between pb-[16.667px] pt-[16px] relative shrink-0 w-full hover:bg-slate-50 transition-colors cursor-pointer" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Text />
      <Container6 />
    </a>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.33px] whitespace-nowrap">이메일</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative min-w-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-[#1d293d] text-[14px] whitespace-nowrap">frecklesworks@gmail.com</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0" data-name="Container">
      <div className="content-stretch flex gap-[8px] items-center relative size-full">
        <Text3 />
        <Icon1 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <a href="mailto:frecklesworks@gmail.com" className="content-stretch flex h-[52.667px] items-center justify-between pb-[16.667px] pt-[16px] relative shrink-0 w-full hover:bg-slate-50 transition-colors cursor-pointer" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Text2 />
      <Container7 />
    </a>
  );
}


function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#45556c] text-[14px] top-[-0.33px] whitespace-nowrap">주소</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[238.823px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-[239px] not-italic text-[#1d293d] text-[14px] text-right top-[-0.33px] whitespace-nowrap">서울특별시 서초구 서운로 13 지하1층</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[262.823px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text7 />
        <Icon3 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <a href="https://map.naver.com/p/search/%EB%84%A4%EC%8A%A4%ED%8A%B8%EC%86%94%EB%A3%A8%EC%85%98/place/2033624447?placePath=%3Fbk_query%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=bk_query%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26x%3D%26y%3D&searchType=place" target="_blank" rel="noopener noreferrer" className="content-stretch flex h-[52.667px] items-center justify-between pb-[16.667px] pt-[16px] relative shrink-0 w-full hover:bg-slate-50 transition-colors cursor-pointer" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Text6 />
      <Container10 />
    </a>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[4px] pt-[8px] px-[16px] relative size-full">
        <Link />
        <Link1 />
        <Container9 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[#1d293d] text-[18px] top-[-1px] whitespace-nowrap">큐렛 사업 조직도</p>
    </div>
  );
}

function List() {
  const textCls = "font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal text-[#314158] text-[14px]";
  const bulletCls = "font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#62748e] text-[14px] shrink-0";
  const items: { name: string; descs: string[] }[] = [
    { name: "Nest Solution", descs: ["- 병·의원 컨설팅"] },
    { name: "반듯한 네트워크", descs: ["- 병원 네트워크 서비스"] },
    { name: "미플로우", descs: ["- 외국인 환자 유치 사업", "- 맞춤형 마케팅 및 광고서비스"] },
    { name: "올웨이즈 온", descs: ["- 식품 사업부"] },
    { name: "W 메디컬솔루션", descs: ["- 의료 소모품 전문"] },
  ];
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      {items.map((item, i) => (
        <div key={i} className="flex gap-[8px] shrink-0 w-full">
          <span className={bulletCls}>•</span>
          <div className={textCls}>
            <p className="leading-[20px] font-bold">{item.name}</p>
            <div className="pl-[8px]">
              {item.descs.map((d, j) => (
                <p key={j} className="leading-[20px]">{d}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[12px] pb-[36px] px-[16px] relative w-full">
        <Heading />
        <List />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container5 />
      <Container11 />
    </div>
  );
}

function App() {
  return <div className="bg-[#f3f4f6] h-[1307px] shrink-0 w-[383px]" data-name="App" />;
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
    </div>
  );
}

function CreateIdenticalDesign() {
  return (
    <div className="relative bg-white content-stretch flex flex-col items-start w-[384px] rounded-bl-[24px] rounded-br-[24px] overflow-hidden" data-name="Create identical design">
      <Container />
      <Body />
    </div>
  );
}

export default function Group() {
  return (
    <div className="w-full flex justify-center">
      <CreateIdenticalDesign />
    </div>
  );
}