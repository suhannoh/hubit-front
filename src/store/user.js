import { create } from "zustand";

const userStore = create((set) => ({
  user : null,
  isLogin : false,
  fetchCheck : false,
  darkmode: false,
  toggleDarkmode: () => set((state) => ({ darkmode: !state.darkmode })),
  login: (user) => set({ user , isLogin:true, fetchCheck: true }),
  logout: () => set({ user : null , isLogin:false, fetchCheck: true }),
  setFetchCheck: () => set((state) => ({...state, fetchCheck: true })),
}));

export default userStore;