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
  <section class="popular-categories">
    <TitleHomePage title="Categorias Populares"/>
    <v-row class="pa-16">
      <CardCategories :categories="categorias" />
    </v-row>
  </section>
  <section class="jobs">
    <TitleHomePage title="Empregos Populares"/>
    <v-row class="pa-8">
      <ListDetail :job-list="jobList"/>
    </v-row>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import banner from "@/assets/banner.png"
import TitleHomePage from '@/components/TitleHomePage.vue'
import CardCategories from '@/components/CardCategories.vue'
import ListDetail from '@/components/ListDetailJobs.vue'

let imgHeight = ref(0);
onMounted(() => {
  setImgHeight();
  window.addEventListener('resize', setImgHeight);
})

function setImgHeight() {
 imgHeight.value = window.innerHeight - 60
}

const categorias = [
  { id: 1, categoria: 'Agricultura' },
  { id: 2, categoria: 'Pesca' },
  { id: 3, categoria: 'Silvicultura' },
  { id: 4, categoria: 'Mineração' },
  { id: 5, categoria: 'Indústria manufatureira' },
  { id: 6, categoria: 'Construção' },
  { id: 7, categoria: 'Energia' },
  { id: 8, categoria: 'Tecnologia da informação e eletrônicos' },
  { id: 9, categoria: 'Educação' },
  { id: 10, categoria: 'Saúde' },
  { id: 11, categoria: 'Finanças' },
  { id: 12, categoria: 'Varejo' },
  { id: 13, categoria: 'Hotelaria e turismo' },
  { id: 14, categoria: 'Transporte e logística' },
  { id: 15, categoria: 'Serviços de TI' },
  { id: 16, categoria: 'Consultoria' },
  { id: 17, categoria: 'Entretenimento' },
  { id: 18, categoria: 'Pesquisa e desenvolvimento' },
  { id: 19, categoria: 'Tecnologia da informação avançada' },
  { id: 20, categoria: 'Consultoria estratégica' },
  { id: 21, categoria: 'Serviços de informação' },
  { id: 22, categoria: 'Administração pública' },
  { id: 23, categoria: 'Serviços públicos' },
  { id: 24, categoria: 'Organizações sem fins lucrativos' }
];
const jobList= [
  {
    id:1,
    cargo: 'Fresher UI/UX Designer (3 Year Exp.)',
    empresa: 'Match Company Limited',
    especificacao: 'Laravel Developer',
    location: 'Nairobi, Kenya',
    turno: 'Full Time',
    remuneracao: "15.000",
  },
  {
    id:2,
    cargo: 'Fresher UI/UX Designer (3 Year Exp.)',
    empresa: 'Match Company Limited',
    location: 'Nairobi, Kenya',
    turno: 'Full Time',
    remuneracao: "15.000",
  },
  {
    id:3,
    cargo: 'Fresher UI/UX Designer (3 Year Exp.)',
    empresa: 'Match Company Limited',
    location: 'Nairobi, Kenya',
    turno: 'Full Time',
    remuneracao: "15.000",
  },
  {
    id:4,
    cargo: 'Fresher UI/UX Designer (3 Year Exp.)',
    empresa: 'Match Company Limited',
    location: 'Nairobi, Kenya',
    turno: 'Full Time',
    remuneracao: "15.000",
  },
  {
    id:5,
    cargo: 'Fresher UI/UX Designer (3 Year Exp.)',
    empresa: 'Match Company Limited',
    location: 'Nairobi, Kenya',
    turno: 'Full Time',
    remuneracao: "15.000",
  },
  {
    id:6,
    cargo: 'Fresher UI/UX Designer (3 Year Exp.)',
    empresa: 'Match Company Limited',
    location: 'Nairobi, Kenya',
    turno: 'Full Time',
    remuneracao: "15.000",
  },
  {
    id:7,
    cargo: 'Fresher UI/UX Designer (3 Year Exp.)',
    empresa: 'Match Company Limited',
    location: 'Nairobi, Kenya',
    turno: 'Full Time',
    remuneracao: "15.000",
  },
  {
    id:8,
    cargo: 'Fresher UI/UX Designer (3 Year Exp.)',
    empresa: 'Match Company Limited',
    location: 'Nairobi, Kenya',
    turno: 'Full Time',
    remuneracao: "15.000",
  },
  {
    id:9,
    cargo: 'Fresher UI/UX Designer (3 Year Exp.)',
    empresa: 'Match Company Limited',
    location: 'Nairobi, Kenya',
    turno: 'Full Time',
    remuneracao: "15.000",
  },
  {
    id:10,
    cargo: 'Fresher UI/UX Designer (3 Year Exp.)',
    empresa: 'Match Company Limited',
    location: 'Nairobi, Kenya',
    turno: 'Full Time',
    remuneracao: "15.000",
  },
]
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
