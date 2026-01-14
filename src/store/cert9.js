export const cert9Data = [
  {
    section: "보안 기본 개념과 네트워크 공격",
    items: [
      {
        title: "SW 개발 보안 3대 요소",
        mnemonic: "기무가",
        summary: "기밀성, 무결성, 가용성",
        details: [
          "기밀성: 인가되지 않은 접근에 정보 노출을 차단하는 특성",
          "무결성: 정당한 방법으로만 데이터를 변경할 수 있으며, 데이터의 정확성을 보장하는 특성",
          "가용성: 권한을 가지고 있으면 서비스를 지속해서 사용할 수 있도록 하는 특성"
        ]
      },
      {
        title: "SW 개발 보안 용어",
        mnemonic: "자위취위",
        summary: "자산, 위협, 취약점, 위험",
        details: [
          "자산: 보호해야 할 정보, 시스템 등",
          "위협: 자산에 손실을 줄 수 있는 잠재적 행위",
          "취약점: 위협이 악용할 수 있는 약점",
          "위험: 위협이 취약점을 이용해 손실을 일으킬 가능성"
        ]
      },
      {
        title: "DoS 공격",
        mnemonic: null,
        summary: "시스템 자원을 고갈시켜 서비스 거부를 유발하는 공격",
        details: [
          "대상 시스템의 CPU, 메모리, 네트워크 대역폭 등을 소모시켜 정상 사용을 방해"
        ]
      },
      {
        title: "SYN 플러딩",
        mnemonic: null,
        summary: "ACK를 보내지 않고 SYN만 보내 연결 대기 상태를 유지시키는 공격",
        details: [
          "TCP 3-way 핸드셰이크의 취약점 악용",
          "SYN 패킷만 전송해 대기 큐의 자원을 고갈시킴"
        ]
      },
      {
        title: "UDP 플러딩",
        mnemonic: null,
        summary: "대량의 UDP 패킷을 임의의 포트로 보내 자원을 고갈시키는 공격",
        details: [
          "응답 메시지는 공격자에게 가지 않도록 위조된 주소 사용",
          "서버가 지속적으로 ICMP Port Unreachable 응답을 보내느라 자원 고갈"
        ]
      },
      {
        title: "스머프(스머핑) 공격",
        mnemonic: null,
        summary: "출발지 IP를 피해자 IP로 위조해 브로드캐스트로 ICMP Echo를 보내는 공격",
        details: [
          "많은 호스트가 ICMP Echo Reply를 피해자에게 보내 과부하 유발",
          "공격 증폭(Amplification) 효과"
        ]
      },
      {
        title: "죽음의 핑 (Ping of Death)",
        mnemonic: null,
        summary: "ICMP 패킷을 비정상적으로 크게 만들어 과부하시키는 공격",
        details: [
          "프로토콜 표준보다 큰 패킷으로 OS/장비의 취약점을 유발"
        ]
      },
      {
        title: "랜드 어택",
        mnemonic: null,
        summary: "출발지 IP와 목적지 IP를 동일하게 위조하는 공격",
        details: [
          "자기 자신에게 응답하게 만들어 시스템을 혼란에 빠뜨림"
        ]
      },
      {
        title: "티어 드롭, 봉크/보잉크",
        mnemonic: null,
        summary: "IP 조각/재전송·재조합 과정의 취약점을 이용한 공격",
        details: [
          "티어 드롭: 조작된 IP 조각으로 재조립 과정에서 오류 유발",
          "봉크/보잉크: 재전송·재조합 과정 시 시퀀스 번호를 조작하여 오류 유발"
        ]
      },
      {
        title: "DDoS 공격",
        mnemonic: null,
        summary: "여러 대의 공격자를 분산 배치해 동시에 동작시키는 DoS 공격",
        details: [
          "대역폭 소진 공격, 서비스 마비 공격 포함",
          "공격자, 마스터(Master), 핸들러(Handler), 에이전트(Agent), 데몬(Daemon)로 구성"
        ]
      },
      {
        title: "DDoS 공격 도구",
        mnemonic: null,
        summary: "Trinoo, TFN, Stacheldraht 등",
        details: [
          "Trinoo: UDP 플러딩 공격 도구",
          "TFN: UDP 플러딩, SYN 플러딩, 스머프 등 여러 DDoS 공격 수행",
          "Stacheldraht: DDoS의 에이전트 역할을 하는 도구"
        ]
      },
      {
        title: "DRDoS 공격",
        mnemonic: null,
        summary: "반사 서버로부터 응답을 폭주시키는 DDoS 공격",
        details: [
          "공격 대상 IP로 위조된 요청을 제3의 서버(반사 서버)에 전송",
          "반사 서버의 응답이 모두 피해자에게 전달되도록 유도"
        ]
      },
      {
        title: "HTTP 기반 DoS 공격",
        mnemonic: null,
        summary: "HTTP GET/Slow HTTP 등의 애플리케이션 레벨 공격",
        details: [
          "HTTP GET 플러딩: 캐싱을 피하고 웹 서버가 직접 처리하도록 과도한 GET 요청",
          "Slow HTTP Header DoS (Slowloris): 불완전한 헤더를 천천히 보내 연결 유지",
          "Slow HTTP Post DoS (RUDY): 매우 큰 Content-Length와 느린 전송으로 연결 유지",
          "Slow HTTP Read DoS: TCP 윈도 크기·처리율을 낮춘 뒤 다량의 HTTP 요청 전송",
          "Hulk DoS: URL을 계속 변경해 차단 정책을 우회하며 GET 요청 폭주",
          "Hash DoS: 해시 테이블에 해시 충돌을 일으켜 CPU를 소모시키는 공격"
        ]
      },
      {
        title: "스니핑 / 네트워크 스캐너",
        mnemonic: null,
        summary: "수동적으로 트래픽을 엿보거나 취약점을 스캔하는 기법",
        details: [
          "스니핑: 직접 공격 대신 패킷을 몰래 도청하는 수동 공격",
          "네트워크 스캐너/스니퍼: 취약점 탐색 및 패킷 캡처 도구 (예: tcpdump)"
        ]
      },
      {
        title: "패스워드 크래킹",
        mnemonic: "사무패레",
        summary: "사전, 무차별, 하이브리드, 레인보우 테이블 공격",
        details: [
          "사전 크래킹: 단어 사전을 이용해 ID/PW 후보를 대입",
          "무차별 크래킹(Brute Force): 가능한 모든 문자 조합 대입",
          "패스워드 하이브리드 공격: 사전 + 무차별 결합",
          "레인보우 테이블 공격: 미리 계산된 해시 테이블에서 해시값을 검색"
        ]
      },
      {
        title: "악성코드 및 공격 기법",
        mnemonic: null,
        summary: "트로이 목마, 버퍼 오버플로우, 백도어 등",
        details: [
          "트로이 목마: 겉으로는 정상적인 프로그램처럼 보이지만 실행 시 악성코드 동작",
          "버퍼 오버플로우: 버퍼 크기를 초과하는 입력으로 프로세스 흐름 변경",
          "스택/힙 버퍼 오버플로우: 스택의 복귀주소/힙 데이터를 오염",
          "백도어: 정상 인증 절차를 우회하는 숨겨진 접근 경로",
          "포맷 스트링 공격: printf 류 함수의 포맷 문자열 취약점 이용",
          "레이스 컨디션 공격: 임시파일 생성 시점에 끼어들어 심볼릭 링크 조작",
          "키로거: 키보드 입력을 훔쳐 주요 정보를 탈취",
          "루트킷: 불법 해킹 기능을 묶어 제공하는 프로그램 모음"
        ]
      },
      {
        title: "사회공학·피싱 공격",
        mnemonic: null,
        summary: "스피어피싱, 스미싱, 큐싱 등",
        details: [
          "스피어피싱: 특정 대상을 노리고 정상 메일처럼 위장해 정보 탈취",
          "스미싱: SMS + 피싱. URL 클릭 유도 후 정보 탈취/소액결제 유도",
          "큐싱: QR코드를 이용한 피싱 공격",
          "스캠 공격(SCAM): 기업 이메일 도용으로 거래 대금 가로채기"
        ]
      },
      {
        title: "네트워크 위장·스푸핑 공격",
        mnemonic: null,
        summary: "ARP/IP/ICMP/DNS 스푸핑 등",
        details: [
          "ARP 스푸핑: MAC 주소를 위장해 패킷을 가로챔",
          "IP 스푸핑: IP를 위조해 인증된 시스템인 것처럼 속임",
          "ICMP Redirect 공격: Redirect 메시지를 위조해 패킷 경로를 조작",
          "DNS 스푸핑(DNS 캐시 포이즈닝): DNS 캐시를 조작해 가짜 IP로 유도"
        ]
      },
      {
        title: "봇넷, 악성 봇, 웜, 랜섬웨어",
        mnemonic: null,
        summary: "자기 복제, 원격제어, 암호화 후 금전 요구 등",
        details: [
          "봇넷: 악성코드에 감염된 다수의 PC가 네트워크로 연결된 형태",
          "악성 봇: 해커 명령에 의해 원격 제어되는 프로그램 (DDoS 등에 악용)",
          "웜: 자기 복제 기능으로 네트워크를 통해 전파되는 악성 프로그램",
          "랜섬웨어: 파일을 암호화한 뒤 복호화 대가로 돈을 요구"
        ]
      },
      {
        title: "고급·신종 공격들",
        mnemonic: null,
        summary: "APT, 공급망, 제로데이, 부채널 등",
        details: [
          "APT 공격: 특정 대상을 겨냥한 지능적·지속적인 공격",
          "공급망 공격: 개발사 코드/배포 서버에 침투해 배포 파일을 악성 변경",
          "제로데이 공격: 취약점이 공표되기 전 이를 악용하는 공격",
          "부 채널 공격(Side Channel): 전력 소비 등 물리 특성을 분석해 비밀 정보 추출",
          "드라이브 바이 다운로드: 악성 스크립트를 심어 방문만으로 감염",
          "워터링 홀: 목표가 자주 방문하는 사이트에 악성코드를 심는 공격"
        ]
      },
      {
        title: "하드웨어·CPU·무선 관련 취약점",
        mnemonic: null,
        summary: "스펙터, 멜트다운, WindTalker, 이블 트윈, IoT-SSDP 등",
        details: [
          "스펙터(Specter): 실패한 분기 예측을 이용해 메모리 정보를 훔침",
          "멜트다운(Meltdown): 인텔 아키텍처 버그로 커널 메모리 접근",
          "WindTalker: 터치/타이핑 패턴을 스니핑하여 해킹",
          "이블 트윈: 정상 Wi-Fi처럼 위장해 접속 유도 후 정보 탈취",
          "IoT-SSDP: SSDP 특성을 이용해 IoT 기기를 좀비로 만들어 DDoS 수행"
        ]
      },
      {
        title: "MITM, Tor, 기타 공격·도구",
        mnemonic: null,
        summary: "MIMT, Tor, 익스플로잇, 스턱스넷, 크리덴셜 스터핑 등",
        details: [
          "MIMT(Man in the Middle): 통신 중간에 침입해 도청·변조",
          "토르 네트워크(Tor): 암호화된 경로를 통해 익명 통신을 제공",
          "익스플로잇(Exploit): SW/HW의 버그·취약점을 악용하는 코드/행위",
          "스턱스넷(Stuxnet): 지멘스 SCADA 시스템을 노린 산업 제어용 악성코드",
          "크리덴셜 스터핑: 유출된 계정 정보를 다른 사이트에 무작위 대입",
          "포트 스캐닝: 활성 포트를 확인해 침입 가능성을 탐색",
          "디렉토리 리스팅 취약점: 인덱싱 활성화로 서버 디렉토리 구조 노출",
          "리버스 쉘: 피해자가 공격자에게 접속하게 한 뒤 쉘 권한을 탈취"
        ]
      },
      {
        title: "보호·방어 관련 기술",
        mnemonic: null,
        summary: "난독화, Tripwire, Ping, 허니팟 등",
        details: [
          "난독화: 코드 가독성을 떨어뜨려 역공학을 어렵게 함",
          "Tripwire: 백도어 생성, 설정 파일 변경 등을 감지",
          "Ping: 원격 호스트 정상 운영 여부 확인",
          "허니팟(HoneyPot): 일부러 취약하게 만든 유인 시스템으로 공격자 유도·분석"
        ]
      },
      {
        title: "로그 파일 종류",
        mnemonic: null,
        summary: "wtmp, utmp, btmp, lastlog, acct/pacct, sulog, xferlog, messages, secure",
        details: [
          "wtmp(x): 로그인/로그아웃/shutdown/reboot 정보 (last 명령어)",
          "utmp(x): 현재 로그인 사용자 정보 (who, w, users, finger)",
          "btmp(x): 로그인 실패 정보 (lastb)",
          "lastlog: 사용자별 최근 로그인 시간 (lastlog)",
          "acct/pacct: 사용자별 실행 명령어 (lastcomm)",
          "sulog: su 명령어 사용 기록",
          "xferlog: FTP 전송 기록",
          "messages: 시스템 전반 메시지 로그",
          "secure: 보안·인증 관련 로그"
        ]
      }
    ]
  },

  {
    section: "인증·접근 통제·암호화",
    items: [
      {
        title: "인증 기술 유형",
        mnemonic: "지소생특",
        summary: "지식, 소지, 생체, 특징 기반 인증",
        details: [
          "지식 기반: ID/PW 등 사용자가 알고 있는 정보",
          "소지 기반: 공인인증서, 토큰 등 사용자가 가진 것",
          "생체 기반: 지문, 홍채 등 생체 정보",
          "특징 기반: 서명, 발걸음 등 행동·특징"
        ]
      },
      {
        title: "접근 통제 절차",
        mnemonic: "식인인책",
        summary: "식별, 인증, 인가, 책임추적성",
        details: [
          "식별: 주체가 자신을 알림 (\"내가 나다\")",
          "인증(Authentication): 객체가 주체의 신원을 검증",
          "인가(Authorization): 인증된 주체에게 권한 부여",
          "책임추적성: 주체의 접근·행동을 추적·기록"
        ]
      },
      {
        title: "서버 접근 통제 유형",
        mnemonic: "댁맥알백",
        summary: "DAC, MAC, RBAC",
        details: [
          "DAC(임의적 접근통제): 접근 결정은 신분, 권한 부여는 데이터 소유자 (ACL 사용)",
          "MAC(강제적 접근통제): 접근 결정은 등급(권한), 권한 부여는 시스템",
          "RBAC(역할 기반 접근통제): 접근 결정은 역할, 권한 부여는 중앙 관리자"
        ]
      },
      {
        title: "암호화 알고리즘 방식",
        mnemonic: "대비해",
        summary: "대칭키, 비대칭키, 해시",
        details: [
          "대칭키 암호: 암/복호화 키가 동일",
          "비대칭키 암호: 공개키/개인키를 별도로 사용",
          "해시 암호: 일방향 암호, 고정 길이 해시값 생성 (복호화 불가)"
        ]
      },
      {
        title: "대칭키 암호화",
        mnemonic: null,
        summary: "블록 암호와 스트림 암호로 구분",
        details: [
          "블록 암호: DES, 3DES, AES, SEED, ARIA, IDEA (고정 길이 블록을 암호화)",
          "스트림 암호: LFSR, RC4 (긴 난수열을 생성해 평문과 XOR 연산)"
        ]
      },
      {
        title: "비대칭키 암호화",
        mnemonic: null,
        summary: "디피-헬만, RSA, ECC, ElGamal 등",
        details: [
          "디피-헬만: 최초의 비밀키 교환 프로토콜, 이산대수 문제 기반",
          "RSA: 소인수분해의 어려움 이용",
          "ECC: 타원 곡선 암호, 경량 환경에서 RSA 대안",
          "ElGamal: 이산대수 기반, 전자서명에도 사용"
        ]
      },
      {
        title: "일방향 해시, MAC, MDC",
        mnemonic: null,
        summary: "무결성 보장을 위한 암호 기법",
        details: [
          "일방향 암호: 임의 길이 입력 → 고정 길이 출력, 복호화 불가",
          "MAC: 키를 사용하는 메시지 인증 코드로 무결성+인증 제공",
          "MDC: 키 없이 변경을 감지하는 코드로 무결성 제공"
        ]
      },
      {
        title: "대표 암호·해시 알고리즘",
        mnemonic: null,
        summary: "DES, AES, SEED, ARIA, IDEA, LFSR, RC4, MD5, SHA, HAS-160",
        details: [
          "DES: 56bit 키, 64bit 블록, 대칭 블록 암호",
          "AES: 3DES의 대체, 10/12/14 라운드로 구성 (SubBytes, ShiftRows, MixColumns, AddRoundKey)",
          "SEED: KISA 개발, 128bit 블록, 16라운드",
          "ARIA: 국정원+산학연 협력 개발",
          "IDEA: DES 대체를 위해 개발된 블록 암호",
          "LFSR: 선형 되먹임 시프트 레지스터 기반 스트림 암호",
          "RC4: 난수열 + XOR, 스트림 암호",
          "MD5: MD4 개선, 128bit 해시",
          "SHA-1: NSA가 설계, DSA에서 사용",
          "SHA-256/384/512: 256/384/512bit 해시값 생성",
          "HAS-160: KCDSA를 위해 개발된 국내 해시 (MD5+SHA1 장점)"
        ]
      },
      {
        title: "IPSec",
        mnemonic: null,
        summary: "네트워크 계층(3계층)에서 동작하는 보안 프로토콜",
        details: [
          "AH(인증 헤더): MAC를 통해 인증 제공",
          "ESP(Encapsulating Security Payload): MAC+암호화로 인증+기밀성 제공",
          "IKE: 키 관리 프로토콜, 키 교환 알고리즘"
        ]
      },
      {
        title: "SSL/TLS",
        mnemonic: "CAHHR",
        summary: "전송계층(4계층)과 응용계층(7계층) 사이에서 안전한 데이터 전송 제공",
        details: [
          "Change Cipher Spec Protocol: 협상된 Cipher Spec을 통지",
          "Alert Protocol: 경고 메시지 전달",
          "Heartbeat Protocol: 클라이언트/서버 정상 상태 확인",
          "Handshake Protocol: 상호 인증, 암호화 키 협상",
          "Record Protocol: 협상된 Cipher Spec을 적용해 실제 데이터 전송"
        ]
      },
      {
        title: "S-HTTP",
        mnemonic: null,
        summary: "HTTP 기반 메시지 암호화 보안 기술",
        details: [
          "HTTP를 사용하는 경우에만 적용 가능",
          "클라이언트-서버 간 메시지를 암호화하여 기밀성 제공"
        ]
      },
      {
        title: "개인정보보호 관련 법령",
        mnemonic: "개망신",
        summary: "개인정보보호법, 정보통신망법, 신용정보법",
        details: [
          "개인정보보호법: 주민등록번호, 여권번호, 운전면허번호, 외국인등록번호 등 고유식별번호 보호",
          "정보통신망법: 정보통신망 이용 촉진 및 정보보호 관련",
          "신용정보법: 신용정보의 이용 및 보호에 관한 법률"
        ]
      }
    ]
  },

  {
    section: "보안 개발 프로세스와 시큐어 코딩",
    items: [
      {
        title: "보안 개발 성숙도 모델",
        mnemonic: null,
        summary: "BSIMM, Open SAMM, Seven TouchPoints, MS SDL, OWASP CLASP",
        details: [
          "BSIMM: 보안 활동의 성숙도 수준을 측정하는 개발 프레임워크",
          "Open SAMM: 설계 리뷰, 코드 리뷰, 보안 테스팅을 핵심 검증 활동으로 하는 개방형 프레임워크",
          "Seven TouchPoints: 검증된 모범 보안 사례를 SDLC에 통합한 방법론",
          "MS SDL: MS가 자사 SW 개발에 의무 적용한 Secure Development Lifecycle",
          "OWASP CLASP: 개념/역할/평가/구현/취약성 관점으로 구성된 프레임워크, 운영 중 시스템에 적용이 쉬움"
        ]
      },
      {
        title: "시큐어 코딩 7대 가이드",
        mnemonic: "입보시에코캡아",
        summary: "입력데이터 검증, 보안 기능, 시간 및 상태, 에러 처리, 코드 오류, 캡슐화, API 오용",
        details: [
          "입력데이터 검증 및 표현: 검증되지 않은 입력 차단, 인코딩·디코딩 처리",
          "보안 기능: 인증, 인가, 암호화, 키 관리 등",
          "시간 및 상태: 세션 관리, 동시성 제어, 레이스 컨디션 해결",
          "에러 처리: 상세 오류 메시지 노출 방지, 예외 처리",
          "코드 오류: NULL 체크, 형 변환, 자원 해제 등 안전한 코드 작성",
          "캡슐화: 민감 데이터 노출 방지, 디버그 코드 제거",
          "API 오용: 취약한 함수 사용 금지, DNS Lookup 의존 회피, 매개변수 검증"
        ]
      },
      {
        title: "XSS 공격",
        mnemonic: null,
        summary: "검증되지 않은 입력이 웹페이지 내 스크립트로 실행되는 공격",
        details: [
          "Stored XSS: 악성 스크립트가 서버에 저장된 후 여러 사용자에게 전파",
          "Reflected XSS: 악성 URL을 클릭할 때 스크립트가 반사되어 실행",
          "DOM XSS: DOM 조작 기반 XSS 취약점을 이용한 공격"
        ]
      },
      {
        title: "CSRF (사이트 간 요청 위조)",
        mnemonic: null,
        summary: "사용자가 자신의 의지와 무관하게 공격자가 의도한 요청을 보내게 하는 공격",
        details: [
          "인증된 사용자의 세션을 악용해 상태 변경 요청을 전송",
          "방어: CSRF 토큰, Referer 검증, SameSite 쿠키 등"
        ]
      },
      {
        title: "SQL Injection",
        mnemonic: null,
        summary: "악의적인 SQL 구문 삽입으로 DB 정보를 탈취·조작하는 공격",
        details: [
          "Form 기반 SQL Injection: HTML Form 인증 취약점 이용",
          "Union SQL Injection: UNION 연산자로 쿼리 결과 결합",
          "Stored Procedure SQL Injection: 저장 프로시저를 악용",
          "Mass SQL Injection: 한 번에 대량의 DB 값을 변조",
          "Error-Based SQL Injection: 에러 메시지를 이용해 정보 수집",
          "Blind SQL Injection: 참/거짓 응답을 이용해 단계적으로 정보 획득"
        ]
      },
      {
        title: "시간 및 상태 취약점",
        mnemonic: null,
        summary: "세션, 병렬 처리, 공유 자원 접근과 관련된 취약점",
        details: [
          "세션 정보에 대한 안전한 변수 사용",
          "병렬 시스템에서 공유 자원에 대한 직렬화",
          "블록문 내에서만 재귀 함수 호출 등 동시성 제어"
        ]
      },
      {
        title: "에러 처리 취약점",
        mnemonic: null,
        summary: "에러·예외 처리 미흡으로 인한 정보 노출·취약점",
        details: [
          "취약한 패스워드 정책 미사용",
          "오류 메시지에 구체적인 시스템 정보 노출 금지",
          "예외 처리 구문을 충분히 작성해 비정상 종료 방지"
        ]
      },
      {
        title: "코드 오류 취약점",
        mnemonic: null,
        summary: "NULL, 형변환, 자원 해제 등 기본 코드 안전성 문제",
        details: [
          "NULL이 될 수 있는 레퍼런스를 참조 전 NULL 체크",
          "정수→문자 변환 시 데이터 손실 방지",
          "파일·소켓 등 자원 사용 후 반드시 해제",
          "변수 선언 시 초기화로 이전 값이 남지 않도록 함"
        ]
      },
      {
        title: "캡슐화 취약점",
        mnemonic: null,
        summary: "민감 정보·디버그 코드 노출 관련 문제",
        details: [
          "디버그 코드 반드시 제거",
          "민감 데이터를 보유한 클래스 사용 시 접근 제어에 주의"
        ]
      },
      {
        title: "API 오용 취약점",
        mnemonic: null,
        summary: "API 사용 방식이 부적절해 생기는 보안 문제",
        details: [
          "DNS Lookup에 과도하게 의존하지 않기 (DNS 엔트리 조작 가능)",
          "보안에 취약한 함수 사용 금지",
          "널 매개변수, 예외 상황 등 입력값을 철저히 검증"
        ]
      }
    ]
  },

  {
    section: "보안 장비, 로그, 취약점 분석·재해복구",
    items: [
      {
        title: "보안 장비·솔루션",
        mnemonic: null,
        summary: "방화벽, WAF, NAC, IDS/IPS/WIPS, UTM, VPN, Secure OS, Anti-Spam, DLP, DRM",
        details: [
          "방화벽(Firewall): 내부·외부 트래픽을 모니터링해 허용/차단",
          "웹 방화벽(WAF): XSS, SQL Injection 등 웹 공격 탐지·차단",
          "NAC: 내부 네트워크 접속을 통제하는 솔루션",
          "IDS: 비인가 침입을 실시간 탐지",
          "IPS: 공격을 실시간 차단",
          "WIPS: 비인가 무선 단말기 접속 차단",
          "UTM: 방화벽, IDS, IPS, VPN 등을 통합 제공",
          "VPN: 공중망에서 전용망과 유사한 보안 통신 제공",
          "Secure OS: OS 커널에 보안 기능을 추가한 솔루션",
          "Anti-Spam: 메일 서버 앞단에서 바이러스 검사·정보 유출 방지",
          "DLP: 데이터 유출 방지 솔루션",
          "DRM: 디지털 저작물의 사용 권한을 제어하는 솔루션"
        ]
      },
      {
        title: "보안 취약점 분석 절차",
        mnemonic: "자진제진결",
        summary: "자산 조사 → 진단 대상 선정 → 제약사항 확인 → 진단 수행 → 결과 보고서 작성",
        details: [
          "1. 자산 조사: 보호해야 할 자산 파악",
          "2. 진단 대상 선정: 전수조사 또는 샘플링",
          "3. 제약사항 확인: 일정, 예산, 범위 등",
          "4. 진단 수행: 기술 진단, 인터뷰, 내부 실사 등",
          "5. 결과 보고서 작성: 취약점 및 개선 방안 정리"
        ]
      },
      {
        title: "BCP/BIA/RTO/RPO",
        mnemonic: null,
        summary: "비즈니스 연속성, 영향 평가, 복구 시간/지점 목표",
        details: [
          "BCP (Business Continuity Plan): 비상 시 비즈니스 연속성을 보장하기 위한 계획 (BIA 선행 필요)",
          "BIA (Business Impact Analysis): 장애/재해에 따른 영향도 조사",
          "RTO (Recovery Time Objective): 업무 중단 시점 ~ 복구 시점까지 허용 가능한 시간",
          "RPO (Recovery Point Objective): 업무 중단 시점 기준 허용 가능한 데이터 손실 시점"
        ]
      },
      {
        title: "DRP / DRS",
        mnemonic: null,
        summary: "재해 복구 계획과 시스템, DRS 유형",
        details: [
          "DRP: 재해로 장기간 운영이 불가한 상황을 대비한 복구 계획",
          "DRS: DRP 수행을 위한 재해복구 시스템",
          "DRS 유형:",
          " - Mirror Site: 양쪽 센터 모두 운영 상태 (RTO=0)",
          " - Hot Site: 주 센터와 동일 수준 자원을 대기상태로 유지 (RTO≈4시간 이내)",
          " - Warm Site: 중요한 자원만 주 센터 수준으로 보유 (RTO=수일~수주)",
          " - Cold Site: 데이터만 원격지 보관, 재해 발생 후 시스템 구성 (RTO=수주~수개월)"
        ]
      }
    ]
  },

  {
    section: "표준·평가·저작권·추적 기술",
    items: [
      {
        title: "사이버 킬체인",
        mnemonic: null,
        summary: "APT 공격 방어를 위한 공격형 방위 모델",
        details: [
          "공격 단계를 분석해 사전에 탐지·차단하기 위한 방어 체계",
          "정찰 → 무기화 → 전달 → 악성코드 설치 → 통제 장치와 통신 → 목표 수행 등의 단계로 구성"
        ]
      },
      {
        title: "디지털 저작권 보호 기술",
        mnemonic: null,
        summary: "핑거프린팅, 워터마킹, DRM",
        details: [
          "핑거프린팅(Finger Printing): 저작권 정보+구매자 정보를 콘텐츠에 삽입해 불법 배포자 추적",
          "워터마킹(Water Marking): 디지털 콘텐츠에 저작자 정보 삽입, 원 소유자 증명",
          "DRM: 암호와 정책으로 디지털 콘텐츠 사용을 통제"
        ]
      },
      {
        title: "CPTED",
        mnemonic: null,
        summary: "범죄 예방 환경 설계",
        details: [
          "Crime Prevention Through Environment Design",
          "환경 설계를 통해 범죄를 최소화하는 전략"
        ]
      },
      {
        title: "보안 평가·공유 체계",
        mnemonic: null,
        summary: "CC, C-TAS, CVE, CWE, CVSS",
        details: [
          "CC (Common Criteria): 컴퓨터 보안을 위한 국제 평가 기준",
          "C-TAS: KISA 주관 사이버 위협정보 분석·공유 시스템",
          "CVE: 공통 취약점 및 노출 식별자 (CVE-연도-번호)",
          "CWE: 공통 약점 열거체, 소프트웨어 약점 분류 체계",
          "CVSS: 공통 취약점 점수 시스템, 취약점의 위험도 등급 산정"
        ]
      }
    ]
  }
];
