import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import signup1 from "./pages/signup1";
import signup2 from "./pages/signup2";
import login from "./pages/login";
import home from "./pages/home";
import timetable from "./components/timeTable";
import notice from "./components/notice";
import studentInfo from "./components/studentInfo";
import noticeDetail from "./pages/noticeDetail";
import studentDetail from "./pages/studentDetail";
import myPage from "./components/mypage";
import modal from "./components/modal";
import header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp1" Component={signup1} />
        <Route path="/SignUp2" Component={signup2} />
        <Route path="/" Component={login} />
        <Route path="/Home" Component={home} />
        <Route path="/TimeTable" Component={timetable} />
        <Route path="/Notice" Component={notice} />
        <Route path="/StudentInfo" Component={studentInfo} />
        <Route path="/NoticeDetail" Component={noticeDetail} />
        <Route path="/StudentDetail" Component={studentDetail} />
        <Route path="/MyPage" Component={myPage} />
        <Route path="/Modal" Component={modal} />
        <Route path="/Header" Component={header} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
