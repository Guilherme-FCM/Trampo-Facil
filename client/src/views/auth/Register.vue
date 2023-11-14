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
      <Candidato v-if="userType === 1" @next="finish" />
      <Empresa v-else-if="userType === 2" @next="finish" />
    </v-window-item>
  </v-window>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TitleCard from '@/components/TitleCard.vue';
import First from './pages/First.vue';
import Second from './pages/Second.vue';
import Candidato from './pages/Candidato.vue';
import Empresa from './pages/Empresa.vue';
import { Login, RegisterCandidato, RegisterEmpresa } from '@/types/Auth';
import { useRegisterStore } from '@/store/register.store';

const RegisterStore = useRegisterStore();
const userType = ref(0);

const pages = ref(1);
function goToSecondPage(form: Login) {
  RegisterStore.$state = { ...RegisterStore.$state, ...form };
  pages.value = 2;
}

function goToThirdPage(form: number) {
  userType.value = form;
  pages.value = 3;
}

function finish(form: RegisterCandidato | RegisterEmpresa) {
  RegisterStore.$state = { ...RegisterStore.$state, ...form };
  RegisterStore.handle();
}
</script>

<style scoped></style>
