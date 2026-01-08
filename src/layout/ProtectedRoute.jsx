import { Navigate, Outlet, useLocation } from 'react-router-dom';
import userStore from '../store/user';

export default function ProtectedRoute() {
  const { isLogin, fetchCheck } = userStore();
  const location = useLocation();

  if(!fetchCheck) {
    return <div> 로그인 세션 확인중 . . .</div>
  };

  if (!isLogin) {
    alert("로그인이 필요한 서비스입니다.");
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <Outlet />;
}
