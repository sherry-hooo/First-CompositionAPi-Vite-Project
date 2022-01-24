<script>
export default {
  beforeRouteUpdate(to, from) {
    console.log('before');
    console.log(to, from);
    this.getCustomerData();
  }
  // methods: {
  //   async getCustomerData() {
  //     console.log('進到get function');
  //     await apiClient
  //       .getAllCustomerData()
  //       .then(res => (customerDataList.value = res.data));
  //   }
  // }
};
</script>

<script setup>
console.log('created customer management');

// import { onBeforeMount, onUnmounted } from 'vue';
// 引入表格
import VTable from '@/components/Business/VTable.vue';

// 取 route 物件
import { useRoute } from 'vue-router';
const route = useRoute();

// 從 api 取customerData
import apiClient from '@/plugins/api';
import { ref } from 'vue';
let customerDataList = ref([]);
async function getCustomerData() {
  console.log('進到get function');
  await apiClient
    .getAllCustomerData()
    .then(res => (customerDataList.value = res.data));
}

getCustomerData();

// onBeforeMount(() => {
//   console.log('客戶列表 onbeforeMount');
//   // getCustomerData();
// });

// onUnmounted(() => {
//   console.log('銷毀客戶列表');
// });

// 練習從 pinia 取資料
// import { useCounterStore } from '@/stores/counter';
// const store = useCounterStore();
// const { customerDataList } = store;
// console.log('pinia data', customerDataList);
</script>

<template>
  <p class="q-mb-md text-h5">客戶管理</p>
  <div
    v-if="route.path === '/customerManagement'"
    class="customerManagement_form q-pa-md"
  >
    <div class="search_area">
      <p class="text-h4">客戶管理</p>
      <div class="row justify-between q-mb-md">
        <p class="text-h6 q-ma-none">查詢條件</p>
        <router-link
          class="addBtn q-pa-sm"
          :to="{ path: '/addCustomer', name: 'VAddCustomer' }"
          >新增客戶</router-link
        >
      </div>
      <form class="column q-gutter-y-sm q-pa-sm">
        <label
          >客戶類別
          <select name="" id="">
            <option value="國企">國企</option>
          </select>
        </label>
        <label for="">關鍵字搜尋<input type="text" /></label>
      </form>
    </div>
    <section class="q-my-md">
      <p class="text-h6">客戶列表</p>
      <div class="q-py-sm">
        <!-- <q-table
          separator="cell"
          :rows="rows"
          :columns="columns"
          row-key="name"
        /> -->
        <VTable :apiData="customerDataList" />
      </div>
    </section>
  </div>

  <router-view />
</template>

<style scoped lang="scss">
.addBtn {
  border: 1px solid black;
  border-radius: 3px;
  color: black;
  text-decoration: none;
}

.customerManagement_form {
  border: 1px solid black;
}

form {
  border: 1px solid black;
}
</style>
