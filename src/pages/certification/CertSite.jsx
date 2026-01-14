import React from 'react'
import styles from './Certification.module.css'

export default function CertSite() {
  return (
    <nav className={styles.cert_sites}>
      <div className={styles.cert_site}>
        <div className={styles.cert_title}>
         <a href="https://www.youtube.com/@HeungSsaem">흥달쌤 Youtube (추천)</a>
          <span> 기초</span>     
        </div>
        <p> 정보처리기사 전체적인 강의 및 C언어 개념 잡기 좋음</p>
        <b>Tip : 무료로 올라와있는 동영상 (기초,심화,문제풀이) 필독 , 시험 전 라이브방송 필수 참여 </b>
      </div>
      <div className={styles.cert_site}>
        <a href="https://www.youtube.com/@ydot0789/playlists">이기적 영진닷컴 Youtube</a>
        <p> 기초 해설을 가볍게 들을 수 있어 좋음</p>
        <b>Tip : 처음 보는 사람들이 기초를 빠르게 훑어보고 가는 느낌으로 보는 걸 추천</b>
      </div>
      <div className={styles.cert_site}>
        <a href="https://www.youtube.com/@eunwoossaem">은우쌤 Youtube</a>
        <p> 제일 난이도가 어려운 코드문에 풀이를 쉽게 해줌</p>
        <b>Tip : 코드문제는 볼펜으로 직접 풀어보는 게 좋기에 풀어보고 안 풀릴 때 보는 걸 추천</b>
      </div>
      <div className={styles.cert_site}>
        <a href="https://www.edugamja.com/">정처기 감자</a>
        <p> CBT 처럼 문제를 제공하여 어디서든 편리하게 문제 풀이를 해볼 수 있음</p>
        <b>Tip : 시험 1주 전부터 수시로 문제풀이를 같이 하면 좋습니다 </b>
      </div>
    </nav>
  )
}
