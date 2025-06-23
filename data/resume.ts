import {
  CertificateMeta,
  EducationsMeta,
  ExperiencesMeta,
  DescriptionMeta,
  Aside,
  TitleDescription,
} from "@/types/resume";
/**
 * api에 필요한 데이터
 */

export const certificates: CertificateMeta[] = [
  {
    meta: {
      title: "자격증",
      description: "보유 자격증을 기술합니다.",
    },
    contents: [
      {
        name: "정보처리기사",
        date: "2015-07-31",
        authority: "한국산업인력공단",
      },
      {
        name: "웹디자인기능사",
        date: "2014-06-27",
        authority: "한국산업인력공단",
      },
      {
        name: "GTQ포토샵1급",
        date: "2014-04-11",
        authority: "한국생산성본부",
      },
      {
        name: "사무자동화산업기사",
        date: "2008-11-10",
        authority: "한국산업인력공단",
      },
      {
        name: "컴퓨터활용능력2급",
        date: "2008-08-12",
        authority: "대한상공회의소",
      },
      {
        name: "OPIC(Oral Proficiency Interview : English) - IM2",
        date: "2024-06-01",
        authority: "ACTFLOPIc",
      },
    ],
  },
];

export const educations: EducationsMeta[] = [
  {
    meta: {
      title: "교육",
      description: "학력 및 전공, 수료 교육 과정에 대한 정보를 기술합니다.",
    },
    contents: [
      {
        school: "남서울대학교",
        degree: "보건행정학과",
        institution: "",
        date: "2006.03 - 2010.02",
      },
      {
        school: "부평여자고등학교",
        degree: "문과",
        institution: "",
        date: "2003.03 - 2006.02",
      },
      {
        school: "Dublin City University Language School",
        degree: "",
        institution: "영어회화 과정 수료",
        date: "2018.10 - 2019.04",
      },
      {
        school: "인천중앙직업전문학교",
        degree: "",
        institution: "Eclipse를 활용한 안드로이드 프로그래밍(JAVA) 과정 수료",
        date: "2015.03 - 2015.07",
      },
      {
        school: "서울현대직업전문학교",
        degree: "",
        institution: "웹디자인을 위한 HTML+CSS3 과정 수료",
        date: "2014.01 - 2014.06",
      },
    ],
  },
];

export const experiences: ExperiencesMeta[] = [
  {
    meta: {
      title: "경력 사항",
      description: "경력 사항과 주요 업무 내역을 기술합니다.",
    },
    contents: [
      {
        company: "엔씨소프트",
        title: "UI & FE Developer",
        date: "2021.03 - 2024.06",
        description:
          "경력내용 공식 홈페이지 유지보수 및 이에 필요한 UI&FE 기능 개발 담당하였습니다. Spring 기반의 환경에서 Thymeleaf 문법을 활용하여 사내에서 사용하는 운영툴을 연동하여 유지보수 작업에 대응 했고, front, backend, CI/CD 영역이 서로 유기적으로 연결되어 있는 대규모 웹 개발 환경에서 근무하였습니다. UI 파트의 경우 기본적으로 SCSS를 사용하였고, 디자인시스템 가이드를 기반으로 한 각 IP 별로 공통 디자인을 적용하는 작업을 하였습니다. (다크모드, 공통배너, 반응형 디자인 등) 또한 분리된 프로젝트의 경우 Styled-component, Tailwind css 등을 사용하였습니다. FE 파트의 경우는 기본적으로 javascript와 typescript를 기반으로 작업하였고, 분리된 프로젝트의 경우 react 및 next.js를 사용하였습니다. 브라우저 scroll에 반응하는 UI 적용을 위한 Javascript 설계 및 구현, tab, swipe, tooltip, react-select 등 front 쪽의 라이브러리 활용 경험도 다수 있습니다. 또한 하나의 기능을 여러 IP에서 공통으로 사용할수 있도록 자바스크립트 클래스의 객체생성을 활용하여 개발한 경험이 있고, 랜덤 흑토끼 아이콘 수집이벤트에서는 케이스별 API를 호출하고 그 결과를 DB에 업데이트 하여, 유저에게 최신 정보를 제공했고. Try catch로 에러 처리를 핸들링하여 사용자 경험을 향상 시켰습니다. User-agent 분기에 따른 인게임 웹뷰 적용 경험도 있습니다. SEO 향상을 위한 Metadata 및 소셜미디어 opengraph 이미지를 적용한 경험이 있으며, 스프라이트 이미지, webp 사용하여 이미지 로딩 속도 이슈에 대응하였습니다. 크롬 Lighthouse를 활용하여 웹 성능 최적화 및 SEO를 향상하였습니다. Figma를 활용하여 기획팀 및 디자인팀과 협업 하였으며, Git을 통한 FE, BE 협업 및 Jira를 통해 작업 스케줄 관리를 하였습니다.",
      },
      {
        company: "넥슨 코리아",
        title: "UI & FE Developer",
        date: "2019.10 - 2020.10",
        description:
          "IP 별로 매주 유저에게 제공되는 이벤트 페이지 작업을 하였습니다. 유저에게 재미를 줄수 있는 다양한 효과를 사용해 볼수 있었습니다. 예를 들면, 동적인 효과를 위한 컨텐츠에 시간차를 두고 노출하는 TweenMax.js 사용 및 눈, 반짝이 효과를 주어 유저의 관심을 유발하는 Particle.js 사용 , Css animation을 활용한 폭죽 효과 등과 기본적으로 브라우저에서 사용되는 Tab, Swipe, scroll, tooltip 등을 사용하여 유저와 상호작용하는 웹 컨텐츠를 안정적으로 제공하였습니다. 그리고 git, sourcetree, tortoise svn을 사용하여 코드 관리 및 동료들과 협업을 하였습니다.",
      },
      {
        company: "이니셔티브식스",
        title: "Markup & UI Developer",
        date: "2016.12 - 2017.10",
        description:
          "SI 프로젝트를 하는 웹에이전시에서 고객사의 요구에 맞춰 새로운 시스템을 구축하거나 기존 시스템을 연동하는 작업을 주로 담당하였습니다. 주니어 퍼블리셔로 프로젝트를 지원하는 역할을 하였고, 주로 하드코딩으로 시맨틱 마크업, CSS3, Jquery를 사용하여 적응형 웹 구현 및 스타일 작업을 하였습니다. 초기 프로젝트 셋팅부터 프로젝트 완료 후 유지보수 지원 업무까지 하나의 프로젝트의 시작부터 끝까지인 전체 프로세스를 경험하였습니다. 금융권 ODS 프로젝트의 경우 기준 타블렛사이즈를 타겟으로 하여 적응형 작업을 하드코딩 하였고, 하나캐피탈 적응형 웹, 모바일 리뉴얼 시에는 CSS3 Media-queries 사용하여 적응형 웹을 설계하고 브라우저 사이즈에 대응하여 스타일 작업을 하였습니다.",
      },
      {
        company: "디앤디랩",
        title: "Markup & UI Developer",
        date: "2016.01 - 2016.08",
        description:
          "고도몰 솔루션을 기반으로 통합 쇼핑몰 서비스를 제공하는 웹에이전시에서 pc, mobile 퍼블리싱을 담당하였습니다. 고도몰의 베이스 코드를 기반으로 시맨틱 마크업, CSS3, Jquery를 활용하여 브랜드 사이트, 메인 페이지, 소개페이지 , 서브 정보 페이지, 주문 페이지 등을 퍼블리싱 하였습니다.",
      },
    ],
  },
];

export const descriptions: DescriptionMeta[] = [
  {
    meta: {
      title: "경력 기술서",
      description: "경력과 프로젝트 경험, 기술 스택을 기술합니다.",
    },
    contents: [
      {
        title: "엔씨소프트 블레이드&소울 2 랭킹 신규 페이지 UI 설계 및 구현",
        date: "2023.6 ~ 2 주(실작업 및 검수 1 주 + 기획팀 및 디자인팀 피드백 반영 1주)",
        performance: [
          "컴포넌트 별 UI 설계 및 구현",
          "데이터 케이스별 react-select UI 설계 및 구현",
          "반응형 디자인 적용",
          "다크모드 반영",
          "시멘틱 마크업 작업",
          "SEO 향상을 위한 Metadata 및 소셜미디어 opengraph 이미지 적용",
          "Figma 를 활용한 기획팀 및 디자인팀 협업",
          "Git을 통한 FE, BE 협업",
          "Jira를 통한 작업 스케줄 관리",
        ],
        role: "마크업 및 UI 개발",
        skills:
          "시맨틱 태그 마크업, Styled-component, SCSS, React-select, React",
      },
      {
        title: "엔씨소프트 쓰론 앤 리버티 일정표 신규 페이지 UI 설계 및 구현",
        date: "2023.10 ~ 2 주(실작업 및 검수 1 주 + 기획팀 및 디자인팀 피드백 반영 1 주)",
        performance: [
          "브라우저 스크롤에 반응하는 UI 동작을 위한 Javascript 설계 및 구현",
          "반응형 디자인 적용",
          "다크모드 반영",
          "시멘틱 마크업 작업",
          "SEO 향상을 위한 Metadata 및 소설미디어 opengraph 이미지 적용",
          "Figma를 활용한 기획팀 및 디자인팀 협업",
          "Git을 통한 FE, BE 협업",
          "Jira를 통한 작업 스케줄 관리",
        ],
        role: "마크업 및 UI 개발",
        skills: "시맨틱 태그 마크업, tailwind css, SCSS, Javascript, React",
      },
      {
        title:
          "엔씨소프트 리니지 W 사전 상세보기 팝업 내 공유하기 기능 설계 및 구현",
        date: "2024.3 ~ 2 주(실작업 및 기능 디바이스 테스트 1 주 + 코드리뷰 반영 1 주)",
        performance: [
          "Mobile 일 경우, 공유하기(window.navigator.share api 사용)",
          "PC 일 경우, URL 복사(navigator.clipboard.writeText)로 분기하여 개발",
          "공유 시 단축 URL API 호출 처리",
          "PC 및 Mobile 디바이스 테스트",
        ],
        role: "FE 개발",
        skills: "Javascript, React, Typescript",
      },
      {
        title:
          "엔씨소프트 퍼플런처 및 퍼플존 시세, 사전, 일정표, 랭킹 웹뷰 적용 관련 frontend 대응",
        date: "2024.2 ~ 2024.4 (상시 작업)",
        performance: [
          "퍼플런처(NC 자체플랫폼) 및 퍼플존(ingame) User-agent 분기에 따른 UI 작업",
          "퍼플런처, 퍼플존 웹뷰 적용 관렦 DOM 요소가 그려지는 기준 엘리먼트 달라지는 이슈 대응 (레이아웃, 스크롤, 스타일 등)",
        ],
        role: "UI 및 FE 개발",
        skills: "Javascript, React, Typescript, SCSS",
      },
      {
        title:
          "엔씨소프트 Lineagew 흑토끼 수집 이벤트 FE 설계 및 구현 (공식 홈페이지에서 랜덤으로 등장하는 흑토끼 아이콘 수집이벤트 개발(수집한 흑토끼 아이콘 갯수만큼 인게임에서 사용할 수 있는 이벤트)",
        date: "2023.7 ~ 3 주(실작업 및 디바이스테스트 2 주 + 기획팀 및 디자인팀 피드백 반영 및 코드리뷰 1 주)",
        performance: [
          "브라우저 진입 시 랜덤 한 위치(getBoundingClientRect() 웹 API 사용) 및 시간(Math.random() 웹 API 사용)에 흑토끼 아이콘 노출 UI & FE 설계 및 구현",
          "흑토끼 아이콘 수집 상태 체크 로직 설계 및 구현",
          "1. API 호출 로직",
          "* GET: 게임 유저별 아이콘 수집 상태 확인",
          "* POST: 아이콘 수집 카운트 증가",
          "2. 제약 조건",
          "* 하루에 수집 가능핚 아이콘 개수: 3 개",
          "* 이벤트 기간 동안 총 수집 가능한 아이콘 개수: 50 개",
          "3. 기능 요구 사항",
          "* 아이콘 수집 상태에 따라 조건 분기",
          "* 케이스별 가이드 문구 출력 (ex: ‘1/3 수집하였습니다', '하루수집개수를 충족하였습니다’ 등)",
          "백엔드에서 제공하는 에러코드에 대응한 에러핸들링 작업",
        ],
        role: "FE 개발",
        skills: "Javascript, Typescript, SCSS",
      },
      {
        title:
          "엔씨소프트 공식홈페이지 공통배너 고도화 및 예약 기능 설계 및 구현(영상배너, 이미지배너, 토스트배너, 띠배너 등)",
        date: "2023.1 ~ 1달(실작업 및 기능 디바이스 테스트 3 주 + 코드리뷰 반영 1 주)",
        performance: [
          "사내에서 제공하는 운영툴을 사용한 스키마 생성 및 데이터 RWD 연동작업",
          "각 게임 IP 별 통일 된 공통배너 기능을 사용하기 위해 javascript 클래스를 사용한 코드 설계 및 구현(객체 생성)",
          "Date() 함수를 사용하여 공통배너 예약설정 기능 설계 및 구현",
          "Jest를 활용한 컴포넌트 테스트 및 사용 가이드 문서 작성 적용 및 사용 가이드 문서 작성",
        ],
        role: "FE 개발",
        skills: "Javascript, Typescript, SCSS",
      },
      {
        title: "엔씨소프트 아이온 신규 복귀 리뉴얼 페이지 UI 설계 및 구현",
        date: "2023.10 ~ 2 주(실작업 및 검수 1 주 + 기획팀 및 디자인팀 피드백 반영 1 주)",
        performance: [
          "스크롤에 반응하는 UI 동작을 위한 Javascript 작업",
          "Slick 플러그인 활용",
          "시멘틱 마크업 작업",
          "반응형 디자인 적용",
          "SEO 향상을 위한 Metadata 및 소셜미디어 opengraph 이미지 적용",
          "Figma 를 활용한 기획팀 및 디자인팀 협업",
        ],
        role: "마크업 및 UI 개발",
        skills: "Javascript, Typescript, Slick, SCSS",
      },
      {
        title: "엔씨소프트 공식홈페이지 유지보수",
        date: "2021.03 ~ 2024.06(상시)",
        performance: [
          "Spring 기반 RWD 유지보수",
          "Static 소스 유지보수",
          "엔씨소프트 자체 운영툴 활용 및 연동하여 유지보수",
          "Thymeleaf(타임리프)문법 활용",
          "디자인시스템가이드 회의 참여 및 가이드 작성",
          "공통 다크모드 IP 별 적용",
          "브랜드웹 페이지 UI 설계 및 구현",
          "SEO 향상을 위한 Metadata 및 소셜미디어 opengraph 이미지 적용",
          "다국어(i18n) 적용",
          "Figma를 통한 기획팀, 디자인팀과의 협업",
          "Git을 통한 FE, BE 협업",
          "Jira를 통한 작업 스케줄 관리",
        ],
        role: "UI 및 FE 개발",
        skills: "Javascript, Typescript, react, SCSS, Thymeleaf",
      },
      {
        title:
          "넥슨 코리아 공식 홈페이지 클로저스, 천애명월도, v4 등 적응형 이벤트 페이지 PC, MOBILE UI 설계 및 구현",
        date: "2019.10 ~ 2020.10 (상시 주 1 회 라이브)",
        performance: [
          "스크롤에 반응하는 UI 동작을 위한 Javascript 설계 및 구현",
          "TweenMax.js 를 이용핚 시간차를 둔 텍스트 노출 작업",
          "Particle.js 를 활용한 눈, 반짝이 효과 작업",
          "Css animation 을 활용한 폭죽 효과 작업",
          "적응형 디자인 적용",
          "SEO 향상을 위한 Metadata 및 소셜미디어 opengraph 이미지 적용",
        ],
        role: "마크업 및 UI 개발",
        skills: "Javascript, CSS animation, TweenMax.js, Particle.js",
      },
      {
        title: "행정안전부 업무포탈 리뉴얼 프로젝트 PC UI 개발(프리랜서)",
        date: "2018.07 ~ 2018.09",
        performance: [
          "W3C 마크업 검증 서비스 사이트를 통해서 웹표준에 맞춰 작업",
          "Lnb 드롭다운 및 검색영역 스크립트 효과 적용",
          "기획, 디자인, Backend 협업",
        ],
        role: "마크업 및 UI 개발",
        skills: "HTML5, CSS3, Jquery",
      },
      {
        title:
          "한국마사회 말병원 전자의무기록(EMR) 적응형 프로젝트 PC, TABLET UI 개발(프리랜서)",
        date: "2017.10 ~ 2018.01",
        performance: [
          "웹표준 및 시멘틱 마크업 작업",
          "PC, TABLET 적응형 UI 설계 및 구현",
          "기획, 디자인, Backend 협업",
        ],
        role: "마크업 및 UI 개발",
        skills: "HTML5, CSS3, Jquery",
      },
    ],
  },
];

export const asideButtons: Aside[] = [
  {
    slug: "descriptions",
    button: "descriptions",
  },
  {
    slug: "experiences",
    button: "experiences",
  },
  {
    slug: "educations",
    button: "educations",
  },
  {
    slug: "certificates",
    button: "certificates",
  },
];

export const TitleAndDescription: TitleDescription[] = [
  {
    slug: "descriptions",
    title: "경력 기술서",
    description: "경력과 프로젝트 경험, 기술 스택을 기술합니다.",
  },
  {
    slug: "experiences",
    title: "경력 사항",
    description: "경력 사항과 주요 업무 내역을 기술합니다.",
  },
  {
    slug: "educations",
    title: "교육",
    description: "학력 및 전공, 수료 교육 과정에 대한 정보를 기술합니다.",
  },
  {
    slug: "certificates",
    title: "자격증",
    description: "보유 자격증을 기술합니다.",
  },
];
