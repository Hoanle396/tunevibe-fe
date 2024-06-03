// @ts-nocheck
import { useUserStore } from "@/store/user-store";
import { create } from "zustand";
// import GetLogin from '@/services/server/users/GetLogin';
// import Register from '@/services/server/users/Register';

import { encrypt } from "@/utils";

const STORAGE_NAME = process.env.NEXT_PUBLIC_AUTH_STORE;

const changeAuthLocalStorage = (token: string, id: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(
      STORAGE_NAME,
      JSON.stringify({
        set_at: new Date().getTime(),
        token,
        id,
      })
    );
  }
};

const removeInitialToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_NAME);
  }
};

export const useAuthStore = create<authStoreState>()((set) => ({
  token: null,
  id: null,
  setInitialAuth: (token: string, id: number) => {
    set(() => ({
      token,
      id,
    }));
  },
  login: async (token: string, id: number) => {
    set(() => ({
      token,
      id,
    }));
  },
  LoginHelper(token: string, user: User) {
    changeAuthLocalStorage(token, encrypt(String(user.id)));
    set(() => ({ token: token, id: user.id }));
    useUserStore.getState().login(user);
  },
  logout: () => {
    removeInitialToken();
    set(() => ({ token: null, id: null }));
    useUserStore.getState().logout();
  },
}));
