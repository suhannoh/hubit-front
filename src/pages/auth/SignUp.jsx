import { useState } from 'react';
import styles from './SignUp.module.css'
import { api } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { handleError } from '../../api/error';

export default function SignUp() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();
    const isPasswordValid = password.length >= 8;
    const buttonDisabledSize = name.length > 0 && email.length > 0 && isPasswordValid;

    const handleSubmit = async (e) => {
      e.preventDefault();
      const user = {
        name,
        email,
        password
      }
      try {
        await api.post('/signup' , user);
        alert("회원가입이 정상적으로 완료되었습니다.")
        navigate('/login');
      } catch (e) {
        handleError(e);
      }
    }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.box}>
            <label>Name</label>
            <input type="text" required placeholder='이름을 입력해주세요'
              value={name} onChange={(e) => setName(e.target.value)} />
          </div> 
          <div className={styles.box}>
            <label>Email</label>
            <input type="email" required placeholder='이메일을 입력해주세요'
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div> 
          <div className={styles.box}>
            <label>Password</label>
            <input type="password" required placeholder='비밀번호를 입력해주세요'
              value={password} onChange={(e) => setPassword(e.target.value)} />
            <ul>
              <li><svg xmlns="http://www.w3.org/2000/svg" className={isPasswordValid ? styles.success : ''}
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8l-6.5 7L8 13.5" />
                </svg> 8자 이상의 비밀번호를 사용해주세요 </li>
            </ul>
          </div> 
          <button type='submit' disabled={!buttonDisabledSize} 
                  style={{opacity : buttonDisabledSize ? 1 : 0.7}}>회원가입</button>
        </form>
      </div>

      <div className={styles.text}>
        <h1> 함께 성장할 팀을 만나보세요 </h1>
        <p> 프로젝트 경험과 자격증 준비를 <br />
            한 곳에서 시작할 수 있어요. </p>
      </div>
    </div>
  )
}
