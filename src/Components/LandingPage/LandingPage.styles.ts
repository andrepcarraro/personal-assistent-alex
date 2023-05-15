import styled from "styled-components";
import { ColorGuide } from "../../Styles/StyleGuide";

export const LandingPage = styled("div")({
  background: `linear-gradient(150deg, #fdcd3b 60%, #ffed4b 60%)`,
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
  border: 'none',
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

export const LoadingAnimationDiv = styled.div({
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: "center",
  width: '100%',
  height: '100%',
  zIndex: 1000,
  background: ColorGuide.gray3,
  transition: 'all 1s linear'
})
