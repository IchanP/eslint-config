import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

// TODO https://claude.ai/chat/d039060f-79b7-4a7d-aee2-f1c306c23de3

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ),
  ...compat.config({
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "linebreak-style": "off",
    },
    ignorePatterns: ["*d.ts", "node_modules/", "dist/", "build/"],
  }),
];

export default eslintConfig;
