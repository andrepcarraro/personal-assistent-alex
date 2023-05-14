import { useEffect, useRef, useState } from "react";
import { InputArea } from "../InputArea/InputArea";
import { MessageBox } from "../MessageBox/MessageBox";
import * as Styled from "./ChatArea.styles";
import { MessageObjType } from "../../../../types/message.types";
import { speakAbort } from "../../../../Utils/VoiceSpeaker/VoiceSpeaker";

export const ChatArea = () => {
  const [messages, setMessages] = useState<Array<MessageObjType>>([]);
  const [soundStatus, setSoundStatus] = useState(true);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      let current = divRef.current;
      current.scrollTo({
        left: 0,
        top: current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [divRef.current?.scrollHeight]);

  const setMessagesArray = (newMessage: MessageObjType) => {
    let messagesArray = messages.slice();
    messagesArray.push(newMessage);
    setMessages(messagesArray);
  };

  const handleSoundStatus = () => {
    if (soundStatus) speakAbort();

    setSoundStatus(!soundStatus);
  };

  return (
    <Styled.ChatArea>
      <Styled.ChatHeader>
        <Styled.SoundButton onClick={handleSoundStatus}>
          {soundStatus ? <Styled.SoundOnIcon /> : <Styled.SoundOffIcon />}
        </Styled.SoundButton>
      </Styled.ChatHeader>
      <Styled.ChatMessages ref={divRef}>
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
