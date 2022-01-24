<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  name: {
    required: true
  },
  options: {
    type: Array
  },
  columnName: {
    type: String
  }
});
const { value, errorMessage } = useField(props.name);
</script>

<template>
  <div class="row items-center no-wrap q-gutter-x-sm">
    <p class="text-no-wrap">{{ columnName }} &colon;</p>
    <q-select
      outlined
      square
      clearable
      v-model="value"
      label="請輸入"
      :options="options"
      class="col-grow q-pb-none"
      :error="!!errorMessage"
      :error-message="errorMessage"
    />
  </div>
</template>

<style scoped lang="scss">
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
