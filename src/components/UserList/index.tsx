import React from 'react';

import { Container, Role, User, Avatar } from './styles'

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickname="Alex Eduardo" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />
            <UserRow nickname="Nome" />

            <Role>Offline - 2</Role>
            <UserRow nickname="Gustavo Barros" isBot/>
            <UserRow nickname="NomeBot" isBot/>
            <UserRow nickname="NomeBot" isBot/>
            <UserRow nickname="NomeBot" isBot/>
            <UserRow nickname="NomeBot" isBot/>
        </Container>
    )
};

export default UserList;