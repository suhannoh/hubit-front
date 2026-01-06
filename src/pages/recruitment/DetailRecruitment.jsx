import { useLocation } from 'react-router-dom';
import styles from './DetailRecruitment.module.css'
import { useState } from 'react';
import userStore from '../../store/user';
import { handleError } from '../../api/error';
import { api } from '../../api/api';

export default function DetailRecruitment() {
  const { state } = useLocation();
  const {user} = userStore();
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [position, setPosition] = useState('');
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState('');
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ok");
    return;
      const ok = confirm("정보를 불러오시겠습니까 ?");
      if (!ok) {return}
      // todo 
  }
  const stackColor = {
    primary: [
      "REACT", "VUE", "HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT", "NODEJS"
    ],
    subPrimary: [
      "JAVA", "SPRING", "SPRING BOOT", "PYTHON"
    ]
  }

  const getStackColor = (s = "") => {
    if (stackColor.primary.includes(s)) return "var(--primary)";
    if (stackColor.subPrimary.includes(s)) return "var(--sub-primary)";
    return "var(--stack-default)"; // 없으면 기본색
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const v = link.trim();
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

  const isValidUrl = (value) => {
    try {
      const u = new URL(value);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  };

  const handleGetMy = async () => {
     if (!user?.id) return;
     try {
      const { data } = await api.get("/my", {
        params: {
          userId: user.id
        }
      });
      if (!data) {
        return alert("등록된 정보가 없습니다 , 마이페이지에서 등록 후 이용해주세요.");
      }
      setName(data.fullName);
      setPosition(data.position);
      setText(data.oneLine);
      setLink(data.link);
    } catch (e) {
      // handleError(e);
      console.log(e);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{state.title}</h1>
        <div className={styles.info}>
          <p>{state.startDate} ~ {state.endDate}</p>
          <p className={styles.author}>{state.author}</p>
        </div>
        <div className={styles.stack}>
          <div className={`${styles.stack__list} `}>{state.stack.map((s, i) => (<p style={{ backgroundColor: getStackColor(s) }} key={i} >{s}</p>))}</div>
        </div>
        <div className={styles.project__info}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
          </svg>
          <div className={styles.project__info__content}>
            <p> {state.projectTitle}</p>
            <p> {state.projectDesc}</p>
          </div>
        </div>
        <p className={styles.content__desc}>{state.content}</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__title}>
          <h2>제출 폼 </h2>
          <button type='button' onClick={handleGetMy} className={styles.form__title__btn}>불러오기</button>
        </div>
        <div className={styles.form__input}>
          <div className={styles.name}>
          <label> 이름 </label><input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={styles.date}>
          <label> 참여가능기간 </label>
            <div className={styles.date__input}>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                </svg>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
          </div>
          <div className={styles.position}>
          <label> 지원 포지션  </label>
          <select value={position} onChange={(e) => setPosition(e.target.value)}>
            <option value="">포지션을 선택해주세요</option>
            <option value="frontend">프론트엔드</option>
            <option value="backend">백엔드</option>
            <option value="fullstack">풀스택</option>
          </select>
          </div>
          <div className={styles.text}>
            <label>짧은 지원동기 </label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <label> 포트폴리오 링크 </label>
          <div className={styles.link}>
            <input type="url" value={link} onChange={(e) => setLink(e.target.value)} 
                   onKeyDown={(e) => {if (e.key === "Enter") handleAdd(e);}} />
            <svg onClick={handleAdd}
              xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </div>
          <div className={styles.link__list}>
            {links.map((link, index) => <a className={styles.link__item} rel="noopener noreferrer" target="_blank" href={link} key={index}>{link.split("/")[2]}</a>)}
          </div>
        </div>
        <button type='submit' className={styles.form__submit}
        >제출</button>
      </form>
    </div>
  )
}
