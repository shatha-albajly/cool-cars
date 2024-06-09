import React, { useState } from 'react';
import styled from 'styled-components';
import ChatWindow from './ChatWindow';

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const questions = [
        'Is it still available?',
        'What is the fuel type?',
        'How can we assist you?',
    ];

    const handleQuestionClick = (questionText) => {
        setMessages([...messages, { questionText }]);
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <ChatBotContainer>
            {!isOpen && <ChatToggleButton onClick={toggleChat}>Chat with us</ChatToggleButton>}
            {isOpen && (
                <ChatPopup>
                    <ChatHeader>
                        <ChatTitle>Chat with us</ChatTitle>
                        <CloseButton onClick={toggleChat}>×</CloseButton>
                    </ChatHeader>
                    <ChatContent>
                        {messages.map((msg, index) => (
                            <Message key={index}>
                                <UserMessage>{msg.questionText}</UserMessage>
                            </Message>
                        ))}
                        <ChatWindow questions={questions} onQuestionClick={handleQuestionClick} />
                    </ChatContent>
                    <ChatFooter>
                        <FooterText>Type your message...</FooterText>
                    </ChatFooter>
                </ChatPopup>
            )}
        </ChatBotContainer>
    );
};

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatToggleButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ChatPopup = styled.div`
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ChatHeader = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const ChatContent = styled.div`
  padding: 10px;
  flex: 1;
  overflow-y: auto;
`;

const ChatFooter = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
`;

const FooterText = styled.div`
  color: #888;
  font-size: 14px;
`;

const Message = styled.div`
  margin-bottom: 10px;
`;

const UserMessage = styled.div`
  background-color: #e1ffc7;
  padding: 5px 10px;
  border-radius: 5px;
  align-self: flex-end;
  max-width: 70%;
`;

export default Chat;
