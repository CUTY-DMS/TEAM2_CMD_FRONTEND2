import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

var isIdDuplChecked = false;
var isPwDoubleChecked = false;

function checkDupl() {
  var mUserId = document.getElementById("userId").value;
  var url = `/userId?userId=${mUserId}`;
  url = "https://my-json-server.typicode.com/typicode/demo/posts";
  axios.get(url).then(function (response) {
    if (response.status === 200) {
      alert("사용 가능한 ID 입니다");
      isIdDuplChecked = true;
    } else if (response.status === 403) {
      alert("이미 사용중인 ID 입니다");
      isIdDuplChecked = false;
    }
  });
}

window.onload = function () {};

function PwCheck(e) {
  var pwInputValue = document.getElementById("userPassword").value;
  var pwDoubleInputValue = e.target.value;

  var passwordCheckResult = document.getElementById("passwordCheckResult");

  if (pwInputValue !== pwDoubleInputValue) {
    passwordCheckResult.innerHTML = "비밀번호가 일치하지 않습니다.";
    passwordCheckResult.style.color = "red";
    isPwDoubleChecked = false;
  } else if (pwInputValue === pwDoubleInputValue) {
    passwordCheckResult.innerHTML = "비밀번호가 일치합니다.";
    passwordCheckResult.style.color = "#00c700";
    isPwDoubleChecked = true;
  }
}
function SignUp() {
  const handleSignupData = () => {
    var mUserId = document.getElementById("userId").value;
    var mUserPassword = document.getElementById("userPassword").value;
    var url = `signup2?userId=${mUserId}&password=${mUserPassword}`;

    if (!isIdDuplChecked) {
      alert("ID 중복체크를 진행해주세요");
    } else if (!isPwDoubleChecked) {
      alert("비밀번호 확인을 진행해주세요");
    } else {
      window.location.href = url;
    }
  };

  return (
    <Body>
      <Container>
        <Title>회원가입</Title>
        <Wrapper>
          <SignTitle>아이디</SignTitle>
          <InputWrapper>
            <Input id="userId" placeholder="아이디를 입력하세요.."></Input>
            <Check onClick={checkDupl}>*중복 확인</Check>
          </InputWrapper>
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
          <Input
            onInput={PwCheck}
            id="userPasswordCheck"
            placeholder="비밀번호를 입력하세요.."
            type="password"
          ></Input>
          <Line></Line>
          <PasswordCheck id="passwordCheckResult"></PasswordCheck>
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

export default SignUp;

const PasswordCheck = styled.div`
  margin-top: 5px;
  font-size: 13px;
  color: #00c700;
`;

const Check = styled.button`
  width: 100px;
  margin-right: 38px;
  border: none;
  background-color: white;
  cursor: pointer;
  color: red;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

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
