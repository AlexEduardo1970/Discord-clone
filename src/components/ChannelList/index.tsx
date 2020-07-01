import React from 'react';

import  ChannelButton  from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles'

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="chat-livre" />   
            <ChannelButton channelName="chat-1" />   
            <ChannelButton channelName="chat-2" />   
            <ChannelButton channelName="chat-3" />   
            <ChannelButton channelName="chat-4" />
             
        </Container>
    )
};

export default ChannelList;
