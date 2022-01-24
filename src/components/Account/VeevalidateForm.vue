<script setup>
import { ref } from 'vue';
import { Field, Form } from 'vee-validate';
import * as yup from 'yup';

const isPwd = ref(true);

const schema = yup.object({
  companyName: yup.string().required('欄位不可空白'),
  userName: yup.string().required('欄位不可空白'),
  account: yup.string().required('欄位不可空白'),
  email: yup.string().email().required('欄位不可空白'),
  password: yup.string().required('欄位不可空白').min(6),
  confirmedPassword: yup.string().required('欄位不可空白').min(6)
});

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
      <div class="row items-center no-wrap">
        <Field
          name="companyName"
          type="div"
          v-slot="{ errorMessage, value, field }"
        >
          <p class="col-2">廠商名稱 &colon;</p>
          <q-input
            autocomplete="username"
            square
            outlined
            label="請輸入公司名稱"
            :model-value="value"
            class="col-grow"
            v-bind="field"
            :error="!!errorMessage"
            :error-message="errorMessage"
          />
        </Field>
      </div>
      <div class="row items-center no-wrap">
        <Field
          name="userName"
          type="div"
          v-slot="{ errorMessage, value, field }"
        >
          <p class="col-2">姓名 &colon;</p>
          <q-input
            square
            outlined
            v-bind="field"
            label="請輸入姓名"
            class="col-grow"
            :model-value="value"
            :error="!!errorMessage"
            :error-message="errorMessage"
          />
        </Field>
      </div>
      <div class="row items-center no-wrap">
        <Field
          name="account"
          type="div"
          v-slot="{ errorMessage, value, field }"
        >
          <p class="col-2">帳號 &colon;</p>
          <q-input
            square
            outlined
            label="請輸入要使用的帳號名稱"
            class="col-grow"
            no-error-icon
            v-bind="field"
            :model-value="value"
            :error="!!errorMessage"
            :error-message="errorMessage"
          />
          <!-- <span class="q-pl-sm">{{ errors.account }}</span> -->
        </Field>
      </div>
      <div class="row items-center no-wrap">
        <Field name="email" type="div" v-slot="{ errorMessage, value, field }">
          <p class="col-2">Email &colon;</p>
          <q-input
            ref="nameRef"
            square
            outlined
            label="請輸入 Email 將驗證Email信件確認"
            class="col-grow"
            no-error-icon
            v-bind="field"
            :model-value="value"
            :error="!!errorMessage"
            :error-message="errorMessage"
          />
          <!-- <span class="q-pl-sm">{{ errors.account }}</span> -->
        </Field>
      </div>
      <div class="row items-center no-wrap">
        <Field
          name="password"
          type="div"
          v-slot="{ errorMessage, value, field }"
        >
          <p class="col-2">密碼 &colon;</p>
          <q-input
            outlined
            square
            :type="isPwd ? 'password' : 'text'"
            label="密碼 &colon; 6位以上中英數字"
            class="col-grow"
            v-bind="field"
            :model-value="value"
            :error="!!errorMessage"
            :error-message="errorMessage"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              ></q-icon>
            </template>
          </q-input>
          <!-- <span class="q-pl-sm">{{ errors.account }}</span> -->
        </Field>
      </div>
      <div class="row items-center no-wrap">
        <Field
          name="confirmedPassword"
          type="div"
          v-slot="{ errorMessage, value, field }"
        >
          <p class="col-2">確認密碼 &colon;</p>
          <q-input
            outlined
            square
            :type="isPwd ? 'password' : 'text'"
            label="確認密碼 &colon; 再輸入一次登入密碼"
            class="col-grow"
            v-bind="field"
            :model-value="value"
            :error="!!errorMessage"
            :error-message="errorMessage"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              ></q-icon>
            </template>
          </q-input>
        </Field>
      </div>

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

// .q-field {
//   background: black;
// }

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
