import React from 'react'
import styles from './Loading.module.css'

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <span> 오래 걸릴 시 오른쪽 하단 뱃지 상태를 <br /> 확인하고 새로고침을 해주세요</span>
    </div>
  )
}
