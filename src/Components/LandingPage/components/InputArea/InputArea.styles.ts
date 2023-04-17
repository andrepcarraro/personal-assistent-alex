import styled from "styled-components";
import { FiSend, FiMic } from "react-icons/fi";

export const InputArea = styled.div({
  display: "flex",
  justifyContent: "left",
  width: "55vw",
  borderRadius: "20px",
  background: "rgb(41 40 40 / 200%)",
  minWidth: "160px",
});

export const UserTextInput = styled.textarea({
  width: "85%",
  border: "none",
  marginLeft: "20px",
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "0.9rem",
  lineHeight: "1rem",
  fontWeight: 300,
  background: "rgb(41 40 40 / 200%)",
  resize: "none",
  maxHeight: "200px",
  overflowY: "hidden",
  "&:focus-visible": {
    outline: "none",
  },
});

const BaseCustomBtn = styled.button({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  borderRadius: "50%",
  width: "38px",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.5,
  },
  "&:active": {
    opacity: 0.8,
  },
});

export const SendBtn = styled(BaseCustomBtn)({});

export const SendIcon = styled(FiSend)({
  width: 20,
  height: 20,
  color: "rgb(20 20 20 / 200%)",
});

export const MicBtn = styled(BaseCustomBtn)({});

export const MicrophoneIcon = styled(FiMic)({
  width: 20,
  height: 20,
  color: "rgb(20 20 20 / 200%)",
});

export const BtnsDiv = styled.div({
  display: "flex",
  justifyContent: "right",
  width: "15%",
  marginRight: "20px",
});
