<template>
  <TitleCard
    :title="candidato?.nome_completo"
  />
  <v-container>
    <v-row justify="space-between">
        <v-col cols="8" size style="font-size: 20px">
          <div class="pb-3"><strong>CPF: </strong><span>{{ candidato?.cpf }}</span></div>
          <div class="pb-3"><strong>E-mail: </strong><span>{{ candidato?.email }}</span></div>
          <div class="pb-3"><strong>Sexo: </strong><span>{{ candidato?.sexo }}</span></div>
          <div class="pb-3" v-if="candidato?.endereco?.descricao">
            <strong>Endereço: </strong><span>{{ candidato?.endereco?.descricao }}</span></div>
        </v-col>
        <v-col cols="3">
          <v-card>
            <v-img :src="semImg" />
          </v-card>
        </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h5">
        <div><strong>Minhas Experiências</strong></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="candidato?.experiencias?.length == 0">
        <div>Nenhuma experiência inserida</div>
      </v-col>
      <v-col cols="12" v-for="(experiencia, i) in candidato?.experiencias">
        <div>{{ experiencia.id }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import TitleCard from "@/components/TitleCard.vue";
import router from "@/router";
import { useCandidatoStore } from "@/store/candidato.store";
import { onMounted } from "vue";
import semImg from '@/assets/sem_imagem.png';
import { useLocalStorage } from "@/store/localStorage.store";
import { computed } from "vue";

const CandidatoStore = useCandidatoStore()
const LocalStorageStore = useLocalStorage()

const candidato = computed(() => CandidatoStore.$state)

onMounted(() => {
  const userId = LocalStorageStore.user?.id
  if (!userId)
    return router.push('/404')

  CandidatoStore.getById(userId)
});

</script>

<style scoped>

</style>