import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Body>
      <Container>
        <Title>로그인</Title>
        <Wrapper>
          <LoginTitle>아이디</LoginTitle>
          <Input placeholder="아이디를 입력하세요.."></Input>
          <Line></Line>
        </Wrapper>
        <Empty></Empty>
        <Wrapper>
          <LoginTitle>비밀번호</LoginTitle>
          <Input type="password" placeholder="비밀번호를 입력하세요.."></Input>
          <Line></Line>
        </Wrapper>
        <AccountBox>
          <NoAccount>아직 계정이 없으신가요?</NoAccount>
          <SignUpButton to="/SignUp1">회원가입</SignUpButton>
        </AccountBox>
        <BtnWrapper>
          <LoginButton to="/Home">로그인</LoginButton>
        </BtnWrapper>
      </Container>
    </Body>
  );
}

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
  padding-bottom: 90px;
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
const LoginTitle = styled.div`
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
const Empty = styled.div`
  height: 80px;
`;
const NoAccount = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  color: #585858;
`;
const SignUpButton = styled(Link)`
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
  /* margin-top: 40px; */
  margin-right: 218px;
  gap: 5px;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: -80px; */
`;
const LoginButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffcf5e;
  border: none;
  width: 340px;
  height: 49px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
  cursor: pointer;
  margin-top: 150px;
  text-decoration: none;
  color: black;
`;

export default Login;
