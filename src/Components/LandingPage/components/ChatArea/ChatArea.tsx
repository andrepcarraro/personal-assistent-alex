import { useState } from "react";
import { InputArea } from "../InputArea/InputArea";
import { MessageBox } from "../MessageBox/MessageBox";
import * as Styled from "./ChatArea.styles";
import { MessageObjType } from "../../../../types/message.types";

export const ChatArea = () => {
  const [messages, setMessages] = useState<Array<MessageObjType>>([]);
  const [soundStatus, setSoundStatus] = useState(true);

  const setMessagesArray = (newMessage: MessageObjType) => {
    let messagesArray = messages.slice();
    messagesArray.push(newMessage);
    setMessages(messagesArray);
  };

  const handleSoundStatus = () => {
    setSoundStatus(!soundStatus);
  };

  return (
    <Styled.ChatArea>
      <Styled.ChatHeader>
        <Styled.SoundButton onClick={handleSoundStatus}>
          {soundStatus ? <Styled.SoundOnIcon /> : <Styled.SoundOffIcon />}
        </Styled.SoundButton>
      </Styled.ChatHeader>
      <Styled.ChatMessages>
        {messages.map((messageObj, index) => {
          return (
            <MessageBox
              key={"message_" + index}
              messageBoxSide={messageObj.side}
              messageBoxText={messageObj.text}
            />
          );
        })}
      </Styled.ChatMessages>
      <InputArea setChatMessages={setMessagesArray} soundStatus={soundStatus} />
    </Styled.ChatArea>
  );
};
