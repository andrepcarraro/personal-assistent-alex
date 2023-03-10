/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly CHAT_GPT_SECRET_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }