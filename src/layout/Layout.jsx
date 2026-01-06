import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'
import userStore from '../store/user';

export default function Layout({children}) {
  const {darkmode} = userStore();
  return (
    <div className={`${styles.layout} ${darkmode && 'dark'}`}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
