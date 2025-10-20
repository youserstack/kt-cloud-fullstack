nodemon + ts-node 사용시 설정 시 -> commonjs 모듈시스템으로 변경 (호환성 좋음)
package.json -> type:commonjs
tsconfig.json -> module:commonjs
package.json -> "dev": "nodemon --watch './\*_/_.ts' --exec ts-node app.ts"

nodemon -> 감시자
ts-node -> 타입스크립트 실행기
(node -> 자바스크립트 실행기)

nodemon --watch './\*_/_.ts' --exec ts-node app.ts

| 단계 | 동작                                             |
| ---- | ------------------------------------------------ |
| 1    | nodemon이 실행되고 `.ts` 파일을 감시             |
| 2    | 처음에 `ts-node app.ts` 실행                     |
| 3    | 코드 수정 시 nodemon이 감지                      |
| 4    | 이전 프로세스 종료 후 `ts-node app.ts` 다시 실행 |
| 5    | 즉시 변경 반영된 상태로 서버 동작                |
