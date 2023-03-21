import { useState, useEffect } from "react";
import { processMessageToChatGPT } from "../../Utils/ChatGPT/ChatGPT";
import * as Styled from "./LandingPage.styles";

export const LandingPage = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [utterThis, setUtterThis] = useState(new SpeechSynthesisUtterance(""));
  const [messages, setMessages] = useState<
    { message: string; sender: string; direction?: string }[]
  >([]);

  useEffect(() => {
    const newMessage = {
      message: transcript,
      sender: "user",
      direction: "outgoing",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    if (transcript)
      processMessageToChatGPT(newMessages, setUtterThis, setMessages);
  }, [transcript]);

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

  // useEffect(() => {
  //   window.speechSynthesis.speak(utterThis);
  // }, [utterThis, window.speechSynthesis.speak]);

  return (
    <>
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
    </>
  );
};
