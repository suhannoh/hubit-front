import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { useState } from 'react';
import userStore from '../../store/user';
import { handleError } from '../../api/error';
import { api } from '../../api/api';
export default function Login() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const {login} = userStore(); 
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = {
      email,
      password
    }
    try {
      const {data} = await api.post('/login' , user);
      login(data);
      alert("로그인이 정상적으로 완료되었습니다.")
      navigate('/');
    } catch (e) {
      handleError(e);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className={styles.container}>
      {loading && <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                    <span> 오래 걸릴 시 오른쪽 하단 뱃지 상태를 <br /> 확인하고 새로고침을 해주세요</span>
                  </div>}
      <div className={styles.form}>
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.box}>
            <label>Email</label>
            <input type="email" required placeholder='이메일을 입력해주세요'
                value={email} onChange={(e) => setEmail(e.target.value)} />
          </div> 
          <div className={styles.box}>
            <label>Password</label>
            <input type="password" required placeholder='비밀번호를 입력해주세요' 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div> 
          <button type="submit">로그인</button>
        <p className={styles.signup}>아직 회원이 아니신가요 ? <Link to="/signup" className={styles.signup}>회원가입</Link> </p>
        </form>
        
      </div>

      <div className={styles.text}>
        <h2> 오른쪽 밑 뱃지를 확인하여 서버 연결 완료가 뜨고 새로고침 후 이용해주세요 </h2>
        <h1> 다시 만나서 반가워요 👋 </h1>
        <p> 프로젝트 경험과 자격증 준비를 계속 이어가세요. </p>
      </div>
    </div>
    )
}
