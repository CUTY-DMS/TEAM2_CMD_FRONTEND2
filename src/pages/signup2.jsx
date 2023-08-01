import React from "react";
import styled from "styled-components";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import ArrowImage from "../assets/downward-arrow.png";

function Signup2() {
  const [searchParams] = useSearchParams();
  var userId = searchParams.get("userId");
  alert(userId);

  return (
    <Body>
      <Container>
        <Title>회원가입</Title>
        <Wrapper>
          <Select name="학년">
            <Option disabled selected>
              학년
            </Option>
            <Option value="">1</Option>
            <Option value="">2</Option>
            <Option value="">3</Option>
          </Select>
          <Selects></Selects>
          <Select name="반">
            <Option disabled selected>
              반
            </Option>
            <Option value="">1</Option>
            <Option value="">2</Option>
            <Option value="">3</Option>
            <Option value="">4</Option>
          </Select>
          <Selects></Selects>
          <Select name="번호">
            <Option disabled selected>
              번호
            </Option>
            <Option value="">1</Option>
            <Option value="">2</Option>
            <Option value="">3</Option>
            <Option value="">4</Option>
            <Option value="">5</Option>
            <Option value="">6</Option>
            <Option value="">7</Option>
            <Option value="">8</Option>
            <Option value="">9</Option>
            <Option value="">10</Option>
            <Option value="">11</Option>
            <Option value="">12</Option>
            <Option value="">13</Option>
            <Option value="">14</Option>
            <Option value="">15</Option>
            <Option value="">16</Option>
          </Select>
        </Wrapper>
        <BtnWrapper>
          <SignUpButton to="/">회원가입</SignUpButton>
        </BtnWrapper>
        <AccountBox>
          <NoAccount>이미 계정이 있으신가요?</NoAccount>
          <LoginButton to="/">로그인</LoginButton>
        </AccountBox>
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
  padding-bottom: 80px;
  font-size: 35px;
  font-weight: 1000;
`;
const Wrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 185px;
`;
const Selects = styled.div`
  height: 40px;
`;

const Select = styled.select`
  height: 50px;
  width: 335px;
  border-radius: 8px;
  font-size: 17px;
  appearance: none;
  background-image: url(${ArrowImage});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 68px;
  padding-left: 20px;
  /* appearance: none; */
`;
const Option = styled.option``;
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
  background-color: #ffcf5e;
  border: none;
  width: 340px;
  height: 49px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0px 4px 4px 0px rgb(0, 0, 0, 0.2);
  cursor: pointer;
  margin-top: 30px;
  color: black;

  text-decoration: none;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -80px;
`;

export default Signup2;
