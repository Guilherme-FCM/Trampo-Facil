<template>
  <section class="banner">
    <v-row justify="space-around" class="banner-container">
      <v-col cols="5">
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

  <section>
    
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import banner from "@/assets/banner.png"

let imgHeight = ref(0);
onMounted(() => {
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

.title {
  margin-top: 80px;
}

.search-field {
  background-color: white;
}
</style>
