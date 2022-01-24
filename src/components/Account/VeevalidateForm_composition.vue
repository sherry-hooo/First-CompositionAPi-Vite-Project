<script setup>
import { Form } from 'vee-validate';
import VInput from '@/components/VInput.vue';
import * as yup from 'yup';

// const isPwd = ref(true);

const schema = yup.object({
  companyName: yup.string().required('欄位不可空白'),
  userName: yup.string().required('欄位不可空白'),
  account: yup.string().required('欄位不可空白'),
  email: yup.string().email().required('欄位不可空白'),
  password: yup.string().required('欄位不可空白').min(6),
  confirmedPassword: yup.string().required('欄位不可空白').min(6)
});
const inputGroup = [
  { columnName: '公司', name: 'companyName', inputLabel: '請輸入公司名稱' },
  { columnName: '姓名', name: 'userName', inputLabel: '請輸入使用者名稱' },
  { columnName: '帳號', name: 'account', inputLabel: '請輸入帳號' },
  { columnName: '信箱', name: 'email', inputLabel: '請輸入信箱名稱' }
];
// useForm({
//   validationSchema: schema
// });

function onSubmit(values, actions) {
  console.log(JSON.stringify(values, null, 2));
  actions.resetForm();
}
</script>

<template>
  <p>veeValidate form</p>
  <p>嘗試用 quasar input 搭配 vee-validate 做驗證欄位</p>

  <div class="q-pa-md">
    <Form @submit="onSubmit" class="q-gutter-md" :validationSchema="schema">
      <VInput
        v-for="(input, index) in inputGroup"
        :key="index"
        :input="input"
      />
      <div>
        <q-btn label="申請" type="submit" color="primary" />
      </div>
    </Form>
  </div>
</template>

<style scoped lang="scss">
form {
  color: black;
}

::v-deep .q-field__bottom--animated {
  transform: unset;
  position: absolute;
  top: 0;
  left: 100%;
  right: -100%;
  /* 沒有這個會折行？ */
  bottom: unset;
}
</style>
