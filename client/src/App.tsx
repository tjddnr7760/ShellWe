import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import GlobalStyle from './style/GlobalStyle.js'
// import Header from './Components/Common/Header/Header';
// import Sidebar from './Components/Common/Sidebar/Sidebar';
// import Footer from './Components/Common/Footer/Footer';
// import HomePage from './Pages/Common/HomePage/HomePage';
// import MainPage from './Pages/Common/MainPage/MainPage';
// import LoginPage from './Pages/LoginSignup/LoginPage.tsx';
// import MyPage from './Pages/My/MyPage.jsx';
// import SignupPage from './Pages/LoginSignup/SingupPage.jsx';
// import AfterSignupPage from './Pages/LoginSignup/AfterSignupPage.jsx';


function App() {

  return (
      <BrowserRouter>
        <GlobalStyle />
      </BrowserRouter>
  )
}

export default App
