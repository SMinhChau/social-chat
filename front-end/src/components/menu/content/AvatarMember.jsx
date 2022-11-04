import styled from 'styled-components';
import React, { useState } from 'react';
import { textAbout, itemHover, border, textTitle } from '../../../utils/color';
import { ItemContent, ContentName, ContentAbout } from '../../../utils/Layout';
import { AvatarDefault, URL } from '~/utils/constant';
import axios from 'axios';
import { getToken } from '~/utils/function';
import { UserAddOutlined } from '@ant-design/icons';
import { Button,Avatar } from "antd";


function AvatarAddFriend({ name, content, avatar, curentUser, id }) {
    return (
        <Wrapper>
            <ItemContent>
                <Avatar size={48} src={avatar || AvatarDefault} />
            </ItemContent>
            <Content>
                <TitleContent>
                    <ContentName>{name}</ContentName>
                </TitleContent>
                <MoreContent>
                    <Button type='default'>Đuổi ra</Button>
                </MoreContent>
            </Content>
        </Wrapper>
    );
}

export default AvatarAddFriend;
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0 16px;
    height: 72px;
    &:hover {
        cursor: pointer;
        transition: 0.5s ease;
        background-color: ${itemHover};
    }
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;
const TitleContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;
const MoreContent = styled.div`
    width: 45%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${textTitle};
    flex-direction: row;
`;
