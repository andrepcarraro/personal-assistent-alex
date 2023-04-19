import styled from "styled-components";

export const ChatArea = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "60vw",
  height: "70vh",
  borderRadius: "20px",
  background: "rgb(36 35 35 / 84%)",
  border: "none",
  marginTop: "50px",
  padding: "30px",
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
    backgroundColor: 'transparent',
  },
  "&::-webkit-scrollbar-button": {
    backgroundColor: "transparent",
    height: 0
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgb(20 20 20 / 200%)",
    borderRadius:"20px",
  },
});
