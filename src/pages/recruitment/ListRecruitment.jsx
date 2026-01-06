import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { api } from '../../api/api';
import RecruitmentCard from '../../components/RecruitmentCard';
import styles from './ListRecruitment.module.css'

export default function ListRecruitment() {
  const { pathname } = useLocation();
  const [path , setPath] = useState("");
  const [page , setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [list , setList] = useState([]);

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
  

  useEffect (() => {
    setPath(pathname.split("/")[2] || "");
  }, [pathname]); 
    useEffect(() => {
    setPage(0);
  }, [path]);

  useEffect (() => {
      const read = async () => {
        console.log(path);
        const allowed = ["frontend", "backend", "fullstack"];
        if (!allowed.includes(path)) return;
        try {
          const {data} = await api.get('/recruitment/list' , { 
            params : { 
              category : path,
              page : page,
              size : 10 
            }})
          setList(data.content);
          setTotalPage(data.totalPages);
        } catch (error) {
          console.log(error);
        }
      }
    read();
    }, [path ,page])

  return (
    <div className={styles.container}>
      <h1>{path}</h1>
      <div className={ list.length > 0 ? styles.list : styles.empty} >
        {list.length > 0 ? list.map(item => (
              <RecruitmentCard key={item.recruitmentId} item={item} />
            ))
          : (<div><h2> 진행중인 프로젝트가 없습니다 </h2>
            <span>  프로젝트 생성하여 팀원을 구해보세요 </span>
            <Link to="/recruitment/new"> 바로가기 </Link>
          </div>)
        }
      </div>
      <div className={styles.pagination} 
        style={{display : totalPage === 0 && "none"}}>
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
