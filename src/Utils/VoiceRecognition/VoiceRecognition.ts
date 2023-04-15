import {
  handleListeningProps,
  handleStopProps,
  handleResetProps,
} from "./VoiceRecognition.types";

const Speech = new webkitSpeechRecognition();
Speech.lang = "pt-BR";

const handleListening = ({
  setIsListening,
  setTranscript,
}: handleListeningProps) => {
  setIsListening(true);
  Speech.start();
  Speech.onresult = (event: SpeechRecognitionEventInit) => {
    let newTranscript = "";
    for (let i = 0; i < event.results.length; i++) {
      newTranscript += event.results[i][0].transcript;
    }
    setTranscript(newTranscript);
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

export { Speech, handleListening, handleStop, handleReset };
