/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { ChatGPTMessageType } from "../../types";
import { processMessageToChatGPT } from "../../Utils/ChatGPT/ChatGPT";
import * as Styled from "./LandingPage.styles";
import {
  handleStop,
  handleListening,
  handleReset,
} from "../../Utils/VoiceRecognition/VoiceRecognition";
import { speak } from "../../Utils/VoiceSpeaker/VoiceSpeaker";
import { ChatArea } from "./components/ChatArea/ChatArea";

export const LandingPage = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);

  const [utterThis, setUtterThis] = useState(new SpeechSynthesisUtterance(""));
  const [messages, setMessages] = useState<ChatGPTMessageType[]>([]);

  useEffect(() => {
    if (!isListening) speak(utterThis);
  }, [utterThis]);

  useEffect(() => {
    const newMessage: ChatGPTMessageType = {
      message: transcript,
      sender: "user",
      direction: "outgoing",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    if (transcript)
      processMessageToChatGPT(newMessages, setUtterThis, setMessages);
  }, [transcript]);

  return "webkitSpeechRecognition" in window ? (
    <Styled.LandingPage>

      {/* <Styled.ResultTextArea>{transcript || ""}</Styled.ResultTextArea> */}
      <ChatArea />

      <Styled.ButtonLayoutDiv>
        {/* <Styled.ButtonStop
            onClick={() => client.publish("teste", "Oi, estou funcionando!")}
          >
            Teste
          </Styled.ButtonStop> */}
        {isListening && (
          <Styled.ButtonStop onClick={() => handleStop({ setIsListening })}>
            Stop
          </Styled.ButtonStop>
        )}
        {transcript && (
          <Styled.ButtonReset
            onClick={() => handleReset({ setIsListening, setTranscript })}
          >
            Reset
          </Styled.ButtonReset>
        )}
      </Styled.ButtonLayoutDiv>
    </Styled.LandingPage>
  ) : (
    <Styled.LandingPage>
        Browser is not Support Speech Recognition.
    </Styled.LandingPage>
  );
};
