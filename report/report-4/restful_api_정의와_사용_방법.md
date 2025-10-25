좋아요! RESTful API에 대해 **정의**부터 **사용 방법**까지 체계적으로 정리해 드릴게요.

---

## 1. RESTful API 정의

**RESTful API**는 **웹 애플리케이션 간 통신**을 위해 설계된 API 방식 중 하나입니다. 여기서 핵심은 **REST(Representational State Transfer)** 원칙을 따르는 것입니다.

### REST의 기본 원칙

1. **자원(Resource) 중심**

   - 서버가 관리하는 데이터나 기능을 “자원”이라고 부릅니다.
   - 각 자원은 고유한 URI로 접근합니다.
     예:

     ```
     GET /users        → 모든 사용자 조회
     GET /users/123    → ID가 123인 사용자 조회
     POST /users       → 새 사용자 생성
     PUT /users/123    → ID 123 사용자 정보 수정
     DELETE /users/123 → ID 123 사용자 삭제
     ```

2. **HTTP 메서드 사용**

   - **GET**: 데이터 조회
   - **POST**: 새 데이터 생성
   - **PUT / PATCH**: 데이터 수정
   - **DELETE**: 데이터 삭제

3. **무상태(Stateless)**

   - 서버는 클라이언트 상태를 저장하지 않습니다.
   - 요청에 필요한 모든 정보를 포함해야 합니다.
     예: 인증 토큰을 매번 헤더에 포함.

4. **표현(Representation)**

   - 자원의 상태를 JSON, XML 등으로 표현합니다.
   - 대부분의 REST API는 **JSON**을 사용합니다.

5. **클라이언트-서버 구조**

   - 클라이언트와 서버가 역할을 명확히 나눕니다.
   - 클라이언트는 사용자 인터페이스, 서버는 데이터와 비즈니스 로직 처리.

---

## 2. RESTful API 사용 방법

### 2-1. API 호출 방법

1. **HTTP 요청 보내기**

   - 브라우저, Postman, curl, axios, fetch 등 사용 가능

   ```bash
   curl -X GET https://api.example.com/users/123
   ```

2. **요청에 필요한 정보 포함**

   - 헤더: 인증 토큰, Content-Type 등
   - 바디: POST/PUT 요청 시 JSON 형태로 데이터 전송

   예 (JSON 바디 전송):

   ```json
   {
     "name": "John Doe",
     "email": "john@example.com"
   }
   ```

---

### 2-2. RESTful API 설계 예시

| 메서드 | 경로        | 설명             |
| ------ | ----------- | ---------------- |
| GET    | /posts      | 모든 게시글 조회 |
| GET    | /posts/{id} | 특정 게시글 조회 |
| POST   | /posts      | 게시글 생성      |
| PUT    | /posts/{id} | 게시글 전체 수정 |
| PATCH  | /posts/{id} | 게시글 일부 수정 |
| DELETE | /posts/{id} | 게시글 삭제      |

---

### 2-3. 실습 예시 (JavaScript)

```javascript
// fetch를 이용한 GET 요청
fetch("https://api.example.com/users/123", {
  method: "GET",
  headers: {
    Authorization: "Bearer YOUR_TOKEN",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

```javascript
// POST 요청으로 새 데이터 생성
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Alice",
    email: "alice@example.com",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

---

### 2-4. RESTful API 사용 시 주의점

1. **URI 명확히**: 자원 중심으로 경로를 설계
2. **HTTP 메서드 정확히 사용**: GET으로 데이터를 삭제하면 안 됨
3. **상태 코드 활용**:

   - 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Server Error

4. **버전 관리**: `/v1/users` 형태로 API 버전 관리
