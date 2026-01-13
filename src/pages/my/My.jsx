import { useEffect, useState } from 'react';
import userStore from '../../store/user';
import styles from './My.module.css'
import { handleError } from '../../api/error';
import { api } from '../../api/api';
import { Link, Navigate, useLocation } from 'react-router-dom';
export default function My() {
  const {user} = userStore();
  const [name , setName] = useState("");
  const [position, setPosition] = useState("");
  const [oneLine , setOneLine] = useState("");
  const [link , setLink] = useState("");
  const [contact , setContact] = useState("");
  const [openApps , setOpenApps] = useState([]);
  const [closedApps , setClosedApps] = useState([]);
  const [myRecruitments , setMyRecruitments] = useState([]);
  const [myPageStatus , setMyPageStatus] = useState("info");
  const {state} = useLocation();
  const splitDate = (date) => {
    return date.split("T")[0];
  }

  if (!user || !user.id) {
    return <Navigate to="/login" replace />;
  }
  useEffect(() => {
    if (state) {
      setMyPageStatus(state);
    }
  },[state]);

  useEffect(() => {
    console.log("[My] mounted");
    console.log("[My] start fetching");
    const getData = async () => {
      try {
        const {data} = await api.get("/my", {
          params : {
            userId : user.id
          }
        }); 
        if (!data) return;
        const appList = data.apps ?? [];
        const myRecruitList = data.myRecruitments ?? [];
        setOpenApps(appList.filter(app => app.recruitment?.status === "OPEN"));
        const closedApps = appList.filter(app => app.recruitment?.status === "CLOSED");

        const PROJECT_ORDER = { IN_PROGRESS: 0, NOT_STARTED: 1, COMPLETED: 2 };

        const sortByProjectStatus = (a, b) => {
        const aKey = PROJECT_ORDER[a.projectStatus ?? "NOT_STARTED"];
        const bKey = PROJECT_ORDER[b.projectStatus ?? "NOT_STARTED"];
        return aKey - bKey;
      };

        setClosedApps([...closedApps].sort(sortByProjectStatus));  
        setMyRecruitments([...myRecruitList].sort(sortByProjectStatus));

        // setMyRecruitments(myRecruitList);
        setName(data.fullName ?? "");
        setPosition(data.position ?? "");
        setOneLine(data.oneLine ?? "");
        setLink(data.link ?? "");
        setContact(data.contact ?? "");
        console.log("[My] fetch success");
      } catch (e) {
        handleError(e);
      }
    }
    getData();
  },[user?.id])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.id) {
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
    if (status === "ACCEPT") return "승인된 신청입니다"
    if (status === "REJECT") return "거절된 신청입니다"
    if (status === "WAIT") return "수락 대기중입니다"
  }
  const getRecrStatus = (status) => {
    if (status === "OPEN") return "프로젝트 생성전"
    if (status === "CLOSED") return "프로젝트 생성 완료"
  } 
  const projectStatus = (status) => {
    if (status === "NOT_STARTED") return "시작전"
    if (status === "IN_PROGRESS") return "진행중"
    if (status === "COMPLETED") return "완료"
  }

  return (
    <div className={styles.container}>
      <aside>
        <nav className={styles.menu}>
          <button onClick={() => setMyPageStatus("info")} className={myPageStatus === "info" && styles.active}> 내 정보 </button>
          <button onClick={() => setMyPageStatus("project")} className={myPageStatus === "project" && styles.active}> 내 프로젝트 </button>
          <button onClick={() => setMyPageStatus("app")} className={myPageStatus === "app" && styles.active}> 참여한 프로젝트 현황 </button>
          <button onClick={() => setMyPageStatus("recruitment")} className={myPageStatus === "recruitment" && styles.active}> 최근 신청 현황 </button>
        </nav>
      </aside>
      {myPageStatus === "info" && (
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
      )}

      {myPageStatus !== "info" && <section className={styles.help_box}>
      {myPageStatus === "project" && 
      <div className={styles.help}>
        <div className={styles.help__title}>
          <h2>내가 주도하는 프로젝트</h2>  
          <span>더보기</span>
        </div>
          {myRecruitments.length > 0 ? myRecruitments.map((recr,idx) => (
             <Link 
          to={`/recruitment/${recr.category}/${recr.recruitmentId}`}
          key={idx} className={styles.app}>
            <h3>{recr.title}</h3>
            <span className={styles.status}>{projectStatus(recr.projectStatus)}</span>
            <div>
              <p>{getRecrStatus(recr.status)}</p>
              <span>프로젝트 시작날짜 - {splitDate(recr.startDate)}</span>
            </div>
          </Link> 
          )) 
          : ( <p>내가 만든 프로젝트가 없습니다.</p> )} 
      </div>
        }

        {myPageStatus === "app" &&
          <div className={styles.help}>
            <div className={styles.help__title}>
              <h2>참여한 프로젝트</h2>  
              <span>더보기</span>
            </div>
              {closedApps.length > 0 ? closedApps.map((app,idx) => (
                 <Link 
              to={`/recruitment/${app.category}/${app.recruitment.recruitmentId}`}
              key={idx} className={styles.app}>
                <h3>{app.recruitmentTitle}</h3>
                <span className={styles.status}>{projectStatus(app.projectStatus)}</span>
                <div>
                  <p>{getStatus(app.status)} - {getRecrStatus(app.recruitment.status)}</p>
                  <span>신청날짜 - {splitDate(app.createdAt)}</span>
                </div>
              </Link> 
              )) 
              : <p>참여한 프로젝트가 없습니다.</p> } 
          </div>
          }
          {myPageStatus === "recruitment" &&  
          <div className={styles.help}>
            <div className={styles.help__title}>
              <h2>최근 지원 현황</h2>  
              <span>더보기</span>
            </div>
            { openApps.length > 0 ? (
              openApps.map((app, idx) => (
                <Link 
                  to={`/recruitment/${app.category}/${app.recruitment.recruitmentId}`}
                  key={idx} 
                  className={styles.app}
                >
                  <h3>{app.recruitmentTitle}</h3>
                  <div>
                    <p>{getStatus(app.status)} {app.status === "ACCEPT" && "-"} {app.status === "ACCEPT"  && getRecrStatus(app.recruitment.status)}</p>
                    <span>신청날짜 - {splitDate(app.createdAt)}</span>
                  </div>
                </Link>
              ))
            ) : (
              <p>최근 지원한 프로젝트가 없습니다.</p>
            )
        }
          </div>
          }
        </section>}
    </div>
  )
}
