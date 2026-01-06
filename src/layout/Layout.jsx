import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'
import userStore from '../store/user';
import { useEffect, useState } from 'react';
import { api } from '../api/api';

export default function Layout({children}) {

        const [server, setServer] = useState("waking");
        const [badge , setBadge] = useState(true);
      
        useEffect(() => {
        const wake = async () => {
          setServer("waking");
          try {
            // Render 슬립 깨우기
            await api.get(`/health`, {
              timeout: 240000, // 최대 4분
            });
            // 응답 도착 = 서버 통신 가능
            setServer("ready");
          } catch (e) {
            // 통신 오류
            console.log(e);
            setServer("error");
          }
        };
      
        wake();
      }, []);
    
      const handleBadge = () => {
        setBadge(!badge);
      }
    
  

  const {darkmode} = userStore();
  return (
    <div className={`${styles.layout} ${darkmode && 'dark'}`}>
      <Header />
      <main className={styles.main}>
            {/* ✅ 여기부터: 서버 깨우기 배지 */}
        <div className={styles.badgeStyle} onClick={server === "ready" ? handleBadge : null}
             style={{display: badge ? "" : "none",
                     cursor: server === "ready" ? "pointer" : ""
             }}>
          {server === "waking" && (
            <span>⏳ 서버 깨우는 중… (첫 접속은 느릴 수 있어요, 3분 이하)</span>
          )}
          {server === "ready" && (
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg> 서버 연결 완료!<u>(클릭하여 닫기)</u> <br /></span>
          )}
          {server === "error" && (
            <span>
              <div>
              ⚠ 서버 응답 없음
              <br /> <b> 서버 통신 오류(재배포 및 서버오류)로 현재 페이지 접속이 불가합니다 </b>
              </div>
              <button className={styles.retry} onClick={() => window.location.reload()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                </svg>
              </button>
            </span>
          )}
        </div>

        {children}
      </main>
      <Footer />
    </div>
  )
}
