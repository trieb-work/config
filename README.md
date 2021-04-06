# config

## Quickstart

1. Install dependencies

```sh
yarn add -D typescript eslint prettier @trieb.work/eslint-config-base @trieb.work/tsconfig-base @trieb.work/prettier-base
```

2. Create config files

```js
//.eslintrc.js
module.exports = {
  extends: "@trieb.work/eslint-config-base",
};
```

```json
//.tsconfig.json
{
  "extends": "@trieb.work/tsconfig-base"
}
```

```js
// .prettierrc.js
const base = require("@trieb.work/prettier-base")
module exports = {
  // Override something if you want
  tabWidth: 9000,
  // Add base
  ...base,
}
```

3. Add npm scripts

```json
"scripts": {
    "fmt": "yarn lint && yarn format",
    "format": "prettier --write .",
    "lint": "eslint . --ext ts --ext tsx --ext js --fix",
    "tsc": "tsc",
}
```

4. Enjoy a slice of pizza.

## Publishing

You can publish by running `yarn lerna publish`
