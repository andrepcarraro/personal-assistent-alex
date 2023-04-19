import { useState } from "react";
import { InputArea } from "../InputArea/InputArea";
import { MessageBox } from "../MessageBox/MessageBox";
import * as Styled from "./ChatArea.styles";
import { MessageObjType } from "../../../../types/message.types";

export const ChatArea = () => {
  const [messages, setMessages] = useState<Array<MessageObjType>>([]);

  const setMessagesArray = (newMessage: MessageObjType) => {
    let messagesArray = messages.slice();
    messagesArray.push(newMessage);
    setMessages(messagesArray);
  };

  return (
    <Styled.ChatArea>
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
      <InputArea messages={messages} setMessages={setMessagesArray} />
    </Styled.ChatArea>
  );
};
