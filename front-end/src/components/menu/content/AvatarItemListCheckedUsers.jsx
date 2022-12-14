import styled from 'styled-components';
import React, { useState } from 'react';
import { Avatar, Menu, message, Radio } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { textAbout, itemHover, border, textTitle } from '../../../utils/color';
import { ItemContent, ContentName, ContentAbout } from '../../../utils/Layout';
import { AvatarDefault, URL } from '~/utils/constant';
import { UserAddOutlined } from '@ant-design/icons';
import axios from 'axios';
import { getToken } from '~/utils/function';

function AvatarItemListCheckedUsers({ name, content, avatar, curentUser, id }) {
    return (
        <Wrapper>
            <ItemContent>
                <Avatar size={48} src={avatar || AvatarDefault} />
            </ItemContent>
            <Content>
                <TitleContent>
                    <ContentName>{name}</ContentName>
                </TitleContent>
            </Content>

        </Wrapper>
    );
}

export default AvatarItemListCheckedUsers;

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 434px;
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
`;
const TitleContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;