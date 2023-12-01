<!-- TODO: VOLTAR AQUI PRA CORRIGIR, NÃO ACHEI SOLUÇÃO-->
<template>
    <v-btn color="primary" size="large" @click="loadMoreJobs">
        Ver Mais
        <v-icon icon="mdi mdi-arrow-right-thin-circle-outline ps-2"></v-icon>
    </v-btn>
</template>
<script setup lang="ts">
import {Ref, ref} from "vue";

type Offset = number | Ref<number>;
const props = defineProps({
  jobList: {
    type: Array,
    required: false,
    default: () => [],
  },
  offset: {
    type: Offset,
    default: ref(5),
  },
});

function loadMoreJobs() {
  // eslint-disable-next-line vue/no-mutating-props
  props.offset.value += 5;
  return props.jobList.slice(0, props.offset.value);
}
</script>


<style scoped>
    .title {
        margin-top: 80px;
    }
</style>
