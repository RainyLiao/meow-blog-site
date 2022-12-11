/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_SITE_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
