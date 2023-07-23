import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GlobalStyle from './style/GlobalStyle.ts';
import Footer from './component/footer/Footer.tsx';
import Nav from './component/nav/Nav.tsx';
import HomePage from './page/home/HomePage.tsx';
import MainPage from './page/main/MainPage.tsx';
import SignupPage from './page/signup/SignupPage.tsx';
import AfterSignUp from './page/aftersignup/AfterSignUp.tsx';
import LoginPage from './page/login/LoginPage.tsx';
import ShellCreate from './page/shellcreate/ShellCreate.tsx';
import ShellUpdate from './page/shellupdate/ShellUpdate.tsx';
import ProductShell from './page/productshell/ProductShell.tsx';
import TalentShell from './page/talentshell/TalentShell.tsx';
import ShellDetailPage from './page/shelldetail/ShellDetailPage.tsx';
import MyPage from './page/mypage/MyPage.tsx';
import MyShellsPage from './page/myshells/MyShellsPage.tsx';
import OfferedShellsPage from './page/offeredshells/OfferedShellsPage.tsx';
import DirectMessage from './page/directmessage/DirectMessage.tsx';
import SearchPage from './page/searchpage/SearchPage.tsx';
import GoogleLoginToken from './page/login/GoogleLoginToken.tsx';
import OauthFailPage from './page/login/OauthFailPage.tsx';
import { useMediaQuery } from 'react-responsive';
import Header from './component/header/Header.tsx';

function App() {
  const isMobileScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <main>
        {isMobileScreen ? <Header /> : <Nav />}
        <div className="inner">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/aftersignup" element={<AfterSignUp />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/oauth2/authorization/google/success"
              element={<GoogleLoginToken />}
            />
            <Route
              path="/oauth2/authorization/google/fail"
              element={<OauthFailPage />}
            />
            <Route path="/shelllist/product" element={<ProductShell />} />
            <Route path="/shelllist/talent" element={<TalentShell />} />
            <Route path="/shellcreate" element={<ShellCreate />} />
            <Route path="/shellupdate/:id" element={<ShellUpdate />} />
            <Route path="/shelldetail/:id" element={<ShellDetailPage />} />
            <Route path="/member/:id" element={<MyPage />} />
            <Route path="/myshells/:id" element={<MyShellsPage />} />
            <Route path="/offer/:id" element={<OfferedShellsPage />} />
            <Route path="/dm/:id" element={<DirectMessage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          {isMobileScreen ? null : <Footer />}
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
