/* eslint-disable react-hooks/exhaustive-deps */
import * as Styled from "./LandingPage.styles";
import { ChatArea } from "./components/ChatArea/ChatArea";
import Lottie from 'lottie-react';
import RaioAnimation from '../../Assets/Animations/lightningAnimation.json';
import { useRef } from "react";

export const LandingPage = () => {
  const divRef = useRef<HTMLDivElement>(null)

  setTimeout(() => {
    if (divRef.current) {
      divRef.current.style.opacity = '0'
      divRef.current.addEventListener('transitionend', function (e) {
        if (divRef.current)
          divRef.current.style.display = 'none'
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  }, 1500)
  return "webkitSpeechRecognition" in window ? (
    <Styled.LandingPage>
      <Styled.LoadingAnimationDiv ref={divRef}>
        <Lottie animationData={RaioAnimation} loop={true} style={{ width: 200 }}></Lottie>
      </Styled.LoadingAnimationDiv>
      <ChatArea />
    </Styled.LandingPage>
  ) : (
    <Styled.LandingPage>
      Browser is not Support Speech Recognition.
    </Styled.LandingPage>
  );
};
