# config

## Quickstart

1. Install dependencies

```sh
yarn add -D typescript eslint prettier @trieb.work/eslint-config-base @trieb.work/tsconfig-base @trieb.work/prettier-base husky
```

2. Initialize husky

```bash
yarn husky install
```

3. Create config files

```bash
# .eslintrc.js
cat <<EOF >.eslintrc.js
module.exports = {
  extends: "@trieb.work/eslint-config-base",
}
EOF

# tsconfig.json
cat <<EOF > tsconfig.json
{
  "extends": "@trieb.work/tsconfig-base"
}
EOF

# .prettierrc.js
cat <<EOF > .prettierrc.js
module.exports = {
  ...require("@trieb.work/prettier-base"),
}
EOF

# .commitlintrc.json
cat <<EOF > .commitlintrc.json
{
  "extends": ["@commitlint/config-conventional"]
}
EOF

# .lintstagedrc
cat <<EOF > .lintstagedrc
{
  "**.{ts,tsx}": ["yarn prettier --write", "yarn eslint --fix"],
  "**.{json,md,mdx,css,html,js}": ["yarn prettier --write"]
}
EOF
```

3. Add npm scripts

```bash
npm set script fmt "yarn lint && yarn format"
npm set script format "prettier --write ."
npm set script lint "eslint . --ext ts --ext tsx --ext js --fix"
npm set script tsc "tsc"
```

5. Copy the git hooks over to your repository

```bash
git clone https://github.com/trieb-work/config.git
cp -r config/packages/husky/hooks/* my-project-root/husky/hooks/
```

## Publishing

Changes are automatically published when pushed to `main`

## Contributing

It is important to work with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) because otherwise the packages can not be versioned correctly and deployed automatically.

[Commitizen](https://github.com/commitizen/cz-cli) is your friend.

Versioning follows semantic versioning and are managed automatically when using `fix:` -> `patch`, `feat:` -> `minor`, or when including breaking changes -> `major`

## FAQ

- Q: What do I do when I receive the following warning: `Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.`

  A: This happens if react is not installed in the same package where you run your linting. For example in a monorepo where you install eslint etc in the root directory and have a dedicated `/frontend` directory with your react application. Just ignore the warning.
