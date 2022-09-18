import React from 'react'
import styled from 'styled-components'
import {EditOutlined,TeamOutlined,IdcardOutlined,StopOutlined,DeleteOutlined,WarningOutlined} from '@ant-design/icons'
import { bgColor } from '~/utils/color'
import './InfoModal.css'


function InfoModal( {closeModal} ) {
  return (
    <ModalBackground>
      <TitleModal>
          <NameModal>Thông tin tài khoản</NameModal>
          <CloseBtn onClick={() => closeModal(false)}> X</CloseBtn>
      </TitleModal >

      <CoverImg src='https://icdn.dantri.com.vn/thumb_w/640/2017/12-1510967806439.jpg'/>

      <CoverComponent>
        <AvatarImg src='https://icdn.dantri.com.vn/thumb_w/640/2017/12-1510967806439.jpg'/>
      </CoverComponent>

      <NameComponent>
        <Name>Your Name</Name>
        <EditNameBtn>
          <EditOutlined style={{fontSize: '15px'}}/>
        </EditNameBtn>
      </NameComponent>

      <MessComponent>
        <MessBtn>Nhắn tin</MessBtn>
      </MessComponent>

      <BioComponent>
        <TitleBio>Thông tin cá nhân</TitleBio>
        <TitleContent>Bio</TitleContent><Content>Cường đẹp trai</Content>
        <TitleContent>Điện thoại</TitleContent><Content>0343688xxx</Content>
        <TitleContent>Giới tính</TitleContent><Content>Nam</Content>
        <TitleContent>Ngày Sinh</TitleContent><Content>02/11/2001</Content>
      </BioComponent>

      <OptionComponent>
        <TeamOutlined style={{fontSize: '17px', paddingLeft: '7px', color:'#868686'}}/>
        <OptionName>Nhóm chung (0) </OptionName>
      </OptionComponent>

      <OptionComponent>
        <IdcardOutlined style={{fontSize: '17px', paddingLeft: '7px', color:'#868686'}}/>
        <OptionName>Chia sẽ danh thiếp </OptionName>
      </OptionComponent>

      <OptionComponent>
        <StopOutlined style={{fontSize: '17px', paddingLeft: '7px', color:'#868686'}}/>
        <OptionName>Chặn tin nhắn </OptionName>
      </OptionComponent>

      <OptionComponent>
        <WarningOutlined style={{fontSize: '17px', paddingLeft: '7px', color:'#868686'}}/>
        <OptionName>Báo xấu </OptionName>
      </OptionComponent>

      <OptionComponent>
        <DeleteOutlined style={{fontSize: '17px', paddingLeft: '7px', color:'#868686'}}/>
        <OptionName>Xóa khỏi danh sách bạn bè </OptionName>
      </OptionComponent>
    </ModalBackground>
  )
}

export default InfoModal
const ModalBackground = styled.div`
  width: 342px;
  height: 700px;
  background-color: #ffffff;
  position: fixed;
  display: flex;
  flex-direction: column;
`;

const TitleModal = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NameModal = styled.div`
  font-size: 15px;
  font-weight: bolder;
  padding-left: 5px;
`;

const CloseBtn = styled.button`
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  width: 40px;
  height: 40px;
  background-color: red;
  transition: all 300ms ease-in-out;
  &:hover{
    background-color: #00b7ff;
  }
`;

const CoverComponent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80px;
    margin-top: -35px;
`;

const CoverImg = styled.img`
  width: 100%;
  height: 130px;
`;

const AvatarImg = styled.img`
    width: 72px;
    height: 72px;
    border-radius: 50% 50% 50% 50%;
`;

const NameComponent = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Name = styled.div`
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    height: 100%;
    width: auto;
`;

const EditNameBtn = styled.button`
    height: 24px;
    width: 24px;
    border-radius: 50% 50% 50% 50%;
    border: none;
    margin-left: 10px;
    background-color: #E1E4EA;
    &:hover {
        background-color: #d5d5d6;
    }
`;

const MessComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75px;
    border-Bottom: 8px solid #f1f1f1;
`;

const MessBtn = styled.button`
  height: 30px;
  width: 140px;
  border: none;
  font-weight: bold;
  border-radius: 3px 3px 3px 3px;
  &:hover{
    background-color: #e4e4e4;
  }
`;

const BioComponent = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    border-Bottom: 8px solid #f1f1f1;
`;

const TitleBio = styled.div`
  width: 100%;
  height: 30px;
  padding: 5px 5px;
  font-weight: bold;
  text-align: left;
  padding-left: 10px;
`;

const TitleContent = styled.div`
  width: 35%;
  height: 30px;
  text-align: left;
  padding-left: 10px;
  color: #838383;
`;

const Content = styled.div`
  width: 61%;
  height: 30px;
  text-align: left;
`;

const OptionComponent = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${bgColor};
  border: none;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover{
    background-color: #e4e4e4;
  }
`;

const OptionName = styled.div`
  font-size: 14px;
  padding-left: 7px;
`;

// const Opt = styled.div`
//   height: 100px;
//   width: 100%;
//   border: 1px solid #000;
// `;