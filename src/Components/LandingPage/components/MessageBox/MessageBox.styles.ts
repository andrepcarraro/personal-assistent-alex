import styled from "styled-components";
import { MessageSideType } from "../../../../types/message.types";
import { ColorGuide } from "../../../../Styles/StyleGuide";

interface MessageBoxProps {
  $MessageSide: MessageSideType;
}
export const MessageBox = styled.div<MessageBoxProps>((props) => ({
  maxWidth: "45%",
  height: "auto",
  display: "flex",
  background: ColorGuide.gray2,
  color: ColorGuide.white,
  justifyContent: props.$MessageSide === "message" ? "right" : "left",
  padding: "12px",
  margin: "0 9px",
  borderRadius: "6px",
  overflowWrap: "break-word",
  overflow: "hidden",
  fontSize: "0.9rem",
  paddingTop: "10px",
  fontWeight: 300,
}));

export const MessageContainer = styled.div<MessageBoxProps>((props) => ({
  padding: "12px 0",
  maxWidth: "100%",
  display: "flex",
  justifyContent: props.$MessageSide === "message" ? "right" : "left",
}));

export const AvatarContainer = styled.div<MessageBoxProps>((props) => ({
  height: "100%",
  paddingTop: "2px",
  paddingRight: props.$MessageSide === "message" ? "4px" : "0",
}));
