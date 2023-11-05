<template>
  <TitleCard title="Cadastro"/>

  <v-window v-model="pages">
    <v-window-item :value="1">
      <First @next="goToSecondPage" />
    </v-window-item>

    <v-window-item :value="2">
      <Second @next="goToThirdPage" />
    </v-window-item>

    <v-window-item :value="3">
      <Third />
    </v-window-item>
  </v-window>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import TitleCard from '@/components/TitleCard.vue';
import First from './pages/First.vue';
import Second from './pages/Second.vue';
import Third from './pages/Third.vue';
import { Login } from '@/types/Login';

const data = reactive({
  
});

const pages = ref(1);
function goToSecondPage(form: Login) {
  pages.value = 2;
}

function goToThirdPage(form: Login) {
  pages.value = 3;
}
</script>

<style scoped></style>
