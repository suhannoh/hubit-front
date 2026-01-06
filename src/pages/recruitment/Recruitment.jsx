import { Link } from 'react-router-dom'
import CardSlider from '../../components/CardSlider'
import RecruitmentCard from '../../components/RecruitmentCard'
import styles from './Recruitment.module.css'
import userStore from '../../store/user'
import { useEffect, useState } from 'react'
import { api } from '../../api/api'
export default function Recruitment() {
  const {user} = userStore();
  const [page , setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [list , setList] = useState([]);

  useEffect (() => {
    const read = async () => {
    try {
      const {data} = await api.get('/recruitment' , { params : { page : page, size : 10 }})
      setList(data.content);
      setTotalPage(data.totalPages);
      // setPage(data.number);
    } catch (error) {
      console.log(error);
    }
  }
  read();
  }, [page])

  const handlePrev = () => {
    if(page === 0) {
      return alert("마지막 페이지입니다");
    }
    setPage(p => p - 1);
  }
  const handleNext = () => {
    if(page + 1 >= totalPage) {
      return;
    }
    setPage(p => p + 1);
  }

  return (
    <div className={styles.container}>
      <section className={styles.recruitment}>
        <div className={styles.hero}>
          <h1>방금 올라온 프로젝트 </h1>
        </div>
        <div className={styles.hot_recruitment}>
          <CardSlider items={list} />  
        </div>
      </section>
      <section className={styles.recruitment_grid}>
          <div className={styles.hero}>
            <h1> 흥미로운 프로젝트를 선택하여 진행해보세요 </h1>
            <p><span> 프로젝트를 함께할 팀원을 구하시나요 ? </span>
              <Link 
              to={"/recruitment/new"} 
              className={styles.link}
                    // onClick={user ? "" : () => alert("로그인이 필요합니다")}
                    > 프로젝트 만들기</Link></p>
          </div>
          <div className={list.length > 4 ? styles.grid : styles.grid__small}>
            {list && list.map(item => (
              <RecruitmentCard key={item.recruitmentId} item={item} />
            ))}
          </div>
      </section>
      <div className={styles.pagination}>
        <button onClick={handlePrev} disabled={page === 0}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg>
        </button>
        <h2> {page + 1} / {totalPage} </h2>
        <button onClick={handleNext} disabled={page + 1 === totalPage}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
