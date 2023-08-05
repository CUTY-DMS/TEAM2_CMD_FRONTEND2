import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import Plus from "../assets/plus.png";

function NoticeComp() {
  return (
    <Background>
      <Wrapper>
        <Header></Header>
        <Body>
          <Notice>
            <WritingBtn to="/NoticeDetail">
              <PlusBtn src={Plus}></PlusBtn>
              <Writing>글쓰기</Writing>
            </WritingBtn>
            <NoticeWrapper>
              <Notices>
                <NoticeContents>
                  <NoticeTitle>대충 제목 들어갈 부분</NoticeTitle>
                  <NoticeInfo>2022.08.22 오전 12:48</NoticeInfo>
                </NoticeContents>
              </Notices>
              <Notices>
                <NoticeContents>
                  <NoticeTitle>대충 제목 들어갈 부분</NoticeTitle>
                  <NoticeInfo>2022.08.22 오전 12:48</NoticeInfo>
                </NoticeContents>
              </Notices>
              <Notices>
                <NoticeContents>
                  <NoticeTitle>대충 제목 들어갈 부분</NoticeTitle>
                  <NoticeInfo>2022.08.22 오전 12:48</NoticeInfo>
                </NoticeContents>
              </Notices>
              <Notices>
                <NoticeContents>
                  <NoticeTitle>대충 제목 들어갈 부분</NoticeTitle>
                  <NoticeInfo>2022.08.22 오전 12:48</NoticeInfo>
                </NoticeContents>
              </Notices>
              <Notices>
                <NoticeContents>
                  <NoticeTitle>대충 제목 들어갈 부분</NoticeTitle>
                  <NoticeInfo>2022.08.22 오전 12:48</NoticeInfo>
                </NoticeContents>
              </Notices>
            </NoticeWrapper>
          </Notice>
        </Body>
      </Wrapper>
    </Background>
  );
}

const Background = styled.body`
  background-color: #ffcf5e;
`;

const Notice = styled.div`
  display: flex;
  flex-direction: column;
`;
const WritingBtn = styled(Link)`
  display: flex;
  flex-direction: row;
  background-color: #ffcf5e;
  align-items: center;
  border: none;
  cursor: pointer;
  margin-left: auto;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
`;
const PlusBtn = styled.img`
  display: flex;
  width: 22px;
  margin-right: 10px;
  background-color: #ffcf5e;
`;
const Writing = styled.div`
  background-color: #ffcf5e;
  border: none;
  font-size: 28px;
`;
const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -250px;
  /* overflow-y: auto;
  margin-bottom: -150px; */
  gap: 40px;
`;
const Notices = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px 20px 20px 20px;
  width: 1180px;
  height: 132px;
  background-color: white;
  justify-content: center;
  cursor: pointer;
`;

const NoticeContents = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
`;

const NoticeTitle = styled.div`
  font-size: 30px;
`;

const NoticeInfo = styled.div`
  color: #4e4e4e;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 89vh;
  background-color: #ffcf5e;
`;
export default NoticeComp;
