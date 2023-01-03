# vite-react-template

## Getting Started
- Install dependencies using pnpm install

- Start the dev server using pnpm run dev

- Go through the other scripts in package.json

## Routing using react-router

lazyloading Example

  - [src/router/index.tsx](src/router/index.tsx)
  - [src/App.tsx](src/App.tsx)

## css useing @emotion/react

```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
        compact: false,
      },
    }),
  ],
  // ...other
})
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "jsxImportSource": "@emotion/react"
  }
}
```

If you need to configure eslint

```json
// .eslintrc
{
  "rules": {
    "react/no-unknown-property": ["error", { "ignore": ["css"] }]
  }
}
```