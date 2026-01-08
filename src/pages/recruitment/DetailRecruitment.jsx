import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './DetailRecruitment.module.css'
import { useEffect, useState } from 'react';
import userStore from '../../store/user';
import { handleError } from '../../api/error';
import { api } from '../../api/api';

export default function DetailRecruitment() {
  const { id } = useParams();  
  const today = new Date().toISOString().split("T")[0];
  const {user} = userStore();

// 게시글
  const [recruitment, setRecruitment] = useState({})

// 참여자 전용
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [position, setPosition] = useState('');
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState('');
  const [text, setText] = useState('');
  const [contacts , setContacts] = useState([]);
  const [contact , setContact] = useState('');
// 참여 정보 
  const [recruitmentApp, setRecruitmentApp] = useState({});
//  작성자 전용 
  const [apps , setApps] = useState([]);
  const [isDisable , setIsDisable] = useState(false);

// reset
  const resetForm = () => {
  setRecruitmentApp(null);
  setIsEdit(false);
  setIsDisable(false);
  setName('');
  setPosition('');
  setText('');
  setLinks([]);
  setContacts([]);
  setStartDate(today);
  setEndDate(today);
};
  // 초기 데이터
  useEffect(() => { // 신청자
    if (!user?.id) return;
    if (!recruitment) return; 
    const getRecruitment = async () => {
      try {
        const {data} = await api.get(`/recruitment/${id}`)
        setRecruitment(data);
      } catch (e) {
        handleError(e);
      }
    }
    getRecruitment();
    if (recruitment.userId && user?.id && recruitment.userId === user.id) {
        getData();
    } else {
      getData2();
  }
  },[id, user?.id, recruitment?.userId , recruitmentApp?.recruitAppId])
// 작성자 정보 가져오기 
  const getData = async () => {
      try {
        const {data} = await api.get(`/recruitment-app`, {
          params : {
            recruitmentId : id,
            userId : user?.id
          }
        })
         // 1️⃣ 정렬 우선순위 정의
        const order = { ACCEPT: 0, WAIT: 1, REJECT: 2 };

        // 2️⃣ data를 정렬한 새로운 배열 생성
        const sorted = [...data].sort((a, b) => {
          return order[a.status ?? "WAIT"] - order[b.status ?? "WAIT"];
        });
        setApps(sorted);
      } catch (e) {
        handleError(e);
      } 
}  
  // 신청자 제출 시 정보 가져오기
  const getData2 = async () => {
    try {
      const {data} = await api.get(`/recruitment-app/${id}`,{
        params : {
          userId : user?.id
        }
      });
      if (!data) {
      resetForm();
      return;
    }
      setRecruitmentApp(data);
      setIsEdit(true);
      setName(data.fullName ?? "");
      setPosition(data.position ?? "");
      setText(data.oneLine ?? "");
      setLinks(data.link?.split(",") ?? []);
      setContacts(data.contact?.split(",") ?? []);
      setStartDate(data.startDate ?? today);
      setEndDate(data.endDate ?? today);
      
      setIsDisable(true);
    } catch (e) {
      handleError(e);
    }
  }
  // 프로젝트 신청
  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!user?.id) return;
   // Recruitment-App Request 
    try {
      await api.post('/recruitment-app' , {
        recruitmentId : id ,
        userId : user.id,
        fullName : name,
        startDate,
        endDate,
        oneLine : text,
        position,
        link : links[0] ?? "",
        contact : contacts[0] ?? "",
      });
      alert("프로젝트 참여 신청이 완료되었습니다.");
      await getData2();
    } catch (e) {
      handleError(e);
    } 
  }
  const handleCancel = async () => {
    const ok = confirm("신청을 취소하시겠습니까 ? ");
    if(!ok) return;
    console.log(recruitmentApp.recruitAppId , user.id);
    try {
      await api.delete(`/recruitment-app` , {
              params : {
                recruitAppId : recruitmentApp.recruitAppId,
                userId : user?.id
              }
            });
      alert("정상적으로 신청이 취소되었습니다");
      resetForm();
    } catch (e) {
      handleError(e);
    }
  }
  // 스택컬러 
  const stackColor = {
    primary: [
      "REACT", "VUE", "HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "NODEJS"
    ],
    subPrimary: [
      "JAVA", "SPRING", "SPRING BOOT", "PYTHON"
    ]
  }
  // 스택 컬러에서 비교
  const getStackColor = (s = "") => {
    if (stackColor.primary.includes(s)) return "var(--primary)";
    if (stackColor.subPrimary.includes(s)) return "var(--sub-primary)";
    return "var(--stack-default)"; // 없으면 기본색
  };
  // 신청 폼 링크 유효성 검사 및 추가 
  const handleAdd = (e) => {
    e.preventDefault();
    const v = link.trim();
    if(links.length >= 1) {
      return alert("링크는 1개만 사용할 수 있습니다.");
    } 
    
    if (!v) return;
    if (!isValidUrl(v)) {
      alert("올바른 URL을 입력해주세요. (http/https)");
      return;
    }
    if (links.includes(v)) {
      alert("이미 추가된 링크입니다.");
      return;
    }
    setLinks((prev) => [...prev, v]);
    setLink("");
  }
  // 신청 폼 링크 삭제
  const handleDeleteLink = (index) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  }
  // 신청 폼 contact 삭제
  const handleDeleteContact = (index) => {
    setContacts((prev) => prev.filter((_, i) => i !== index));
  }
  // 신청 폼 contact 유효성 검사 및 추가 
  const handleContact = (e) => {
    e.preventDefault();
    const v = contact.trim();
    if(contacts.length >= 1) {
      return alert("연락처는 1개만 사용할 수 있습니다.");
    } 
    
    if (!v) return;
    if (contacts.includes(v)) {
      alert("이미 추가된 연락처입니다.");
      return;
    }
    setContacts((prev) => [...prev, v]);
    setContact("");
  }
  // 링크 유효성 검사
  const isValidUrl = (value) => {
    try {
      const u = new URL(value);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  };
  // 마이페이지 정보 불러오기
  const handleGetMy = async () => {
     if (!user?.id) return;
     try {
      const { data } = await api.get("/my", {
        params: {
          userId: user.id
        }
      });
      console.log(data);
      if (!data || (!data.fullName && !data.position && !data.oneLine && !data.link && !data.contact)) {
        return alert("등록된 정보가 없습니다 , 마이페이지에서 등록 후 이용해주세요.");
      }
      setName(data.fullName);
      setPosition(data.position);
      setText(data.oneLine);
      setLink(data.link);
      setContact(data.contact);
    } catch (e) {
      handleError(e); 
    } 
  }
  // 시작날짜 유효성 검사
  const onChangeStartDate = (e) => {
  const nextStart = e.target.value;
  setStartDate(nextStart);

  // start가 end보다 뒤면 end도 같이 당김 
  if (endDate < nextStart) setEndDate(nextStart);
};
  // 끝나는 날짜 유효성 검사
  const onChangeEndDate = (e) => {
    const nextEnd = e.target.value;

    // end가 start보다 앞이면 start로 보정(또는 return 처리)
    if (nextEnd < startDate) {
      setEndDate(startDate);
      return;
    }
    setEndDate(nextEnd);
  };
  // 날짜 분리
  const splitDate = (date) => {
    return date ? date.split("T")[0] : "";
  }
    // 상태 변경
  const handleStatusChange = (recruitAppId, value) => {
    setApps(prev => 
      prev.map(app => 
          app.recruitAppId === recruitAppId
          ? { ...app, status: value }
          : app
      )
    );
  };
  // 작성자 제출 정보 상태 변경
  const handleStatusChangeSubmit = async (recruitAppId) => {
    try {
      const target = apps.find(app => app.recruitAppId === recruitAppId);
      if (!target) return;

      const status = target.status ?? "WAIT";
      
      await api.patch(`/recruitment-app`, null, {
        params: {
          recruitAppId,
          status
        }
      });
      await getData();
    } catch (e) {
      console.log(e);
    }
  }

  const handleRecruitmentClosed = async () => {
    const ok = confirm(" 프로젝트 모집을 마감하시겠습니까 ? ")
    if(!ok) return;
    try {
      await api.patch(`/recruitment/${id}`);
       setRecruitment(prev => ({
      ...prev,
      status: "CLOSED",
    }));

    alert("프로젝트가 마감되었습니다.");
    } catch (e) {
      console.log(e);
    }
  }
  
  const isClosed = recruitment.status === "CLOSED";
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{recruitment.title}</h1>
        <div className={styles.info}>
          <p> 프로젝트 진행 기간 : {recruitment.startDate} ~ {recruitment.endDate}</p>
          <p className={styles.author}>{recruitment.author}</p>
        </div>
        <div className={styles.stack}>
          <div className={styles.stack__list}>
            {Array.isArray(recruitment.stack) && recruitment.stack.map((s, i) => 
              (<p style={{ backgroundColor: getStackColor(s) }} key={i} >{s}</p>))
            }</div>
        </div>
        <div className={styles.project__info}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
          </svg>
          <div className={styles.project__info__content}>
            <p> {recruitment.projectTitle}</p>
            <p> {recruitment.projectDesc}</p>
          </div>
        </div>
        <p className={styles.content__desc}>{recruitment.content}</p>
      </div>
      <form className={`${styles.form} ${isClosed && styles.closed}`} onSubmit={handleSubmit}>
      {recruitment.userId !== user?.id ?
      // 신청 내역 렌더링
      <> 
      <div className={`${styles.form__title}`}>
          <h2>{isEdit ? "작성한 내역" : "제출 폼"}</h2>
          {!isDisable 
          ? <button type='button' onClick={handleGetMy} className={styles.form__title__btn}>불러오기</button>
          : <button type='button' onClick={handleCancel} className={styles.form__title__btn}>신청 취소</button>
          }
          </div>
        <div className={`${styles.form__input}  ${isDisable && styles.disable}` }>
          <div className={styles.name}>
          <label> 이름 <span className={styles.redpoint}> * </span> </label><input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={styles.position}>
          <label> 지원 포지션 <span className={styles.redpoint}> * </span>  </label>
          <select value={position} onChange={(e) => setPosition(e.target.value)}>
            <option value="">포지션을 선택해주세요</option>
            <option value="frontend">프론트엔드</option>
            <option value="backend">백엔드</option>
            <option value="fullstack">풀스택</option>
          </select>
          </div>
          <div className={styles.date}>
          <label> 참여가능기간 </label>
            <div className={styles.date__input}>
                <input type="date" value={startDate} onChange={onChangeStartDate} />
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                </svg>
                <input type="date" value={endDate} onChange={onChangeEndDate} />
            </div>
          </div>
          <div className={styles.text}>
            <label>짧은 지원동기 </label>
            <input type="text" value={text} placeholder='간단한 지원 동기를 작성해주세요'
                   onChange={(e) => setText(e.target.value)} />
          </div>
          <label> 포트폴리오 링크 </label>
          <div className={styles.link}>
            <input type="url" value={link} placeholder='나를 보여줄 수 있는 링크를 등록해주세요'
                    onChange={(e) => setLink(e.target.value)} 
                   onKeyDown={(e) => {if (e.key === "Enter") handleAdd(e);}} />
            <svg onClick={handleAdd}
              xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </div>
          <div className={styles.link__list}>
            {links.length > 0 && links[0] !== "" && links.map((link, index) => ( <div key={index} className={styles.link__item_wrap}>
                                        <a className={styles.link__item} rel="noopener noreferrer" target="_blank" href={link} key={index}>{link.split("/")[2]}</a> 
                                        <button onClick={() => handleDeleteLink(index)}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                         </svg>
                                        </button>
                                        </div>))}
          </div>
          <label> contact (이메일, 번호 , SNS , discord ...) </label>
          <div className={styles.link}>
            <input type="text" value={contact} placeholder='ex) KAKAO : abcd1234'
                  onChange={(e) => setContact(e.target.value)} 
                   onKeyDown={(e) => {if (e.key === "Enter") handleContact(e);}} /> 
            <svg onClick={handleContact}
              xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </div>
          <div className={styles.link__list}>
            { contacts.length > 0 && contacts[0] !== "" && contacts.map((contact, index) => <div key={index} className={styles.link__item_wrap}> <p className={styles.link__item} rel="noopener noreferrer" target="_blank" key={index}>{contact}</p>
                                              <button onClick={() => handleDeleteContact(index)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                              </svg>
                                              </button></div>)}                                  
          </div>
        </div>
        <button type='submit' className={styles.form__submit} disabled={isDisable} style={{opacity : isDisable && "0.7"}}
        >{!isDisable ? "제출" : "이미 제출한 내역은 수정이 불가합니다"}</button>
        </>  
        : isClosed ? 
         <div> 마감 된 프로젝트 입니다</div> 
         :
        // 지원자 목록 렌더링 
        <div>
          <div className={styles.resc_title_wrap}>
            <p className={styles.resc_title}>신청자 리스트</p>
            <button type='button' onClick={handleRecruitmentClosed}>
              마감
            </button>
          </div>
          <ul className={styles.resc_ul}>
          {Array.isArray(apps) && apps.length > 0 && apps.map((app) =>
             <li key={app.recruitAppId} className={`${styles.resc_list_wrap}`} 
                 >
              <div className={`${styles.resc}  ${app.status === "ACCEPT" && styles.accept} ${app.status === "REJECT" && styles.reject}`}>
                <div className={styles.resc_list}  >
                  <div className={styles.resc_name}><p>{app.fullName} </p><span>{app.position ? app.position : "포지션선택 없음"}</span></div>
                </div>
              </div>
              <div className={styles.resc_btn}>
                <select value={app.status ?? "WAIT"} onChange={(e) => handleStatusChange(app.recruitAppId , e.target.value)}>
                  <option value="ACCEPT">수락</option>
                  <option value="WAIT">대기</option>
                  <option value="REJECT">거절</option>
                </select>
                <button type='button' onClick={() => handleStatusChangeSubmit(app.recruitAppId)}>
                  수정
                </button>
              </div>
             </li>
             )}
          </ul>   
        </div>
        }
      </form>
    </div>
  )
}
