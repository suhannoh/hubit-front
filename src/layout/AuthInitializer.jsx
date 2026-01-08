import { useEffect } from 'react';
import { api } from '../api/api';
import userStore from '../store/user';

export default function AuthInitializer({ children }) {
  const { login, logout , setFetchCheck } = userStore();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const { data } = await api.get('/me');
        if (data) {
          login(data);// 세션에 USER 있으면 로그인 상태 복구
        } else {
          logout();
        }
      } catch (e) {
        // 세션 없거나 401/500 뜨면 => 로그아웃 상태로 취급
        logout();
      } finally {
        setFetchCheck();
      }
    };
    fetchMe();
  }, [login, logout,setFetchCheck]);

  return children;
}