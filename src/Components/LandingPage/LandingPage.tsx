/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { ChatGPTMessageType } from "../../types";
import { processMessageToChatGPT } from "../../Utils/ChatGPT/ChatGPT";
import * as Styled from "./LandingPage.styles";
import mqtt from "mqtt";

export const LandingPage = () => {
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [utterThis, setUtterThis] = useState(new SpeechSynthesisUtterance(""));
  const [messages, setMessages] = useState<ChatGPTMessageType[]>([]);

  const synth = window.speechSynthesis;
  const defaultVoice = synth
    .getVoices()
    .find((voice) =>
      voice.voiceURI === "Microsoft Daniel - Portuguese (Brazil)" ||
      voice.voiceURI === "Google português do Brasil"
        ? voice
        : null
    );

  useEffect(() => {
    if (defaultVoice != null) utterThis.voice = defaultVoice;
    synth.speak(utterThis);
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

  useEffect(() => {
    const client = mqtt.connect("ws://73aa93375c024a12b448ddf523c4d162.s2.eu.hivemq.cloud/ws");
    client.on("connect", () => {
      console.log("connected");
    });

    client.publish("teste", "mensagem");

    return () => {
      if (client) {
        client.end();
      }
    };
  }, []);

  const handleJsonMessage = (json: JSON) => {
    const time = Date.now();
  };

  if (!("webkitSpeechRecognition" in window)) {
    return (
      <Styled.ResultTextArea>
        Browser is not Support Speech Recognition.
      </Styled.ResultTextArea>
    );
  }

  const SpeechRecognition = new webkitSpeechRecognition();
  SpeechRecognition.lang = "pt-BR";

  const handleListing = () => {
    setIsListening(true);
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
    setUtterThis(new SpeechSynthesisUtterance(transcript));
    setIsListening(false);
    SpeechRecognition.stop();
  };

  const handleReset = () => {
    stopHandle();
    setTranscript("");
  };

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
