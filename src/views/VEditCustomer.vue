<script setup>
import VCustomerForm from '@/components/Business/VCustomerForm.vue';
// import { useCounterStore } from '@/stores/counter';
// const store = useCounterStore();

defineProps({
  id: {
    type: String,
    required: true
  }
});

// 從 route 中知道客戶id
import { useRoute } from 'vue-router';
const route = useRoute();
const customerId = +route.params.id;

// 從 api 取出的資料放入 inital-value 中
import apiClient from '@/plugins/api';
import { ref } from 'vue';
let singleCustomerData = ref({});

async function getSingleCustomerData() {
  // const { data } = await apiClient.getSingleCustomerData(customerId);
  apiClient
    .getSingleCustomerData(customerId)
    .then(res => (singleCustomerData.value = res.data));
}
getSingleCustomerData();

function receivedRevisedFormData(data) {
  console.log(data);
  apiClient.patchCustomerData(customerId, data);

  // 練習修改 pinia 中的資料
  // store.$patch(state => {
  //   state.customerDataList.forEach(customer => {
  //     if (customer.id === data.id) {
  //       customer = data;
  //     }
  //     return customer;
  //   });
  // });
}
</script>

<template>
  <VCustomerForm
    :initial-values="singleCustomerData"
    formTitle="編輯客戶"
    @submitFormData="receivedRevisedFormData"
  />
</template>
