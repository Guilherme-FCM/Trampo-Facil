<template>
  <v-col cols="12">
    <div v-for="(text, index) in list" :key="index" class="lista-com-ponto">
      {{ text }}
    </div>
  </v-col>
</template>
<script lang="ts" setup>
const props = defineProps({
  list: {
    type: Array,
    required: false,
    default: ()=> []
  },
});
</script>
<style scoped>

.lista-com-ponto::before {
  content: "\2022";
  margin-right: 8px;
  font-size: 2.5em;
  text-align: center;
}
</style>
