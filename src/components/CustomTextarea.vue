<script>
export default {
  props: {
    id: String,
    labelText: String,
    modelValue: String,
  },
};
</script>

<template>
  <label :for="id">{{ labelText }}</label>
  <textarea
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    :id="id"
  />
</template>

<style scoped>
textarea {
  max-width: 578px;
  min-width: 578px;
  width: 100%;
  min-height: 30px;
  border-radius: 7px;
  padding: 7px;
}
@media screen and (max-width: 640px) {
  textarea {
    min-width: unset;
  }
}
</style>
