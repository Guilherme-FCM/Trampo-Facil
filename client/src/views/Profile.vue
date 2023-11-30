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
          <div v-if="usuario?.data_nascimento" class="pb-3"><strong>Data de Nascimento: </strong><span>{{ new Date(usuario?.data_nascimento) }}</span></div>
          <v-row>
            <v-col v-if="usuario?.endereco?.descricao">
              <div class="pb-3">
                <strong>Endereço:</strong>
                <span>{{ usuario?.endereco?.descricao }}</span>
              </div>
            </v-col>
            <v-col>
              <v-icon class="mr-1" @click="getAddressInfo">mdi-map-marker-radius</v-icon>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <v-card @click="editProfileDialog = true" @mouseover="showIcon = true" @mouseleave="showIcon = false">
            <v-img :src="semImg" class="image">
              <v-row style="height: 100%;" align="center" justify="center">
                <v-col cols="auto">
                  <v-icon v-if="showIcon" icon="mdi-pencil"></v-icon>
                </v-col>
              </v-row>
            </v-img>
          </v-card>
        </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-btn>Criar</v-btn>
      </v-col>
    </v-row>

    <v-row class="text-center" v-if="usuario?.experiencias">
      <v-col class="text-h5">
        <div class="align-center text-center" v-if="usuario?.experiencias"><strong>Minhas Experiências</strong></div>
      </v-col>
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
      <v-col cols="12">
        <v-btn color="primary" @click="adicionarVaga">Adicionar Experiencia</v-btn>
      </v-col>
    </v-row>

    <v-row class="text-center" v-if="usuario?.vagas">
      <v-col class="text-h5">
        <div class="align-center text-center" v-if="usuario?.vagas"><strong>Minhas Vagas</strong></div>
      </v-col>
      <v-col cols="12" v-if="usuario.vagas.length == 0">
        <div >Nenhuma vaga inserida</div>
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
      <v-col cols="12">
        <v-btn color="primary" @click="adicionarVaga">Adicionar Vaga</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="editProfileDialog">
    <FormCard class="pa-3 pb-5">
      <v-row v-if="userType == 1">
        <v-col cols="6">
          <InputText title="Nome Completo" v-model="CandidatoStore.$state.nome_completo"/>
        </v-col>
        <v-col cols="6">
          <InputText title="CPF" v-model="CandidatoStore.$state.cpf" placeholder="###.###.###-##"/>
        </v-col>
        <v-col cols="6">
          <InputText title="Data de Nascimento" type="date" v-model="CandidatoStore.$state.data_nascimento"/>
        </v-col>
        <v-col cols="6">
          <v-select
            class="mt-7"
            label="Sexo"
            :items="['Masculino', 'Feminino', 'Outros']"
            v-model="CandidatoStore.$state.sexo"
            variant="outlined"
            hide-details
          />
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col cols="12">
          <InputText title="Razão Social" v-model="EmpresaStore.$state.razao_social"/>
        </v-col>
        <v-col cols="6">
          <InputText title="Área de Atuação" v-model="EmpresaStore.$state.area_atuacao"/>
        </v-col>
        <v-col cols="6">
          <InputText title="CNPJ" v-model="EmpresaStore.$state.cnpj" placeholder="##.###.###/####-##"/>
        </v-col>
      </v-row>

      <v-btn @click="edit" color="primary" variant="elevated" block>Atualizar Cadastro</v-btn>
    </FormCard>
  </v-dialog>

  <v-dialog v-model="showAddressDialog">
    <v-card>
      <v-card-title>Informações do Endereço</v-card-title>
      <v-card-text>
        <div v-if="addressInfo">
          <p><strong>Logradouro:</strong> {{ addressInfo.logradouro }}</p>
          <p><strong>Bairro:</strong> {{ addressInfo.bairro }}</p>
          <p><strong>Cidade:</strong> {{ addressInfo.cidade }}</p>
          <p><strong>Estado:</strong> {{ addressInfo.estado }}</p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="showAddressDialog = false">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
import FormCard from "@/components/FormCard.vue";
import InputText from "@/components/InputText.vue";

const CandidatoStore = useCandidatoStore()
const EmpresaStore = useEmpresaStore()
const LocalStorageStore = useLocalStorage()

const usuario = ref<Candidato | Empresa>()
const showIcon = ref(false)
const editProfileDialog = ref(false)
const userId = LocalStorageStore.user?.id
const userType = LocalStorageStore.user?.type

const showAddressDialog = ref(false);

onMounted(async () => {
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

async function edit() {
  console.log(usuario)
  if (userType === 1) {
    await CandidatoStore.update(userId)
  } else if (userType === 2) {
    await EmpresaStore.update(userId)
  }
  editProfileDialog.value = false
}

async function getAddressInfo() {
  try {
    const response = await fetch('https://viacep.com.br/ws/77020050/json/');
    const data = await response.json();
    console.log(data)

    addressInfo.value = data;
    showAddressDialog.value = true;
  } catch (error) {
    console.error('Erro ao obter informações do endereço:', error);
  }
}

const addressInfo = ref<any>(null);
</script>

<style scoped>
.image:hover {
  filter: brightness(0.7);
  transition: 500ms;
  cursor: pointer;
}
</style>
