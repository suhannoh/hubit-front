import { useEffect, useState } from 'react';
import RecruitmentCard from '../../components/RecruitmentCard'
import styles from './NewRecriutment.module.css'
import userStore from '../../store/user';
import { api } from '../../api/api';
import { handleError } from '../../api/error';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
export default function NewRecriutment() {
  // Update recruitment
  const {state} = useLocation();
  const recruitment = state?.recruitment;
  const isEdit = !!recruitment; 
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

  const [loading, setLoading] = useState(false);
  const {user} = userStore();
  const navigate = useNavigate();

    const handleUpdateSet = (data) => {
    setTitle(data.title ?? "");
    setStartDate(data.startDate ?? today);
    setEndDate(data.endDate ?? today);
    setProjectTitle(data.projectTitle ?? "");
    setProjectDesc(data.projectDesc ?? "");
    setContent(data.content ?? "");
    // 백엔드 객체가 stack 이라는 이름으로 온다고 가정
    setStacks(data.stack ?? []); 
  };
    
 useEffect(() => {
    console.log(`[Project Detail], mounted`)
    if (recruitment) {
      console.log("UPDATE MODE");
      handleUpdateSet(recruitment);
    } else {
      console.log("NEW MODE");
    }
  }, [recruitment]);
  
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

  const front = ["REACT", "VUE", "HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT"];
  const back = ["JAVA", "SPRING", "SPRING BOOT", "PYTHON"];
  const getCategoryByStacks = (stacks = []) => {

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
    setLoading(true);
    const ok = confirm(`프로젝트 ${isEdit ? "수정" : "생성"}을 완료하시겠습니까 ?`);
    if(!ok) return;
    console.log(`[Project new or update], start fetching`);
    const req = {
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
    }
    try {
      if(isEdit){
        //todo update
        if (
          recruitment.title === title && recruitment.content === content 
        && recruitment.projectTitle === projectTitle && recruitment.projectDesc === projectDesc
        && recruitment.startDate === startDate && recruitment.endDate === endDate 
        && recruitment.stack === stacks && recruitment.category === category
        ) {
          return alert("변경된 내용이 없습니다.");
        }
        await api.post(`/recruitment/${recruitment.recruitmentId}` , req);
        alert(`프로젝트 ${isEdit ? "수정": "생성"}이 정상적으로 완료되었습니다.`);
        navigate('/recruitment');
      } 
      else {
        await api.post('/recruitment' , req);
        alert(`프로젝트 ${isEdit ? "수정": "생성"}이 정상적으로 완료되었습니다.`);
        navigate('/recruitment');
      } 
      console.log(`[Project new or update], fetch success`);
    } catch (e) {
      handleError(e);
    } finally {
      setLoading(false);
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
      {loading && <Loading />}
      <h1> 프로젝트 {isEdit ? "수정" :  "생성"} </h1>
      <form className={styles.box} onSubmit={handleSubmit} >
        <div className={styles.stack_box}>
          <label>스택 </label>
          <ul className={styles.stack_list}>
            {stackList.map((stack, idx) => (
              <li key={idx} onClick={() => handleClick(stack)}
                className={stacks.includes(stack) && front.includes(stack)  ? styles.front :
                stacks.includes(stack) && back.includes(stack) && styles.back}>{stack}</li>
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
            <RecruitmentCard item={previewData} cardType="preview"/>
            <button type='submit'> {isEdit ? "수정" : "생성"} </button>
          </div>
      </form>
    </div>
  )
}
