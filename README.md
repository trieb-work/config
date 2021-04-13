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
module.exports = {
  ...require("@trieb.work/prettier-base"),
};
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

## FAQ

- Q: What do I do when I receive the following warning: `Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.`

  A: This happens if react is not installed in the same package where you run your linting. For example in a monorepo where you install eslint etc in the root directory and have a dedicated `/frontend` directory with your react application. Just ignore the warning.
