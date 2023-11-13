<template>
  <v-app-bar flat class="header px-4 border-b">
    <Logo @click="router.push('/')"/>
    <v-btn class="mr-4"  @click="router.push('/login')">Login</v-btn>
    <v-btn color="primary" variant="flat">Disponibiizar Vaga</v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import router from '@/router';
import Logo from './Logo.vue';
</script>

<style scoped>
.header {
  color: rgb(var(--v-theme-primary));
}
</style>
