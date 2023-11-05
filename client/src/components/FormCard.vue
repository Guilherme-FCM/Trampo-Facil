<template>
  <v-card class="card">
    <v-card-item>
      <slot></slot>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">

</script>

<style scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.15);
}
</style>