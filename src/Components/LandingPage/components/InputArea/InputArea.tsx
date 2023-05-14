import { VoiceRecognitionButton } from "../VoiceRecognitionButton/VoiceRecognitionButton";
import { useEffect, useState, KeyboardEvent } from "react";
import * as Styled from "./InputArea.styles";
import {
  handleListening,
  handleStop,
  messageGateway,
} from "../../../../Utils/VoiceRecognition/VoiceRecognition";
import { InputAreaProps } from "./InputArea.types";
import { MessageObjType } from "../../../../types/message.types";
import { ChatGPTMessageType } from "../../../../types";
import { speak } from "../../../../Utils/VoiceSpeaker/VoiceSpeaker";
import { MqttCreateClient } from "../../../../Utils/MqttConnection/MqttConnection";

export const InputArea = ({ setChatMessages, soundStatus }: InputAreaProps) => {
  const [isListening, setIsListening] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [chatGPTMessages, setChatGPTMessages] = useState<ChatGPTMessageType[]>(
    []
  );
  const [utterThis, setUtterThis] = useState(new SpeechSynthesisUtterance(""));
  const mqttClient = MqttCreateClient();

  useEffect(() => {
    if (transcript) {
      messageGateway({
        transcript,
        mqttClient,
        chatGPTMessages,
        setChatGPTMessages,
        setChatMessages,
        setUtterThis,
      });
      setTranscript("")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript]);

  useEffect(() => {
    if (soundStatus) speak(utterThis);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setChatMessages(newMessage);
      setTranscript(newMessage.text);
    }
    if (input) input.value = "";
  };

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.code === "Enter") {
      event.preventDefault();
      getInputValue();
    }
  };

  return (
    <Styled.InputArea>
      <Styled.UserTextInput
        id="inputTextMessage"
        placeholder="Digite aqui"
        onKeyPress={handleKeyPress}
      ></Styled.UserTextInput>
      <Styled.BtnsDiv>
        <VoiceRecognitionButton
          isListening={isListening}
          handleListening={() =>
            handleListening({
              setIsListening,
              setTranscript,
              setChatMessages,
            })
          }
          handleStop={() => {
            handleStop({ setIsListening });
          }}
        />
        <Styled.ManualOpsDiv>
          <Styled.ManualOpsBtn onClick={handleDropdown}>
            <Styled.ManualOpsIcon />
          </Styled.ManualOpsBtn>
          {isDropdownOpen && (
            <Styled.DropdownDiv>
              <Styled.ManualBtn
                onClick={() => {
                  const newMessage: MessageObjType = {
                    side: "message",
                    text: "Ligar Equipamento",
                  };
                  setChatMessages(newMessage);
                  setTranscript(newMessage.text);
                  handleDropdown();
                }}
              >
                Ligar
              </Styled.ManualBtn>
              <Styled.ManualBtn
                onClick={() => {
                  const newMessage: MessageObjType = {
                    side: "message",
                    text: "Desligar Equipamento",
                  };
                  setChatMessages(newMessage);
                  setTranscript(newMessage.text);
                  handleDropdown();
                }}
              >
                Desligar
              </Styled.ManualBtn>
            </Styled.DropdownDiv>
          )}
        </Styled.ManualOpsDiv>
        <Styled.SendBtn onClick={getInputValue}>
          <Styled.SendIcon />
        </Styled.SendBtn>
      </Styled.BtnsDiv>
    </Styled.InputArea>
  );
};
