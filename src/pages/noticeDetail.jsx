import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import loudSpeaker from "../assets/loudSpeacker.png";

function NoticeDetail() {
  return (
    <Wrapper>
      <Header></Header>
      <Body>
        <Box>
          <Title placeholder="제목"></Title>
          <Line></Line>
          <Contents placeholder="내용을 입력하세요.."></Contents>
        </Box>
        <CompleteBtn>
          <CompleteWrapper>
            <Img src={loudSpeaker}></Img>
            <Complete>완료</Complete>
          </CompleteWrapper>
        </CompleteBtn>
      </Body>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  padding-left: 45px;
  padding-right: 45px;
  margin-bottom: 30px;
`;

const Title = styled.input`
  font-size: 30px;
  margin-top: 40px;
  /* margin-left: 38px; */
  border: none;
  outline: none;
  &::placeholder {
    color: black; /* Placeholder 색상을 변경합니다. */
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1px;
  background-color: #a3a3a3;
  /* margin-left: 38px; */
  margin-top: 13px;
`;

const Contents = styled.textarea`
  margin-top: 15px;
  /* margin-left: 38px; */
  font-size: 17px;
  border: none;
  outline: none;
  width: 100%;
  height: 80%;
  resize: none;
  font-family: sans-serif;
`;

const CompleteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 15px;
`;

const CompleteBtn = styled.button`
  width: 120px;
  height: 37px;
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  cursor: pointer;
  background-color: white;
  border: none;
  border-radius: 10px;
  margin-left: 1175px;
`;
const Img = styled.img`
  width: 30px;
`;
const Complete = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default NoticeDetail;
