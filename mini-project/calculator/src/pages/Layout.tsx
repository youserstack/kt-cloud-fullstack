import { Link, Outlet } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

export default function Layout() {
  const { user, logout } = useAuthStore();

  return (
    <main className="h-screen p-4">
      <section className="max-w-[500px] h-full mx-auto bg-zinc-100 rounded-lg space-y-20 pt-20">
        {/* 네비게이션 */}
        <nav
          className="mx-auto flex items-center justify-between gap-4 rounded-lg p-4 
          [&_a:hover]:opacity-50
          [&_button:hover]:opacity-50
          [&_*]:transition-all
          "
        >
          {/* 메뉴리스트 */}
          <ul
            className="flex gap-4 
            [&_a]:inline-block
            [&_a]:font-semibold
            [&_a]:px-4
            [&_a]:py-2
            [&_a]:rounded-lg
            [&_a]:text-sm
            [&_a]:bg-zinc-200
            "
          >
            <li>
              <Link to="/calc">계산기</Link>
            </li>
            <li>
              <Link to="/about">만든이</Link>
            </li>
          </ul>

          {/* 인증관련버튼 */}
          {user && (
            <button
              onClick={logout}
              className="px-4 py-2 rounded-lg bg-rose-400 text-white text-sm"
            >
              로그아웃
            </button>
          )}
        </nav>

        {/* 자식요소 컨텐트 */}
        <Outlet />
      </section>
    </main>
  );
}
