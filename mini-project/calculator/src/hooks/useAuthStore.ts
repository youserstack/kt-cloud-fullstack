import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: { id: string; name: string } | null;
  login: (name: string) => boolean;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      login: (name: string) => {
        if (name === "admin") {
          const newUser = { id: "sdhflksdhfslf", name };
          set({ user: newUser });
          return true;
        }
        return false;
      },

      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
