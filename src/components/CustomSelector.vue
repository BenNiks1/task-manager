<script>
export default {
  props: {
    id: String,
    labelText: String,
    modelValue: String,
    options: Array,
  },
}
</script>

<template>
  <label :for="id">{{ labelText }}</label>
  <select
    class="create__form_field"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :selected="modelValue === option"
    >
      {{ option }}
    </option>
  </select>
</template>

<style scoped>
select {
  width: 100%;
  height: 30px;
  border-radius: 7px;
  padding: 7px;
}
</style>
