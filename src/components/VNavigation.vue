<script setup>
import { ref } from 'vue';
const openBusinessList = ref(true);
const openColumnList = ref(true);
const openAccountList = ref(true);
</script>

<template>
  <nav class="column">
    <router-link to="/">帳號申請</router-link>
    <div @click="openAccountList = !openAccountList">
      組織帳號管理 V<i class="fa-fw fas fa-chevron-down"></i>
    </div>
    <router-link to="/areaGroup" v-show="openAccountList"
      >地區群組管理</router-link
    >
    <router-link to="/areaGroup" v-show="openAccountList">帳號管理</router-link>
    <div @click="openColumnList = !openColumnList">
      欄位項目管理 V<i class="fa-fw fas fa-chevron-down"></i>
    </div>
    <router-link to="/customerColumn" v-show="openColumnList"
      >客戶欄位項目</router-link
    >
    <router-link to="/businessColumn" v-show="openColumnList"
      >商機欄位項目</router-link
    >
    <div @click="openBusinessList = !openBusinessList">
      商機管理 V<i class="fa-fw fas fa-chevron-down"></i>
    </div>
    <router-link to="/customerManagement" v-show="openBusinessList"
      >客戶列表</router-link
    >
    <router-link to="/businessManagement" v-show="openBusinessList"
      >商機列表</router-link
    >
  </nav>
</template>

<style scoped lang="scss">
nav {
  border-bottom: 1px solid black;
  > a,
  div {
    padding: 20px;
    color: black;
    text-decoration: none;
    text-align: center;
    &:not(:last-child) {
      border-bottom: 1px solid black;
    }
    &.router-link-exact-active {
      color: black;
      font-weight: 700;
    }
    &:hover {
      background: gray;
    }
  }
}
</style>
