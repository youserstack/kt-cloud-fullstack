```bash
#프로젝트설치
npx create-react-app my-app --template typescript
cd my-app

#모듈설치
npm i chance luxon redux react-redux @reduxjs/toolkit redux-logger redux-thunk react-router-dom
npm i -D @types/chance @types/luxon @types/redux-logger @types/redux-thunk tailwindcss@3.4.17 postcss autoprefixer @tailwindcss/postcss daisyui@4.12.12 @tailwindcss/line-clamp
```

## tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
```

## postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
