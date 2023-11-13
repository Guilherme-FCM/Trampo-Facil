<template>
  <v-row>
    <v-col v-for="categoria in props.categories.slice(0, 10)" :key="categoria.id" class="align-center justify-center">
      <v-card flat height="170" width="233" class="d-flex align-center justify-center">
        <v-card-title style="width: 230px" class="text-center">
          <v-container
            fluid
            class="d-flex pa-6 icon-categories">
            <v-img
              :src="technology"
            />
          </v-container>
          {{ categoria.categoria }}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import technology from "@/assets/technology.png";

const props = defineProps({
  categories: {
    type: Object,
    required: false,
    default: () => ({})
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
