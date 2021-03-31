# config

## Quickstart

1. Install dependencies

```
yarn add -D typescript eslint @trieb.work/eslint-config-base @trieb.work/tsconfig-base

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

3. Add npm scripts

```json
"scripts": {
    "lint": "eslint . --ext ts --ext tsx --ext js --fix",
    "tsc": "tsc",
}
```

4. Enjoy a slice of pizza.
