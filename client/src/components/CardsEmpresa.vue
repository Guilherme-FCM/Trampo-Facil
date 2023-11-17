<template>
  <v-row>
    <v-col v-for="empresa in empresas.slice(0, 10)" :key="empresa.id">
      <v-card flat height="170" width="233" class="d-flex align-center justify-center">
        <v-card-title style="width: 230px" class="text-center">
          <v-container
            fluid
            class="d-flex pa-6 icon-categories">
            <v-img
              :src="technology"
            />
          </v-container>
          {{ empresa.razao_social }}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import technology from "@/assets/technology.png";
import { Empresa } from "@/types/Empresa";

defineProps({
  empresas: {
    type: Array as PropType<Empresa[]>,
    required: true,
    default: []
  }
})
</script>
<style scoped>
.icon-categories{
  border-radius: 50%;
  max-width: 80px;
  background-color: rgb(var(--v-theme-secondary));
}
</style>
