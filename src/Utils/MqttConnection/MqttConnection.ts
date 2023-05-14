import { CONNECTION_URL, MQTT_OPTIONS } from "./MqttConnection.consts";
import mqtt from "mqtt";
import { SendEspCommandProps } from "./MqttConnection.types";

export const MqttCreateClient = () => {
  const client = mqtt.connect(CONNECTION_URL, MQTT_OPTIONS);
  client.off("disconnected", () => {
    throw new Error("Unable to establish mqtt connection");
  });

  return client;
};

export const SendEspCommand = ({
  chatMessage,
  command,
  mqttClient,
  setUtterThis,
  setChatMessages,
}: SendEspCommandProps) => {
  mqttClient.publish("Socket", command);
  setUtterThis(
    new SpeechSynthesisUtterance(chatMessage)
  );
  setChatMessages({
    text: chatMessage,
    side: "response",
  });
};
