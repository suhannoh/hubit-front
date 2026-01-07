import { useState } from 'react';
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
  const [endDate, setEndDate] = useState(today);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [content , setContent] = useState("");
  const [stacks, setStacks] = useState([]);
  const stackList = [
    "REACT" , "VUE" , "JAVA" , "SPRING", "SPRING BOOT", "HTML" , "CSS"
    , "JAVASCRIPT" , "TYPESCRIPT" , "PYTHON"
  ]

  const {user} = userStore();
  const navigate = useNavigate();
  
  const handleClick = (stack) => {
    if(stacks.includes(stack)) {
      setStacks(stacks.filter((item) => item !== stack));
      return
    }
    else {
      setStacks([...stacks, stack]);
    }
  }

  const onChangeStartDate = (e) => {
  const nextStart = e.target.value;
  setStartDate(nextStart);

  // start가 end보다 뒤면 end도 같이 당김
  if (endDate < nextStart) setEndDate(nextStart);
};

const onChangeEndDate = (e) => {
  const nextEnd = e.target.value;

  // end가 start보다 앞이면 start로 보정(또는 return 처리)
  if (nextEnd < startDate) {
    setEndDate(startDate);
    return;
  }
  setEndDate(nextEnd);
};

  const getCategoryByStacks = (stacks) => {
    const front = ["REACT", "VUE", "HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT"];
    const back = ["JAVA", "SPRING", "SPRING BOOT", "PYTHON"];

      const hasFront = stacks.some(item => front.includes(item));
      const hasBack = stacks.some(item => back.includes(item));

      if (hasFront && hasBack) return "fullstack";
      if (hasFront) return "frontend";
      if (hasBack) return "backend";
      return "";
      
  };
  const category = getCategoryByStacks(stacks);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        stack : stacks,
        category
      });

      alert("프로젝트 생성이 정상적으로 완료되었습니다.");
      navigate('/recruitment');
    } catch (e) {
      handleError(e);
    }
  }

  const previewData = {
      id : user.RecruitmentId,
      author : user.name,
      projectTitle,
      projectDesc,
      stack : stacks,
      startDate,
      endDate
    }; 
  
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
          <label > 카테고리 </label>
          <p className={styles.category}>{category}</p>
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
                value={startDate} onChange={onChangeStartDate} min={today} />
            </div>
            <div>
              <label>종료 기간 </label>
              <input type="date" required
                value={endDate} onChange={onChangeEndDate} min={startDate}/>
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
            <RecruitmentCard item={previewData}/>
            <button type='submit'> 생성 </button>
          </div>
      </form>
    </div>
  )
}
