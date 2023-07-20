import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, useMemo, useState } from 'react';
import {
  ChatTextAreaContainer,
  ImageContainer,
  SendButton,
  TextArea,
  TextAreaContainer,
} from './ChatTextArea.styled';
import React from 'react';

export const ChatTextArea = React.memo(function ChatTextArea({
  websocket,
}: {
  websocket: WebSocket;
}) {
  const [text, setText] = useState<string>('');
  const handleClickSendMessage = () => {
    if (!text) {
      return;
    }

    if (websocket) {
      console.log(2);
      websocket.send(text);
    }

    setText('');
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClickSendMessage();
    }
  };

  const handleonChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <ChatTextAreaContainer>
      <ImageContainer src="https://cdn-icons-png.flaticon.com/512/8069/8069741.png"></ImageContainer>
      <TextAreaContainer>
        <TextArea
          value={text}
          onChange={handleonChange}
          onKeyDown={handleKeyDown}
        />
        <SendButton onClick={handleClickSendMessage}>
          <FontAwesomeIcon icon={faLocationArrow} size="1x" color="white" />
        </SendButton>
      </TextAreaContainer>
    </ChatTextAreaContainer>
  );
});
ChatTextArea.displayName = 'ChatTextArea';
