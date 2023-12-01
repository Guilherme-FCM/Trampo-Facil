<template>
  <v-col cols="12">
    <div class="text-h6">
      {{ moreTile }} {{ title }}
    </div>
  </v-col>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  moreTile: {
    type: String,
    default: ''
  }
});
</script>
