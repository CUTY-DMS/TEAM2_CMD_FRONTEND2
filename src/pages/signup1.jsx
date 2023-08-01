import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  const handleSignupData = () => {
    var mUserId = document.getElementById("userId").value;
    var mUserPassword = document.getElementById("userPassword").value;

    var mState = {
      userId: mUserId,
      password: mUserPassword,
    };

    var url = `signup2?userId=${mUserId}&password=${mUserPassword}`;

    window.location.href = url;

    // navigate("http://localhost:3000/signup2", { replace: true });
    //var result = navigate("/SignUp2", { state: mState });
    // navigate("/SignUp2", {
    //   state: {
    //     userId: mUserId,
    //     password: mUserPassword,
    //   },
    // });
  };

  var url = "";

  return (
    <Body>
      <Container>
        <Title>회원가입</Title>
        <Wrapper>
          <SignTitle>아이디</SignTitle>
          <Input id="userId" placeholder="아이디를 입력하세요.."></Input>
          <Line></Line>
        </Wrapper>
        <Wrapper>
          <SignTitle>비밀번호</SignTitle>
          <Input
            id="userPassword"
            placeholder="비밀번호를 입력하세요.."
            type="password"
          ></Input>
          <Line></Line>
        </Wrapper>
        <Wrapper>
          <SignTitle>비밀번호 확인</SignTitle>
          <Input placeholder="비밀번호를 입력하세요.." type="password"></Input>
          <Line></Line>
        </Wrapper>
        <Wrapper>
          <SignTitle>가입코드</SignTitle>
          <Input placeholder="가입코드를 입력하세요.."></Input>
          <Line></Line>
        </Wrapper>
        <Wrapper></Wrapper>
        <BtnWrapper>
          <SignUpButton onClick={() => handleSignupData()}>다음</SignUpButton>
        </BtnWrapper>
        <AccountBox>
          <NoAccount>이미 계정이 있으신가요?</NoAccount>
          <LoginButton to="/">로그인</LoginButton>
        </AccountBox>
      </Container>
    </Body>
  );
}
// function sampleApi() {
//   axios.post("url", {
//     "userId" : document.getElementById('userId'),
//     "password" : document.getElementById('userPassword'),
//     "username" : "String",
//     "userEmail" : "String",
//     "grader" : Long,
//     "schoolClass" : Long,
//     "number" : Long,
//     "majorType" : "MajorType",
//     "club" : "String",
//     "birth" : "Date"
//   })
//   .then(function (response) {
//       // response
//   }).catch(function (error) {
//       // 오류발생시 실행
//   }).then(function() {
//       // 항상 실행
//   });

//   // async await 함수를 사용할 때,

//   try {
//   const data = await axios.post("url");
//   } catch {
//   // 오류 발생시 실행
//   }
// }

export default SignUp;

const Body = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0px;
  background-color: #ffcf5e;
`;
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 795px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: white;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 70px;
  font-size: 35px;
  font-weight: 1000;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 30px;
  width: 418px;
  height: 69px;
`;
const SignTitle = styled.div`
  padding-bottom: 15px;
  padding-top: 20px;
  font-weight: 700;
  font-size: 20px;
  color: #585858;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

const Line = styled.div`
  width: 380px;
  margin-top: 5px;
  border-top: 2px solid #585858;
`;

const NoAccount = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  color: #585858;
`;
const LoginButton = styled(Link)`
  text-decoration-line: none;
  background-color: white;
  border: none;
  color: black;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
`;

const AccountBox = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  gap: 5px;
`;
const SignUpButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration-line: none;
  color: black;
  background-color: #ffcf5e;
  border: none;
  width: 340px;
  height: 49px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  /* padding: 10px; */
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
  cursor: pointer;
  margin-top: 30px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -80px;
`;
