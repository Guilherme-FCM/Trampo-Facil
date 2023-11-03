<template>
  <TitleCard title="Cadastro"/>

  <v-window v-model="pages">
    <v-window-item :value="1">
      <First @next="pages = 2"/>
    </v-window-item>
    
    <v-window-item :value="2">
      <Second />
    </v-window-item>
  </v-window>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TitleCard from '@/components/TitleCard.vue';
import First from './pages/First.vue';
import Second from './pages/Second.vue';

const pages = ref(1);
</script>

<style scoped></style>
