<template>
  <section class="banner">
    <v-row justify="space-around" class="banner-container">
      <v-col cols="5" class="pt-10">
        <div class="title mb-8">
          <h1>Encontre uma <span class="text-primary">Vaga</span></h1>
          <h1>Que se Encaixa com</h1>
          <h1>Suas <span class="text-primary">Experiências</span></h1>
        </div>
        <span>Oportunidades escolhidas a dedo para trabalhar em casa, remotamente, freelance, período integral, meio período, contrato e estágios.</span>
        <v-row class="mt-8">
          <v-col cols="8" class="pa-0">
            <v-text-field placeholder="Procure por uma vaga..." variant="solo" class="search-field" density="compact" hide-details></v-text-field>
          </v-col>
          <v-col class="pa-0">
            <v-btn color="primary" size="large">Pesquisar</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="pa-0">
        <v-img :src="banner" :height="imgHeight"></v-img>
      </v-col>
    </v-row>
  </section>
  <section class="popular-categories">
    <TitleHomePage title="Empresas Populares"/>
    <v-row class="pa-16">
      <CardsEmpresa :empresas="EmpresaStore.$state" />
    </v-row>
  </section>
  <section class="jobs">
    <TitleHomePage title="Vagas Quentes"/>
    <v-row class="pa-8">
      <ListDetail :job-list="VagaStore.$state"/>
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
import { useEmpresaStore } from "@/store/empresa.store";

const VagaStore = useVagasStore();
const EmpresaStore = useEmpresaStore();

let imgHeight = ref(0);
onMounted(async () => {
  VagaStore.getAll();
  EmpresaStore.getAll();

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
  font-size: 50px;
  height: 60px;
}

.search-field {
  background-color: white;
}
.popular-categories {
  background-color: #F6F7FA;
}
</style>
