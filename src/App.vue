<script setup>
import Navigation from '@/components/VNavigation.vue';
</script>

<template>
  <header class="q-pa-sm">GTMC 商機管理</header>
  <div class="wrapper">
    <Navigation />
  </div>
  <main class="q-pa-md">
    <router-view />
  </main>
</template>

<style lang="scss">
@import '@/assets/base.css';

header {
  @include breakpoint.media(sm) {
    color: color.$black;
  }
  @include breakpoint.media(md) {
    color: color.$red-500;
  }
  @include breakpoint.media(lg) {
    color: color.$blue-500;
  }
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  header {
    border: 1px solid black;
    width: 100%;
    color: black;
  }
  .wrapper {
    width: 20%;
    border-right: 1px solid black;
  }
  main {
    width: 80%;
  }
}

h5 {
  color: black;
}
</style>
