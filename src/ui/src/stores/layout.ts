import { defineStore } from 'pinia';

export const useLayoutStore = defineStore({
  id: 'layout',
  persist: {
    enabled: true,
  },
  state: () => ({
    tabName: 'home',
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    setTabName(tabName: string) {
      this.tabName = tabName;
    },
  },
});
