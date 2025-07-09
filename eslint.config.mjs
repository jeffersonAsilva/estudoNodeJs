import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js,eslintPluginPrettier }, extends: ["js/recommended","prettier"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  {rules:{"class-methods-use-this":"off",
    "no-param-reassign":"off",
    "camelcase":"off",
    "no-unused-vars":["error",{argsIgnorePattern:"next"}],
    "prettier/prettier":"error"
  }}
]);
