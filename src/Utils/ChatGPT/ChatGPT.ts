import { ChatGPTMessageType } from "../../types";

export const processMessageToChatGPT = async (
  chatMessages: ChatGPTMessageType[],
  setUtterThis: Function,
  setChatGptMessages: Function,
  setChatMessages: Function
) => {
  const API_KEY = process.env.REACT_APP_CHAT_GPT_SECRET_KEY;
  let apiMessage = chatMessages.map((messageObject: any) => {
    let role = "";
    if (messageObject.sender === " ChatGPT") {
      role = "system";
    } else {
      role = "user";
    }
    return { role: role, content: messageObject.message };
  });

  const systemMessage = {
    role: "user",
    content: `Seu nome será Raio`,
  };

  const apiRequestBody = {
    model: "gpt-3.5-turbo",
    messages: [systemMessage, ...apiMessage],
  };

  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiRequestBody),
  })
    .then((data) => data.json())
    .then((data) => {
      if (data)
        setUtterThis(
          new SpeechSynthesisUtterance(data.choices[0].message.content)
        );
      setChatGptMessages([
        ...chatMessages,
        {
          message: data.choices[0].message.content,
          sender: "ChatGPT",
        },
      ]);
      setChatMessages({
        text: data.choices[0].message.content,
        side: "response",
      });
    });
};
