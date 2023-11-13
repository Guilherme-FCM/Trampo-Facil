<template>
  <v-row justify="space-between" class="container py-2 mb-5">
    <v-col align="center" cols="12">
      <h2>{{ props.title }}
        <span class="text-h6" v-if="props.turno">({{ props.turno}}) - </span>
        <span v-if="props.subtitle">{{ props.subtitle}}</span>
      </h2>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: null,
  },
  turno: {
    type: String,
    default: null,
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
