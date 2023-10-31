<template>
    <v-label class="mb-1">{{ title }}</v-label>
    <v-text-field variant="outlined" v-bind="props" @update:model-value="emitModelValue"/>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  placeholder: String,
})

const emit = defineEmits(['update'])
function emitModelValue(value: string) {
  emit('update', value)
}

</script>

<style scoped>

</style>