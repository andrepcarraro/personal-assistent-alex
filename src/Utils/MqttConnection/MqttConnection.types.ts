import { MqttClient } from "mqtt";
import { MessageObjType } from "../../types/message.types";

export type SendEspCommandProps = {
  chatMessage: string;
  command: string;
  mqttClient: MqttClient;
  setChatMessages: (newMessage: MessageObjType) => void;
  setUtterThis: (utterThis: SpeechSynthesisUtterance) => void;
};
