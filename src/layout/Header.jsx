import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import Theme from './Theme';
import userStore from '../store/user';
import { useEffect, useState } from 'react';
import { api } from '../api/api';

export default function Header() {
  const {isLogin , user , logout} = userStore();
  const [state , setState] = useState("");
  const [mobileMenu , setMobileMenu] = useState(false);
  const { pathname } = useLocation();
  useEffect (() => {
    setState(pathname.split("/")[1] || "home");
  }, [pathname]);

  const navigate = useNavigate();
  const handleLogout = async () => {
    const result = confirm("정말 로그아웃 하시겠습니까 ?");
    if(result) {
      navigate('/');
      await api.get("/logout")
      logout();
    }
  }

  return (
    <header className={styles.header}>
      <aside >
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="5" width="18" height="2" rx="1" />
            <rect x="3" y="11" width="18" height="2" rx="1" />
            <rect x="3" y="17" width="18" height="2" rx="1" />
          </svg>
        </button>
      </aside>
      <div className={`${styles.mobile__menu} ${mobileMenu ? styles.show : ""}`}> 
          <div className={styles.mobile_menu}>
            <Link to="/recruitment" className={state === "recruitment" ? styles.active : ""}
                  onClick={() => setMobileMenu(false)}>프로젝트 구인</Link>
            <Link to="certification" className={state === "certification" ? styles.active : ""}
                  onClick={() => setMobileMenu(false)}>정보처리기사</Link>
            <Link to="/community" className={state === "community" ? styles.active : ""}
                  onClick={() => setMobileMenu(false)}>커뮤니티</Link>
            <Link to="#" className={state === "공지사항" ? styles.active : styles.disable}
                  onClick={() => setMobileMenu(false)}>공지사항</Link>
          </div>
          <div className={styles.mobile_login}>
            {!isLogin ? <Link to="/login">로그인</Link>
                      : <div className={styles.mobile_menu_me}>
                          <Link to="/my" className={styles.user}> {user.name}</Link>
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
                      </div>
          }
          </div>
      </div>
      <nav>
        <div className={styles.logo}>
          <Link to="/"><h2>HUB IT</h2></Link>
        </div>
        <div className={styles.menu}>
          <Link to="/recruitment" className={state === "recruitment" ? styles.active : ""}>프로젝트 구인</Link>
          <Link to="certification" className={state === "certification" ? styles.active : ""}>정보처리기사</Link>
          <Link to="/community" className={state === "community" ? styles.active : ""}>커뮤니티</Link>
          <Link to="#" className={state === "공지사항" ? styles.active : styles.disable}>공지사항</Link>
        </div>
      </nav>
      {!isLogin ? 
      <div className={styles.auth__menu}>
        <Link to="/login" className={styles.login}>로그인</Link>
      </div>
      : 
      <div className={styles.profile}>
          <Link to="/my" className={styles.user}> {user.name}</Link>
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
