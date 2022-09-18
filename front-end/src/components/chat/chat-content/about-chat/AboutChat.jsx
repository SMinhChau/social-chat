import styled from 'styled-components';
import React from 'react';
import { bgColor, border } from '~/utils/color';
import { DeleteOutlined,WarningOutlined,EyeInvisibleOutlined,MinusCircleOutlined,UnlockOutlined,EditOutlined,
    TeamOutlined, BellOutlined, PushpinOutlined, ClockCircleOutlined } from '@ant-design/icons';
import {Collapse, Typography } from 'antd';
import InfoModal from '~/components/modal/InfoModal';
import { useState } from "react";
import '../../../modal/InfoModal.css'


function AboutChat() {
    const [openModal, setOpenModal] = useState(false);

 return (
    
    <Wrapper>
        <HeaderAbout>
            <h4>THÔNG TIN CHUNG</h4>
        </HeaderAbout>

        <InfoComponent>
                <ImgComponent onClick={ () => {setOpenModal(true)}}>
                    <Avatar src='https://icdn.dantri.com.vn/thumb_w/640/2017/12-1510967806439.jpg' />
                </ImgComponent>


            <NameComponent>
                <Name>Your Name</Name>
                <EditNameBtn>
                    <EditOutlined style={{fontSize: '15px'}}/>
                </EditNameBtn>
            </NameComponent>

            <OptComponent>
                <BoxOpt><OptButton><BellOutlined style={{fontSize: '17px'}}/></OptButton></BoxOpt>
                <BoxOpt><OptButton><PushpinOutlined style={{fontSize: '17px'}}/></OptButton></BoxOpt>
                <BoxOpt><OptButton><TeamOutlined style={{fontSize: '17px'}}/></OptButton></BoxOpt>
                <BoxOpt>Tắt thông báo</BoxOpt>
                <BoxOpt>Bỏ ghim hội thoại</BoxOpt>
                <BoxOpt>Tạo nhóm trò chuyện</BoxOpt>
            </OptComponent>
        </InfoComponent>
        
        <ReminderBtn>
            <ClockCircleOutlined style={{ fontSize: '20px', marginLeft:'5px'}}/>
            <ReminderName>Danh sách nhắc hẹn</ReminderName>
        </ReminderBtn>

        <Collapse style={{borderBottom: '8px solid #f1f1f1'}}>
            <Collapse.Panel header='Ảnh/Video' style={{backgroundColor:'#fff', fontWeight:'bold', textAlign:'left'}}>
                <Typography.Text style={{width: '100%', height:'100px', textAlign:'center'}}> </Typography.Text>
            </Collapse.Panel>
        </Collapse>
        
        <Collapse style={{borderBottom: '8px solid #f1f1f1'}}>
            <Collapse.Panel header='Files' style={{backgroundColor:'#fff', fontWeight:'bold', textAlign:'left'}}>
                <Typography.Text style={{width: '100%', height:'100px', textAlign:'center'}}> </Typography.Text>
            </Collapse.Panel>
        </Collapse>

        <Collapse style={{borderBottom: '8px solid #f1f1f1'}}>
            <Collapse.Panel header='Links' style={{backgroundColor:'#fff', fontWeight:'bold', textAlign:'left'}}>
                <Typography.Text style={{width: '100%', height:'100px', textAlign:'center'}}> </Typography.Text>
            </Collapse.Panel>
        </Collapse>

        <Collapse style={{borderBottom: '8px solid #e2e2e2'}}>
            <Collapse.Panel header='Thiết lập bảo mật' style={{backgroundColor:'#fff', fontWeight:'bold', textAlign:'left'}}>
                <Typography.Text style={{width: '100%', height:'100%'}}>
                    <SettingBtn style={{borderBottom:'1px solid #f1f1f1'}}>
                        <UnlockOutlined  style={{ fontSize: '20px'}}/>
                        <SettingName>Mã hóa đầu cuối</SettingName>
                    </SettingBtn>
                </Typography.Text>

                <Typography.Text style={{width: '100%', height:'100%'}}>
                    <SettingBtn style={{borderBottom:'1px solid #f1f1f1'}}>
                        <MinusCircleOutlined  style={{ fontSize: '20px'}}/>
                        <SettingName>Tin nhắn tự xóa</SettingName>
                    </SettingBtn>
                </Typography.Text>

                <Typography.Text style={{width: '100%', height:'100%'}}>
                    <SettingBtn style={{borderBottom:'1px solid #f1f1f1'}}>
                        <EyeInvisibleOutlined  style={{ fontSize: '20px'}}/>
                        <SettingName>Ẩn trò chuyện</SettingName>
                    </SettingBtn>
                </Typography.Text>

                <Typography.Text style={{width: '100%', height:'100%'}}>
                    <SettingBtn style={{borderBottom:'1px solid #f1f1f1'}}>
                        <WarningOutlined  style={{ fontSize: '20px'}}/>
                        <SettingName>Báo xấu</SettingName>
                    </SettingBtn>
                </Typography.Text>

                <Typography.Text style={{width: '340px', height:'56px', color:'red'}}>
                    <SettingBtn>
                        <DeleteOutlined  style={{fontSize: '20px'}}/>
                        <SettingName>Xóa lịch sử trò chuyện</SettingName>
                    </SettingBtn>
                </Typography.Text>
            </Collapse.Panel>
        </Collapse>
        {openModal && <InfoModal closeModal={setOpenModal}/>}
    </Wrapper>
 );
}

export default AboutChat;

const Wrapper = styled.nav`
    display: flex;
    flex-direction: column;
    width: 343px;
    height: 100%;
    border-left: 1px solid ${border};
    overflow: auto;
`;

const HeaderAbout = styled.div`
    border-bottom: 1px solid ${border};
    width: 100%;
    height: 68px;
    font-size: 18px;
    font-weight: bold;
    padding-top:16px;
    padding-bottom:14px;
`;

const InfoComponent = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 8px solid #f1f1f1;
    width: 100%;
    height: 240px;
    flex-direction: column;
`;

const ImgComponent = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 65px;
    margin-top: 15px;
    border: none;
    background-color: ${bgColor};
`;

const Avatar = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50% 50% 50% 50%;
`;

const NameComponent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30px;
    margin-top: 7px;
`;

const Name = styled.div`
    font-size: 16px;
    font-weight: bold;
    height: 100%;
    width: 100px;
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

const OptComponent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    width: 270px;
    height: 80px;
    margin-top: 20px;
`;

const BoxOpt = styled.div`
    width: 70px;
    height: 35px;
    font-size: 12px;
    padding: 0;
    margin: 0;
`;

const OptButton = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 50% 50% 50% 50%;
    border: none;
    background-color: #E1E4EA;
    &:hover {
        background-color: #d5d5d6;
    }
`;

const ReminderBtn = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 8px solid #f1f1f1;
    background-color: ${bgColor};
    &:hover{
        background-color: #f0f0f0;
    }
`;

const ReminderName = styled.div`
    font-size: 14px;
    margin-left: 8px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SettingBtn = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    border: none;
    background-color: ${bgColor};
    &:hover{
        background-color: #f0f0f0;
    }
`;

const SettingName = styled.div`
    font-size: 14px;
    margin-left: 7px;
`;
