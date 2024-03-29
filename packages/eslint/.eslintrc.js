module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "import"],
  extends: [
    /*
     * Always a good idea to start with sane defaults
     */
    "eslint:recommended",

    /*
     * Our main source of fules comes from airbnb.
     */
    "airbnb-typescript",

    /*
     * Required to integrate prettier into eslint
     */
    "plugin:prettier/recommended",

    /**
     * Integrate react recommended rules
     */
    "plugin:react/recommended"
  ],
  rules: {
    /*
     * This reads all definitions from a local prettier config file and applies the correct
     * eslint rules automatically.
     */
    "prettier/prettier": ["error"],

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

    /**
     * We find them quite useful actually.
     */
    "no-nested-ternary": "off",
  },
};
