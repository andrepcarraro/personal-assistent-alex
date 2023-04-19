export type MessageSideType = "message" | "response";

export type MessageObjType = {
  text: string;
  side: MessageSideType;
};
