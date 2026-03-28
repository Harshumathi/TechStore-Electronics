import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: ["dist", ".next", "next-env.d.ts"],
  },

  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2020,
      globals: { ...globals.browser, ...globals.node },
    },

    plugins: {
      "react-hooks": reactHooks,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
];
