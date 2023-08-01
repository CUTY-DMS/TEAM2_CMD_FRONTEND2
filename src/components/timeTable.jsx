import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";

function TimeTableComp() {
  return (
    <Wrapper>
      <Header></Header>
      <Body>
        <MainPage>
          <Date>2023년 7월 2주차</Date>
          <TimeTableWrapper>
            <TimeTableBox>
              <Week>월</Week>
              <Timetables>국어</Timetables>
              <Timetables>수학</Timetables>
              <Timetables>영어</Timetables>
              <Timetables>사회</Timetables>
              <Timetables>과학</Timetables>
              <Timetables>프로그래밍</Timetables>
              <Timetables>컴퓨터구조</Timetables>
            </TimeTableBox>
            <TimeTableBox>
              <Week>화</Week>
              <Timetables>국어</Timetables>
              <Timetables>수학</Timetables>
              <Timetables>영어</Timetables>
              <Timetables>사회</Timetables>
              <Timetables>과학</Timetables>
              <Timetables>프로그래밍</Timetables>
              <Timetables>컴퓨터구조</Timetables>
            </TimeTableBox>
            <TimeTableBox>
              <Week>수</Week>
              <Timetables>국어</Timetables>
              <Timetables>수학</Timetables>
              <Timetables>영어</Timetables>
              <Timetables>사회</Timetables>
              <Timetables>과학</Timetables>
              <Timetables>프로그래밍</Timetables>
              <Timetables>컴퓨터구조</Timetables>
            </TimeTableBox>
            <TimeTableBox>
              <Week>목</Week>
              <Timetables>국어</Timetables>
              <Timetables>수학</Timetables>
              <Timetables>영어</Timetables>
              <Timetables>사회</Timetables>
              <Timetables>과학</Timetables>
              <Timetables>프로그래밍</Timetables>
              <Timetables>컴퓨터구조</Timetables>
            </TimeTableBox>
            <TimeTableBox>
              <Week>금</Week>
              <Timetables>국어</Timetables>
              <Timetables>수학</Timetables>
              <Timetables>영어</Timetables>
              <Timetables>사회</Timetables>
              <Timetables>과학</Timetables>
              <Timetables>프로그래밍</Timetables>
              <Timetables>컴퓨터구조</Timetables>
            </TimeTableBox>
          </TimeTableWrapper>
        </MainPage>
      </Body>
    </Wrapper>
  );
}

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Date = styled.div`
  display: flex;
  /* justify-content: center; */
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 47px;
`;
const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1750px;
  justify-content: space-between;
`;
const TimeTableBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 310px;
  height: 610px;
  background-color: white;
  margin-bottom: 50px;
  border-radius: 10px;
`;
const Timetables = styled.div`
  font-size: 30px;
  margin: 9px;
`;
const Week = styled.div`
  margin-bottom: 20px;
  font-size: 33px;
  font-weight: bold;
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

export default TimeTableComp;
