import { VoiceRecognitionButton } from "../VoiceRecognitionButton/VoiceRecognitionButton";
import { useEffect, useState } from "react";
import * as Styled from "./InputArea.styles";
import {
  handleListening,
  handleStop,
} from "../../../../Utils/VoiceRecognition/VoiceRecognition";
import { InputAreaProps } from "./InputArea.types";
import { MessageObjType } from "../../../../types/message.types";
import { ChatGPTMessageType } from "../../../../types";
import { processMessageToChatGPT } from "../../../../Utils/ChatGPT/ChatGPT";
import { speak } from "../../../../Utils/VoiceSpeaker/VoiceSpeaker";

export const InputArea = ({ messages, setMessages }: InputAreaProps) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [chatGPTMessages, setChatGPTMessages] = useState<ChatGPTMessageType[]>(
    []
  );
  const [utterThis, setUtterThis] = useState(new SpeechSynthesisUtterance(""));

  useEffect(() => {
    const newMessage: ChatGPTMessageType = {
      message: transcript,
      sender: "user",
      direction: "outgoing",
    };

    let chatGPTMessagesArray = chatGPTMessages.slice();
    chatGPTMessagesArray.push(newMessage);
    setChatGPTMessages(chatGPTMessagesArray);

    if (transcript)
      processMessageToChatGPT(chatGPTMessagesArray, setUtterThis, setMessages);
  }, [transcript]);

  useEffect(() => {
    speak(utterThis);
  }, [utterThis]);

  const getInputValue = () => {
    const input = document.getElementById(
      "inputTextMessage"
    ) as HTMLTextAreaElement | null;

    const newMessage: MessageObjType = {
      side: "message",
      text: input ? input.value : "",
    };
    if (newMessage.text !== "") {
      setMessages(newMessage);
      setTranscript(newMessage.text);
    }
    if (input) input.value = "";
  };

  return (
    <Styled.InputArea>
      <Styled.UserTextInput
        id="inputTextMessage"
        placeholder="Digite aqui"
      ></Styled.UserTextInput>
      <Styled.BtnsDiv>
        <VoiceRecognitionButton
          isListening={isListening}
          handleListening={() =>
            handleListening({ setIsListening, setTranscript })
          }
          handleStop={() => {
            handleStop({ setIsListening });
          }}
        />
        <Styled.SendBtn onClick={getInputValue}>
          <Styled.SendIcon />
        </Styled.SendBtn>
      </Styled.BtnsDiv>
    </Styled.InputArea>
  );
};
