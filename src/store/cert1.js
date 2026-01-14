export const cert1Data = [
  {
    section: "SDLC",
    items: [
      {
        title: "SDLC (소프트웨어 생명주기)",
        mnemonic: null,
        summary: "시스템의 요구분석부터 유지보수까지 전 과정을 모델링한 것",
        details: [
          "소프트웨어 개발의 전체 흐름을 수명주기 관점에서 표현",
          "요구분석 → 설계 → 구현 → 테스트 → 유지보수"
        ]
      },
      {
        title: "SDLC 모델 프로세스",
        mnemonic: "요설구태유",
        summary: "요구사항 분석 → 설계 → 구현 → 테스트 → 유지보수",
        details: [
          "1. 요구사항 분석 : 요구사항을 분석하고, 제약조건∙목표 등을 정의",
          "2. 설계 : 수행 방법을 논리적으로 결정 (예: 시스템 구조 설계, 사용자 인터페이스 설계)",
          "3. 구현 : 프로그래밍 언어를 사용해 실제로 코드를 작성 (예: 인터페이스, 자료 구조, 오류 처리 개발)",
          "4. 테스트 : 단위 테스트, 통합 테스트, 시스템 테스트, 인수 테스트 등 수행",
          "5. 유지보수 : 배포 후 발견되는 오류 수정 및 기능 개선"
        ]
      },
      {
        title: "SDLC 모델 종류",
        mnemonic: "폭프나반",
        summary: "폭포수, 프로토타이핑, 나선형, 반복적 모델",
        details: [
          "1. 폭포수 모델 (Waterfall Model)",
          "2. 프로토타이핑 모델 (Prototyping Model)",
          "3. 나선형 모델 (Spiral Model)",
          "4. 반복적 모델 (Iteration Model)"
        ]
      },
      {
        title: "폭포수 모델 (Waterfall Model)",
        mnemonic: null,
        summary:
          "선형 순차적 모델로 각 개발 단계를 마무리하고 다음 단계로 진행하는 고전적 생명주기 모델",
        details: [
          "= 선형 순차적 모델, = 고전적 생명주기 모델",
          "각 개발 단계를 '완료'한 후에야 다음 단계로 넘어감",
          "가장 오래되었고 성공사례가 많음",
          "단계별 산출물이 명확",
          "요구사항 변경에 매우 취약"
        ]
      },
      {
        title: "프로토타이핑 모델 (Prototyping Model)",
        mnemonic: null,
        summary:
          "주요 기능을 프로토타입으로 구현하고 피드백을 반영하여 점진적으로 완성하는 모델",
        details: [
          "사용자와의 피드백 사이클이 중요",
          "UI/요구사항이 자주 바뀌는 프로젝트에 적합"
        ]
      },
      {
        title: "나선형 모델 (Spiral Model)",
        mnemonic: "계위개고",
        summary:
          "위험을 최소화하기 위해 반복 주기마다 계획·위험분석·개발·고객평가를 수행하는 점진적 개발 모델",
        details: [
          "위험 중심(Risk-driven) 개발 모델",
          "절차: 계획 및 정의 → 위험 분석 → 개발 → 고객 평가"
        ]
      },
      {
        title: "반복적 모델 (Iteration Model)",
        mnemonic: null,
        summary:
          "병렬 또는 반복 개발을 통해 시스템을 점차 완성해 나가는 모델",
        details: [
          "전체를 한 번에 완성하는 것이 아니라, 여러 번에 나눠 조금씩 완성",
          "각 반복(Iteration)마다 설계-구현-테스트 수행 후 개선"
        ]
      }
    ]
  },
  {
    section: "소프트웨어 개발 방법론",
    items: [
      {
        title: "소프트웨어 개발방법론",
        mnemonic: "구정 객컴 애제",
        summary:
          "소프트웨어 개발 시작부터 전 과정 전체를 체계적으로 형상화한 방법론",
        details: [
          "개발 프로세스를 표준화하고 재사용성 및 품질을 높이기 위한 체계",
          "주요 종류: 구조적, 정보공학, 객체지향, 컴포넌트 기반, 애자일, 제품 계열 방법론"
        ]
      },
      {
        title: "구조적 방법론",
        mnemonic: null,
        summary:
          "전체 시스템을 분할·정복 방식으로 나눠 개발하고 통합하는 방법론",
        details: [
          "Top-down 방식으로 시스템을 기능 단위로 분할",
          "나씨-슈나이더만 차트(구조적 차트) 사용"
        ]
      },
      {
        title: "정보공학 방법론",
        mnemonic: null,
        summary:
          "정보 시스템 개발 절차를 체계화한 방법론으로 대형 프로젝트에 적합",
        details: [
          "조직 전체의 정보 시스템을 통합적으로 설계",
          "전략적 정보 계획 수립에 사용"
        ]
      },
      {
        title: "객체지향 방법론",
        mnemonic: null,
        summary: "객체라는 단위로 시스템을 설계하는 방법론",
        details: [
          "데이터와 기능을 하나의 객체 단위로 캡슐화",
          "UML 등으로 표현",
          "재사용성과 유지보수성 향상"
        ]
      },
      {
        title: "컴포넌트 기반 방법론",
        mnemonic: null,
        summary: "미리 만들어진 컴포넌트를 조립하여 시스템을 구성하는 방법론",
        details: [
          "컴포넌트 재사용을 통한 개발 생산성 향상",
          "컴포넌트 간 인터페이스 명세가 중요"
        ]
      },
      {
        title: "애자일 방법론",
        mnemonic: null,
        summary:
          "절차보다 사람과 상호작용을 중시하고, 변화에 유연하게 대응하는 경량 개발 방법론",
        details: [
          "짧은 반복 주기(Iteration)와 지속적인 피드백",
          "문서보다 동작하는 소프트웨어 중시",
          "대표: XP, 스크럼, 린 등"
        ]
      },
      {
        title: "제품 계열 방법론",
        mnemonic: null,
        summary:
          "제품군에 공통으로 적용되는 기능을 정의하여 개발하는 방법론 (임베디드 SW에 유용)",
        details: [
          "공통 기능(Platform) + 제품별 변형 기능(Product-specific)",
          "임베디드, 가전 등 유사 제품군에 적합"
        ]
      }
    ]
  },
  {
    section: "XP (eXtreme Programming)",
    items: [
      {
        title: "XP",
        mnemonic: null,
        summary: "1~3주의 짧은 반복 주기를 갖는 대표적인 애자일 방법론",
        details: [
          "고객과의 긴밀한 소통, 빠른 피드백을 중시",
          "테스트 우선(TDD), 리팩토링, 짝 프로그래밍 등 실천 기법 포함"
        ]
      },
      {
        title: "XP의 5가지 가치",
        mnemonic: "용단의피존",
        summary: "용기, 단순성, 의사소통, 피드백, 존중",
        details: [
          "1. 용기 : 빠르게 개발하고 문제를 드러낼 용기",
          "2. 단순성 : 필요한 것만 단순하게 구현",
          "3. 의사소통 : 개발자-관리자-고객 간 원활한 소통",
          "4. 피드백 : 빠른 피드백을 통해 방향 수정",
          "5. 존중 : 팀원 간 상호 존중"
        ]
      },
      {
        title: "XP의 12가지 기본 원리",
        mnemonic: null,
        summary: "XP 실천 기법 12가지",
        details: [
          "1. 짝 프로그래밍 (Pair Programming) : 두 명이 한 팀으로 공동 책임",
          "2. 공동 코드 소유 (Collective Ownership) : 모든 코드 누구나 수정 가능",
          "3. 지속적인 통합 (CI; Continuous Integration) : 자주 통합/빌드",
          "4. 계획 세우기 (Planning Process) : 고객 가치, 지연 요소 파악",
          "5. 작은 릴리즈 (Small Release) : 작은 시스템을 빠르게, 자주 배포",
          "6. 메타포어 (Metaphor) : 공통 이름 체계를 통해 의사소통",
          "7. 간단한 디자인 (Simple Design) : 요구에 적합한 최소 설계",
          "8. 테스트 기반 개발 (TDD; Test Driven Development) : 테스트 먼저 작성 후 코드",
          "9. 리팩토링 (Refactoring) : 기능은 유지하고 구조를 개선",
          "10. 40시간 작업 (40-Hour Work) : 과로 방지, 주 40시간 원칙",
          "11. 고객 상주 (On Site Customer) : 상주 고객이 즉각 응답",
          "12. 코드 표준 (Coding Standard) : 일관된 코딩 규칙 유지"
        ]
      }
    ]
  },
  {
    section: "스크럼 & 린",
    items: [
      {
        title: "스크럼",
        mnemonic: null,
        summary:
          "매일 정해진 시간/장소에서 짧은 회의를 통해 개발을 진행하는 애자일 방법론",
        details: [
          "짧은 반복 주기인 스프린트 단위로 개발",
          "자율적인 팀 운영과 지속적인 개선 중시"
        ]
      },
      {
        title: "스크럼 용어",
        mnemonic: null,
        summary: "백로그, 스프린트, 데일리 미팅, 스크럼 마스터, 스프린트 회고, 번다운 차트",
        details: [
          "백로그 : 제품에 대한 요구사항 목록",
          "스프린트 : 짧은 기간 내 반복 개발",
          "데일리(스크럼) 미팅 : 매일 To-Do 계획 수립, 번다운 차트 작성",
          "스크럼 마스터 : 프로젝트 리더, 장애 제거 역할",
          "스프린트 회고 : 개선점 확인 및 반성",
          "번다운 차트 : 남은 작업량(백로그) vs 시간"
        ]
      },
      {
        title: "린",
        mnemonic: null,
        summary:
          "낭비 요소를 제거해 품질을 향상시키는 애자일 방법론",
        details: [
          "도요타 생산방식에서 영향",
          "최소 낭비, 최대 가치 전달"
        ]
      },
      {
        title: "린의 7가지 원칙",
        mnemonic: "낭품지확인사전",
        summary: "낭비제거, 품질 내재화, 지식 창출, 늦은 확정, 빠른 인도, 사람 존중, 전체 최적화",
        details: [
          "1. 낭비제거",
          "2. 품질 내재화",
          "3. 지식 창출",
          "4. 늦은 확정",
          "5. 빠른 인도",
          "6. 사람 존중",
          "7. 전체 최적화"
        ]
      }
    ]
  },
  {
    section: "비용 산정 & 일정 관리",
    items: [
      {
        title: "비용산정 모델",
        mnemonic: null,
        summary:
          "소프트웨어 개발 계획 수립을 위해 투입 자원과 시간을 산정하는 기법",
        details: [
          "하향식 : 전문가 판단 기반 (예: 델파이 기법)",
          "상향식 : 요구사항/기능 기반 (LoC, Man Month, COCOMO, 푸트남, FP 등)"
        ]
      },
      {
        title: "LoC (Lines of Codes) 모형",
        mnemonic: "낙중비46",
        summary: "코드 라인 수 예측치를 기반으로 비용 산정",
        details: [
          "예측치 = (낙관치 + 중관치*4 + 비관치) / 6",
          "예: (100 + 150*4 + 200)/6 = 150"
        ]
      },
      {
        title: "Man Month 모형",
        mnemonic: null,
        summary: "한 사람이 1개월 동안 할 수 있는 일의 양을 기준으로 비용 산정",
        details: [
          "Man Month = LoC / 개발자의 월간 생산성",
          "프로젝트 기간 = Man Month / 투입 인력 수"
        ]
      },
      {
        title: "COCOMO 모형",
        mnemonic: "조반임",
        summary: "프로그램 규모에 따라 비용을 산정하는 모형",
        details: [
          "1) 조직형/단순형 (Organic) : 소규모, 50KSDI 이하",
          "2) 반 분리형 (Semi-Detached) : 중간 규모, 300KSDI 이하",
          "3) 임베디드형 (Embedded) : 초대형, 복잡한 제약 포함"
        ]
      },
      {
        title: "푸트남 (Putnam) 모형",
        mnemonic: null,
        summary:
          "생명주기 단계별 인력 분포를 예측, Rayleigh-Norden 곡선 기반",
        details: [
          "투입 인력과 개발 기간의 상관관계를 수학적으로 표현"
        ]
      },
      {
        title: "FP (기능점수) 모형",
        mnemonic: null,
        summary:
          "요구 기능별로 가중치를 부여해 총 점수를 계산하여 비용을 산정",
        details: [
          "입력, 출력, 조회, 내부 논리 파일, 외부 인터페이스 파일 등",
          "기능 복잡도에 따른 가중치 적용"
        ]
      },
      {
        title: "일정 관리 모델",
        mnemonic: "씨씨펕",
        summary: "CPM, CCPM, PERT",
        details: [
          "1. CPM (Critical Path Method)",
          "2. CCPM (Critical Chain Project Management)",
          "3. PERT (Program Evaluation and Review Technique)"
        ]
      },
      {
        title: "CPM (주 공정법)",
        mnemonic: null,
        summary:
          "작업 수행 순서가 얽힌 프로젝트에서 임계 경로를 계산하는 일정 계산 기법",
        details: [
          "임계 경로(Critical Path) = 프로젝트에서 가장 긴 경로",
          "임계 경로상의 작업 지연 = 전체 일정 지연"
        ]
      },
      {
        title: "CCPM (중요 연쇄 공정법)",
        mnemonic: null,
        summary:
          "CPM에 자원 제약사항을 고려해 일정을 계산하는 방법",
        details: [
          "리소스(인력, 장비) 제약을 반영해 일정 최적화"
        ]
      },
      {
        title: "PERT",
        mnemonic: null,
        summary:
          "낙관치·중관치·비관치의 3점 추정방식으로 일정을 관리하는 기법",
        details: [
          "기대시간 = (낙관치 + 4*중관치 + 비관치) / 6",
          "불확실성이 큰 연구/개발 프로젝트에 적합"
        ]
      }
    ]
  },
  {
    section: "현행 시스템 & 인프라 분석",
    items: [
      {
        title: "현행 시스템 파악",
        mnemonic: "구기인 아소 하네",
        summary:
          "구성/기능/인터페이스, 아키텍처/소프트웨어, 하드웨어/네트워크를 파악",
        details: [
          "1) 구성 현황 / 기능 현황 / 인터페이스 파악",
          "2) 아키텍처, 소프트웨어 구성 파악",
          "3) 하드웨어, 네트워크 구성 파악"
        ]
      },
      {
        title: "OS (운영체제)",
        mnemonic: null,
        summary:
          "컴퓨터 하드웨어를 사용자가 쉽게 사용할 수 있도록 인터페이스를 제공하는 소프트웨어",
        details: [
          "자원 관리(프로세스, 메모리, 파일, 입출력 장치 등)",
          "사용자와 하드웨어 사이의 중재자 역할"
        ]
      },
      {
        title: "OS 현행 시스템 분석",
        mnemonic: "신성기주구",
        summary: "품질 측면과 지원 측면에서 OS를 분석",
        details: [
          "품질 측면: 신뢰도, 성능",
          "지원 측면: 기술 지원, 주변 기기, 구축 비용"
        ]
      },
      {
        title: "네트워크",
        mnemonic: null,
        summary:
          "원하는 정보를 수신자에게 정확하게 전달하기 위한 인프라",
        details: [
          "전송 매체, 프로토콜, 장비 등으로 구성",
          "통신 품질과 보안이 중요"
        ]
      },
      {
        title: "OSI 7계층",
        mnemonic: null,
        summary:
          "국제표준화기구(ISO)가 제시한 네트워크 통신 표준 계층 구조",
        details: [
          "통신에서 발생하는 충돌 문제를 최소화하기 위해 계층 분리",
          "물리, 데이터링크, 네트워크, 전송, 세션, 프레젠테이션, 응용"
        ]
      },
      {
        title: "DBMS",
        mnemonic: null,
        summary: "데이터베이스를 관리할 수 있는 응용 프로그램",
        details: [
          "데이터 정의, 조작, 제어 기능 제공",
          "데이터 무결성, 보안, 동시성 제어"
        ]
      },
      {
        title: "DBMS 분석 시 고려사항",
        mnemonic: "가성호기구",
        summary: "성능 측면과 지원 측면으로 구분해 분석",
        details: [
          "성능 측면: 가용성, 성능, 상호 호환성",
          "지원 측면: 기술 지원, 구축 비용"
        ]
      },
      {
        title: "미들웨어",
        mnemonic: null,
        summary:
          "서버-서버, 서버-클라이언트 등 컴퓨터 간 연결 및 관리 기능을 제공하는 소프트웨어",
        details: [
          "예: 웹 서버, WAS, 메시지 큐, RPC 등",
          "애플리케이션 간 통신을 단순화"
        ]
      }
    ]
  },
  {
    section: "소프트웨어 아키텍처 & 뷰",
    items: [
      {
        title: "소프트웨어 아키텍처",
        mnemonic: null,
        summary:
          "소프트웨어의 구성요소, 그 특성, 구성요소 간 관계를 표현한 구조",
        details: [
          "전체 시스템의 상위 수준 설계",
          "품질 속성(성능, 보안, 유지보수성 등)에 큰 영향"
        ]
      },
      {
        title: "소프트웨어 4+1 뷰",
        mnemonic: null,
        summary:
          "요구사항을 4개의 구조적 관점과 1개의 유스케이스 뷰로 표현하는 방법",
        details: [
          "유스케이스를 통해 4개 뷰가 충돌 없이 요구사항을 충족하는지 검증",
          "뷰: 유스케이스, 논리, 프로세스, 배치, 구조(구현)"
        ]
      },
      {
        title: "유스케이스 뷰",
        mnemonic: null,
        summary:
          "유스케이스를 도출하고 다른 뷰를 검증하는 데 사용하는 뷰",
        details: [
          "사용자 관점에서 시스템 사용 시나리오 표현",
          "요구사항 추적의 기준"
        ]
      },
      {
        title: "프로세스 뷰",
        mnemonic: null,
        summary:
          "비기능적인 속성(성능, 동시성 등)을 자원 사용 관점에서 표현하는 뷰",
        details: [
          "프로세스, 스레드, 통신 메커니즘 등 표현"
        ]
      },
      {
        title: "배치 뷰",
        mnemonic: null,
        summary:
          "컴포넌트가 물리적인 아키텍처(노드)에 어떻게 배치되는지를 보여주는 뷰",
        details: [
          "서버, 클라이언트, 네트워크 노드 간 배치"
        ]
      },
      {
        title: "논리 뷰",
        mnemonic: null,
        summary:
          "기능적인 요구사항이 어떻게 제공되는지 표현한 뷰",
        details: [
          "클래스, 인터페이스, 패키지 등 논리 구조"
        ]
      },
      {
        title: "구조(구현) 뷰",
        mnemonic: null,
        summary:
          "소프트웨어 모듈의 구성을 보여주는 뷰",
        details: [
          "모듈, 컴포넌트, 라이브러리 구조"
        ]
      }
    ]
  },
  {
    section: "아키텍처 패턴 & 평가",
    items: [
      {
        title: "소프트웨어 아키텍처 패턴",
        mnemonic: "계클서 파필 브모",
        summary:
          "반복적으로 등장하는 문제에 대해 일반화되고 재사용 가능한 설계 솔루션",
        details: [
          "주요 패턴: 계층화, 클라이언트-서버, 파이프-필터, 브로커, MVC"
        ]
      },
      {
        title: "계층화 패턴",
        mnemonic: null,
        summary:
          "시스템을 계층으로 구분하고 인접 계층끼리만 상호작용",
        details: [
          "예: OSI 7계층",
          "각 계층은 역할과 책임이 명확"
        ]
      },
      {
        title: "클라이언트-서버 패턴",
        mnemonic: null,
        summary: "하나의 서버와 다수의 클라이언트 구조",
        details: [
          "사용자는 클라이언트와만 상호작용",
          "서버는 서비스 제공, 클라이언트는 서비스 요청"
        ]
      },
      {
        title: "파이프-필터 패턴",
        mnemonic: null,
        summary:
          "데이터 스트림을 여러 단계(필터)로 처리하는 구조",
        details: [
          "각 서브시스템(필터)은 입력 데이터를 처리 후 다음 필터에 전달",
          "예: Unix Shell 파이프라인"
        ]
      },
      {
        title: "브로커 패턴",
        mnemonic: null,
        summary:
          "브로커가 클라이언트 요청을 적합한 컴포넌트에 연결하는 구조",
        details: [
          "여러 원격 서비스 중 적합한 컴포넌트를 선택하여 호출",
          "분산 시스템, 미들웨어에 활용"
        ]
      },
      {
        title: "모델-뷰-컨트롤러 (MVC) 패턴",
        mnemonic: null,
        summary:
          "모델, 뷰, 컨트롤러의 3개 서브시스템으로 분리하는 패턴",
        details: [
          "1) 모델 : 핵심 기능과 데이터 보관",
          "2) 뷰 : 사용자에게 정보 표시",
          "3) 컨트롤러 : 사용자의 입력 처리",
          "하나의 모델에 여러 뷰가 필요한 대화형 애플리케이션에 적합"
        ]
      },
      {
        title: "소프트웨어 아키텍처 비용 평가 모델",
        mnemonic: "싸카 (SACAA)",
        summary:
          "아키텍처의 품질/경제성을 평가하는 모델들의 집합",
        details: [
          "1. SAAM : 변경 용이성, 기능성에 집중. 경험이 없어도 사용 가능",
          "2. ATAM : SAAM 계승, 품질 속성 만족 여부 평가",
          "3. CBAM : ATAM에 경제성 평가 추가",
          "4. ADR : 아키텍처 구성요소 간 응집도 평가",
          "5. ARID : ATAM + ADR, 전체가 아닌 특정 부분 평가"
        ]
      }
    ]
  },
  {
    section: "디자인 패턴 개요",
    items: [
      {
        title: "디자인 패턴",
        mnemonic: null,
        summary:
          "소프트웨어 설계 시 자주 쓰이는 설계 방법을 정리한 패턴",
        details: [
          "반복되는 문제에 대한 검증된 해결책",
          "참고하여 개발 효율성과 품질 향상"
        ]
      },
      {
        title: "디자인 패턴 구성요소",
        mnemonic: "패문솔 사결샘",
        summary: "패턴 이름, 문제/배경, 솔루션, 사례, 결과, 샘플코드",
        details: [
          "1. 패턴 이름",
          "2. 문제 및 배경",
          "3. 솔루션",
          "4. 사례",
          "5. 결과",
          "6. 샘플코드",
          "cf. 라이브러리 구성요소: 도설셈(도움말, 설치파일, 샘플코드)"
        ]
      },
      {
        title: "디자인 패턴 유형",
        mnemonic: "생구행",
        summary: "생성(5), 구조(7), 행위(11) 패턴",
        details: [
          "1. 생성 패턴 (5개)",
          "2. 구조 패턴 (7개)",
          "3. 행위 패턴 (11개)"
        ]
      }
    ]
  },
  {
    section: "디자인 패턴 - 생성 패턴",
    items: [
      {
        title: "생성 패턴",
        mnemonic: "팩프빌싱추",
        summary: "객체 생성과 관련된 패턴",
        details: [
          "1. 팩토리 메소드",
          "2. 프로토타입",
          "3. 빌더",
          "4. 싱글톤",
          "5. 추상 팩토리"
        ]
      },
      {
        title: "팩토리 메소드 (Factory Method)",
        mnemonic: null,
        summary:
          "상위 클래스에서 인터페이스를 정의하고, 서브 클래스가 실제 객체를 생성하는 패턴",
        details: [
          "객체 생성 책임을 서브 클래스에 위임",
          "클래스 확장을 통해 새로운 제품군 추가 용이"
        ]
      },
      {
        title: "프로토타입 (Prototype)",
        mnemonic: null,
        summary:
          "원형 객체를 복사(클론)하여 새로운 객체를 생성하는 패턴",
        details: [
          "객체 생성 시 기본 형태가 필요할 때 사용",
          "복잡한 초기화 과정을 복사로 대체"
        ]
      },
      {
        title: "빌더 (Builder)",
        mnemonic: null,
        summary:
          "복잡한 객체를 단계적으로 조립하여 생성하는 패턴",
        details: [
          "생성 방법과 구현 방법을 분리",
          "같은 생성 절차라도 다른 표현(결과) 가능"
        ]
      },
      {
        title: "싱글톤 (Singleton)",
        mnemonic: null,
        summary: "클래스 내 객체가 하나 뿐임을 보장하는 패턴",
        details: [
          "전역에서 하나의 인스턴스를 공유",
          "공유 자원 접근 시 동시성 문제 주의"
        ]
      },
      {
        title: "추상 팩토리 (Abstract Factory)",
        mnemonic: null,
        summary:
          "구체 클래스에 의존하지 않고, 연관된 객체들의 '제품군'을 생성하는 패턴",
        details: [
          "객체 그룹 간 결합이 느슨해짐",
          "UI 테마, DB 드라이버 교체 등에 활용"
        ]
      }
    ]
  },
  {
    section: "디자인 패턴 - 구조 패턴",
    items: [
      {
        title: "구조 패턴",
        mnemonic: "퍼플컴프브어데",
        summary: "클래스/객체 구조(합성)에 관련된 패턴",
        details: [
          "1. 퍼싸드 (Facade)",
          "2. 플라이웨이트 (Flyweight)",
          "3. 컴포지트 (Composite)",
          "4. 프록시 (Proxy)",
          "5. 브리지 (Bridge)",
          "6. 어댑터 (Adapter)",
          "7. 데코레이터 (Decorator)"
        ]
      },
      {
        title: "퍼싸드 (Facade)",
        mnemonic: null,
        summary:
          "복잡한 시스템에 단순한 인터페이스를 제공하여 접근성을 높이는 패턴",
        details: [
          "여러 서브시스템 호출을 한 곳에서 감싸는 얇은 인터페이스"
        ]
      },
      {
        title: "플라이웨이트 (Flyweight)",
        mnemonic: null,
        summary:
          "객체를 새로 생성하는 대신 공유하여 메모리를 절약하는 패턴",
        details: [
          "공유 가능한 상태(내부 상태)와 개별 상태(외부 상태) 분리"
        ]
      },
      {
        title: "컴포지트 (Composite)",
        mnemonic: null,
        summary:
          "객체 관계를 트리 구조로 구성하여 복합 객체와 단일 객체를 동일하게 다루는 패턴",
        details: [
          "예: 파일 시스템(디렉토리/파일)",
          "재귀적인 구조"
        ]
      },
      {
        title: "브리지 (Bridge)",
        mnemonic: null,
        summary:
          "구현부에서 추상층을 분리하여 결합도를 낮추는 패턴",
        details: [
          "기능 계층과 구현 계층을 분리하여 독립적으로 확장"
        ]
      },
      {
        title: "어댑터 (Adapter)",
        mnemonic: null,
        summary:
          "호환되지 않는 인터페이스를 변환하여 재사용 가능하게 만드는 패턴",
        details: [
          "기존 코드 수정 없이 새 인터페이스에 맞춰 사용"
        ]
      },
      {
        title: "데코레이터 (Decorator)",
        mnemonic: null,
        summary:
          "객체 결합을 통해 기존 객체에 새로운 기능을 동적으로 추가하는 패턴",
        details: [
          "상속 대신 구성(Composition)으로 기능 확장"
        ]
      }
    ]
  },
  {
    section: "디자인 패턴 - 행위 패턴",
    items: [
      {
        title: "행위 패턴",
        mnemonic: "미인템옵비커이체스스메",
        summary: "객체 간 책임 분배와 상호작용에 관련된 패턴",
        details: [
          "1. 미디에이터 (Mediator)",
          "2. 인터프리터 (Interpreter)",
          "3. 템플릿 메소드 (Template Method)",
          "4. 옵서버 (Observer)",
          "5. 비지터 (Visitor)",
          "6. 커맨드 (Command)",
          "7. 이터레이터 (Iterator)",
          "8. 체인 오브 리스폰서빌리티 (Chain of Responsibility)",
          "9. 스테이트 (State)",
          "10. 스트레티지 (Strategy)",
          "11. 메멘토 (Memento)"
        ]
      },
      {
        title: "중재자 (Mediator)",
        mnemonic: null,
        summary:
          "객체 사이에 중재자를 두어 직접 의존성을 줄이는 패턴",
        details: [
          "복잡한 N:N 관계를 1:N 관계로 단순화"
        ]
      },
      {
        title: "인터프리터 (Interpreter)",
        mnemonic: null,
        summary:
          "언어의 문법을 클래스로 표현하고 해석기를 제공하는 패턴",
        details: [
          "DSL, 정규식 해석 등에 사용"
        ]
      },
      {
        title: "템플릿 메소드 (Template Method)",
        mnemonic: null,
        summary:
          "상위 클래스에서 알고리즘의 골격을 정의하고, 하위 클래스에서 세부 처리를 구현하는 패턴",
        details: [
          "작업 순서는 고정, 일부 단계만 오버라이드",
          "cf. 팩토리 메소드: 상위 클래스에서 인터페이스 정의, 하위에서 실제 객체 생성"
        ]
      },
      {
        title: "옵서버 (Observer)",
        mnemonic: null,
        summary:
          "객체 상태 변화를 관찰하다가, 변경 시 의존 객체들에게 통보하는 패턴",
        details: [
          "이벤트 리스너 구조를 일반화한 형태",
          "발행-구독 모델과 유사"
        ]
      },
      {
        title: "비지터 (Visitor)",
        mnemonic: null,
        summary:
          "처리 기능을 별도의 객체로 분리하여, 구조는 유지하고 기능을 추가하는 패턴",
        details: [
          "Visitor가 각 요소(클래스)를 방문하며 작업 수행"
        ]
      },
      {
        title: "커맨드 (Command)",
        mnemonic: null,
        summary:
          "요청(명령)을 객체로 캡슐화하여, 서로 다른 요청을 동일한 방식으로 처리하는 패턴",
        details: [
          "실행, 취소(Undo), 재실행(Redo) 구현에 유리"
        ]
      },
      {
        title: "반복자 (Iterator)",
        mnemonic: null,
        summary:
          "집합 객체 내부 구조를 노출하지 않고, 순차적으로 접근할 수 있게 하는 패턴",
        details: [
          "for-each 루프의 이론적 기반"
        ]
      },
      {
        title: "책임 연쇄 (Chain of Responsibility)",
        mnemonic: null,
        summary:
          "한 객체가 요청을 처리하지 못하면 다음 객체로 넘겨 처리하는 패턴",
        details: [
          "요청 처리자(Handler)들을 체인으로 연결"
        ]
      },
      {
        title: "상태 (State)",
        mnemonic: null,
        summary:
          "객체의 상태를 캡슐화하고, 상태에 따라 행동을 다르게 하는 패턴",
        details: [
          "if-else 분기 대신 상태 객체로 분리"
        ]
      },
      {
        title: "전략 (Strategy)",
        mnemonic: null,
        summary:
          "동일 계열의 알고리즘들을 캡슐화하고, 실행 시점에 전략을 교체 가능한 패턴",
        details: [
          "알고리즘 선택을 클라이언트가 수행"
        ]
      },
      {
        title: "메멘토 (Memento)",
        mnemonic: null,
        summary:
          "특정 시점의 객체 내부 상태를 객체화하여, 해당 시점으로 되돌릴 수 있게 하는 패턴",
        details: [
          "Undo 기능 구현에 사용"
        ]
      }
    ]
  },
  {
    section: "요구공학",
    items: [
      {
        title: "요구공학",
        mnemonic: null,
        summary:
          "요구사항을 도출, 분석, 명세, 확인하는 구조화된 활동",
        details: [
          "요구사항의 품질이 전체 시스템 품질에 큰 영향"
        ]
      },
      {
        title: "요구공학 프로세스",
        mnemonic: null,
        summary:
          "개발 단계(CMM Level 3)와 관리 단계(CMM Level 2)로 구성",
        details: [
          "개발 단계: 도출, 분석, 명세, 확인 (도분명확)",
          "관리 단계: 협상, 기준선 설정, 변경관리, 확인/검증 (협기변확)"
        ]
      },
      {
        title: "요구공학 개발 단계 (CMM Level 3)",
        mnemonic: "도분명확",
        summary: "도출 → 분석 → 명세 → 확인",
        details: [
          "1. 도출 : 이해관계자 식별, 고객 분석",
          "2. 분석 : 분류 → 개념 모델링 → 할당 → 협상 → 정형 분석",
          "3. 명세 : 정형화된 형태로 요구사항 문서화",
          "4. 확인 : 요구사항 이해 및 문서 완전성 검증"
        ]
      },
      {
        title: "요구사항 도출 기법",
        mnemonic: null,
        summary: "요구를 수집하는 다양한 기법",
        details: [
          "인터뷰 : 직접 대화",
          "브레인스토밍 : 비판 없이 의견을 수용",
          "델파이 기법: 전문가 경험 활용",
          "롤 플레잉: 역할 연기를 통한 요구 파악",
          "워크숍 : 단기간 집중하여 정보 획득/공유 (사전 준비 필요)",
          "설문 조사"
        ]
      },
      {
        title: "요구사항 분석 단계",
        mnemonic: "분개할협분",
        summary:
          "요구사항 분류, 개념 모델링, 할당, 협상, 정형 분석",
        details: [
          "1. 요구사항 분류 : 기능 vs 비기능 요구사항",
          "2. 개념 모델링 생성 : UML 등으로 요구사항의 개념적 표현",
          "3. 요구사항 할당 : 아키텍처 구성요소에 배분",
          "4. 요구사항 협상 : 충돌 해결 및 우선순위 부여",
          "5. 정형 분석 : 수학적 기호로 엄밀히 표현"
        ]
      },
      {
        title: "요구사항 분석 기법",
        mnemonic: null,
        summary: "자료 흐름 지향 분석, 객체지향 분석",
        details: [
          "자료 흐름 지향 분석 : 데이터 흐름도(DFD)와 자료 사전(DD)을 통해 분석",
          "객체지향 분석 : 기능과 데이터를 함께 분석, UML로 표준화"
        ]
      },
      {
        title: "요구사항 명세 기법",
        mnemonic: null,
        summary: "비정형 명세 vs 정형 명세",
        details: [
          "1. 비정형 명세 : 자연어 기반 서술",
          "2. 정형 명세 : 수학적 표기법 사용"
        ]
      },
      {
        title: "요구사항 명세 원리 및 검증 항목",
        mnemonic: "명완검 일수 개추",
        summary:
          "명확성, 완전성, 검증 가능성, 일관성, 수정 용이성, 개발 후 이용성, 추적 가능성",
        details: [
          "1. 명확성 : 하나의 의미만 갖게 작성",
          "2. 완전성 : 모든 요구사항 포함",
          "3. 검증 가능성 : 달성 여부를 확인 가능해야 함",
          "4. 일관성 : 모순이 없어야 함",
          "5. 수정 용이성 : 쉽게 변경 가능",
          "6. 개발 후 이용성 : 운영/유지보수에 사용 가능",
          "7. 추적 가능성 : 요구사항과 산출물 간 추적 가능"
        ]
      },
      {
        title: "요구사항 확인 기법",
        mnemonic: null,
        summary:
          "정형 기술 검토, 프로토타이핑, 테스트 케이스, CASE 도구, 베이스라인, 요구사항 추적표 등",
        details: [
          "1. 정형 기술 검토(TCR)",
          "   - 동료 검토 (Peer Review)",
          "   - 워크 스루 (Walk Through)",
          "   - 인스펙션 (Inspection)",
          "2. 프로토타이핑 활용",
          "3. 테스트 케이스를 통한 확인",
          "4. CASE 도구 활용",
          "5. 베이스라인 검증",
          "6. 요구사항 추적표(RTM)로 단계별 산출물 변경 확인"
        ]
      },
      {
        title: "정형 기술 검토(TCR) 기법",
        mnemonic: null,
        summary:
          "관리 리뷰, 기술 리뷰, 인스펙션, 워크스루, 감사",
        details: [
          "관리 리뷰 : 프로젝트 진행 상황 전반 검토",
          "기술 리뷰 : 명세 준수 여부 검토",
          "인스펙션 : 저작자가 아닌 전문가가 검토",
          "  - 참가자: 주재자(Moderator), 작성자, 낭독자, 기록자, 검토자",
          "워크스루 : 사전 검토 후 짧은 회의",
          "감사(Audit) : 표준/가이드라인 준수 여부 검토 (제3기관 포함 가능)"
        ]
      },
      {
        title: "요구공학 관리 단계 (CMM Level 2)",
        mnemonic: "협기변확",
        summary: "협상, 기준선 설정, 변경관리, 확인 및 검증",
        details: [
          "1. 협상 : 구현 가능한 기능에 대해 이해관계자와 협상",
          "2. 기준선 설정 : 베이스라인 설정",
          "3. 변경관리 : 형상통제 위원회(CCB) 운영",
          "   - CCB: 형상 관리 방침 수립, 산출물 검토",
          "   - 베이스라인: 산출물 변화를 통제하는 기준 시점",
          "4. 확인 및 검증 : 요구사항에 부합하는지 확인"
        ]
      }
    ]
  }
];
