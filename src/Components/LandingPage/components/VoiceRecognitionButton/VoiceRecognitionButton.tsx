import { VoiceRecognitionButtonProps } from "./VoiceRecognitionButton.types";
import * as Styled from "./VoiceRecognitionButton.styles";

export const VoiceRecognitionButton = ({
  isListening,
  handleListening,
}: VoiceRecognitionButtonProps) => {
  return (
    <Styled.MicrophoneDiv onClick={handleListening}>
      <Styled.MicrophoneIcon />
      {isListening && <Styled.MicrophoneAnimationDiv />}
    </Styled.MicrophoneDiv>
  );
};
