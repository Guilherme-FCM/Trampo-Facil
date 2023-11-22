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
      <Candidato v-if="userType === 1" @next="submit" />
      <Empresa v-else-if="userType === 2" @next="submit" />
    </v-window-item>
  </v-window>
  <ErrorAlert :text="error" v-model="alert"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TitleCard from '@/components/TitleCard.vue';
import First from './pages/First.vue';
import Second from './pages/Second.vue';
import Candidato from './pages/Candidato.vue';
import Empresa from './pages/Empresa.vue';
import ErrorAlert from "@/components/ErrorAlert.vue";
import { Login, RegisterCandidato, RegisterEmpresa } from '@/types/Auth';
import { useRegisterStore } from '@/store/register.store';
import router from '@/router';

const RegisterStore = useRegisterStore();
const userType = ref(0);
const alert = ref(false)
const error = ref('')

const pages = ref(1);
function goToSecondPage(form: Login) {
  updateFormData(form);
  pages.value = 2;
}

function goToThirdPage(form: number) {
  userType.value = form;
  pages.value = 3;
}

async function register() {
  if (userType.value === 1) {
    await RegisterStore.registerCandidato();
  } else if (userType.value === 2) {
    await RegisterStore.registerEmpresa();
  }
}

async function submit(form: RegisterCandidato | RegisterEmpresa) {
  try {
    updateFormData(form);
    await register();
    goToLogin();
  } catch (err: any) {
    alert.value = true
    error.value = String(err.response?.data?.message)
  }
}

function updateFormData(form: any) {
  RegisterStore.$state = { ...RegisterStore.$state, ...form };
}

function goToLogin() {
  router.push('/login');
}
</script>

<style scoped></style>
