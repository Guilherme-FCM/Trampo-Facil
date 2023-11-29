<template>
  <TitleCard :title="usuario?.nome_completo || usuario?.razao_social" />
  <v-container>
    <v-row justify="space-between">
        <v-col cols="8" size style="font-size: 20px">
          <div v-if="usuario?.cnpj" class="pb-3"><strong>CNPJ: </strong><span>{{ usuario?.cnpj }}</span></div>
          <div v-if="usuario?.cpf" class="pb-3"><strong>CPF: </strong><span>{{ usuario?.cpf }}</span></div>
          <div class="pb-3"><strong>E-mail: </strong><span>{{ usuario?.email }}</span></div>
          <div v-if="usuario?.sexo" class="pb-3"><strong>Sexo: </strong><span>{{ usuario?.sexo }}</span></div>
          <div v-if="usuario?.area_atuacao" class="pb-3"><strong>Área de Atuação: </strong><span>{{ usuario?.area_atuacao }}</span></div>
          <div class="pb-3" v-if="usuario?.endereco?.descricao">
            <strong>Endereço: </strong><span>{{ usuario?.endereco?.descricao }}</span></div>
        </v-col>
        <v-col cols="3">
          <v-card>
            <v-img :src="semImg" />
          </v-card>
        </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h5">
        <div v-if="usuario?.experiencias"><strong>Minhas Experiências</strong></div> 
        <div v-if="usuario?.vagas"><strong>Minhas Vagas</strong></div> 
      </v-col>
      <v-col cols="auto">
        <v-btn>Criar</v-btn>
      </v-col>
    </v-row>

    <v-row v-if="usuario?.experiencias">
      <v-col cols="12" v-if="usuario.experiencias.length == 0">
        <div>Nenhuma experiência inserida</div>
      </v-col>
      <v-col cols="12" v-else>
        <v-table>
          <thead>
            <tr>
              <th class="text-left" v-for="(title, i) in experienciaHeaders" :key="i">
                {{ title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in usuario?.experiencias" :key="i">
              <td>{{ item.cargo }}</td>
              <td>{{ item.descricao }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>

    <v-row v-if="usuario?.vagas">
      <v-col cols="12" v-if="usuario.vagas.length == 0">
        <div>Nenhuma vaga inserida</div>
      </v-col>
      <v-col cols="12" v-else>
        <v-table>
          <thead>
            <tr>
              <th class="text-left" v-for="(title, i) in vagaHeaders" :key="i">
                {{ title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in usuario?.vagas" :key="i">
              <td>{{ item.cargo }}</td>
              <td>{{ item.remuneracao }}</td>
              <td>{{ item.turno }}</td>
              <td>{{ item.contrato }}</td>
            </tr>
          </tbody>
        </v-table>
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
import { useEmpresaStore } from "@/store/empresa.store";
import { Candidato } from "@/types/Candidato";
import { Empresa } from "@/types/Empresa";
import { ref } from "vue";

const CandidatoStore = useCandidatoStore()
const EmpresaStore = useEmpresaStore()
const LocalStorageStore = useLocalStorage()

const usuario = ref<Candidato | Empresa>()

onMounted(async () => {
  const userId = LocalStorageStore.user?.id
  const userType = LocalStorageStore.user?.type

  if (!userId || !userType)
    return router.push('/404')

  if (userType === 1) {
    await CandidatoStore.getById(userId)
    usuario.value = CandidatoStore.$state;
  } else if (userType === 2) {
    await EmpresaStore.getById(userId)
    usuario.value = EmpresaStore.$state;
  }
});

const vagaHeaders = [
  'Cargo',
  'Remuneração',
  'Turno',
  'Contrato',
]

const experienciaHeaders = [
  'Cargo',
  'Descrição',
]
</script>

<style scoped>

</style>