// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    rules: {
      // 저장 시 import 삭제 방지
      "unused-imports/no-unused-imports": "off",
      "unused-imports/no-unused-vars": "off",
      "no-unused-vars": "warn",
    },
  },
]);
