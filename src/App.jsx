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
import ListRecruitment from './pages/recruitment/ListRecruitment'
import My from './pages/my/My'
import AuthInitializer from './layout/AuthInitializer'
import Project from './pages/project/Project'
import Test from './pages/home/Test'
import Community from './pages/chat/Community'
import Certification from './pages/certification/Certification'
import CertSite from './pages/certification/CertSite'

function App() {

  return (
    <>
      <AuthInitializer>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/recruitment/:category" element={<ListRecruitment />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/certification/site" element={<CertSite />} />
            {/* 로그인 필요 영역 !  */}
            <Route element={<ProtectedRoute />} >
              <Route path="/community" element={<Community />} />
              <Route path="/recruitment/new" element={<NewRecriutment />} />
              <Route path="/recruitment/update/:id" element={<NewRecriutment />} />
              <Route path="/recruitment/:category/:id" element={<DetailRecruitment />} />
              <Route path="/recruitment/project/:id" element={<Project />} />
              <Route path="/my" element={<My />} />
            </Route>
          </Routes>
        </Layout>
      </AuthInitializer>
    </>
  )
}

export default App
