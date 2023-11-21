<template>
  <TitleCard
    :title="VagaStore.$state?.cargo"
  />
  <v-container>
    <v-row>
      <v-col cols="12" align="center">
        <v-btn class="mr-8" size="large">Ver Empresa</v-btn>
        <v-btn size="large" color="primary">Candidatar-se</v-btn>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" size style="font-size: 20px">
          <div class="pb-3"><strong>Faixa salarial: </strong><span>R$ {{ VagaStore.$state?.remuneracao }}</span></div>
          <div class="pb-3"><strong>Turno: </strong><span>{{ VagaStore.$state?.turno }}</span></div>
          <div class="pb-3"><strong>Formato de Contratação: </strong><span>{{ VagaStore.$state?.contrato }}</span></div>
        </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h5">
        <div><strong>Descrição do trabalho</strong></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div>{{ VagaStore.$state?.especificacao }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import TitleCard from "@/components/TitleCard.vue";
import router from "@/router";
import { useRoute } from "vue-router";
import { useVagaStore } from "@/store/vaga.store";
import { onMounted} from "vue";

const VagaStore = useVagaStore()
const route = useRoute()

onMounted(() => {
  VagaStore.getById(route.params.id as string)
  if (!VagaStore.$state) router.push('/404')
});
</script>

<style scoped>

</style>
