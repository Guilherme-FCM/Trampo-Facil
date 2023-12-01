<template>
  <TitleCard
    :title="EmpresaStore.$state?.razao_social"
  />
  <v-container>
    <v-row justify="space-between">
        <v-col cols="8" size style="font-size: 20px">
          <div class="pb-3"><strong>CNPJ: </strong><span>{{ EmpresaStore.$state?.cnpj }}</span></div>
          <div class="pb-3"><strong>E-mail: </strong><span>{{ EmpresaStore.$state?.email }}</span></div>
          <div class="pb-3"><strong>Área de Atuação: </strong><span>{{ EmpresaStore.$state?.area_atuacao }}</span></div>
          <div class="pb-3" v-if="EmpresaStore.$state?.endereco?.descricao">
            <strong>Endereço: </strong><span>{{ EmpresaStore.$state?.endereco?.descricao }}</span></div>
        </v-col>
        <v-col cols="3">
          <v-card>
            <v-img :src="semImg" />
          </v-card>
        </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h5">
        <div><strong>Descrição da Empresa</strong></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div>...</div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import TitleCard from "@/components/TitleCard.vue";
import router from "@/router";
import { useRoute } from "vue-router";
import { useEmpresaStore } from "@/store/empresa.store";
import { onMounted } from "vue";
import semImg from '@/assets/sem_imagem.png';

const EmpresaStore = useEmpresaStore()
const route = useRoute()

onMounted(() => {
  EmpresaStore.getById(route.params.id as string)
  if (!EmpresaStore.$state) router.push('/404')
});
</script>

<style scoped>

</style>
