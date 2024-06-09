import React from 'react';
import styled from 'styled-components';

const ChatWindow = ({ questions, onQuestionClick }) => {
  return (
    <ChatContainer>
      {questions.map((question, index) => (
        <Question key={index}>
          <QuestionText onClick={() => onQuestionClick(question)}>{question}</QuestionText>
        </Question>
      ))}
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 40px;
`;

const Question = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const QuestionText = styled.div`
  font-weight: bold;
`;

export default ChatWindow;
