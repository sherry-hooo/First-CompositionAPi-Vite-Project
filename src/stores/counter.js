import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 1,
    customerDataList: [
      {
        id: 1,
        customerName: '客戶1',
        customerCategory: '民營',
        licences: 12345678,
        contact: 'Sherry',
        occupation: 'Manager',
        permissions: 'A採購決策者',
        mobile: '886 - 912345678',
        updateTime: '2021 / 1 / 22'
      }
    ]
  }),
  getters: {
    doubleCount: state => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++;
    }
  }
});
