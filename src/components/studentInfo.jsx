import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./header";
import person from "../assets/person.png";

function StudentInfo() {
  return (
    <Wrapper>
      <Header></Header>
      <Body>
        <Students>
          <WrapperWrapper to="/StudentDetail">
            <StudentWrapper>
              <Profile>
                <Person src={person}></Person>
              </Profile>
              <Infos>
                <Name>1211이의진</Name>
                <Details>더보기</Details>
              </Infos>
            </StudentWrapper>
          </WrapperWrapper>
          <WrapperWrapper>
            <StudentWrapper>
              <Profile>
                <Person src={person}></Person>
              </Profile>
              <Infos>
                <Name>1211이의진</Name>
                <Details>더보기</Details>
              </Infos>
            </StudentWrapper>
          </WrapperWrapper>
          <WrapperWrapper>
            <StudentWrapper>
              <Profile>
                <Person src={person}></Person>
              </Profile>
              <Infos>
                <Name>1211이의진</Name>
                <Details>더보기</Details>
              </Infos>
            </StudentWrapper>
          </WrapperWrapper>
          <WrapperWrapper>
            <StudentWrapper>
              <Profile>
                <Person src={person}></Person>
              </Profile>
              <Infos>
                <Name>1211이의진</Name>
                <Details>더보기</Details>
              </Infos>
            </StudentWrapper>
          </WrapperWrapper>
          <WrapperWrapper>
            <StudentWrapper>
              <Profile>
                <Person src={person}></Person>
              </Profile>
              <Infos>
                <Name>1211이의진</Name>
                <Details>더보기</Details>
              </Infos>
            </StudentWrapper>
          </WrapperWrapper>
          <WrapperWrapper>
            <StudentWrapper>
              <Profile>
                <Person src={person}></Person>
              </Profile>
              <Infos>
                <Name>1211이의진</Name>
                <Details>더보기</Details>
              </Infos>
            </StudentWrapper>
          </WrapperWrapper>
          <WrapperWrapper>
            <StudentWrapper>
              <Profile>
                <Person src={person}></Person>
              </Profile>
              <Infos>
                <Name>1211이의진</Name>
                <Details>더보기</Details>
              </Infos>
            </StudentWrapper>
          </WrapperWrapper>
          <WrapperWrapper>
            <StudentWrapper>
              <Profile>
                <Person src={person}></Person>
              </Profile>
              <Infos>
                <Name>1211이의진</Name>
                <Details>더보기</Details>
              </Infos>
            </StudentWrapper>
          </WrapperWrapper>
          <WrapperWrapper>
            <StudentWrapper>
              <Profile>
                <Person src={person}></Person>
              </Profile>
              <Infos>
                <Name>1211이의진</Name>
                <Details>더보기</Details>
              </Infos>
            </StudentWrapper>
          </WrapperWrapper>
        </Students>
      </Body>
    </Wrapper>
  );
}

const WrapperWrapper = styled(Link)`
  width: 33%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const Students = styled.div`
  flex-flow: row wrap;
  width: 70vw;
  row-gap: 30px;
  display: flex;
  justify-content: space-between;
`;

const StudentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 54%;
  height: 95px;
  transition: 0.2s;
  &:hover {
    background-color: #ffc641;
  }
  cursor: pointer;
  border-radius: 10px;
`;

const Profile = styled.div`
  width: 75px;
  height: 75px;
  background-color: white;
  border-radius: 50%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Person = styled.img`
  width: 53px;
`;

const Name = styled.div`
  font-size: 25px;
  color: black;
`;

const Details = styled.div`
  color: #a3a3a3;
  margin-top: 2px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 17px;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 89vh;
  background-color: #ffcf5e;
`;

export default StudentInfo;
