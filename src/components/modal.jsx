import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Modal() {
  return (
    <ModalWrapper id="logoutModal">
      <ModalBox>
        <Msg>로그아웃 하시겠습니까?</Msg>
        <Answer>
          <Yes to="/">네</Yes>
          <No onClick={cancelModal}>아니요</No>
        </Answer>
      </ModalBox>
    </ModalWrapper>
  );
}

function cancelModal() {
  document.getElementById("logoutModal").style.visibility = "hidden";
}

const Answer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 70px;
`;
const Yes = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 170px;
  height: 47px;
  font-size: 25px;
  border-radius: 30px;
  background-color: #fa6060;
  border: none;
  color: white;
  font-weight: bold;
  margin-right: 25px;
  cursor: pointer;
  &:hover {
    background-color: #fb4a4a;
    transition: 0.3s;
  }
`;
const No = styled.button`
  width: 170px;
  height: 47px;
  font-size: 25px;
  border-radius: 30px;
  background-color: #3cee1f;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #1cd400;
  }
`;

const Msg = styled.div`
  /* margin-top: 30px; */
  font-size: 26px;
  font-weight: bold;
`;

const ModalWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
`;

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 450px;
  height: 210px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 1px 5px 0px #797979;
`;

export default Modal;
