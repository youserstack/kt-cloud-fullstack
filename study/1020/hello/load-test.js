import http from "k6/http";

export default function first() {
  http.get("http://localhost:3000/hello");
}
