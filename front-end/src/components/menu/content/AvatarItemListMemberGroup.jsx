import styled from 'styled-components';
import React, { useState } from 'react';
import { Avatar, Button } from 'antd';
import { textAbout, itemHover, border, textTitle } from '../../../utils/color';
import { ItemContent, ContentName, ContentAbout } from '../../../utils/Layout';
import axios from 'axios';
import { getToken } from '~/utils/function';
import { URL } from '~/utils/constant';

function AvatarItemListMemberGroup({ name, content, avatar, idFriend }) {
    // const updateStatus = async () => {
    //     await axios.post(`${URL}/api/friend-request/update-status`, {
    //         id: idFriend,
    //         status: 1,
    //     }, {
    //         headers: {
    //             Authorization: `Bearer ${getToken()}`,
    //             Accept: 'application/json',
    //         },
    //     })
    // }
    return (
        <Wrapper>
            <ItemContent>
                <Avatar size={48} src={avatar} />
            </ItemContent>
            <Content>
                <TitleContent>
                    <ContentName>{name}</ContentName>
                    <ContentAbout>{content}</ContentAbout>
                </TitleContent>
                <MoreContent>
                    <Button type='primary'>Đuổi ra</Button>
                </MoreContent>
            </Content>
        </Wrapper>
    );
}

export default AvatarItemListMemberGroup;
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
`;
const TitleContent = styled.div`
    width: 55%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`;

const MoreContent = styled.div`
    width: 45%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${textTitle};
    flex-direction: row;
`;
