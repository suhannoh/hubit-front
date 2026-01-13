import styles from './Certification.module.css'
import { Link } from 'react-router-dom'

export default function Certification() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Link to={"/certification/site"}> 더 많은 도움이 되는 사이트 추천 보러가기 </Link>
      </nav>
      <section>
          <h2>소프트웨어 설계</h2>
        <div className={styles.certification}>
          <Link>요구사항 확인</Link>
          <Link>화면 설계</Link>
          <Link>인터페이스 구현</Link>
          <Link>제품 소프트웨어 패키징</Link>
        </div>
      </section>
       <section>
          <h2>소프트웨어 개발</h2>
        <div className={styles.certification}>
          <Link>서버 프로그램 구현</Link>
        </div>
      </section>
       <section>
          <h2>데이터베이스 구축</h2>
        <div className={styles.certification}>
          <Link>데이터 입출력 구현</Link>
          <Link>SQL 응용</Link>
        </div>
      </section>
       <section>
          <h2>프로그래밍 언어 활용</h2>
        <div className={styles.certification}>
          <Link>언어 활용</Link>
          <Link>응용 SW 기초 기술 활용</Link>
        </div>
      </section>
       <section>
          <h2>정보시스템 구축관리</h2>
        <div className={styles.certification}>
          <Link>통합 구현</Link>
          <Link>소프트웨어 개발 보안 구축</Link>
          <Link>애플리케이션 테스트 관리</Link>
        </div>
      </section>

    </div>
  )
}
