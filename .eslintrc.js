export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], //should add ".ts" if typescript project,
    "prettier/prettier": ["error"],
    "react/prefer-stateless-function": 1,
    "react/jsx-one-expression-per-line": false,
    "react/jsx-curly-brace-presence": false,
    "react/jsx-filename-extension": false,
    "react/prop-types": false /* todo: enable prop types*/,
    "react/no-danger": false,
  },
};
