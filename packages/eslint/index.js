module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json'
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
        'airbnb-typescript'
    ],
    rules:{
      "@typescript-eslint/indent": ["error", 4],
      "react/react-in-jsx-scope": "off",
      "import/prefer-default-export": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "react/jsx-indent": ["error", 4],
      "react/jsx-indent-props": ["error", 4],
      "object-curly-newline": "off",
      "max-len": [2, {"code": 155, "ignoreUrls": true }]
    }
};