import { getBestMatch } from "../Strings/strings";
import { COMMANDS, OFF_COMMANDS, ON_COMMANDS } from "./VoiceRecognition.consts";
import {
  handleListeningProps,
  handleStopProps,
  handleResetProps,
  messageGatewayProps,
} from "./VoiceRecognition.types";
import { ChatGPTMessageType } from "../../types";
import { processMessageToChatGPT } from "../ChatGPT/ChatGPT";
import { SendEspCommand } from "../MqttConnection/MqttConnection";

const Speech = new webkitSpeechRecognition();
Speech.lang = "pt-BR";

const handleListening = ({
  setIsListening,
  setTranscript,
  setChatMessages,
}: handleListeningProps) => {
  setIsListening(true);
  Speech.start();
  Speech.onresult = (event: SpeechRecognitionEventInit) => {
    let newTranscript = "";
    for (let i = 0; i < event.results.length; i++) {
      newTranscript += event.results[i][0].transcript;
    }
    setTranscript(newTranscript);
    setChatMessages({ text: newTranscript, side: "message" });
  };
};

const handleStop = ({ setIsListening }: handleStopProps) => {
  Speech.abort();
  setIsListening(false);
};

const handleReset = ({ setIsListening, setTranscript }: handleResetProps) => {
  handleStop({ setIsListening });
  setTranscript("");
};

const messageGateway = ({
  transcript,
  mqttClient,
  chatGPTMessages,
  setChatGPTMessages,
  setUtterThis,
  setChatMessages,
}: messageGatewayProps) => {
  let espCommandBestMatchObj = getBestMatch(transcript, COMMANDS);
  if (espCommandBestMatchObj.rating > 0.4) {
    if (ON_COMMANDS.includes(espCommandBestMatchObj.text)) {
      SendEspCommand({
        chatMessage: "Equipamento acionado com sucesso",
        command: "1",
        mqttClient: mqttClient,
        setChatMessages: setChatMessages,
        setUtterThis: setUtterThis,
      });
    }

    if (OFF_COMMANDS.includes(espCommandBestMatchObj.text)) {
      SendEspCommand({
        chatMessage: "Equipamento desligado com sucesso",
        command: "0",
        mqttClient: mqttClient,
        setChatMessages: setChatMessages,
        setUtterThis: setUtterThis,
      });
    }
  } else {
    const newMessage: ChatGPTMessageType = {
      message: transcript,
      sender: "user",
      direction: "outgoing",
    };

    let chatGPTMessagesArray = chatGPTMessages.slice();
    chatGPTMessagesArray.push(newMessage);
    setChatGPTMessages(chatGPTMessagesArray);
    processMessageToChatGPT(
      chatGPTMessagesArray,
      setUtterThis,
      setChatGPTMessages,
      setChatMessages
    );
  }
};

export { Speech, handleListening, handleStop, handleReset, messageGateway };
