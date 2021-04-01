# config

## Quickstart

1. Install dependencies

```sh
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

# Contributing

It is important to work with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) because otherwise the packages can not be versioned correctly and deployed automatically.

[Commitizen](https://github.com/commitizen/cz-cli) is your friend.

Versioning follows semantic versioning and are managed automatically when using `fix:` -> `patch`, `feat:` -> `minor`, or when including breaking changes -> `major`
