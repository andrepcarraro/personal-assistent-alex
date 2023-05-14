import { CONNECTION_URL, MQTT_OPTIONS } from "./MqttConnection.consts";
import mqtt from "mqtt";

export const MqttCreateClient = () => {
  const client = mqtt.connect(CONNECTION_URL, MQTT_OPTIONS);
  client.off("disconnected", () => {
    throw new Error("Unable to establish mqtt connection");
  });

  return client;
};
