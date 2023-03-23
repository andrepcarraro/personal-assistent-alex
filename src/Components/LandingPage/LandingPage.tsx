/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { ChatGPTMessageType } from "../../types";
import { processMessageToChatGPT } from "../../Utils/ChatGPT/ChatGPT";
import * as Styled from "./LandingPage.styles";
import { connect } from "mqtt";

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

  const mqtt_server = "broker.hivemq.com";
  const mqtt_host = "mqtt://ec10ecee850d4e7fa7d7acfb416ff339.s2.eu.hivemq.cloud";
  const mqtt_username = "Alex-IOT";
  const mqtt_password = "Alex-Admin";
  const mqtt_port = 8884;

  const mqtt_topic = "led";

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

  const client = connect('mqtts://ec10ecee850d4e7fa7d7acfb416ff339.s2.eu.hivemq.cloud', {
    username: mqtt_username,
    password: mqtt_password,
    port: 8884
  });
  // Criar uma conexão MQTT

  // // Função para ligar o LED
  const ligarLed = () => {
    client.publish(mqtt_topic, "ON");
  }

  // // Função para desligar o LED
  const desligarLed = () => {
    client.publish(mqtt_topic, "OFF");
  }

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
          <button onClick={() => ligarLed()}>LIGAR</button>
          <button onClick={() => desligarLed()}>DESLIGAR</button>
        </Styled.ButtonLayoutDiv>
      </Styled.LandingPage>
    </>
  );
};
