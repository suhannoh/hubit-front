import React from 'react'
import userStore from '../store/user'
import styles from './Header.module.css'

export default function Theme() {
  const {darkmode , toggleDarkmode} = userStore();
  return (
    <button className={styles.theme} onClick={toggleDarkmode}> {darkmode ? 'Light' : 'Dark'} </button>
  )
}
