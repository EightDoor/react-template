/// <reference types="vite/client" />
interface ImportMeta {
  readonly env: ImportMetaEnv
}
interface ImportMetaEnv {
  readonly PROD: string
}
