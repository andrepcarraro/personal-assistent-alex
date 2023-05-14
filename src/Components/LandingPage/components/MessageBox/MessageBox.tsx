import { Avatar } from "../../../Avatar/Avatar";
import * as Styled from "./MessageBox.styles";
import { MessageBoxProps } from "./MessageBox.types";

export const MessageBox = ({
  messageBoxText,
  messageBoxSide,
}: MessageBoxProps) => {
  return (
    <Styled.MessageContainer $MessageSide={messageBoxSide}>
      {messageBoxSide === "response" && (
        <Styled.AvatarContainer $MessageSide={messageBoxSide}>
          <Avatar name="" image={{ src: "raio.png" }} />
        </Styled.AvatarContainer>
      )}
      <Styled.MessageBox $MessageSide={messageBoxSide}>
        {messageBoxText}
      </Styled.MessageBox>
      {messageBoxSide === "message" && (
        <Styled.AvatarContainer $MessageSide={messageBoxSide}>
          <Avatar name="" image={{ src: "cloud.png" }} />
        </Styled.AvatarContainer>
      )}
    </Styled.MessageContainer>
  );
};
