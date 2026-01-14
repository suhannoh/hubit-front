export const cert5Data = [
  {
    section: "인터페이스 기본 개념",
    items: [
      {
        title: "인터페이스 종류",
        mnemonic: null,
        summary: "사용자 인터페이스와 시스템 인터페이스로 구분",
        details: [
          "사용자 인터페이스(User Interface)",
          "시스템 인터페이스(System Interface)"
        ]
      },
      {
        title: "인터페이스 산출물",
        mnemonic: null,
        summary: "요구사항 → 정의서 → 명세서 → 설계서 순으로 산출",
        details: [
          "1. (인터페이스) 요구사항",
          "2. (인터페이스) 정의서",
          "3. (인터페이스) 명세서",
          "4. (인터페이스) 설계서"
        ]
      },
      {
        title: "시스템 인터페이스 설계서",
        mnemonic: null,
        summary: "인터페이스 목록과 각 인터페이스 세부 정보를 정의한 문서",
        details: [
          "시스템 간 인터페이스 목록 정의",
          "각 인터페이스별 세부 정보 및 구조 정의"
        ]
      },
      {
        title: "상세 기능별 인터페이스 명세서 주요 항목",
        mnemonic: "아명오개 전후파반",
        summary: "ID, 이름, 오퍼레이션 정보, 입력·출력 조건, 파라미터, 반환값",
        details: [
          "1. 인터페이스 ID",
          "2. 인터페이스명",
          "3. 오퍼레이션 이름",
          "4. 오퍼레이션 개요",
          "5. 사전 조건",
          "6. 사후 조건",
          "7. 파라미터",
          "8. 반환값"
        ]
      }
    ]
  },

  {
    section: "모듈 연계, EAI, ESB",
    items: [
      {
        title: "인터페이스를 위한 모듈 연계 방식",
        mnemonic: null,
        summary: "EAI, ESB를 활용한 모듈 연계",
        details: [
          "1. EAI (Enterprise Application Integration)",
          "2. ESB (Enterprise Service Bus)"
        ]
      },
      {
        title: "EAI",
        mnemonic: null,
        summary: "서로 다른 플랫폼·애플리케이션 간 연계를 돕는 솔루션",
        details: [
          "기업 내 이기종 시스템 간 연계를 위한 솔루션",
          "애플리케이션 간 데이터 연동 및 통합 지원"
        ]
      },
      {
        title: "EAI 구성요소",
        mnemonic: null,
        summary: "EAI 플랫폼, 어댑터, 브로커, 메시지 큐, 비즈니스 워크플로우",
        details: [
          "1. EAI 플랫폼",
          "2. 어댑터 : 핵심 장치, 애플리케이션 입출력 연결",
          "3. 브로커 : 포맷과 코드를 변환해주는 솔루션",
          "4. 메시지 큐 : 비동기 메시지 송수신 기술",
          "5. 비즈니스 워크플로우 : 정의된 워크플로우에 따라 업무 처리"
        ]
      },
      {
        title: "EAI 구축 유형",
        mnemonic: "포허메하",
        summary: "Point-to-point, Hub & Spoke, Message Bus, Hybrid",
        details: [
          "1. Point-to-point : 가장 기초적인 1:1 단순 통합 방법",
          "2. Hub & Spoke : 허브 시스템을 통한 중앙 집중 방식",
          "3. Message Bus : 애플리케이션 사이에 미들웨어(버스)를 두어 연계",
          "4. Hybrid : 그룹 내는 Hub & Spoke, 그룹 간은 Message Bus"
        ]
      },
      {
        title: "ESB",
        mnemonic: null,
        summary: "버스 기반 느슨한 결합 방식의 통합 아키텍처",
        details: [
          "서로 다른 플랫폼 및 애플리케이션을 하나의 시스템처럼 관리",
          "미들웨어(버스)를 중심으로 서비스 통합",
          "느슨한 결합(Loosely Coupled) 방식을 지원"
        ]
      },
      {
        title: "인터페이스 전송 시 데이터 표준 확인 절차",
        mnemonic: "의미표준식별",
        summary: "입출력 의미 파악 → 데이터 표준 확인 → 항목 식별 → 최종 확인",
        details: [
          "1. 입출력 의미 파악",
          "2. 데이터 표준 확인",
          "3. 데이터 항목 식별",
          "4. 데이터 표준 최종 확인"
        ]
      }
    ]
  },

  {
    section: "컴포넌트 및 인터페이스 명세 / 구현 절차",
    items: [
      {
        title: "컴포넌트 명세서",
        mnemonic: null,
        summary: "컴포넌트 개요와 내부 동작을 정의한 문서",
        details: [
          "컴포넌트의 개요, 내부 클래스 동작 등 정의",
          "컴포넌트 : 특정 기능을 수행하기 위해 독립적으로 개발되고 다른 부품과 조립 가능한 소프트웨어 프로그램"
        ]
      },
      {
        title: "인터페이스 명세서",
        mnemonic: null,
        summary: "컴포넌트 인터페이스 클래스의 세부 내용을 정의한 문서",
        details: [
          "컴포넌트 명세서에 명시된 인터페이스 클래스의 세부 내용 정의",
          "메서드, 파라미터, 예외 등 구체적인 인터페이스 규격 포함"
        ]
      },
      {
        title: "인터페이스 기능 구현 절차",
        mnemonic: "선생 전전수파 검후 결반",
        summary: "데이터 선택→생성→전송→수신→파싱→검증→후속처리→결과반환",
        details: [
          "1. 대상자 선택 : 대상을 SQL 등으로 선택",
          "2. 인터페이스 데이터 생성 : JSON 등 형식으로 가공",
          "3. 인터페이스 데이터 전송 요청",
          "4. 인터페이스 데이터 전송",
          "5. 인터페이스 데이터 수신",
          "6. 인터페이스 데이터 파싱",
          "7. 인터페이스 데이터 검증 (포맷 및 제약조건 검사)",
          "8. 후속 기능 수행 (수신 시스템의 후속 로직 실행)",
          "9. 수신 결과 생성 및 전송",
          "10. 수신 측 처리 결과 반환"
        ]
      }
    ]
  },

  {
    section: "JSON / XML / AJAX / REST",
    items: [
      {
        title: "JSON",
        mnemonic: null,
        summary: "키-값 쌍으로 데이터를 표현하는 텍스트 기반 포맷",
        details: [
          "키-값 쌍으로 이루어진 데이터를 전달하기 위한 포맷",
          "사람이 읽기 쉬운 텍스트 형태",
          "AJAX에서 많이 사용"
        ]
      },
      {
        title: "JSON의 표현 자료형",
        mnemonic: null,
        summary: "숫자, 문자열, 배열, 객체로 구성",
        details: [
          "1. 숫자",
          "2. 문자열 (항상 \"\" 큰따옴표 사용)",
          "3. 배열 (대괄호 [ ])",
          "4. 객체 (중괄호 { } 사용, 이름은 문자열)"
        ]
      },
      {
        title: "XML",
        mnemonic: null,
        summary: "HTML의 단점을 보완한 특수 목적 마크업 언어",
        details: [
          "트리 구조를 갖는 마크업 언어",
          "모든 태그에 종료 태그 필수",
          "속성값은 큰따옴표(\" \")로 묶고 대소문자 구분"
        ]
      },
      {
        title: "AJAX",
        mnemonic: null,
        summary: "서버-클라이언트 간 비동기 데이터 교환 기술",
        details: [
          "페이지 전체 새로고침 없이 일부만 갱신",
          "XMLHttpRequest 객체를 이용한 비동기 통신"
        ]
      },
      {
        title: "AJAX의 주요 기술",
        mnemonic: null,
        summary: "XHR, XML, DOM, XSLT, HTML, CSS 등",
        details: [
          "XMLHttpRequest : 비동기 통신을 담당하는 자바스크립트 객체",
          "XML : 특수 목적 마크업 언어",
          "DOM : XML/HTML 문서를 트리 구조로 접근하는 API",
          "XSLT : XML 문서를 다른 XML 문서로 변환하는 언어",
          "HTML : 웹 문서를 표현하는 마크업 언어",
          "CSS : 표시 스타일을 정의하는 언어"
        ]
      },
      {
        title: "AJAX 동작 원리",
        mnemonic: null,
        summary: "이벤트 → JS → XHR요청 → 서버 처리 → 응답으로 부분 갱신",
        details: [
          "1. 요청 이벤트 발생",
          "2. 자바스크립트 호출",
          "3. 자바스크립트가 XMLHttpRequest로 서버에 비동기 요청",
          "4. 서버가 AJAX 요청 처리",
          "5. 전달받은 데이터를 이용해 웹 페이지 일부만 갱신"
        ]
      },
      {
        title: "REST",
        mnemonic: "리메메",
        summary: "URI로 자원을 표시하고 HTTP 메서드로 조작하는 아키텍처",
        details: [
          "HTTP URI로 자원을 식별",
          "HTTP 메서드로 자원에 대한 작업(CRUD)을 수행",
          "구성 요소: 리소스, 메서드, 메시지"
        ]
      },
      {
        title: "REST 메서드의 종류",
        mnemonic: null,
        summary: "POST, GET, PUT, DELETE 등으로 자원 조작",
        details: [
          "POST : Create(생성)",
          "GET : Read(조회)",
          "PUT : Update(수정)",
          "DELETE : Delete(삭제)"
        ]
      },
      {
        title: "인터페이스 구현 방식",
        mnemonic: null,
        summary: "데이터 통신 또는 인터페이스 엔티티를 사용한 구현",
        details: [
          "1) 데이터 통신 사용 : 인터페이스 객체 생성 후 데이터 통신으로 전송",
          "2) 인터페이스 개체(Entity) 사용 : 송신/수신 시스템에 인터페이스 테이블 구현"
        ]
      }
    ]
  },

  {
    section: "DB 암호화 및 보안 프로토콜",
    items: [
      {
        title: "DB 암호화 기법",
        mnemonic: "애플티하",
        summary: "API, 플러그인, TDE, 하이브리드 방식",
        details: [
          "1. API 방식 : 애플리케이션 서버에 암호 모듈 적용 (애플리케이션 서버 부하)",
          "2. 플러그인 방식 : DB 서버에 암호 모듈 적용 (DB 서버 부하)",
          "3. TDE 방식 : DBMS 커널이 자체적으로 암호화 수행 (Transparent Data Encryption)",
          "4. 하이브리드 방식 : API + 플러그인 방식으로 부하 분산"
        ]
      },
      {
        title: "IPSec",
        mnemonic: null,
        summary: "네트워크 계층(3계층)에서 사용하는 보안 프로토콜",
        details: [
          "인증 헤더(AH)와 암호화(ESP)를 이용",
          "AH : MAC를 통해 인증 제공",
          "ESP : MAC + 암호화로 인증 + 기밀성 제공",
          "IKE : 키를 주고받는 키 관리 프로토콜"
        ]
      },
      {
        title: "SSL/TLS",
        mnemonic: "카흐르 CAHHR",
        summary: "전송계층과 응용계층 사이에서 안전한 통신을 보장하는 프로토콜",
        details: [
          "전송계층(4계층)과 응용계층(7계층) 사이에서 동작",
          "1. Change Cipher Spec Protocol : 협상된 Cipher Spec을 알림",
          "2. Alert Protocol : 경고 메시지 전달",
          "3. Heartbeat Protocol : 클라이언트/서버의 정상 상태 확인",
          "4. Handshake Protocol : 상호 인증 및 암호화 키 협상",
          "5. Record Protocol : 협상된 Cipher Spec을 이용해 데이터 전송"
        ]
      },
      {
        title: "S-HTTP",
        mnemonic: null,
        summary: "HTTP 기반 메시지 암호화 보안 기술",
        details: [
          "클라이언트-서버 간 메시지 암호화",
          "HTTP를 사용하는 경우에만 적용 가능한 보안 기술"
        ]
      }
    ]
  },

  {
    section: "테스트 / 감시 도구 및 오류 처리",
    items: [
      {
        title: "인터페이스 구현 검증 도구",
        mnemonic: "엑스피 엔셀웨",
        summary: "xUnit, STAF, FitNesse, NTAF, Selenium, Watir",
        details: [
          "1. xUnit : 다양한 언어를 지원하는 단위 테스트 프레임워크",
          "2. STAF : 분산 환경 각 대상에 데몬을 두고 테스트 수행",
          "3. FitNesse : 웹 기반 테스트 케이스 지원",
          "4. NTAF : STAF(재사용/확장성) + FitNesse(협업 기능) 장점 통합, NHN 프레임워크",
          "5. Selenium : 다양한 브라우저·언어를 지원하는 웹 애플리케이션 테스트 프레임워크",
          "6. Watir : 루비 기반 웹 애플리케이션 테스트 프레임워크"
        ]
      },
      {
        title: "인터페이스 감시 도구",
        mnemonic: null,
        summary: "스카우터와 제니퍼를 이용해 모니터링",
        details: [
          "스카우터 : 애플리케이션 및 DB 모니터링 도구",
          "제니퍼 : 개발부터 운영까지 전 생애주기 동안 모니터링 가능한 도구"
        ]
      },
      {
        title: "오류 처리 방법",
        mnemonic: "화로테",
        summary: "화면 표시, 로그 생성, 테이블 기록으로 오류 처리",
        details: [
          "1. 화면에서 오류를 인지할 수 있도록 구현",
          "2. 오류 로그 생성",
          "3. 관련 테이블에 오류 사항 기록"
        ]
      }
    ]
  }
];
