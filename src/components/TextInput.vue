<script>
export default {
  props: {
    id: String,
    labelText: String,
    modelValue: String,
  },
}
</script>

<template>
  <label :for="id">{{ labelText }}</label>
  <input
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    :id="id"
  />
</template>

<style scoped>
input {
  width: 100%;
  height: 30px;
  border-radius: 7px;
  padding: 7px;
}
</style>
