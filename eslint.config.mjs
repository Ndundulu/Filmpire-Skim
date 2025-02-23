import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/extensions": "off",
      "react/prop-types": "off"
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.recommended
];
