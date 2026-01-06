import { create } from "zustand";

const userStore = create((set) => ({
  user : null,
  isLogin : false,
  darkmode: false,
  toggleDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
  login: (user) => set({ user , isLogin:true }),
  logout: () => set({ user : null , isLogin:false }),
}));

export default userStore;