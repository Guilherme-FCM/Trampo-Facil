<template>
  <v-container fluid >
    <v-list>
      <v-list-item v-for="(job, index) in modelValue.slice(0, offset)" :key="index">
        <v-list-item max-height="200" height="100" class="text rounded-lg pa-0 mb-8" border elevation="1">
          <v-row no-gutters>
            <v-col align="center" cols="1">
              <v-btn
                style="background-color: rgb(var(--v-theme-primary)); color: #F6F7FA; border-radius: 50%"
                class="ma-2 text text-h2"
                height="auto"
                variant="text"
              >J</v-btn>
            </v-col>
            <v-col class="d-flex align-left">
              <v-list-item>
                <v-list-item-subtitle class="text-caption">{{ job.empresa.razao_social }}</v-list-item-subtitle>
                <v-list-item-title class="headline"><strong>{{ job.cargo }}</strong></v-list-item-title>
                <v-list-item-subtitle>
                  <v-icon v-show="job.empresa.endereco" size="20" icon="mdi mdi-google-maps"></v-icon>
                  {{ job.empresa.endereco?.descricao }}
                  <v-icon v-show="job.turno" size="20" icon="mdi mdi-dots-square"></v-icon>
                  {{ job.turno }}
                  <span class="ms-3">R$ {{ job.remuneracao || '---' }}</span>
                </v-list-item-subtitle>
              </v-list-item>
            </v-col>
            <v-list-item-action class="me-10">
              <v-btn color="primary" size="large" @click="$router.push(`/vaga/${job.id}`)">Ver Detalhes</v-btn>
            </v-list-item-action>
          </v-row>
        </v-list-item>
      </v-list-item>
      <v-list-item align="center">
          <v-btn 
          color="primary" 
          size="large" 
          append-icon="mdi mdi-arrow-right-thin-circle-outline"
          align="center"
          @click="loadMoreJobs">
          Ver Mais
        </v-btn>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script lang="ts" setup>

import { Vaga } from "@/types/Vaga";
import { ref, PropType } from "vue";

let offset = ref(5);
function loadMoreJobs() {
  offset.value += 5;
  props.modelValue.slice(offset.value, offset.value + 5);

}
const props = defineProps({
  modelValue: {
    type: Array as PropType<Vaga[]>,
    required: false,
    default: []
  }
})
</script>

<style scoped>
.mdi {
  color: rgb(var(--v-theme-primary));
}
</style>
