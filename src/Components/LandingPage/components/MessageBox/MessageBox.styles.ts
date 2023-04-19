import styled from "styled-components";
import { MessageSideType } from "../../../../types/message.types";

interface MessageBoxProps {
  $MessageSide: MessageSideType;
}
export const MessageBox = styled.div<MessageBoxProps>((props) => ({
  maxWidth: "45%",
  height: "auto",
  display: "flex",
  background: "rgb(20 20 20 / 200%)",
  color: "white",
  justifyContent: props.$MessageSide === "message" ? "right" : "left",
  padding: "12px",
  margin: "6px",
  borderRadius: "6px",
  overflowWrap: "break-word",
  overflow: "hidden",
  fontSize: "0.9rem",
  paddingTop: '10px',
  fontWeight: 300,
}));

export const MessageContainer = styled.div<MessageBoxProps>((props) => ({
  maxWidth: "100%",
  display: "flex",
  justifyContent: props.$MessageSide === "message" ? "right" : "left",
}));
