import { VoiceRecognitionButtonProps } from "./VoiceRecognitionButton.types";
import * as Styled from "./VoiceRecognitionButton.styles";
import { useState } from "react";

export const VoiceRecognitionButton = ({
  isListening,
  handleListening,
  handleStop,
}: VoiceRecognitionButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const turnOn = () => {
    handleListening();
    setIsActive(true);
  };

  const turnOff = () => {
    handleStop();
    setIsActive(false);
  };

  return (
    <Styled.MicrophoneDiv onClick={!isActive ? turnOn : turnOff}>
      <Styled.MicIcon $isListening={isListening} />
      {isListening && <Styled.MicrophoneAnimationDiv />}
    </Styled.MicrophoneDiv>
  );
};
