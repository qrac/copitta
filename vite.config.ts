import { defineConfig } from "vite"
import { crx, defineManifest } from "@crxjs/vite-plugin"

import pkg from "./package.json"

const manifest = defineManifest({
  manifest_version: 3,
  name: pkg.title,
  description: pkg.description,
  version: pkg.version,
  action: {
    default_icon: {
      "16": "images/icon16.png",
      "48": "images/icon48.png",
    },
    default_title: pkg.title,
  },
  background: {
    service_worker: "src/background.ts",
  },
  permissions: ["contextMenus", "scripting", "activeTab"],
  icons: {
    "16": "images/icon16.png",
    "48": "images/icon48.png",
    "128": "images/icon128.png",
  },
})

export default defineConfig({
  plugins: [crx({ manifest })],
})
