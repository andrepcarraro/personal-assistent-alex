import {useEffect, useState} from "react";
import {PLAY_STATUS} from "../../types"
import {speak} from "../../utils/speech-synth.utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import ReadSpectrum from "./read-spectrum.component";
import ReadTime from "./read-time.component";
import text01 from "./text01.txt";
import text02 from "./text02.txt";

interface IReader {
  textToRead: string,
  question: string,
  setFile: Function
  handleReset: Function
}

const Reader = ({textToRead, question, setFile, handleReset}: IReader) => {
  const [text, setText] = useState("");
  const [playStatus, setPlayStatus] = useState(PLAY_STATUS.PLAY);

  // remove all HTML tags from text sample
  useEffect(() => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = textToRead;
    setText(tmp.textContent || tmp.innerText || "");
  }, [textToRead]);

  console.log('xxxx: ', question)

  useEffect(() => {
    setTimeout(() => {
      if (question === 'Olá') {
        setFile(text01)
        speak(text, setPlayStatus, window.speechSynthesis)
      }
      if (question === 'Estou muito bem e você') {
        setFile(text02)
        speak(text, setPlayStatus, window.speechSynthesis)
      }
    }, 1000);
    handleReset()
  }, [question]);

  const handleClick = () => {
    // NOTE: will cause an error if this cancel isn't here
    speechSynthesis.cancel();
    setPlayStatus((prev) => {
      if (prev === PLAY_STATUS.PLAY) {
        speak(text, setPlayStatus, window.speechSynthesis);
        return PLAY_STATUS.STOP;
      }
      return PLAY_STATUS.PLAY;
    });
  };

  return (
    <div className="loader">
      <div className="wrapper">
        <div
          className="player_main_control"
          onClick={() => handleClick()}
          onKeyPress={() => handleClick()}
          aria-hidden="true"
        >
          <div className="control_play_pause">
            <div className={`control_icon_${playStatus}`}>
              {playStatus === PLAY_STATUS.PLAY ? (
                <FontAwesomeIcon icon={faPlay} />
              ) : (
                <ReadSpectrum />
              )}
            </div>
          </div>
        </div>
        <ReadTime loaded={playStatus === PLAY_STATUS.STOP} />
      </div>
    </div>
  );
};

export default Reader;
