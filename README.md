<div align="center">

<img width="156px" src="https://raw.githubusercontent.com/loreanvictor/callbag-jsx/2dce75006b1046ae28edfb8f4ba4af164b167f56/docs/assets/callbag-jsx.svg"/>

# Starter project for [`callbag-jsx`](https://github.com/loreanvictor/callbag-jsx)

</div>

<br><br>

**GET STARTED**: [Use this template](https://github.com/loreanvictor/callbag-jsx-starter-ts/generate) and clone your repo (if you haven't already).

**DEV COMMANDS**:

```bash
npm i             # 👉  install dependencies
```
```bash
npm start         # 👉  start dev server
                  # --> entry file is src/index.tsx
                  # --> served on localhost:3000
```
```bash
npm run build     # 👉  build your app
                  # --> build files in dist/
```
```bash
npm test          # 👉  run tests
                  # --> test root is src/test/index.ts
```

👉 Don't forget to [read the docs](https://loreanvictor.github.io/callbag-jsx/).

<br><br>

## Stack

- [Typescript](https://www.typescriptlang.org/) for transpilation
  - Configuration in `tsconfig.json`

- [Webpack](https://webpack.js.org) for bundling and dev server
  - Configuration in `webpack.common.js`
  - Dev specific config in `webpack.dev.js`
  - Prod specific config in `webpack.prod.js`

- [ESLint](https://eslint.org) for linting
  - [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) for using ESLint on Typescript
  - Configuration in `.eslintrc`

- [Mocha](https://mochajs.org/#configuring-mocha-nodejs) & [Chai](https://www.chaijs.com) for testing
  - [TS-Node](https://github.com/TypeStrong/ts-node) for binding TypeScript into Mocha
