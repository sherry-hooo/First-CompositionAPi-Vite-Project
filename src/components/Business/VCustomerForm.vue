<script setup>
import * as yup from 'yup';
import { Form, Field } from 'vee-validate';
import { useRouter } from 'vue-router';
import VSelect from '@/components/VSelect.vue';
import VInput from '@/components/VInput.vue';

defineProps({
  formTitle: {
    type: String,
    required: true
  }
});

const router = useRouter();
const emits = defineEmits(['submitFormData']);
let customerData = {};
const customerCategoryOptions = ['國企', '民營'];
const schema = yup.object({
  customerName: yup.string().required('欄位不可空白'),
  customerCategory: yup.string().nullable().required('欄位不可空白'),
  licences: yup.string('0000').required('欄位不可空白'),
  contact: yup.string().required('欄位不可空白'),
  occupation: yup.string().required('欄位不可空白'),
  permissions: yup.string().nullable().required('欄位不可空白'),
  mobile: yup.string().required('欄位不可空白')
});

function onSubmit(value, actions) {
  customerData = value;
  emits('submitFormData', customerData);

  actions.resetForm();
  router.push({ path: '/customerManagement', name: 'VCustomerManagement' });
}
</script>

<template>
  <Form
    @submit="onSubmit"
    :validationSchema="schema"
    class="q-pa-sm full-width"
  >
    <h6 class="q-mb-sm">{{ formTitle }}</h6>
    <div class="row items-center justify-between q-gutter-y-md">
      <VInput
        class="col-12 col-md-5"
        :input="{
          columnName: '客戶名稱',
          inputLabel: '請輸入客戶名稱',
          name: 'customerName'
        }"
      />
      <!-- 疑問Q1 如果不用 Field 傳入 v-slot 就無法和 vee-validate 綁定? -->
      <Field name="customerCategory" v-slot="{ errorMessage, value, field }">
        <div class="col-12 col-md-5 row items-center q-gutter-x-sm">
          <p class="text-no-wrap">採購權限&colon;</p>
          <q-select
            outlined
            square
            clearable
            :modelValue="value"
            v-bind="field"
            :options="customerCategoryOptions"
            label="採購權限"
            class="col-grow q-pb-none"
            :error="!!errorMessage"
            :error-message="errorMessage"
          />
        </div>
      </Field>
      <!-- <VSelect
        class="col-5"
        name="customerCategory"
        label="請輸入客戶名稱"
        columnName="客戶類別"
        :options="['國企', '民營']"
      /> -->
      <VInput
        class="col-12 col-grow"
        :input="{
          columnName: '營業執照號碼/統編',
          inputLabel: '請輸入營業執照號碼/統編',
          name: 'licences'
        }"
      />
      <VInput
        class="col-12 col-md-5"
        :input="{
          columnName: '聯絡人',
          inputLabel: '聯絡人',
          name: 'contact'
        }"
      />
      <VInput
        class="col-12 col-md-5"
        :input="{
          columnName: '職稱',
          inputLabel: '請輸入職稱',
          name: 'occupation'
        }"
      />
      <VSelect
        class="col-12 col-md-5"
        name="permissions"
        label=""
        columnName="採購權限"
        :options="['A採購決策者', 'B']"
      />
      <VInput
        class="col-12 col-md-5"
        :input="{
          columnName: 'Mobile',
          inputLabel: '',
          name: 'mobile'
        }"
      />
    </div>
    <div>
      <!-- <router-link
        :to="{ path: '/customerManagement', name: 'customerManagement' }"
      > -->
      <q-btn
        :label="formTitle === '新增客戶' ? '新增' : '儲存'"
        type="submit"
        color="primary"
      />
      <!-- </router-link> -->
    </div>
    <router-link :to="{ path: '/customerManagement' }">回列表</router-link>
  </Form>
</template>

<style scoped lang="scss">
form {
  border: 1px solid black;
}
</style>
