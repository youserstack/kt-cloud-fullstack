# 웹에서 CRUD개념

crud -> 데이터를 다루는 동작을 의미함(create read update delete)

create -> http post  
read -> http get  
update -> http put(전체수정)/patch(부분수정)  
delete -> http delete

# 웹 동작

- 클라이언트 -> 서버 -> 데이터베이스 -> 서버 -> 클라이언트

- 클라이언트

  - http post/get/put/patch/delete 요청
  - json 데이터 전송

- 서버

  - 요청에 대한 로직 수행
  - 데이터베이스에 crud방식으로 요청

- 데이터베이스

  - 쿼리문 실행으로 데이터 변경 후 응답

- 서버
  - 데이터베이스응답결과 클라이언트에 응답
- 클라이언트
  - 응답받고 화면에 표시
