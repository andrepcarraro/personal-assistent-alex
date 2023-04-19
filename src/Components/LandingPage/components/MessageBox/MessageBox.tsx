import * as Styled from "./MessageBox.styles";
import { MessageBoxProps } from "./MessageBox.types";

export const MessageBox = ({
  messageBoxText,
  messageBoxSide,
}: MessageBoxProps) => {
  return (
    <Styled.MessageContainer $MessageSide={messageBoxSide}>
      <Styled.MessageBox $MessageSide={messageBoxSide}>
        {messageBoxText}
      </Styled.MessageBox>
    </Styled.MessageContainer>
  );
};
