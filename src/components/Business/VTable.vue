<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

defineProps({
  apiData: {
    type: Array,
    default() {
      return ['no api data'];
    }
  }
});

function editCustomerData(id) {
  router.push({
    path: '/editCustomer',
    name: 'VEditCustomer',
    params: { id: id }
  });
}

// 從api 取
// import apiClient from '@/plugins/api';
// let customerDataList2 = ref([]);

// async function getCustomerData() {
//   await apiClient
//     .getCustomerData()
//     .then(res => (customerDataList2.value = res.data));
//   apiClient.getCustomerData().then(res => console.log(res.data));
// }
// getCustomerData();
</script>

<template>
  <div class="">
    <q-markup-table separator="cell">
      <thead>
        <tr>
          <th class="text-center">客戶名稱</th>
          <th class="text-center">客戶類別</th>
          <th class="text-center">營業執照</th>
          <th class="text-center">聯絡人</th>
          <th class="text-center">職稱</th>
          <th class="text-center">更新時間</th>
          <th class="text-center">編輯</th>
          <th class="text-center">刪除</th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="bordered"
          v-for="customerData in apiData"
          :key="customerData.id"
        >
          <td class="text-center bordered">{{ customerData.customerName }}</td>
          <td class="text-center bordered">
            {{ customerData.customerCategory }}
          </td>
          <td class="text-center">{{ customerData.mobile }}</td>
          <td class="text-center">{{ customerData.contact }}</td>
          <td class="text-center">{{ customerData.occupation }}</td>
          <td class="text-center">{{ customerData.updateTime }}</td>
          <td class="text-center">
            <p @click="editCustomerData(customerData.id)" class="q-ma-none">
              編輯
            </p>
          </td>
          <td class="text-center">刪除</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
