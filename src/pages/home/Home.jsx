import { Link } from 'react-router-dom'
import styles from './Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <article className={styles.hero}>
        <h1>다양한 프로젝트를 통해 여러 사람과 협업해보세요</h1>
        <p className={styles.description}> 프로젝트는 끝나도 당신의 경험은 남습니다.</p>
      </article>
      <div className={styles.menu}>
        <Link className={styles.link} to="/recruitment"> 프로젝트 찾으러 가기</Link>
        <Link className={styles.link} to="/recruitment"> 정보처리기사 공부 </Link>
      </div>
    </div>
  )
}
