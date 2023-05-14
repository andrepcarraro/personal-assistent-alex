/* eslint-disable react-hooks/exhaustive-deps */
import * as Styled from "./LandingPage.styles";
import { ChatArea } from "./components/ChatArea/ChatArea";

export const LandingPage = () => {
  return "webkitSpeechRecognition" in window ? (
    <Styled.LandingPage>
      <ChatArea />
    </Styled.LandingPage>
  ) : (
    <Styled.LandingPage>
      Browser is not Support Speech Recognition.
    </Styled.LandingPage>
  );
};
