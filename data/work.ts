export type Work = {
  title: string;
  description: string;
  skill: string;
  path: string;
  url: string;
  download: string;
  git: string;
  index: string;
};

/**
 * api에 필요한 데이터
 */

export const works: Work[] = [
  {
    title: "블레이드&소울 2 랭킹 신규 페이지 UI 개발(현재 서비스 종료됨)",
    description:
      "반응형 디자인과 다크모드를 적용하였으며, 데이터 케이스별 React-select UI를 개발하였고, Styled-components 및 시맨틱 마크업을 적용하였습니다. SEO 향상을 위한 Metadata 및 소셜미디어 opengraph 이미지를 적용하였고, Figma로 기획 및 디자인팀과 원활하게 소통했습니다. Git을 통한 FE/BE 협업과 Jira를 통한 작업 스케줄 관리를 수행했습니다.",
    skill: "Semantic Markup, Styled-component, SCSS, React-select, React",
    path: "01",
    url: "",
    download: "",
    git: "",
    index: "01",
  },
  {
    title: "쓰론 앤 리버티 일정표 신규 페이지 UI 개발",
    description:
      "tailwind CSS를 활용한 반응형 디자인 적용 및 Javascript를 활용하여 브라우저 스크롤에 반응하는 UI를 구현했습니다. 기획 및 디자인팀과 Figma로 협업을 진행하고, Git과 Jira를 통해 프로젝트를 관리하였으며, SEO 향상을 위한 Metadata 및 소셜미디어 opengraph 이미지를 적용하였습니다.",
    skill: "Semantic Markup, tailwind CSS, SCSS, Javascript, React",
    path: "02",
    url: "https://tl.plaync.com/ko-kr/schedule/index",
    download: "",
    git: "",
    index: "02",
  },
  {
    title: "리니지 W 사전 상세보기 팝업 내 공유하기 기능 개발",
    description:
      "모바일과 PC 환경에서 공유 기능을 분기하여 개발하였습니다. 모바일에서는 window.navigator.share API, PC에서는 navigator.clipboard.writeText로 URL 복사 기능을 구현하였습니다. 단축 URL API 호출 및 디바이스별 테스트를 통해 안정적인 서비스를 제공하였습니다.",
    skill: "Javascript, React, Typescript",
    path: "03",
    url: "https://lineagew.plaync.com/kr/info/item/?detail=item_907139",
    download: "",
    git: "",
    index: "03",
  },
  {
    title:
      "공식홈페이지 공통배너 고도화 및 예약 기능 개발(영상배너, 이미지배너, 토스트배너, 띠배너 등)",
    description:
      "사내 운영툴을 사용한 데이터 스키마 생성 및 데이터 연동 및 통합 배너 기능 개발을 했습니다. JavaScript 클래스를 사용한 객체 생성 방식으로 공통 배너 기능 개발하였고, Date() 함수를 활용하여 예약 설정 기능을 개발하였고 Jest를 활용한 컴포넌트 테스트 및 사용 가이드 문서 작성 하였습니다.",
    skill: "Javascript, Typescript, SCSS",
    path: "04",
    url: "https://bns2.plaync.com/ko-kr/index?redirect=false",
    download: "",
    git: "",
    index: "04",
  },
  {
    title: "아이온 신규 복귀 리뉴얼 페이지 UI 개발",
    description:
      "시멘틱 마크업 및 반응형 디자인을 적용하였고, 스크롤 반응형 Navigation UI 동작을 위한 JavaScript 작업 및 Slick 플러그인 활용한 슬라이더 UI 개발을 하였습니다.",
    skill: "Javascript, Typescript, Slick, SCSS",
    path: "05",
    url: "https://aion.plaync.com/guide/home",
    download: "",
    git: "",
    index: "05",
  },
  {
    title: "행정안전부 업무포탈 리뉴얼 프로젝트 PC UI 개발(프리랜서)",
    description:
      "W3C 웹 표준을 준수한 시멘틱 마크업 및 UI 개발, Lnb 드롭다운 및 검색 영역 스크립트를 개발했습니다. 기획, 디자인, 백엔드와 협업하여 요구 사항을 충족시켰습니다.",
    skill: "HTML5, CSS3, Jquery",
    path: "06",
    url: "",
    download:
      "files/The_working_site_of_Minstry_of_Public_Administration_and_Security.zip",
    git: "https://github.com/Eun-ha/my-work-samples/blob/master/The_working_site_of_Minstry_of_Public_Administration_and_Security.zip",
    index: "06",
  },
  {
    title:
      "한국마사회 말병원 전자의무기록(EMR) 적응형 프로젝트 PC, TABLET UI 개발(프리랜서)",
    description:
      "PC와 태블릿에서 적응형 UI를 개발하고 웹 표준과 시멘틱 마크업을 적용했습니다. 기획, 디자인, 백엔드와의 긴밀한 협업을 통해 프로젝트를 성공적으로 완료했습니다.",
    skill: "HTML5, CSS3, Jquery",
    path: "07",
    url: "",
    download: "files/EMR_of_the_horse_hospital.zip",
    git: "https://github.com/Eun-ha/my-work-samples/blob/master/EMR_of_the_horse_hospital.zip",
    index: "07",
  },
  {
    title: "운전연수 예약 사이드 프로젝트",
    description:
      "react, next.js, redux-toolkit 스킬을 연구하는 사이드 프로젝트로 CRUD 기능을 설계 및 구현하였습니다.",
    skill: "React, Next.js, redux-toolkit",
    path: "08",
    url: "https://booking-drivinglesson.vercel.app/",
    download: "",
    git: "https://github.com/Eun-ha/booking-drivinglesson",
    index: "08",
  },
];
