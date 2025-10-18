# DOM과 동적 페이지 렌더링의 원리

## 1. DOM(Document Object Model)

- HTML 문서를 객체 트리 형태로 표현한 모델
- 브라우저가 HTML 코드를 읽으면, 각 태그(html, body, div, p 등)를 **노드(node)**로 변환하여 트리 구조를 만듦

  ```html
  <body>
    <div>
      <p>Hello</p>
    </div>
  </body>
  ```

- 내부 구조: body → div → p → "Hello"
- JavaScript로 접근 가능

  ```js
  document.querySelector("p");
  ```

- 수정 가능

  ```js
  element.textContent = "변경";
  ```

- DOM이 수정되면 브라우저 화면(Render Tree)에도 즉시 반영됨

## 2. 동적 페이지 렌더링(Dynamic Rendering)

- 정적 렌더링  
  HTML에 적힌 내용 그대로 로드될 때 한 번만 그림
  예: 단순한 소개 페이지, 블로그 글

- 동적 렌더링  
  JavaScript로 DOM을 조작해 화면을 실시간으로 바꾸는 것

- 동작 과정:  
  HTML → DOM 트리 생성  
  CSS → CSSOM 트리 생성  
  DOM + CSSOM → Render Tree 생성  
  JS가 DOM/CSSOM 수정  
  Render Tree 다시 계산 → 화면에 Repaint/Reflow 발생

## 3. 동적 렌더링 예시

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="text">안녕하세요</p>
    <button onclick="changeText()">변경</button>

    <script>
      function changeText() {
        document.getElementById("text").textContent = "반갑습니다!";
      }
    </script>
  </body>
</html>
```

- 버튼 클릭: JS 실행 → textContent 변경
- DOM 갱신 → Render Tree 다시 계산 → "반갑습니다!"로 즉시 갱신
