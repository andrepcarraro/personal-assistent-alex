import { MessageObjType } from "../../../../types/message.types";

export type InputAreaProps = {
  setChatMessages: (newMessage: MessageObjType) => void;
  soundStatus: boolean;
};
