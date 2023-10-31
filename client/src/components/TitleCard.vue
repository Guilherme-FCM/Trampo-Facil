<template>
  <v-row justify="space-between" class="container py-2">
    <v-col align="center" cols="12">
      <h2>{{ props.title }}</h2>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.container {
  background-color: rgb(var(--v-theme-secondary));
  margin: 0;
  width: 100%;
}
</style>