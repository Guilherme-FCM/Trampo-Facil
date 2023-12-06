<template>
  <v-app-bar flat class="header pl-4 pr-8 border-b">
    <Logo @click="router.push('/')"/>

    <div v-if="LoginStore.isLogged">
      <Avatar />
    </div>

    <div v-else>
      <v-btn class="mr-4" @click="router.push('/login')">Login</v-btn>
      <v-btn color="primary" variant="flat">Disponibiizar Vaga</v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts" setup>
import router from '@/router';
import Logo from './Logo.vue';
import { useLoginStore } from '@/store/auth.store';
import Avatar from './Avatar.vue';

const LoginStore = useLoginStore()
</script>

<style scoped>
.header {
  color: rgb(var(--v-theme-primary));
}
</style>
