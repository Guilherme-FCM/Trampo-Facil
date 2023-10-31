<template>
  <v-app-bar class="header px-4">
    <v-row justify="space-between">
      <v-col>
        <Logo />
      </v-col>

      <v-col align="end">
        <v-btn class="mr-4">Login</v-btn>
        <v-btn color="primary" variant="flat">Disponibiizar Vaga</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue';
</script>

<style scoped>
.header {
  color: rgb(var(--v-theme-primary));
}
</style>
