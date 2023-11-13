<template>
  <v-container fluid >
    <v-list align="center">
      <v-list-item-group v-for="(job, index) in jobList.slice(0, offset)" :key="index">
        <v-list-item max-height="200" height="100" class="text rounded-lg pa-0 mb-8" border elevation="1">
          <v-row align="center" no-gutters>
            <v-col cols="1">
              <v-btn
                style="background-color: rgb(var(--v-theme-primary)); color: #F6F7FA; border-radius: 50%"
                class="ma-2 text text-h2"
                height="auto"
                variant="text"
              >J</v-btn>
            </v-col>
            <v-col align="start">
              <v-list-item-content>
                <v-list-item-subtitle class="text-caption">{{ job.empresa }}</v-list-item-subtitle>
                <v-list-item-title class="headline"><strong>{{ job.cargo }}</strong></v-list-item-title>
                <v-list-item-subtitle>
                  <v-icon size="20" icon="mdi mdi-google-maps"></v-icon>
                  {{ job.location }}
                  <v-icon  size="20" icon="mdi mdi-dots-square"></v-icon>
                  {{ job.turno }}
                  <span class="ms-3">R$ {{ job.remuneracao }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-col>
            <v-list-item-action class="me-10">
              <v-btn color="primary" size="large" @click="$router.push('/vagancy/index')">Ver Detalhes</v-btn>
            </v-list-item-action>
          </v-row>
        </v-list-item>
      </v-list-item-group>
      <v-btn color="primary" size="large" @click="loadMoreJobs">
        Ver Mais
        <v-icon icon="mdi mdi-arrow-right-thin-circle-outline ps-2"></v-icon>
      </v-btn>
    </v-list>
  </v-container>
</template>
<script lang="ts" setup>

import { ref } from "vue";

let offset = ref(5);
function loadMoreJobs() {
  offset.value += 5;
  props.jobList.slice(offset.value, offset.value + 5);

}
const props = defineProps({
  jobList: {
    type: Object,
    required: false,
    default: () => {}
  }
})
</script>

<style scoped>
.mdi {
  color: rgb(var(--v-theme-primary));
}
</style>
