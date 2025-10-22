```json
{
  "name": "board",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "concurrently \"npm run tailwind\" \"nodemon index.js\"",
    "start": "node index.js",
    // input.css -> tailwind.css 로 변환
    "tailwind": "tailwindcss -i ./src/styles/input.css -o ./public/css/tailwind.css --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "express-handlebars": "^8.0.3", // 뷰템플릿엔진
    "lodash": "^4.17.21",
    "mongodb": "^6.20.0",
    "mongoose": "^8.19.2",
    "nodemon": "^3.1.10",
    "path": "^0.12.7"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "concurrently": "^9.2.1", // 동시실행 모듈
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3"
  }
}
```
