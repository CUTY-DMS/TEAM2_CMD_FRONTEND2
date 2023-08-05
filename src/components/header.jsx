import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/cmdLogo.png";
import Modal from "./modal";

class Header extends React.Component {
  render() {
    return (
      <HeaderBody>
        {/* <FullDiv>
          <Modal></Modal>
        </FullDiv> */}
        <Modal></Modal>
        <LogoWrapper to="/Home">
          <CmdLogo src={Logo}></CmdLogo>
        </LogoWrapper>
        <MenuWrapper>
          <TimeTable to="/TimeTable">시간표</TimeTable>
          <NoticeComp to="/Notice">공지사항</NoticeComp>
          <StudentInfo to="/StudentInfo">학생정보</StudentInfo>
        </MenuWrapper>
        <MyPageWrapper>
          <MyPage>
            <TeacherName to="/MyPage">1-2 최수장</TeacherName>
            <Logout onClick={showModal}>
              <LogoutBtn>로그아웃</LogoutBtn>
            </Logout>
          </MyPage>
          <Line></Line>
        </MyPageWrapper>
      </HeaderBody>
    );
  }
}

function showModal() {
  document.getElementById("logoutModal").style.visibility = "visible";
}

const FullDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const LogoWrapper = styled(Link)`
  margin-top: 30px;
  margin-left: 250px;
`;

const HeaderBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 11vh;
  /* height: 12vh; */
  background-color: white;
`;
const CmdLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 50px;
`;
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`;

const TimeTable = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-left: 90px;
  text-decoration: none;
  color: #9c9c9c;
  font-weight: bold;
  &:hover {
    color: black;
    transition: 0.4s;
  }
`;

const NoticeComp = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-left: 35px;
  text-decoration: none;
  color: #9c9c9c;
  font-weight: bold;
  &:hover {
    color: black;
    transition: 0.4s;
  }
`;

const StudentInfo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-left: 35px;
  text-decoration: none;
  color: #9c9c9c;
  font-weight: bold;
  &:hover {
    color: black;
    transition: 0.4s;
  }
`;

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 900px;
`;
const MyPage = styled.div`
  display: flex;
  flex-direction: column;
`;
const TeacherName = styled(Link)`
  font-size: 23px;
  font-weight: bold;
  color: black;
  text-decoration: none;
`;
const Logout = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 22px;
  margin-top: 7px;
  text-decoration: none;
`;
const LogoutBtn = styled.button`
  background-color: white;
  border: none;
  color: #a3a3a3;
  margin-left: 35px;
  cursor: pointer;
`;
const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  width: 1.5px;
  height: 65px;
  background-color: #ffcf5e;
`;

export default Header;
