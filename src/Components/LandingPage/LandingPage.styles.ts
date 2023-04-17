import styled from "styled-components";

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
