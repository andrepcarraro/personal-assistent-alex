import { VoiceRecognitionButton } from "../VoiceRecognitionButton/VoiceRecognitionButton";
import { useState } from "react";
import * as Styled from "./InputArea.styles";
import {
  handleListening,
  handleStop,
} from "../../../../Utils/VoiceRecognition/VoiceRecognition";

export const InputArea = () => {
  const [isListening, setIsListening] = useState(false);
  const [height, setheight] = useState(28);
  const [transcript, setTranscript] = useState("");

  const getInputValue = () => {
    const input = document.getElementById(
      "inputTextMessage"
    ) as HTMLTextAreaElement | null;
    console.log(input ? input.value : "");
  };

  const changeHeight = () => {
    console.log(height);
    setheight(countLine());
  };

  function countLine() {
    const textArea = document.getElementById(
      "inputTextMessage"
    ) as HTMLTextAreaElement | null;
    console.log(textArea?.scrollHeight);

    return textArea ? textArea.scrollHeight :28;
  }

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
