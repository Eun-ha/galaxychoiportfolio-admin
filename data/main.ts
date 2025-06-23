export type Main = {
  title: string;
  content1: string;
  content2: string;
  description: string;
  description2?: string;
  description3?: string;
  button: string;
  path: string;
  alt: string;
  url?: string;
};

export type Skill = {
  color: number;
  skills: number;
  name: string;
  angle: number;
};

export type Home = {
  home: Main[];
  skills: Skill[];
};

/**
 * api에 필요한 데이터
 */

export const home: Home[] = [
  {
    home: [
      {
        title: "안녕하세요! 방문해주셔서 감사합니다 :)",
        content1: "저는 6년차 UI & FE 개발자 최은하입니다.",
        content2: "I'm a frontend engineer.",
        description:
          "저는 쇼핑몰 에이전시, SI 프로젝트 에이전시, 프리랜서, 게임회사 등에서 UI & FE 개발을 담당 하였습니다. typescript와 Javascript 그리고 그 기반으로 하는 react, nextjs와 같은 플러그인 및 프레임워크 들을 다루어 본 경험이 있으며, tailwind CSS, styled-component, scss 등을 사용해보았습니다. 현재는 좀더 정교한 UI 컴포넌트 단위 개발을 위한 storyboard와 웹 개발의 성능 측정, 최적화, SEO등을 좀더 효율적으로 관리할수 있는 Nextjs 공부를 꾸준히 하고 있습니다.",
        button: "Go to portfolio repository",
        path: "01",
        alt: "아이슬란드 다이아몬드 비치에서 빙하 조각을 들고 웃고 있는 사진 입니다.",
        url: "https://github.com/Eun-ha/galaxychoiportfolio",
      },
      {
        title: "About Me",
        content1: "Let me introduce myself",
        content2: "저에 대해서 소개합니다.",
        description:
          "저는 새로운 것을 배우는 것을 좋아합니다. 수영은 다이빙까지 마스터 하였고, 최근 새로 시작한 스쿼시는 현재 단계별(forehand, backhand)로 기술 및 자세들을 배우면서 실력을 키워가고 있습니다. 평소에도 시간이 날때마다 영어회화공부와 FE 개발관련 사이드프로젝트도 만들고 있습니다. 수영, 스쿼시, 영어회화, FE 개발 공부를 하면서 느낀 공통점은 그 실력이 쌓일수록 이 각각의 관심분야들의 관점을 넓히게 되고 그 안에서 새로운 통찰력을 얻을 수 있다는 것입니다. 그 매력 때문에 어떤 새로운 분야든 기회가 될 때 마다 꾸준히 관심을 가지고 도전하며 포기하지 않고 깊이 있게 탐구하고 있습니다.",
        button: "Read More",
        path: "02",
        alt: "사하라 사막 투어에서 브이를 하고 있는 사진 입니다.",
        description2:
          "저의 핵심 역량은 도전정신과 실행력이 있다는 것입니다. 2년 정도 에이전시 근무 후 프리랜서 웹퍼블리셔로써 활동을 했었습니다. 제가 직접 해보고 싶은 프로젝트를 골라서 지원해보고 다양한 직군의 작업자들과 협업을하면서 1년동안 4개의 프로젝트를 수행하였고 회사에만 있었다면 몰랐을 또 다른 영역에 대해서도 알게 되었던 좋은 시간이었습니다. 그러던 중 해외취업에 관심이 생겼고, 아일랜드 워킹홀리데이를 지원하였는데 운좋게 비자를 받을 수 있게 되었습니다. 아일랜드 정부는 IT 기업들에게 세금혜택을 주고있었기 때문에 해외 유명 빅테크회사들의 본사도 아일랜드에 많이 위치해 있었고, 제 직군의 잡오퍼도 상대적으로 많을 것이라고 생각하여 과감히 아일랜드로 떠났고 2018년 10월부터 2019년 8월까지 약 1년정도 해외생활을 하였습니다. 6개월은 DCU 랭귀지스쿨에서 영어공부를 하고 나머지 기간은 IT 구직활동을 했었습니다. 실제로 몇 번의 리크루터와 인터뷰를 보았지만 취업에 성공하지는 못했습니다. 한인커뮤니티에서 해외취업 멘토 멘티 프로그램에서 만난 한 개발자분의 이야기를 들어보니 그분은 한국에서 10년의 경험을 먼저 쌓고 해외 취업을 하셨고 제가 구직하고 있는 주니어 자리는 저 같은 외국인이 아닌 자국민인 아이리쉬를 선호할거라는 조언을 해주셨습니다. 그래서 아쉽지만 경력을 더 쌓자는 결론을 내리고 한국으로 돌아왔습니다. 하지만 인터뷰를 통해 제 직군의 유럽권 동향(제가 경험했던 2019년 했던 인터뷰에서는 앵귤러와 리액트를 다룰수 있는 개발자를 찾고 있었고, 제가 한국에 돌아왔을때 한국은 vue.js를 더 선호했습니다.)과 영어회화공부 및 유럽여행도 맘껏 해볼 수 있었던 감사한 시간이었습니다.",
        description3:
          "저는 그 동안 쇼핑몰 에이전시, SI 에이전시, 프리랜서, 게임회사 등 다양한 분야에서 업무를 했습니다. 앞으로를 생각해 본다면, 늘 해오던 방식대로 기획팀, 디자인팀, BE팀과 서로 존중하고 협력적인 관계 속에서 그 동안의 저의 노하우와 틈틈히 공부하며 습득한 새로운 기술 트랜드를 기반으로 효율적인 컴포넌트 생성 및 서비스에 알맞는 렌더링 기법을 적용함으로써 사용자가 기대하는 웹 경험을 주고 싶습니다. 그리고 다양하게 변화하는 UI, FE 개발 트랜드 속에서 업무에 활용해 본다면 이롭겠다는 기술들을 선정 후 실제로 적용해봄으로써 기술적으로 지속적으로 성장하고 싶습니다. 이런 저의 성향은 제가 담당하고 있는 프로젝트의 코드 퀄리티를 지속적으로 발전 시킬것이라고 자부합니다. 또한 안정적으로 업무를 진행하면서 상태값 관리, 성능 측정, 최적화 및 데이터베이스와의 상호작용 등 지금 보다 좀더 깊은 웹개발을 할수 있는 풀스택 개발자로 제 역량을 확장하고 싶고, AI와 웹을 접목하는 서비스도 만들어 보고 싶습니디.",
      },
    ],
    skills: [
      {
        color: 1,
        skills: 80,
        name: "HTML5",
        angle: 280,
      },
      {
        color: 2,
        skills: 85,
        name: "CSS3",
        angle: 285,
      },
      {
        color: 3,
        skills: 80,
        name: "SCSS",
        angle: 280,
      },
      {
        color: 4,
        skills: 85,
        name: "TailwindCSS",
        angle: 285,
      },
      {
        color: 5,
        skills: 80,
        name: "StyledComponent",
        angle: 280,
      },
      {
        color: 1,
        skills: 70,
        name: "JavaScript",
        angle: 270,
      },
      {
        color: 2,
        skills: 70,
        name: "React",
        angle: 270,
      },
      {
        color: 3,
        skills: 70,
        name: "Nextjs",
        angle: 270,
      },
      {
        color: 4,
        skills: 65,
        name: "TypeScript",
        angle: 265,
      },
      {
        color: 5,
        skills: 45,
        name: "SQL",
        angle: 245,
      },
      {
        color: 1,
        skills: 55,
        name: "Figma",
        angle: 255,
      },
      {
        color: 2,
        skills: 55,
        name: "Git",
        angle: 255,
      },
    ],
  },
];
