import { MessageObjType } from "../../../../types/message.types";

export type InputAreaProps = {
  messages: Array<MessageObjType>;
  setMessages: (newMessage: MessageObjType) => void;
};
