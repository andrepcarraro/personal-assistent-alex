import { BiMicrophone } from "react-icons/bi";
import styled, { keyframes } from "styled-components";

export const VoiceButton = styled("button")({
  background: "red",
  width: 240,
  height: 80,
  borderRadius: 20,
  border: "none",
});

const baseMicrophoneDivStyle = `
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-image: linear-gradient(128deg, #ffffff, #647c88);
      cursor: pointer;
  `;

export const MicrophoneDiv = styled.div`
  ${baseMicrophoneDivStyle}
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
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
  animation-name: ${VoiceButtonAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  position: absolute;
`;

export const MicrophoneIcon = styled(BiMicrophone)({
  width: 35,
  height: 35,
  fill: "rgb(36 35 35 / 84%)",
});
