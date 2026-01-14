export const cert7Data = [
  {
    section: "트랜잭션과 동시성 제어",
    items: [
      {
        title: "트랜잭션",
        mnemonic: null,
        summary: "DB에서 하나의 논리적 기능을 수행하기 위한 작업 단위 (ACID)",
        details: [
          "DB 시스템에서 하나의 논리적 기능을 정상적으로 수행하기 위한 작업 단위",
          "트랜잭션의 4가지 특성: ACID (Atomicity, Consistency, Isolation, Durability)"
        ]
      },
      {
        title: "원자성 (Atomicity)",
        mnemonic: null,
        summary: "All or Nothing: 전부 수행되거나 전부 수행되지 않아야 함",
        details: [
          "트랜잭션 내 연산 전체는 모두 성공하거나 모두 실패해야 함",
          "하나라도 실패하면 전체 작업이 취소(rollback)되어야 함"
        ]
      },
      {
        title: "일관성 (Consistency)",
        mnemonic: null,
        summary: "트랜잭션 수행 전후로 DB는 일관된 상태를 유지해야 함",
        details: [
          "트랜잭션이 성공적으로 종료되면, DB는 항상 일관성 있는 상태를 유지해야 함",
          "병행(동시성) 제어를 통해 보장"
        ]
      },
      {
        title: "격리성 (Isolation)",
        mnemonic: null,
        summary: "실행 중인 트랜잭션의 중간 결과를 다른 트랜잭션이 볼 수 없음",
        details: [
          "트랜잭션 실행 중의 중간 연산 결과에 다른 트랜잭션이 접근할 수 없음",
          "고립화 수준(Isolation Level)을 통해 제어"
        ]
      },
      {
        title: "영속성 (Durability)",
        mnemonic: null,
        summary: "완료된 트랜잭션의 결과는 영구적으로 저장돼야 함",
        details: [
          "성공적으로 완료(Commit)된 트랜잭션의 결과는 장애가 발생해도 보존되어야 함",
          "회복(Recovery) 기법으로 보장"
        ]
      },
      {
        title: "TCL (Transaction Control Language)",
        mnemonic: "커롤체",
        summary: "트랜잭션 결과를 허용하거나 취소하는 제어 언어",
        details: [
          "트랜잭션 제어 언어",
          "트랜잭션의 결과를 허용(커밋)하거나 취소(롤백)하기 위해 사용",
          "COMMIT, ROLLBACK, CHECKPOINT"
        ]
      },
      {
        title: "트랜잭션의 상태변환",
        mnemonic: "활부완실철",
        summary: "Active → Partially Committed → Committed/Failed → Aborted",
        details: [
          "1. 활동 상태 (Active): 트랜잭션 실행 중",
          "2. 부분 완료 상태 (Partially Committed): 마지막 명령문까지 실행된 상태",
          "3. 완료 상태 (Committed): 성공적으로 완료된 상태",
          "4. 실패 상태 (Failed): 정상적인 실행이 불가능한 상태",
          "5. 철회 상태 (Aborted): 트랜잭션이 취소(롤백)된 상태"
        ]
      },
      {
        title: "병행 제어 미보장 시 문제점",
        mnemonic: "갱현모연",
        summary: "갱신손실, 현황파악오류, 모순성, 연쇄복귀",
        details: [
          "1. 갱신손실 (Lost Update)",
          "2. 현황파악오류 (Dirty Read)",
          "3. 모순성 (Inconsistency)",
          "4. 연쇄복귀 (Cascading Rollback)"
        ]
      },
      {
        title: "병행 제어",
        mnemonic: null,
        summary: "다수 사용자 환경에서 일관성을 유지하기 위한 제어 기법",
        details: [
          "동시에 여러 트랜잭션이 수행될 때 DB 일관성을 보장하기 위한 기법",
          "고립화 수준, Lock, Timestamp 등으로 제어"
        ]
      },
      {
        title: "병행 제어 기법",
        mnemonic: "로 낙타다",
        summary: "로킹, 낙관적 검증, 타임스탬프 순서, 다중버전 동시성제어",
        details: [
          "1. 로킹(Locking)",
          "2. 낙관적 검증 기법(Validation)",
          "3. 타임 스탬프 순서(Time Stamp Ordering)",
          "4. 다중버전 동시성 제어(MVCC)"
        ]
      },
      {
        title: "로킹 (Locking)",
        mnemonic: null,
        summary: "트랜잭션의 순차적 진행을 보장하기 위해 잠금을 거는 기법",
        details: [
          "트랜잭션이 사용하는 데이터에 Lock을 설정하여 다른 트랜잭션의 동시 접근을 제어",
          "로킹 단위: 한 번에 로킹할 수 있는 객체의 크기",
          "로킹 단위가 작을수록 공유도는 증가하지만 로킹 오버헤드도 증가"
        ]
      },
      {
        title: "낙관적 검증",
        mnemonic: null,
        summary: "먼저 실행 후, 종료 시점에 검증하여 반영 여부를 결정",
        details: [
          "트랜잭션을 일단 수행한 뒤, 종료 단계에서 충돌 여부를 검증",
          "충돌이 없으면 커밋, 충돌 시 롤백"
        ]
      },
      {
        title: "타임스탬프 순서 (Time Stamp Ordering)",
        mnemonic: null,
        summary: "타임스탬프 기준으로 작업 순서를 보장",
        details: [
          "각 트랜잭션이나 데이터에 타임스탬프를 부여",
          "타임스탬프 순서에 따라 작업을 수행해 직렬성 확보"
        ]
      },
      {
        title: "다중 버전 동시성 제어 (MVCC)",
        mnemonic: null,
        summary: "버전 정보를 이용해 동시에 여러 트랜잭션 처리",
        details: [
          "트랜잭션의 타임스탬프와 데이터의 타임스탬프를 비교",
          "트랜잭션에 맞는 적절한 버전을 선택하여 접근",
          "읽기/쓰기 트랜잭션의 충돌을 줄이기 위해 사용"
        ]
      },
      {
        title: "고립화 (Isolation Level)",
        mnemonic: null,
        summary: "무결성을 위해 잠금을 설정하는 정도",
        details: [
          "트랜잭션 간 서로 얼마나 격리시킬지 결정하는 수준",
          "고립화 수준에 따라 동시성과 일관성의 트레이드오프가 발생"
        ]
      },
      {
        title: "고립화 수준 종류",
        mnemonic: "언커리시",
        summary: "Read Uncommitted, Read Committed, Repetable Read, Serializable",
        details: [
          "1. Read Uncommitted:",
          "   - 아직 커밋되지 않은 데이터를 다른 트랜잭션이 읽는 것을 허용",
          "2. Read Committed:",
          "   - 커밋이 완료되기 전까지 다른 트랜잭션이 읽지 못하도록 제한",
          "3. Repetable Read:",
          "   - 선행 트랜잭션이 특정 데이터를 읽으면, 그 데이터의 갱신/삭제를 제한",
          "4. Serializable Read:",
          "   - 선행 트랜잭션이 특정 데이터 영역을 읽는 동안 해당 영역 전체에 대한 접근을 제한"
        ]
      },
      {
        title: "회복 기법",
        mnemonic: "회로체크",
        summary: "로그 기반, 체크포인트, 그림자 페이징",
        details: [
          "1. 로그 기반 회복 기법:",
          "   1) 지연 갱신 회복 기법:",
          "      - 트랜잭션 완료 전에는 로그에만 기록",
          "      - 장애 발생 시 로그를 폐기하여 복구",
          "   2) 즉각 갱신 회복 기법:",
          "      - 트랜잭션 갱신 결과를 바로 DB에 반영",
          "      - 장애 발생 시 로그를 참고하여 undo/redo 수행",
          "2. 체크포인트 회복 기법:",
          "   - 일정 시점(체크포인트) 상태를 저장해두고 장애 시 그 지점으로 복원",
          "3. 그림자 페이징 회복 기법:",
          "   - 트랜잭션 수행 시 복제본(그림자 페이지)을 두고, 이를 이용해 복구"
        ]
      }
    ]
  },

  {
    section: "SQL 분류, 스키마와 기본 개념",
    items: [
      {
        title: "SQL 문법 분류",
        mnemonic: null,
        summary: "DDL, DML, DCL, TCL",
        details: [
          "1. DDL (Data Definition Language, 정의어): CREATE, ALTER, DROP, TRUNCATE",
          "2. DML (Data Manipulation Language, 조작어): SELECT, INSERT, UPDATE, DELETE",
          "3. DCL (Data Control Language, 제어어): GRANT, REVOKE",
          "4. TCL (Transaction Control Language): COMMIT, ROLLBACK, CHECKPOINT"
        ]
      },
      {
        title: "DDL의 대상",
        mnemonic: "도스테뷰인",
        summary: "도메인, 스키마, 테이블, 뷰, 인덱스",
        details: [
          "1. 도메인",
          "2. 스키마",
          "3. 테이블",
          "4. 뷰",
          "5. 인덱스"
        ]
      },
      {
        title: "도메인",
        mnemonic: null,
        summary: "하나의 속성이 가질 수 있는 원자값의 집합",
        details: [
          "특정 속성이 가질 수 있는 값의 범위",
          "예: 성별 도메인 → {'M', 'F'}"
        ]
      },
      {
        title: "스키마와 3계층 구조",
        mnemonic: "외개내",
        summary: "외부, 개념, 내부 스키마",
        details: [
          "스키마: DB 구조와 제약조건 등을 정의한 메타데이터",
          "1. 외부 스키마: 사용자(개발자) 관점, 사용자 뷰",
          "2. 개념 스키마: DB 전체 논리 구조, 제약조건/권한/보안 등",
          "3. 내부 스키마: 물리적 저장장치 관점 (레코드 형식, 저장 구조 등)"
        ]
      },
      {
        title: "테이블과 기본 용어",
        mnemonic: null,
        summary: "테이블=릴레이션, 컬럼=애트리뷰트, 로우=튜플",
        details: [
          "테이블: 데이터를 저장하는 2차원 구조 (=릴레이션, =엔터티)",
          "애트리뷰트(Attribute): 컬럼(Column)",
          "디그리(Degree): 애트리뷰트(컬럼)의 개수",
          "튜플(Tuple): 한 행(Row), =레코드, 한 릴레이션 내 중복 튜플 없음",
          "카디널리티(Cardinality): 튜플(Row)의 개수"
        ]
      },
      {
        title: "뷰 (View)",
        mnemonic: null,
        summary: "논리 테이블, 데이터 독립성과 조작 간소화",
        details: [
          "실제 데이터를 저장하지 않는 논리적 테이블",
          "데이터 독립성 보장 및 복잡한 조작을 간소화",
          "ALTER로 변경 불가",
          "자체 인덱스 생성 불가"
        ]
      },
      {
        title: "뷰 속성 옵션",
        mnemonic: null,
        summary: "REPLACE, FORCE/NO FORCE, WITH CHECK OPTION, WITH READ ONLY",
        details: [
          "REPLACE: 기존 뷰가 존재하면 재생성",
          "FORCE: 기본 테이블 존재 여부와 상관없이 뷰 생성",
          "NO FORCE: 기본 테이블이 있을 때만 뷰 생성",
          "WITH CHECK OPTION: 서브쿼리 조건을 만족하는 행만 변경 가능",
          "WITH READ ONLY: DML(INSERT, UPDATE, DELETE) 허용하지 않음"
        ]
      }
    ]
  },

  {
    section: "인덱스, 클러스터링, 파티셔닝",
    items: [
      {
        title: "인덱스",
        mnemonic: null,
        summary: "빠른 검색을 위한 데이터 구조",
        details: [
          "테이블 검색 속도를 높이기 위한 보조 데이터 구조",
          "인덱스 없으면 Table Full Scan, 인덱스 있으면 Index Range Scan 가능",
          "검색 성능 향상을 위해 사용"
        ]
      },
      {
        title: "인덱스 컬럼 선정 기준",
        mnemonic: null,
        summary: "분포도, 수정 빈도, 단일 vs 결합 인덱스",
        details: [
          "적정 분포도: 10~15% 수준이 적당",
          "수정이 빈번하지 않은 컬럼에 인덱스를 설정",
          "분포도가 좋은 컬럼: 단일 인덱스",
          "자주 함께 조회되는 컬럼들: 결합 인덱스"
        ]
      },
      {
        title: "인덱스 종류",
        mnemonic: "비단순함 해결 클",
        summary: "비트맵, 단일, 순서, 함수기반, 해시, 결합, 클러스터드 인덱스",
        details: [
          "1. 비트맵 인덱스:",
          "   - 컬럼 값의 종류가 적고 수정이 적을수록 유리",
          "   - 예: 성별, 생년월일, 상품번호 등",
          "2. 단일 인덱스: 하나의 컬럼으로만 구성",
          "3. 순서 인덱스: 데이터가 정렬된 순서대로 구성되는 인덱스",
          "4. 함수 기반 인덱스: 컬럼에 함수를 적용한 표현식에 인덱스를 생성",
          "5. 해시 인덱스: 해시 함수를 통해 키 값으로 데이터 접근 (튜플 양과 무관하게 일정 접근 비용)",
          "6. 결합 인덱스: 두 개 이상의 컬럼으로 구성된 인덱스",
          "7. 클러스터드 인덱스: PK 기준으로 레코드를 물리적으로 묶어 정렬한 인덱스"
        ]
      },
      {
        title: "인덱스 스캔 방식",
        mnemonic: "범전단생",
        summary: "Range, Full, Unique, Skip Scan",
        details: [
          "1. 인덱스 범위 스캔 (Index Range Scan)",
          "2. 인덱스 전체 스캔 (Index Full Scan)",
          "3. 인덱스 단일 스캔 (Index Unique Scan)",
          "4. 인덱스 생략 스캔 (Index Skip Scan)"
        ]
      },
      {
        title: "인덱스 범위 스캔 (Index Range Scan)",
        mnemonic: null,
        summary: "루트 → 리프 수직 탐색 후, 리프를 수평 탐색",
        details: [
          "루트 블록에서 리프 블록까지 수직으로 내려간 뒤",
          "리프 블록을 필요한 범위만 수평으로 탐색"
        ]
      },
      {
        title: "인덱스 전체 스캔 (Index Full Scan)",
        mnemonic: null,
        summary: "리프 블록 전체를 순차적으로 수평 탐색",
        details: [
          "리프 블록을 처음부터 끝까지 수평으로 탐색하는 방식"
        ]
      },
      {
        title: "인덱스 단일 스캔 (Index Unique Scan)",
        mnemonic: null,
        summary: "수직 탐색만으로 단일 레코드를 찾는 방식",
        details: [
          "루트 → 브랜치 → 리프까지 수직으로만 탐색",
          "PK 등의 Unique 인덱스에서 사용"
        ]
      },
      {
        title: "인덱스 생략 스캔 (Index Skip Scan)",
        mnemonic: null,
        summary: "선두 컬럼 조건 없이도 인덱스를 활용하는 방식",
        details: [
          "결합 인덱스에서 선두 컬럼이 조건절에 없어도 인덱스를 사용하는 기법",
          "필요 없는 구간은 건너뛰고(Skip) 스캔"
        ]
      },
      {
        title: "클러스터링",
        mnemonic: null,
        summary: "검색 속도 향상을 위해 물리적으로 데이터 저장을 조정하는 것",
        details: [
          "연관된 데이터를 물리적으로 인접하게 저장해 검색 속도를 향상",
          "분포도가 넓을수록(좋지 않을수록) 클러스터링이 적합"
        ]
      },
      {
        title: "파티셔닝",
        mnemonic: null,
        summary: "큰 테이블을 논리적 단위로 나누는 것",
        details: [
          "테이블이나 인덱스를 여러 파티션으로 분할",
          "관리 편의성과 성능 향상을 위해 사용"
        ]
      },
      {
        title: "파티셔닝 유형",
        mnemonic: "레해리컴",
        summary: "Range, Hash, List, Composite",
        details: [
          "1. 레인지 파티셔닝: 숫자/날짜 범위 기준으로 분할",
          "2. 해시 파티셔닝: 해시 함수 결과를 기준으로 균등 분할",
          "3. 리스트 파티셔닝: 값 목록을 기준으로 분할",
          "4. 컴포지트 파티셔닝: 2개 이상의 파티셔닝을 결합"
        ]
      },
      {
        title: "파티셔닝 장점",
        mnemonic: "성가백합",
        summary: "성능 향상, 가용성, 백업, 경합 감소",
        details: [
          "1. 성능 향상: 액세스 범위가 줄어듦",
          "2. 가용성 향상: 일부 파티션 손상 시 전체 장애 가능성 감소",
          "3. 백업/복원 용이",
          "4. 경합 감소"
        ]
      }
    ]
  },

  {
    section: "DDL / DML / DCL 핵심 문법",
    items: [
      {
        title: "테이블 생성 (CREATE TABLE)",
        mnemonic: "크테테 컬타제",
        summary: "CREATE TABLE ~ (컬럼명 데이터타입 [제약조건])",
        details: [
          "CREATE TABLE 테이블명",
          "(",
          "  컬럼명 데이터타입 [제약조건],",
          "  ...",
          ");"
        ]
      },
      {
        title: "테이블 생성 제약조건",
        mnemonic: null,
        summary: "PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, CHECK, DEFAULT",
        details: [
          "PRIMARY KEY",
          "FOREIGN KEY REFERENCES 테이블(컬럼)",
          "NOT NULL",
          "UNIQUE",
          "CHECK (조건 OR 조건)",
          "DEFAULT 값"
        ]
      },
      {
        title: "테이블 변경 (ALTER TABLE)",
        mnemonic: "알 에모드",
        summary: "ADD / MODIFY / DROP 컬럼",
        details: [
          "ALTER TABLE 테이블명 ADD 컬럼명 데이터타입 [제약조건];",
          "ALTER TABLE 테이블명 MODIFY 컬럼명 데이터타입 [제약조건];",
          "ALTER TABLE 테이블명 DROP 컬럼명;"
        ]
      },
      {
        title: "테이블 삭제 (DROP / TRUNCATE)",
        mnemonic: "드롭[캐스|리스] 트케",
        summary: "DROP TABLE / TRUNCATE TABLE",
        details: [
          "DROP TABLE 테이블명 [CASCADE | RESTRICT];",
          "TRUNCATE TABLE 테이블명;"
        ]
      },
      {
        title: "뷰 생성/삭제",
        mnemonic: "크뷰뷰 에즈",
        summary: "CREATE VIEW ~ AS SELECT ~ / DROP VIEW",
        details: [
          "CREATE [OR REPLACE] VIEW 뷰이름 AS",
          "  SELECT 컬럼...",
          "    FROM 테이블",
          "   WHERE 조건;",
          "DROP VIEW 뷰이름;"
        ]
      },
      {
        title: "인덱스 생성/변경/삭제",
        mnemonic: "크인인 온테커",
        summary: "CREATE INDEX, ALTER INDEX, DROP INDEX",
        details: [
          "CREATE INDEX 인덱스명 ON 테이블(컬럼);",
          "ALTER INDEX 인덱스명 ON 테이블(컬럼);",
          "DROP INDEX 인덱스명;"
        ]
      },
      {
        title: "참조 무결성",
        mnemonic: null,
        summary: "외래키 값은 항상 참조되는 테이블의 기본키여야 함",
        details: [
          "외래키(FK)는 참조 대상 테이블의 기본키(PK) 값만 가질 수 있음",
          "참조 무결성을 위반하면 연산이 제한"
        ]
      },
      {
        title: "참조 무결성 옵션",
        mnemonic: null,
        summary: "RESTRICT, CASCADE, SET NULL",
        details: [
          "1. RESTRICT: 참조 무결성 위배 시 연산 거절",
          "2. CASCADE: 참조하는 튜플도 함께 삭제/수정",
          "3. SET NULL: 참조 튜플의 외래키를 NULL로 설정 (단, NOT NULL이면 거절)"
        ]
      },
      {
        title: "SELECT 명령어",
        mnemonic: "셀프웨구해오",
        summary: "SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY",
        details: [
          "1. SELECT [ALL | DISTINCT] 컬럼명 [AS 별칭]",
          "2. FROM 테이블",
          "3. WHERE 조건",
          "4. GROUP BY 그룹컬럼",
          "5. HAVING 그룹조건",
          "6. ORDER BY 컬럼명 [ASC | DESC]"
        ]
      },
      {
        title: "WHERE 조건절",
        mnemonic: null,
        summary: "BETWEEN, IN, LIKE, NULL, 논리 연산자",
        details: [
          "컬럼 BETWEEN 값1 AND 값2  // 값1 이상 값2 이하",
          "컬럼 IN (값1, 값2, ...)",
          "컬럼 NOT IN (값1, 값2, ...)",
          "컬럼 LIKE '패턴'",
          "IS NULL / IS NOT NULL",
          "AND / OR / NOT",
          "예) 나이가 20~29이면서 성별이 여자:",
          "WHERE 나이 BETWEEN 20 AND 29 AND 성별 = '여자';"
        ]
      },
      {
        title: "LIKE 패턴",
        mnemonic: null,
        summary: "%, [], [^], _ 와일드카드",
        details: [
          "% : 0개 이상의 문자열과 일치",
          "[ ] : 1개의 문자와 일치",
          "[^ ] : 1개의 문자와 불일치",
          "_ : 1개의 문자와 일치 (특정 위치)",
          "예) 이름 LIKE '_나%' → '바나나', '가나', '소나기', '김나나나나' 등"
        ]
      }
    ]
  },

  {
    section: "JOIN / 집합 연산 / DML / DCL",
    items: [
      {
        title: "조인 (JOIN)",
        mnemonic: null,
        summary: "두 개 이상의 테이블을 연결해 검색",
        details: [
          "두 개 이상의 테이블을 공통 컬럼을 기준으로 연결하여 데이터 조회",
          "논리 조인 / 물리 조인으로 구분"
        ]
      },
      {
        title: "조인 명령어",
        mnemonic: "프조온웨",
        summary: "FROM, JOIN, ON, WHERE 순으로 사용",
        details: [
          "예:",
          "SELECT A.번호, B.가격",
          "  FROM 상품목록 A",
          "  JOIN 가격목록 B",
          "    ON A.번호 = B.번호",
          " WHERE A.번호 IS NOT NULL;"
        ]
      },
      {
        title: "논리적 조인 유형",
        mnemonic: "내외교셀",
        summary: "내부, 외부, 교차, 셀프 조인",
        details: [
          "1. 내부 조인 (INNER JOIN)",
          "2. 외부 조인 (OUTER JOIN: LEFT, RIGHT, FULL)",
          "3. 교차 조인 (CROSS JOIN)",
          "4. 셀프 조인 (SELF JOIN)"
        ]
      },
      {
        title: "내부 조인 (INNER JOIN)",
        mnemonic: null,
        summary: "두 테이블의 공통 컬럼 값이 같은 데이터만 조회",
        details: [
          "ON 조건을 만족하는 행만 결합하여 반환"
        ]
      },
      {
        title: "외부 조인 (OUTER JOIN)",
        mnemonic: null,
        summary: "한쪽 테이블의 모든 행 + 다른 쪽 일치 데이터",
        details: [
          "LEFT OUTER JOIN: 왼쪽 테이블 전체 + 오른쪽 일치 데이터",
          "RIGHT OUTER JOIN: 오른쪽 테이블 전체 + 왼쪽 일치 데이터",
          "FULL OUTER JOIN: 양쪽 테이블의 모든 데이터"
        ]
      },
      {
        title: "교차 조인 (CROSS JOIN)",
        mnemonic: null,
        summary: "두 테이블의 가능한 모든 조합 반환",
        details: [
          "조인 조건이 없을 때 두 테이블의 카티션 프로덕트 생성"
        ]
      },
      {
        title: "셀프 조인 (SELF JOIN)",
        mnemonic: null,
        summary: "같은 테이블에 별칭을 주고 자기 자신과 조인",
        details: [
          "계층 구조(상사-부하 관계 등) 표현에 자주 사용"
        ]
      },
      {
        title: "물리적 조인",
        mnemonic: "네소해",
        summary: "Nested-Loop, Sort-Merge, Hash Join",
        details: [
          "1. Nested-Loop Join",
          "2. Sort-Merge Join",
          "3. Hash Join"
        ]
      },
      {
        title: "서브쿼리 유형",
        mnemonic: null,
        summary: "SELECT, FROM, WHERE 절에서 사용",
        details: [
          "1. SELECT 절 서브쿼리: 단일 행 반환, 집계 함수 사용",
          "2. FROM 절 서브쿼리: 동적으로 생성된 테이블처럼 사용",
          "3. WHERE 절 서브쿼리: 조건절 안에서 사용",
          "예) WHERE 책번호 IN (SELECT 책번호 FROM 도서 WHERE 책명='마법약');"
        ]
      },
      {
        title: "집합 연산자",
        mnemonic: "유유인마",
        summary: "UNION, UNION ALL, INTERSECT, MINUS",
        details: [
          "두 개 이상의 SELECT 결과를 합치는 연산자 (JOIN과 다름)",
          "1. UNION: 합집합, 중복 제거",
          "2. UNION ALL: 합집합, 중복 포함",
          "3. INTERSECT: 교집합, 공통 데이터만",
          "4. MINUS: 차집합, 첫 번째 쿼리에만 있는 데이터"
        ]
      },
      {
        title: "INSERT 명령어",
        mnemonic: "인인투밸",
        summary: "INSERT INTO ~ VALUES ~",
        details: [
          "INSERT INTO 테이블명(컬럼1, 컬럼2, ...)",
          "VALUES (값1, 값2, ...);",
          "예:",
          "INSERT INTO 학생(기숙사, 학년, 성명)",
          "VALUES ('그리핀도르', 3, '해리 포터');"
        ]
      },
      {
        title: "UPDATE 명령어",
        mnemonic: "업셋웨",
        summary: "UPDATE ~ SET ~ WHERE ~",
        details: [
          "UPDATE 테이블명",
          "   SET 컬럼명 = 값",
          " WHERE 조건;",
          "예:",
          "UPDATE 학생",
          "   SET 기숙사 = '슬리데린'",
          " WHERE 이름 = '드레이코 말포이';"
        ]
      },
      {
        title: "DELETE 명령어",
        mnemonic: "딜프웨",
        summary: "DELETE FROM ~ WHERE ~",
        details: [
          "DELETE FROM 테이블명",
          "      WHERE 조건;",
          "예:",
          "DELETE FROM 학생",
          "      WHERE 이름 = '론 위즐리';"
        ]
      },
      {
        title: "GRANT / REVOKE (DCL)",
        mnemonic: "그온투 / 리온프",
        summary: "권한 부여/회수",
        details: [
          "GRANT 권한 ON 테이블 TO 사용자 [WITH GRANT OPTION];",
          "REVOKE 권한 ON 테이블 FROM 사용자 [CASCADE CONSTRAINT];"
        ]
      }
    ]
  },

  {
    section: "집계 / 그룹 / 윈도 함수와 비율 함수",
    items: [
      {
        title: "집계 함수",
        mnemonic: null,
        summary: "COUNT, SUM, AVG, MAX, MIN, STDDEV, VARIAN",
        details: [
          "단일 값을 리턴하며 SELECT 절에서 사용",
          "NULL은 없는 데이터로 취급",
          "COUNT: 튜플 수",
          "COUNT(DISTINCT 컬럼): 중복 제거 후 개수",
          "SUM: 합계",
          "AVG: 평균",
          "MAX: 최댓값",
          "MIN: 최솟값",
          "STDDEV: 표준편차",
          "VARIAN: 분산"
        ]
      },
      {
        title: "그룹 함수",
        mnemonic: "롤큐그셋",
        summary: "ROLLUP, CUBE, GROUPING SETS",
        details: [
          "GROUP BY 절과 함께 사용",
          "1. ROLLUP: 부분합(소계) 산출",
          "2. CUBE: 모든 조합에 대한 다차원 집계",
          "3. GROUPING SETS: 여러 그룹별 개별 집계"
        ]
      },
      {
        title: "ROLLUP 함수 예시",
        mnemonic: null,
        summary: "기숙사, 학년별 소계 구하기",
        details: [
          "SELECT 기숙사, 학년, SUM(점수)",
          "  FROM 점수",
          "GROUP BY ROLLUP(기숙사, 학년);"
        ]
      },
      {
        title: "CUBE 함수 예시",
        mnemonic: null,
        summary: "기숙사, 학년 조합에 대한 다차원 집계",
        details: [
          "SELECT 기숙사, 학년, SUM(점수)",
          "  FROM 점수",
          "GROUP BY CUBE(기숙사, 학년);"
        ]
      },
      {
        title: "GROUPING SETS 함수 예시",
        mnemonic: null,
        summary: "여러 그룹 기준에 대해 개별 집계",
        details: [
          "SELECT 기숙사, 학년, SUM(점수)",
          "  FROM 점수",
          "GROUP BY GROUPING SETS(기숙사, 학년, ());"
        ]
      },
      {
        title: "윈도 함수 (OLAP 함수)",
        mnemonic: "순행비",
        summary: "순위, 행 순서, 그룹 내 비율을 계산하는 함수들",
        details: [
          "SELECT 절에서 사용",
          "형태: 함수(컬럼) OVER(ORDER BY 컬럼 DESC) 별칭",
          "OVER 절을 반드시 써야 함",
          "AS 별칭은 생략 가능"
        ]
      },
      {
        title: "순위 함수",
        mnemonic: "랭덴로",
        summary: "RANK, DENSE_RANK, ROW_NUMBER",
        details: [
          "1. RANK(): 2 2 4 5 (동일 순위 이후 순위를 건너뜀)",
          "2. DENSE_RANK(): 2 2 3 4 (동일 순위 다음도 바로 다음 순위)",
          "3. ROW_NUMBER(): 2 3 4 5 (단순 일련번호)",
          "예:",
          "SELECT 직업, 레벨,",
          "       RANK() OVER(ORDER BY 레벨 DESC) AS A",
          "  FROM 캐릭터;"
        ]
      },
      {
        title: "행 순서 함수",
        mnemonic: "퍼라락리",
        summary: "FIRST_VALUE, LAST_VALUE, LAG, LEAD",
        details: [
          "1. FIRST_VALUE: 윈도에서 가장 먼저 나오는 값",
          "2. LAST_VALUE: 윈도에서 가장 나중에 나오는 값",
          "3. LAG: 이전 행의 값",
          "4. LEAD: 다음 행의 값",
          "예:",
          "SELECT 직업, 레벨,",
          "       FIRST_VALUE(직업) OVER(ORDER BY 레벨 DESC) AS A",
          "  FROM 캐릭터;"
        ]
      },
      {
        title: "그룹 내 비율 함수",
        mnemonic: "라투리퍼랭",
        summary: "RATIO_TO_REPORT, PERCENT_RANK",
        details: [
          "1. RATIO_TO_REPORT: 그룹 합계를 기준으로 각 로우의 비율 (값/총합)",
          "2. PERCENT_RANK: (순위 - 1) / (총 로우 - 1) 형태의 백분율",
          "예:",
          "SELECT 이름, 나이,",
          "       RATIO_TO_REPORT(레벨) OVER () AS A,",
          "       PERCENT_RANK() OVER (ORDER BY 레벨 DESC) AS B",
          "  FROM 학생;"
        ]
      }
    ]
  },

  {
    section: "절차형 SQL, 프로시저 / 함수 / 트리거",
    items: [
      {
        title: "절차형 SQL",
        mnemonic: null,
        summary: "SQL 안에서도 절차적 프로그래밍을 가능하게 하는 언어",
        details: [
          "조건문, 반복문 등을 사용해 절차 지향적인 로직 구현 가능",
          "트랜잭션 언어의 일종"
        ]
      },
      {
        title: "절차형 SQL의 종류",
        mnemonic: "프함트",
        summary: "프로시저, 사용자 정의 함수, 트리거",
        details: [
          "1. 프로시저: 일련의 쿼리들을 하나의 함수처럼 실행",
          "2. 사용자 정의 함수: SQL 처리를 수행한 후 단일 값을 반환",
          "3. 트리거: 삽입/삭제/갱신 이벤트 발생 시 자동으로 실행"
        ]
      },
      {
        title: "DBMS_OUTPUT 패키지",
        mnemonic: null,
        summary: "버퍼로부터 메시지를 읽어오는 인터페이스",
        details: [
          "DBMS_OUTPUT.PUT(문자열);       // 개행 없이 출력",
          "DBMS_OUTPUT.PUT_LINE(문자열);  // 출력 후 개행"
        ]
      },
      {
        title: "절차형 SQL 제어부",
        mnemonic: null,
        summary: "IF, CASE, LOOP, WHILE, FOR LOOP",
        details: [
          "1. IF문:",
          "   IF ~ THEN",
          "   ELSIF ~ THEN",
          "   ELSE ~",
          "   END IF;",
          "2. CASE문:",
          "   CASE",
          "     WHEN ~ THEN",
          "     ELSE ~",
          "   END CASE;",
          "3. LOOP문:",
          "   LOOP",
          "     EXIT WHEN ~;",
          "   END LOOP;",
          "4. WHILE문:",
          "   WHILE ~ LOOP",
          "     EXIT WHEN ~;",
          "   END LOOP;",
          "5. FOR LOOP문:",
          "   FOR 변수 IN 범위 LOOP",
          "     ...",
          "   END LOOP;"
        ]
      },
      {
        title: "프로시저",
        mnemonic: null,
        summary: "일련의 쿼리들을 하나의 함수처럼 실행하는 쿼리 집합",
        details: [
          "복잡한 작업을 모듈화하여 재사용 가능",
          "IN/OUT 파라미터로 입출력 제어"
        ]
      },
      {
        title: "프로시저 구성 요소",
        mnemonic: "디비컨SET",
        summary: "DECLARE, BEGIN/END, CONTROL, SQL, EXCEPTION, TRANSACTION",
        details: [
          "1. 선언부 (DECLARE)",
          "2. 시작/종료부 (BEGIN/END)",
          "3. 제어부 (CONTROL)",
          "4. SQL",
          "5. 예외부 (EXCEPTION)",
          "6. 실행부 (TRANSACTION)"
        ]
      },
      {
        title: "프로시저 파라미터 모드",
        mnemonic: null,
        summary: "IN, OUT, INOUT",
        details: [
          "IN: OS → 프로시저로 값 전달",
          "OUT: 프로시저 → OS로 결과 전달",
          "INOUT: 입력과 출력 모두 수행"
        ]
      },
      {
        title: "사용자 정의 함수",
        mnemonic: null,
        summary: "SQL 처리 후 결과를 단일 값으로 반환",
        details: [
          "SELECT 문이나 다른 SQL 표현식에서 사용할 수 있음",
          "반드시 RETURN으로 단일 값 반환"
        ]
      },
      {
        title: "사용자 정의 함수 구성",
        mnemonic: "디비컨SER",
        summary: "DECLARE, BEGIN/END, CONTROL, SQL, EXCEPTION, RETURN",
        details: [
          "1. 선언부 (DECLARE)",
          "2. 시작/종료부 (BEGIN/END)",
          "3. 제어부 (CONTROL)",
          "4. SQL",
          "5. 예외부 (EXCEPTION)",
          "6. 반환부 (RETURN)"
        ]
      },
      {
        title: "트리거",
        mnemonic: null,
        summary: "이벤트 발생 시 자동 실행되는 절차형 SQL",
        details: [
          "삽입, 삭제, 갱신 등의 이벤트 발생 시 자동 수행",
          "EVENT 절로 실행 시점을 지정",
          "외부 변수 IN/OUT 없음",
          "TCL(COMMIT, ROLLBACK) 사용 불가"
        ]
      },
      {
        title: "트리거 구성",
        mnemonic: "디이비컨SE",
        summary: "DECLARE, EVENT, BEGIN/END, CONTROL, SQL, EXCEPTION",
        details: [
          "1. 선언부 (DECLARE)",
          "2. 이벤트부 (EVENT)",
          "3. 시작/종료부 (BEGIN/END)",
          "4. 제어부 (CONTROL)",
          "5. SQL",
          "6. 예외부 (EXCEPTION)"
        ]
      },
      {
        title: "트리거 실행 옵션",
        mnemonic: null,
        summary: "BEFORE/AFTER, FOR EACH ROW, OLD/NEW",
        details: [
          "BEFORE: 이벤트 실행 전에 트리거 수행",
          "AFTER: 이벤트 실행 후에 트리거 수행",
          "FOR EACH ROW: 변경되는 각 행마다 실행",
          "OLD: 변경 전 값 참조",
          "NEW: 변경 후 값 참조"
        ]
      }
    ]
  },

  {
    section: "튜닝, 옵티마이저, 힌트",
    items: [
      {
        title: "튜닝 (쿼리 성능 개선)",
        mnemonic: null,
        summary: "SQL 실행 계획을 수정해 성능을 개선하는 작업",
        details: [
          "저성능 SQL을 분석하고 실행 계획과 인덱스를 조정",
          "응답 시간 단축과 자원 사용 최적화가 목적"
        ]
      },
      {
        title: "튜닝 개선 절차",
        mnemonic: null,
        summary: "문제 SQL 식별 → 통계 확인 → SQL/인덱스 재구성 → 계획 유지",
        details: [
          "1. 문제 있는 SQL 식별 (APM 모니터링 도구 사용)",
          "2. 옵티마이저 통계 확인",
          "3. SQL문 재구성",
          "4. 인덱스 재구성",
          "5. 실행 계획 유지 관리"
        ]
      },
      {
        title: "옵티마이저 (Optimizer)",
        mnemonic: null,
        summary: "SQL 최적 처리 경로를 찾는 DBMS 핵심 엔진",
        details: [
          "SQL을 어떻게 실행할지 최적의 방법을 선택",
          "통계 정보, 인덱스, 조인 순서 등을 고려해 실행 계획 수립"
        ]
      },
      {
        title: "실행 계획 (Execution Plan)",
        mnemonic: null,
        summary: "옵티마이저가 생성한 처리 경로",
        details: [
          "SQL을 어떤 순서와 방법으로 실행할지 나타내는 계획",
          "EXPLAIN PLAN 등을 통해 확인 가능"
        ]
      },
      {
        title: "옵티마이저 유형",
        mnemonic: null,
        summary: "규칙 기반(RBO), 비용 기반(CBO)",
        details: [
          "1. RBO (Rule-Based Optimizer): 규칙 기반 옵티마이저",
          "2. CBO (Cost-Based Optimizer): 비용 기반 옵티마이저"
        ]
      },
      {
        title: "RBO (규칙 기반 옵티마이저)",
        mnemonic: null,
        summary: "사전에 정의된 규칙/우선순위에 따라 실행 계획 선택",
        details: [
          "통계 정보보다는 미리 정해진 규칙 우선순위를 따름",
          "사용자가 원하는 처리 경로로 유도하기 비교적 쉬움"
        ]
      },
      {
        title: "CBO (비용 기반 옵티마이저)",
        mnemonic: null,
        summary: "모든 접근 경로의 비용을 계산해 최적 계획 선택",
        details: [
          "카디널리티, 비용(시간/자원)을 고려하여 실행 계획 선택",
          "사용자가 SQL을 잘 몰라도 적절한 성능 보장 가능"
        ]
      },
      {
        title: "옵티마이저의 역할",
        mnemonic: null,
        summary: "쿼리 변환 → 비용 산정 → 계획 생성",
        details: [
          "1. 쿼리 변환: SQL을 표준화된 형태로 변환",
          "2. 비용 산정: 각 처리 경로의 카디널리티와 비용을 계산",
          "3. 계획 생성: 최적의 실행 계획을 결정"
        ]
      },
      {
        title: "힌트 (Hint)",
        mnemonic: null,
        summary: "옵티마이저의 실행 계획을 사용자가 직접 유도",
        details: [
          "SQL 문 안에 /*+ 힌트 */ 형태로 작성",
          "옵티마이저에게 특정 접근 경로나 조인 방식을 강제"
        ]
      },
      {
        title: "주요 옵티마이저 힌트",
        mnemonic: null,
        summary: "RULE, CHOOSE, INDEX, USE_NL, USE_MERGE, USE_HASH",
        details: [
          "/*+ RULE */: 규칙 기반 접근 방식 사용",
          "/*+ CHOOSE */: 옵티마이저 디폴트 설정 따름",
          "/*+ INDEX(테이블명 인덱스명) */: 특정 인덱스 사용 강제",
          "/*+ USE_NL(테이블명) */: Nested-Loop Join 사용",
          "/*+ USE_MERGE(테이블명) */: Sort-Merge Join 사용",
          "/*+ USE_HASH(테이블명) */: Hash Join 사용"
        ]
      }
    ]
  }
];
