module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "airbnb-typescript"],
  rules: {
    "@typescript-eslint/indent": ["error", 4],
    "react/react-in-jsx-scope": "off",

    /*
     * Named exports are almost always better because they break when the imported module changes
     */
    "import/prefer-default-export": "off",

    "jsx-a11y/anchor-is-valid": "off",
    "object-curly-newline": "off",
    "max-len": [2, { code: 154, ignoreUrls: true }],

    /*
     * We are using typescript and don't need prop-types
     */
    "react/prop-types": "off",

    /*
     * Nextjs does this anyways and it's really handy for component controller logic
     */
    "react/jsx-props-no-spreading": "off",
  },
};
