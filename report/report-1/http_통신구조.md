# HTTP

client ---request--> server

- client: 웹브라우저로서 크롬/사파리 등
- request: 클라이언트에서 서버로 전송되는 http 요청
  - request line: method, url 등
  - header: 인증정보, 부가정보 등
  - body: 본문데이터

client <---response--- server

- server: 스프링부트/익스프레스 등
- response: 서버에서 클라이언트로 전송되는 http 응답
  - status line: status(200 OK)
  - header: content-type, set-cookie 등
  - body: html, json, image 등
