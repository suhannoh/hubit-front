import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './layout/Layout'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
import Recruitment from './pages/recruitment/Recruitment'
import NewRecriutment from './pages/recruitment/NewRecriutment'
import ProtectedRoute from './layout/ProtectedRoute'
import DetailRecruitment from './pages/recruitment/DetailRecruitment'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recruitment" element={<Recruitment />} />
          {/* 로그인 필요 영역 !  */}
          <Route element={<ProtectedRoute />} >
            <Route path="/recruitment/new" element={<NewRecriutment />} />
            <Route path="/recruitment/:id" element={<DetailRecruitment />} />
          </Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
