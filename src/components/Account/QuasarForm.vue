<script setup>
import { reactive, ref } from 'vue';

const isRequiredRule = [val => !!val || '欄位不可空白'];
const passwordRule = [
  val => !!val || '欄位不可空白',
  val =>
    /(?=.*[0-9])(?=.*[a-zA-Z])([0-9a-zA-Z\p{Script=Han}]+){6,}$/u.test(val) ||
    '密碼格式錯誤'
];

const confirmedPasswordRule = [
  val => !!val || '欄位不可空白',
  val => val === formData.password || '與登入密碼輸入不同'
];

const emailRule = [
  val => !!val || '欄位不可空白',
  val =>
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(
      val
    ) || '格式不正確'
];

const isPwd = ref(true);
const formData = reactive({
  companyName: '',
  password: '',
  userName: '',
  account: '',
  email: '',
  confirmedPassword: ''
});

function onSubmit() {
  console.log(formData);
}
</script>

<template>
  <p>quasar form</p>
  <p>嘗試用 quasar 內建的 rules 驗證欄位</p>
  <div class="q-pa-md">
    <q-form @submit.prevent.stop="onSubmit" class="q-gutter-md">
      <div class="row items-center no-wrap">
        <p class="col-2">廠商名稱 &colon;</p>
        <q-input
          square
          outlined
          label="請輸入公司名稱"
          lazy-rules
          v-model="formData.companyName"
          :rules="isRequiredRule"
          class="col-grow"
          no-error-icon
        />
      </div>
      <!-- <span>{{ errorMessage }}</span> -->
      <div class="row items-center no-wrap">
        <p class="col-2">姓名 &colon;</p>
        <q-input
          square
          outlined
          v-model="formData.userName"
          label="請輸入姓名"
          :rules="isRequiredRule"
          class="col-grow"
          no-error-icon
        />
      </div>
      <div class="row items-center no-wrap">
        <p class="col-2">帳號 &colon;</p>
        <q-input
          ref="nameRef"
          square
          outlined
          v-model="formData.account"
          label="請輸入要使用的帳號名稱"
          lazy-rules
          :rules="isRequiredRule"
          class="col-grow"
          no-error-icon
        />
      </div>
      <div class="row items-center no-wrap">
        <p class="col-2">Email &colon;</p>
        <q-input
          ref="nameRef"
          square
          outlined
          v-model="formData.email"
          label="請輸入 Email 將驗證Email信件確認"
          lazy-rules
          :rules="emailRule"
          class="col-grow"
          no-error-icon
        />
      </div>
      <div class="row items-center no-wrap">
        <p class="col-2">密碼 &colon;</p>
        <q-input
          v-model="formData.password"
          outlined
          square
          :type="isPwd ? 'password' : 'text'"
          label="密碼 &colon; 6位以上中英數字"
          class="col-grow"
          lazy-rules
          :rules="passwordRule"
          no-error-icon
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            ></q-icon>
          </template>
        </q-input>
      </div>
      <div class="row items-center no-wrap">
        <p class="col-2">確認密碼 &colon;</p>
        <q-input
          v-model="formData.confirmedPassword"
          outlined
          square
          :type="isPwd ? 'password' : 'text'"
          label="確認密碼 &colon; 再輸入一次登入密碼"
          class="col-grow"
          :rules="confirmedPasswordRule"
          lazy-rules
          no-error-icon
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            ></q-icon>
          </template>
        </q-input>
      </div>

      <div>
        <q-btn label="申請" type="submit" color="primary" />
      </div>
    </q-form>
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
