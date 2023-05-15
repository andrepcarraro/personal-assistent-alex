import styled from "styled-components";
import { FiCloudLightning, FiSend } from "react-icons/fi";
import { ColorGuide } from "../../../../Styles/StyleGuide";

export const InputArea = styled.div({
  position: "absolute",
  bottom: 10,
  display: "flex",
  justifyContent: "left",
  width: "60vw",
  borderRadius: "20px",
  background: ColorGuide.gray2,
  minWidth: "258px",
  height: "36px",
});

export const UserTextInput = styled.textarea({
  width: "85%",
  border: "none",
  marginLeft: "20px",
  color: ColorGuide.white,
  fontSize: "0.9rem",
  '@media screen and (max-width: 800px)': {
    fontSize: "12px",
  },
  paddingTop: "10px",
  fontWeight: 300,
  background: ColorGuide.gray2,
  resize: "none",
  maxHeight: "200px",
  overflowY: "hidden",
  "&:focus-visible": {
    outline: "none",
  },
});

export const BaseCustomBtn = styled.button({
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

export const ManualOpsBtn = styled(BaseCustomBtn)({});

export const ManualBtn = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  width: "100%",
  cursor: "pointer",
  padding: "3px 0",
  color: ColorGuide.white,
  "&:hover": {
    opacity: 0.5,
  },
  "&:active": {
    opacity: 0.8,
  },
});

export const ManualOpsDiv = styled("div")({
  position: "relative",
  display: "flex",
});

export const SendIcon = styled(FiSend)({
  width: 20,
  height: 20,
  color: ColorGuide.gray3,
});

export const ManualOpsIcon = styled(FiCloudLightning)({
  width: 20,
  height: 20,
  color: ColorGuide.gray3,
});

export const BtnsDiv = styled.div({
  display: "flex",
  justifyContent: "right",
  width: "25%",
  marginRight: "20px",
  minWidth: '120px'
});

export const DropdownDiv = styled.div({
  position: "absolute",
  background: ColorGuide.gray2,
  zIndex: 2,
  display: "block",
  bottom: "40px",
  left: "-4vw",
  width: "12vw",
  maxWidth: "130px",
  minWidth: "50px",
  borderRadius: "5px",
  padding: "6px",
});
