import { useEffect, useState } from 'react';
import RecruitmentCard from '../../components/RecruitmentCard'
import styles from './NewRecriutment.module.css'
import userStore from '../../store/user';
import { api } from '../../api/api';
import { handleError } from '../../api/error';
import { useNavigate } from 'react-router-dom';
export default function NewRecriutment() {
  const [title, setTitle] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [content , setContent] = useState("");

  const [stacks, setStacks] = useState([]);
  const stackList = [
    "REACT" , "VUE" , "JAVA" , "SPRING", "SPRING BOOT", "HTML" , "CSS"
    , "JAVASCRIPT" , "TYPESCRIPT" , "PYTHON"
  ]

  const {user} = userStore();
  const data = {
      id : user.id,
      author : user.name,
      title : projectTitle,
      desc : projectDesc,
      stack : stacks,
      startDate,
      endDate
    };
  
  const navigate = useNavigate();


  const handleClick = (stack) => {
    if(stacks.includes(stack)) {
      setStacks(stacks.filter((item) => item !== stack));
      return
    }
    setStacks([...stacks, stack]);
  }

  useEffect(() => {
    if(endDate < startDate) {
      setEndDate(startDate);
    }
  },[startDate])

  const handleSubmit = async () => {
    try {
      await api.post('/recruitment' , {
        userId : user.id,
        author : user.name,
        title : title,
        content : content,
        projectTitle : projectTitle,
        projectDesc : projectDesc,
        startDate : startDate,
        endDate : endDate,
        stack : stacks
      });
      
      alert("프로젝트 생성이 정상적으로 완료되었습니다.");
      navigate('/recruitment');
    } catch (e) {
      handleError(e);
    }
  }

  return (
    <div className={styles.container}>
      <h1> 프로젝트 생성 </h1>
      <form className={styles.box} onSubmit={handleSubmit} >
        <div className={styles.stack_box}>
          <label>스택 </label>
          <ul className={styles.stack_list}>
            {stackList.map((stack, idx) => (
              <li key={idx} onClick={() => handleClick(stack)}
                className={stacks.includes(stack) ? styles.active : ""}>{stack}</li>
            ))}
          </ul>
        </div>
        <div className={styles.title_box}>
          <div className={styles.title_box_value}>
            <label>제목 </label>
            <input type="text" required placeholder='글 제목을 입력해주세요' 
              value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className={styles.date_box}>
            <div>
              <label>시작 기간 </label>
              <input type="date" required
                value={startDate} onChange={(e) => setStartDate(e.target.value)} min={today} />
            </div>
            <div>
              <label>종료 기간 </label>
              <input type="date" required
                value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate}/>
            </div>
          </div>
          <div className={styles.title_box_value}>
            <label> 프로젝트명 (5 ~ 20자) </label>
            <input type="text" required placeholder='프로젝트명을 입력해주세요' minLength={5} maxLength={20}
              value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
          </div>
          <div className={styles.title_box_value}>
            <label> 간단한 프로젝트 소개 (10~50자) </label>
            <input type="text" required placeholder='간단한 프로젝트 소개을 입력해주세요'
              value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)} minLength={10} maxLength={50} />
          </div>
          <div className={styles.desc_box}>
            <label> 상세내용 </label>
            <textarea type="text" required placeholder='상세내용을 입력해주세요'
              value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
        </div>
          <div className={styles.preview}>
            <label> Preview </label>
            <RecruitmentCard item={data}/>
            <button type='submit'> 생성 </button>
          </div>
      </form>
    </div>
  )
}
