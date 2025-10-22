import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

export default function Login() {
  const [name, setName] = useState("");
  const { login } = useAuthStore();

  const navigate = useNavigate();
  const location = useLocation() as any;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;
    const ok = login(name.trim());
    if (!ok) return; // 실패 시 이동하지 않음

    const redirectTo = location?.state?.from?.pathname ?? "/calc";
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-semibold mb-4">로그인</h1>
      <small>로그인하려면 "admin"을 입력하세요.</small>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          className="border rounded px-3 py-2 flex-1"
          placeholder="이름을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          로그인
        </button>
      </form>
    </div>
  );
}
