import styled, { keyframes } from "styled-components";
import { BiMicrophone } from "react-icons/bi";

export const LandingPage = styled("div")({
  background: `
linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424)`,
  backgroundColor: "#131313",
  backgroundSize: "20px 20px",
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});

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

export const ResultTextArea = styled("div")({
  width: "60vw",
  height: "30vh",
  borderRadius: "20px",
  background: "rgb(36 35 35 / 84%)",
  border: "none",
  marginTop: "50px",
  padding: "30px",
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "0.9rem",
  lineHeight: "1rem",
  fontWeight: 300,
});

export const ButtonLayoutDiv = styled("div")({
  width: "100%",
  height: 45,
  display: "flex",
  justifyContent: "center",
  marginTop: "50px",
});

const BaseButton = styled("button")({
  width: "170px",
  height: "45px",
  border:'none',
  color: "rgb(36 35 35 / 84%)",
  padding: "10px 30px",
  marginLeft: "20px",
  outline: "none",
  cursor: "pointer",
  fontFamily: "sans-serif",
  fontSize: "20px",
  borderRadius: "25px",
  boxShadow: "0px 0px 10px 5px #ffffff1a",
  background: "linear-gradient(128deg, #ffffff, #647c88)",
});

export const ButtonStop = styled(BaseButton)({});

export const ButtonReset = styled(BaseButton)({});
