<script setup>
import QuasarForm from '@/components/Account/QuasarForm.vue';
import VeevalidateForm from '@/components/Account/VeevalidateForm.vue';
import VeevalidateComposition from '@/components/Account/VeevalidateForm_composition.vue';
import { shallowRef } from 'vue';
const tabComponent = shallowRef(QuasarForm);
</script>

<template>
  <h5>帳號申請頁面</h5>
  <div class="tabComponent_group q-my-md">
    <button @click="tabComponent = QuasarForm" class="q-mr-sm">
      Quasar 驗證表單
    </button>
    <button @click="tabComponent = VeevalidateForm" class="q-mr-sm">
      VeeValidate composition 驗證表單
    </button>
    <button class="q-mr-sm" @click="tabComponent = VeevalidateComposition">
      VeeValidate component 驗證表單
    </button>
  </div>

  <component :is="tabComponent" />
</template>
