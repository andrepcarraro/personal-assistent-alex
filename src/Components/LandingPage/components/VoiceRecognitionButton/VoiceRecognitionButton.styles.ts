import { FiMic } from "react-icons/fi";
import styled, { keyframes } from "styled-components";
import { ColorGuide } from "../../../../Styles/StyleGuide";

const ACTIVE_BTN_COLOR = "rgb(50 20 20 / 200%)";

const baseMicrophoneDivStyle = `
      height: 100%; 
      border-radius: 50%;
      cursor: pointer;
  `;

export const MicrophoneDiv = styled.div`
  ${baseMicrophoneDivStyle}
  width: 38px;
  background: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.5;
  }
`;

const VoiceButtonAnimation = keyframes`
  0%{
    opacity: 1;
    transform: scale(1);
  }
  100%{
    opacity: 0;
    transform: scale(1.4);
  }`;

export const MicrophoneAnimationDiv = styled.div`
  ${baseMicrophoneDivStyle}
  width: 36px;
  background-image: linear-gradient(128deg, transparent, ${ACTIVE_BTN_COLOR});
  animation-name: ${VoiceButtonAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  position: absolute;
`;

interface MicIconType {
  $isListening: boolean;
}

export const MicIcon = styled(FiMic)<MicIconType>((props) => ({
  width: 20,
  height: 20,
  color: props.$isListening ? ACTIVE_BTN_COLOR : ColorGuide.gray3,
}));
