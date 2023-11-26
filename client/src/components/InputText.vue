<template>
    <v-label class="mb-1">{{ title }}</v-label>
    <v-text-field 
      variant="outlined"
      v-bind="props"
      @input="$emit('update:model-value', $event.target.value)" />
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  placeholder: String,
  modelValue: String,
  appendInnerIcon: String,
  prependInnerIcon: String,
  type: String,
  error: Boolean,
  errorMessages: String,
})
</script>

<style scoped>

</style>
