import { useRef, useState } from "react";
import * as Styled from "./LandingPage.styles";

export const LandingPage = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  if (!("webkitSpeechRecognition" in window)) {
    return (
      <Styled.ResultTextArea>
        Browser is not Support Speech Recognition.
      </Styled.ResultTextArea>
    );
  }
  const SpeechRecognition = new webkitSpeechRecognition();

  const synth = window.speechSynthesis;
 

  const handleListing = () => {
    setIsListening(true);
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
    SpeechRecognition.stop();
    const utterThis = new SpeechSynthesisUtterance(transcript);
    synth.speak(utterThis);
  };

  const handleReset = () => {
    stopHandle();
    setTranscript("");
  };

  return (
    <Styled.LandingPage>
      <Styled.MicrophoneDiv onClick={handleListing}>
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
