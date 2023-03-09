import { useRef, useState, useEffect } from "react";
import * as Styled from "./LandingPage.styles";
import Reader from "./reader.component"; 
import text01 from "./text01.txt";

export const LandingPage = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [file, setFile] = useState<RequestInfo | URL >(text01)
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
  };
  
  const handleReset = () => {
    stopHandle();
    setTranscript("");
  };

  const [textToRead, setTextToRead] = useState("");

  useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        setTextToRead(text);
      });
  }, [file]);

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
      <Reader textToRead={textToRead} question={transcript} setFile={setFile} handleReset={handleReset} />
    </Styled.LandingPage>
  );
};
