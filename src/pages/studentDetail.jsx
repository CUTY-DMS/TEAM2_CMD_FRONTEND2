import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/header";
import CmdLogo from "../assets/cmdLogo.png";

function StudentDetail() {
  return (
    <Wrapper>
      <Header></Header>
      <Body>
        <Box>
          <StudentWrapper>
            <Logo src={CmdLogo}></Logo>
            <StudentName>이의진</StudentName>
          </StudentWrapper>
          <Info>
            <InfoTitle>
              <Name>이름</Name>
              <Number>학번</Number>
              <Birthday>생년월일</Birthday>
              <Major>전공분야</Major>
            </InfoTitle>
            <Infos>
              <NameA>이의진</NameA>
              <NumberA>1211</NumberA>
              <BirthdayA>2007.09.20</BirthdayA>
              <MajorA>프론트엔드</MajorA>
            </Infos>
            <Line></Line>
            <Seats></Seats>
          </Info>
        </Box>
      </Body>
    </Wrapper>
  );
}

const Seats = styled.div`
  width: 330px;
  height: 230px;
  background-color: black;
`;

const Line = styled.div`
  width: 2px;
  height: 330px;
  display: flex;
  margin-left: 170px;
  margin-right: 170px;
  background-color: #787878;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameA = styled.div`
  margin-left: 80px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;
const NumberA = styled.div`
  margin-left: 80px;
  margin-top: 40px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;
const BirthdayA = styled.div`
  margin-left: 80px;
  margin-top: 40px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;
const MajorA = styled.div`
  margin-left: 80px;
  margin-top: 40px;
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.div`
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;
const Number = styled.div`
  margin-top: 40px;
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;
const Birthday = styled.div`
  margin-top: 40px;
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;
const Major = styled.div`
  margin-top: 40px;
  font-size: 20px;
  color: #787878;
  font-weight: bold;
`;

const StudentWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  margin-left: 70px;
  margin-top: 80px;
`;
const Logo = styled.img`
  width: 80px;
`;
const StudentName = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 89vh;
  background-color: #ffcf5e;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 1205px;
  height: 695px;
  border-radius: 50px;
`;

export default StudentDetail;
