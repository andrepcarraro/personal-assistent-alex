declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_CHAT_GPT_SECRET_KEY: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
