<script setup>
import VCustomerForm from '@/components/Business/VCustomerForm.vue';
import apiClient from '@/plugins/api';
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();

function receiveFormData(data) {
  store.$patch(state => {
    state.customerDataList.push({
      id: new Date().valueOf(),
      updateTime: new Date(),
      ...data
    });
  });
  // 收到送出的新增客戶資料後呼叫 post api function
  postCustomerData(data);
}

// post api
function postCustomerData(data) {
  apiClient
    .postCustomerData({
      id: new Date().valueOf(),
      updateTime: new Date(),
      ...data
    })
    .then(res => console.log(res));
}
</script>

<template>
  新增客戶
  <VCustomerForm formTitle="新增客戶" @submitFormData="receiveFormData" />
</template>
