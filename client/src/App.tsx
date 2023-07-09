import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import GlobalStyle from './style/GlobalStyle.ts';
// import Header from './Components/Common/Header/Header';
// import Sidebar from './Components/Common/Sidebar/Sidebar';
// import Footer from './Components/Common/Footer/Footer';
// import HomePage from './Pages/Common/HomePage/HomePage';
// import MainPage from './Pages/Common/MainPage/MainPage';
// import LoginPage from './Pages/LoginSignup/LoginPage.tsx';
// import MyPage from './Pages/My/MyPage.jsx';
// import SignupPage from './Pages/LoginSignup/SingupPage.jsx';
// import AfterSignupPage from './Pages/LoginSignup/AfterSignupPage.jsx';
// import OfferedShellsPage from './page/offeredshells/OfferedShellsPage.tsx';
import ProductShell from './page/productshell/ProductShell.tsx';
import TalentShell from './page/talentshell/TalentShell.tsx';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        {/* <Header /> */}
        <GlobalStyle />
        <main>
          <Routes>
            {/* <Route path="/" element={} /> // 홈페이지
          <Route path="/main" element={} /> // 메인페이지
          <Route path="/login" element={} /> // 로그인
          <Route path="/singup" element={} /> // 회원가입
          <Route path="/signup/success" element={} /> // 회원가입 완료*/}
            <Route path="/shelllist/product" element={<ProductShell />} />
            <Route path="/shelllist/talent" element={<TalentShell />} />
            {/*       <Route path="/shellcreate" element={} /> // 제품 생성 페이지
          <Route path="/shelldetail/:id" element={} /> // 제품 상세 페이지
          <Route path="/shellupdate" element={} /> // 제품 수정 페이지
          <Route path="/member/:id" element={} /> // 마이 페이지
          <Route path="/dm/:id" element={} /> // DM 페이지
          <Route path="/offer/:id" element={<OfferedShellsPage />} /> // 요청함 페이지 */}
          </Routes>
        </main>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
