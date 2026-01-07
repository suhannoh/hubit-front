import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import Theme from './Theme';
import userStore from '../store/user';
import { useEffect, useState } from 'react';

export default function Header() {
  const {isLogin , user , logout} = userStore();
  const [state , setState] = useState("");
  const { pathname } = useLocation();
  useEffect (() => {
    setState(pathname.split("/")[1] || "home");
  }, [pathname]);

  const navigate = useNavigate();
  const handleLogout = async () => {
    const result = confirm("정말 로그아웃 하시겠습니까 ?");
    if(result) {
      logout();
      navigate('/');
    }
  }

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Link to="/"><h2>HUB IT</h2></Link>
        </div>
        <div className={styles.menu}>
          <Link to="/recruitment" className={state === "recruitment" ? styles.active : ""}>프로젝트 구인</Link>
          <Link to="#" className={state === "정보처리기사" ? styles.active : styles.disable}>정보처리기사</Link>
          <Link to="#" className={state === "커뮤니티" ? styles.active : styles.disable}>커뮤니티</Link>
          <Link to="#" className={state === "공지사항" ? styles.active : styles.disable}>공지사항</Link>
        </div>
      </nav>
      {!isLogin ? 
      <div className={styles.auth__menu}>
        <Link to="/login" className={styles.login}>로그인</Link>
      </div>
      : 
      <div className={styles.profile}>
        {/* <div >
          <Link to="/my">My</Link>
        </div> */}
        <div className={styles.user}>
          <Link to="/my"> {user.name}</Link>
        </div>
        <div className={styles.logout__menu} onClick={handleLogout}>
            <svg xmlns="http://www.w3.org/2000/svg" 
              width="22" height="24" viewBox="0 0 24 24" className={styles.logout}
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <path d="M16 17l5-5-5-5"/>
            <path d="M21 12H9"/>
          </svg>
          <p>logout</p>
        </div>
      </div>}
      <Theme />

    </header>
  )
}
