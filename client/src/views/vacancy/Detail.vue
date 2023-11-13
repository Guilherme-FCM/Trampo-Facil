<template>
  <TitleCard
    :title="job.cargo"
    :turno="job.turno"
    :subtitle="job.empresa"
  />
  <v-container>
    <v-row>
      <v-col cols="12" align="center">
        <v-btn class="mr-8" size="large">Ver Empresa</v-btn>
        <v-btn size="large" color="primary">Cadastrar</v-btn>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" size style="font-size: 20px">
          <div class="pb-3"><strong>Qualificação Mínima: </strong><span>Bachelor</span></div>
          <div class="pb-3"><strong>Nível de experiência: </strong><span>Mid Level</span></div>
          <div class="pb-3"><strong>Duração da experiência: </strong><span>2 Years</span></div>
          <div class="pb-3"><strong>localização: </strong><span>{{ job.location }}</span></div>
          <div class="pb-3"><strong>Prazo de inscrição: </strong><span>{{ job.prazo }}</span></div>
          <div class="pb-3" ><strong>Faixa salarial: </strong><span>R$ {{ job.remuneracao }}</span></div>
        </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h5">
        <div><strong>Descrição do trabalho</strong></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div>
          We are searching for a Laravel developer to build web applications for our company. In this role, you will design and create projects using
          Laravel framework and PHP, and assist the team in delivering high-quality web applications, services, and tools for our business.
          <br/>
          <br/>
          To ensure success as a Laravel developer you should be adept at utilizing Laravel's GUI and be able to design a PHP application from start
          to finish. A top-notch Laravel developer will be able to leverage their expertise and experience of the framework to independently produce
          complete solutions in a short turnaround time.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <TitleDetail title="Requerimentos" :more-tile="job.cargo"/>
      <ListDetail :list="job.requerimentos" />
    </v-row>
    <v-row>
      <TitleDetail title="Responsabilidade"/>
      <ListDetail :list="job.responsabilidades" />
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>

const job = {
  id:1,
  cargo: 'Fresher UI/UX Designer (3 Year Exp.)',
  especificacao: 'Laravel Developer',
  empresa: 'Match Company Limited',
  location: 'Nairobi, Kenya',
  turno: 'Full Time',
  remuneracao: "15.000",
  prazo: '08/12/2022',
  requerimentos: [
    'A degree in programming, computer science, or a related field.',
    'A degree in programming, computer science, or a related field.',
    'A degree in programming, computer science, or a related field.',
    'A degree in programming, computer science, or a related field.',
    'A degree in programming, computer science, or a related field.',
    'A degree in programming, computer science, or a related field.',
  ],
  responsabilidades: [
    'Discussing project aims with the client and development team.',
    'Discussing project aims with the client and development team.',
    'Discussing project aims with the client and development team.',
    'Discussing project aims with the client and development team.',
    'Discussing project aims with the client and development team.',
    'Discussing project aims with the client and development team.',
    'Discussing project aims with the client and development team.',
    'Discussing project aims with the client and development team.',
  ]
}
import TitleCard from "@/components/TitleCard.vue";
import ListDetail from "@/components/ListDetail.vue";
import TitleDetail from "@/components/TitleDetail.vue";
</script>

<style scoped>

</style>
