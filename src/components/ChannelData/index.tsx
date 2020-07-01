import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
            {Array.from(Array(15).keys()).map((n) => (
                <ChannelMessage 
                    author="Alex Eduardo"
                    date="20/06/2020"
                    content="Hoje eu terminei o projeto"
                />
            ))}

                <ChannelMessage 
                    author="BOT"
                    date="30/06/2020"
                    content={
                        <>
                        <Mention>@Alex Eduardo</Mention>, Finalmente
                        </>
                    }
                    hasMention
                    isBot
                />
                <ChannelMessage 
                    author="BOT"
                    date="30/06/2020"
                    content={
                        <>
                        <Mention>@Alex Eduardo</Mention>, Finalmente
                        </>
                    }
                    hasMention
                    isBot
                />
                
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;