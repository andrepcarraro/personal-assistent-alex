import { useRef, useState } from "react";
import * as Styled from "./LandingPage.styles";

export const LandingPage = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef<HTMLDivElement>(null);
  if (!("webkitSpeechRecognition" in window)) {
    return (
      <Styled.ResultTextArea>
        Browser is not Support Speech Recognition.
      </Styled.ResultTextArea>
    );
  }
  const SpeechRecognition = new webkitSpeechRecognition();
  const handleListing = () => {
    setIsListening(true);
    if (microphoneRef.current) microphoneRef.current.classList.add("listening");
    SpeechRecognition.continuous = true;
    SpeechRecognition.start();
    SpeechRecognition.onresult = (event: SpeechRecognitionEventInit) => {
      let newTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        newTranscript += event.results[i][0].transcript;
      }
      setTranscript(newTranscript);
    };
  };

  const stopHandle = () => {
    setIsListening(false);
    if (microphoneRef.current)
      microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stop();
  };
  const handleReset = () => {
    stopHandle();
    setTranscript("");
  };

  return (
    <Styled.LandingPage>
      <Styled.MicrophoneDiv ref={microphoneRef} onClick={handleListing}>
        <Styled.MicrophoneIcon />
        {isListening && <Styled.MicrophoneAnimationDiv />}
      </Styled.MicrophoneDiv>

      <Styled.ResultTextArea>{transcript || ""}</Styled.ResultTextArea>

      <Styled.ButtonLayoutDiv>
        {isListening && (
          <Styled.ButtonStop onClick={stopHandle}>Stop</Styled.ButtonStop>
        )}
        {transcript && (
          <Styled.ButtonReset onClick={handleReset}>Reset</Styled.ButtonReset>
        )}
      </Styled.ButtonLayoutDiv>
    </Styled.LandingPage>
  );
};
