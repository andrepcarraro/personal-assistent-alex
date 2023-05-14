import styled from "styled-components";
import { ColorGuide } from "../../../../Styles/StyleGuide";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

export const ChatArea = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "60vw",
  height: "85vh",
  borderRadius: "20px",
  background: ColorGuide.gray1,
  border: "none",
  marginTop: "50px",
  padding: "0 30px",
});

export const ChatMessages = styled.div({
  width: "100%",
  minHeight: "20px",
  height: "95%",
  overflowY: "scroll",

  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-button": {
    backgroundColor: "transparent",
    height: 0,
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgb(20 20 20 / 200%)",
    borderRadius: "20px",
  },
});

export const ChatHeader = styled.div({
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const SoundButton = styled.button({
  width: "34px",
  height: "34px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  borderRadius: "50%",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.5,
  },
  "&:active": {
    opacity: 0.8,
  },
});

export const SoundOnIcon = styled(FiVolume2)({
  width: "34px",
  height: "34px",
  color: ColorGuide.gray2,
});

export const SoundOffIcon = styled(FiVolumeX)({
  width: "34px",
  height: "34px",
  color: ColorGuide.gray2,
});
