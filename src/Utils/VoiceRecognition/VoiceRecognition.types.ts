import { MqttClient } from "mqtt";
import { MessageObjType } from "../../types/message.types";
import { ChatGPTMessageType } from "../../types";

export type handleStopProps = {
  setIsListening: (isListening: boolean) => void;
};

export type handleResetProps = {
  setIsListening: (isListening: boolean) => void;
  setTranscript: (transcript: string) => void;
};

export type handleListeningProps = {
  setIsListening: (isListening: boolean) => void;
  setTranscript: (transcript: string) => void;
  setChatMessages: (newMessage: MessageObjType) => void;
};

export type messageGatewayProps = {
  transcript: string;
  mqttClient: MqttClient;
  chatGPTMessages: ChatGPTMessageType[];
  setChatGPTMessages: (chatGPTMessage: ChatGPTMessageType[]) => void;
  setChatMessages: (newMessage: MessageObjType) => void;
  setUtterThis: (utterThis: SpeechSynthesisUtterance) => void;
};

