<script setup>
import { useField } from 'vee-validate';

const props = defineProps({
  input: {
    type: Object,
    required: true
  }
});
let { value, errorMessage } = useField(props.input.name);
</script>

<template>
  <div class="row items-center no-wrap q-gutter-x-sm">
    <p class="">{{ input.columnName }} &colon;</p>
    <q-input
      square
      outlined
      class="col-grow"
      v-model="value"
      :label="input.inputLabel"
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
