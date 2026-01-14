import styles from './Certification.module.css'
import { Link } from 'react-router-dom'

export default function Certification() {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <Link to={"/certification/site"}> 더 많은 도움이 되는 사이트 추천 보러가기 </Link>
      </nav>
      <section>
          <h2>1.  소프트웨어 설계</h2>
        <div className={styles.certification}>
          <Link to={"/certification/1"}>요구사항 확인</Link>
          <Link to={"/certification/2"}>화면 설계</Link>
          <Link to={"/certification/5"}>인터페이스 구현</Link>
          <Link to={"/certification/12"}>제품 소프트웨어 패키징</Link>
        </div>
      </section>
       <section>
          <h2>2. 소프트웨어 개발</h2>
        <div className={styles.certification}>
          <Link to={"/certification/8"}>서버 프로그램 구현</Link>
        </div>
      </section>
       <section>
          <h2>3. 데이터베이스 구축</h2>
        <div className={styles.certification}>
          <Link to={"/certification/3"}>데이터 입출력 구현</Link>
          <Link to={"/certification/7"}>SQL 응용</Link>
        </div>
      </section>
       <section>
          <h2>4. 프로그래밍 언어 활용</h2>
        <div className={styles.certification}>
          <Link to={"/certification/6"}>언어 활용</Link>
          <Link to={"/certification/11"}>응용 SW 기초 기술 활용</Link>
        </div>
      </section>
       <section>
          <h2>5. 정보시스템 구축관리</h2>
        <div className={styles.certification}>
          <Link to={"/certification/4"} >통합 구현</Link>
          <Link to={"/certification/9"}>소프트웨어 개발 보안 구축</Link>
          <Link to={"/certification/10"}>애플리케이션 테스트 관리</Link>
        </div>
      </section>

    </div>
  )
}
