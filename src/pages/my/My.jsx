import { useEffect, useState } from 'react';
import userStore from '../../store/user';
import styles from './My.module.css'
import { handleError } from '../../api/error';
import { api } from '../../api/api';
import { Link, Navigate } from 'react-router-dom';
export default function My() {
  const {user} = userStore();
  const [name , setName] = useState("");
  const [position, setPosition] = useState("");
  const [oneLine , setOneLine] = useState("");
  const [link , setLink] = useState("");
  const [contact , setContact] = useState("");
  const [openApps , setOpenApps] = useState([]);
  const [closedApps , setClosedApps] = useState([]);
  const splitDate = (date) => {
    return date.split("T")[0];
  }

  if (!user || !user.id) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await api.get("/my", {
          params : {
            userId : user.id
          }
        }); 
        if (!data) return;
        console.log(data);
        setOpenApps(data.apps.filter(app => app.recruitment?.status === "OPEN"));
        setClosedApps(data.apps.filter(app => app.recruitment?.status === "CLOSED"));
        setName(data.fullName ?? "");
        setPosition(data.position ?? "");
        setOneLine(data.oneLine ?? "");
        setLink(data.link ?? "");
        setContact(data.contact ?? "");
      } catch (e) {
        handleError(e);
      }
    }
    getData();
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.id) {           // 혹시 모를 방어
    alert("로그인 후 이용해주세요.");
    return;
    }
    
    try {
        await api.post("/my" , 
          {
            userId : user.id,
            fullName : name,
            position,
            oneLine,
            link,
            contact
          }
        )
        alert("수정이 완료되었습니다");
    } catch (e) {
      handleError(e);
    }
  }
  const getStatus = (status) => {
    if (status === "ACCEPT") return "승인된 프로젝트입니다"
    if (status === "REJECT") return "거절된 신청입니다"
    if (status === "WAIT") return "수락 대기중입니다"
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.my}>
        <section className={styles.info}>
        <h2> 가입 정보 </h2>
        <div className={styles.user__info}>
          <div className={styles.input__box}>
            <label className={styles.label}>닉네임</label>
            <p>{user.name}</p>
          </div>
          <div className={styles.input__box}>
            <label className={styles.label}>UID</label>
            <p>{user.id}</p>
          </div>
          <div className={styles.input__box}>
            <label className={styles.label}>이메일</label>
            <p>{user.email}</p>
          </div>
          <div className={styles.input__box}>
            <label className={styles.label}>계정상태1</label>
            <p>{user.role}</p>
          </div>
          <div className={styles.input__box}>
            <label className={styles.label}>계정상태2</label>
            <p>{user.status}</p>
          </div>
          <div className={styles.input__box}>
            <label className={styles.label}>가입일자</label>
            <p>{splitDate(user.createdAt)}</p>
          </div>
          <div className={styles.input__box}>
            <label className={styles.label}>최신 업데이트 일자 </label>
            <p>{splitDate(user.updatedAt)}</p>
          </div>
        </div>
        </section>
      </div>
     <form className={styles.profile} onSubmit={handleSubmit}>
      <div className={styles.profile__title}>
        <h2>프로필 <span className={styles.desc}>초기 설정이 필요합니다.</span></h2>
      </div>
        <div className={styles.profile__info}>
          <div className={styles.input__box}>
            <label className={styles.label}>성함</label>
            <input type="text" placeholder='실명을 입력해주세요' 
            value={name} onChange={(e) => setName(e.target.value)}  /> 
          </div>
          <div className={styles.input__box}>
            <label className={styles.label}>선호 포지션</label>
            <select value={position} onChange={(e) => setPosition(e.target.value)} >
              <option value="">선택없음</option>
              <option value="frontend">프론트엔드</option>
              <option value="backend">백엔드</option>
              <option value="fullstack">풀스택</option>
            </select>
          </div>
        </div>
        <div className={styles.input__box2}>
          <div className={`${styles.input_box} ${styles.full}`}>
            <label className={styles.label}>지원동기</label>
            <input type="text" value={oneLine} onChange={(e) => setOneLine(e.target.value)} />
          </div>
           <div className={`${styles.input_box} ${styles.full}`}>
            <label className={styles.label}>포트폴리오 주소</label>
            <input type="url" value={link} onChange={(e) => setLink(e.target.value)} /> 
          </div>
          <div className={`${styles.input_box} ${styles.full}`}>
            <label className={styles.label}>Contact SNS</label>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
        </div>
        <div className={styles.button}>
          <button type="submit"> 수정 </button>
        </div>
      </form> 
      </div>

        <section className={styles.help_box}>
          <div className={styles.help}>
            <div className={styles.help__title}>
              <h2>참여한 프로젝트</h2>  
              <span>더보기</span>
            </div>
              {closedApps ? closedApps.map((app,idx) => (
                 <Link 
              to={`/recruitment/${app.category}/${app.recruitment.recruitmentId}`}
              key={idx} className={styles.app}>
                <h3>{app.recruitmentTitle}</h3>
                <div>
                  <p>{getStatus(app.status)}</p>
                  <span>신청날짜 - {splitDate(app.createdAt)}</span>
                </div>
              </Link> 
              )) 
              : <p>참여한 프로젝트가 없습니다.</p> } 
          </div>
          <div className={styles.help}>
            <div className={styles.help__title}>
              <h2>최근 지원 현황</h2>  
              <span>더보기</span>
            </div>
            {openApps.map((app,idx) => (
              <Link 
              to={`/recruitment/${app.category}/${app.recruitment.recruitmentId}`}
              key={idx} className={styles.app}>
                <h3>{app.recruitmentTitle}</h3>
                <div>
                  <p>{getStatus(app.status)}</p>
                  <span>신청날짜 - {splitDate(app.createdAt)}</span>
                </div>
              </Link> 
            ))}
          </div>
        </section>
    </div>
  )
}
