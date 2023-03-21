export const processMessageToChatGPT = async (
    chatMessages: any,
    setUtterThis: Function,
    setMessages: Function
  ) => {
    const API_KEY = import.meta.env.CHAT_GPT_SECRET_KEY;
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
      content:
        "Seu nome será Alex, me responda como Alex quanto lhe for perguntado",
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
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
      });
  };
  