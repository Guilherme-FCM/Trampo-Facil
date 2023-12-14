<template>
  <section class="banner">
    <v-row justify="space-around" class="banner-container">
      <v-col cols="12" md="5" class="pt-10">
        <div class="title mb-8">
          <h1 class="text-h3">Encontre uma <span class="text-primary">Vaga</span></h1>
          <h1 class="text-h3">Que se Encaixa com</h1>
          <h1 class="text-h3">Suas <span class="text-primary">Experiências</span></h1>
        </div>
        <span>Oportunidades escolhidas a dedo para trabalhar em casa, remotamente, freelance, período integral, meio período, contrato e estágios.</span>
        <v-row class="mt-8">
          <v-col cols="8" class="pa-0">
            <v-text-field v-model="form.valor" placeholder="Procure por uma vaga..." variant="solo" class="search-field" density="compact" hide-details></v-text-field>
          </v-col>
          <v-col cols="4" class="pa-0">
            <v-btn @click="handlerSubmit" color="primary" size="large">Pesquisar</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" class="pa-0 mt-8">
        <v-img :src="banner" :height="imgHeight"></v-img>
      </v-col>
    </v-row>
  </section>
  <section class="popular-categories">
    <TitleHomePage title="Empresas Populares"/>
    <v-row class="pa-16">
      <CardsEmpresa :empresas="EmpresasStore.$state" />
    </v-row>
  </section>
  <section class="jobs">
    <TitleHomePage title="Vagas Quentes"/>
    <v-row class="pa-8">
      <ListDetail v-model="VagasStore.$state.vagas"/>
    </v-row>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import banner from "@/assets/banner.png"
import TitleHomePage from '@/components/TitleHomePage.vue'
import CardsEmpresa from '@/components/CardsEmpresa.vue'
import ListDetail from '@/components/ListDetailJobs.vue'
import { useVagasStore } from "@/store/vagas.store";
import { useEmpresasStore } from "@/store/empresas.store";
import { reactive } from 'vue'
import type { VagaValue } from "@/types/Vaga";

const VagasStore = useVagasStore();
const EmpresasStore = useEmpresasStore();

const form = reactive<VagaValue>({
  valor: '',
})

function handlerSubmit(){
  VagasStore.findByValue(form.valor)
}

let imgHeight = ref(0);

onMounted(async () => {
  VagasStore.getAll();
  EmpresasStore.getAll();

  setImgHeight();
  window.addEventListener('resize', setImgHeight);
})

function setImgHeight() {
 imgHeight.value = window.innerHeight - 60
}
</script>

<style scoped>
.banner {
  background-color: rgb(var(--v-theme-secondary));
}

.banner-container {
  max-width: 1800px;
  margin: auto;
}

h1 {
  font-weight: bold;
}

.search-field {
  background-color: white;
}
.popular-categories {
  background-color: #F6F7FA;
}
</style>
