<template>
  <TitleCard :title="usuario?.nome_completo || usuario?.razao_social" />
  <v-container>
    <v-row justify="space-between">
        <v-col cols="8" size style="font-size: 20px">
          <h3 class="mb-6 mt-2">Dados</h3>
          <div v-if="usuario?.cnpj" class="pb-3"><strong>CNPJ: </strong><span>{{ usuario?.cnpj }}</span></div>
          <div v-if="usuario?.cpf" class="pb-3"><strong>CPF: </strong><span>{{ usuario?.cpf }}</span></div>
          <div class="pb-3"><strong>E-mail: </strong><span>{{ usuario?.email }}</span></div>
          <div v-if="usuario?.sexo" class="pb-3"><strong>Sexo: </strong><span>{{ usuario?.sexo }}</span></div>
          <div v-if="usuario?.area_atuacao" class="pb-3"><strong>Área de Atuação: </strong><span>{{ usuario?.area_atuacao }}</span></div>
          <div v-if="usuario?.data_nascimento" class="pb-3"><strong>Data de Nascimento: </strong><span>{{ formatDate(usuario?.data_nascimento) }}</span></div>
          <h3 class="mb-6 mt-2" v-if="usuario?.endereco?.cep">Endereço</h3>
          <div v-if="usuario?.endereco?.descricao" class="pb-3"><strong>Descrição: </strong><span>{{ usuario?.endereco?.descricao }}</span></div>
          <div v-if="usuario?.endereco?.cep" class="pb-3"><strong>CEP: </strong><span>{{ usuario?.endereco?.cep }}</span></div>
          <div v-if="usuario?.endereco?.cidade" class="pb-3"><strong>Localidade: </strong><span>{{ usuario?.endereco?.cidade }} - {{ usuario?.endereco?.uf }}</span></div>
          <div v-if="usuario?.endereco?.bairro" class="pb-3"><strong>Bairro: </strong><span>{{ usuario?.endereco?.bairro }}</span></div>
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

    <v-row v-if="usuario?.experiencias">
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
              <th v-for="(title, i) in experienciaHeaders" :key="i">
                {{ title }}
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in usuario?.experiencias" :key="i">
              <td>{{ item.cargo }}</td>
              <td>{{ item.empresa }}</td>
              <td>{{ formatDate(item.data_inicio) }} - {{ item.data_fim ? formatDate(item.data_fim) : 'Atual' }}</td>
              <td>
                <v-btn
                  icon="mdi-delete"
                  color="error"
                  variant="text"
                  size="small"
                  @click="deleteExperiencia(item.id)" />
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="12">
        <v-btn color="primary" @click="addExperienciaDialog = true" block>Adicionar Experiencia</v-btn>
      </v-col>
    </v-row>

    <v-row v-if="usuario?.vagas">
      <v-col class="text-h5">
        <div class="align-center text-center" v-if="usuario?.vagas"><strong>Minhas Vagas</strong></div>
      </v-col>
      <v-col cols="12" v-if="usuario.vagas.length == 0">
        <div>Nenhuma vaga inserida</div>
      </v-col>
      <v-col cols="12" v-else>
        <v-table>
          <thead>
            <tr>
              <th v-for="(title, i) in vagaHeaders" :key="i">
                {{ title }}
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in usuario?.vagas" :key="i">
              <td>{{ item.cargo }}</td>
              <td>{{ item.remuneracao }}</td>
              <td>{{ item.turno }}</td>
              <td>{{ item.contrato }}</td>
              <td>
                <v-btn
                  icon="mdi-eye"
                  color="blue"
                  variant="text"
                  size="small"
                  @click="getCandidados(item.id)" />
              </td>
              <td>
                <v-btn
                  icon="mdi-delete"
                  color="error"
                  variant="text"
                  size="small"
                  @click="deleteVaga(item.id)" />
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col cols="12">
        <v-btn color="primary" @click="addVagaDialog = true" block>Adicionar Vaga</v-btn>
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
          <InputText title="CPF" type="cpf" v-model="CandidatoStore.$state.cpf" placeholder="###.###.###-##"/>
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
          <InputText title="CNPJ" type="cnpj" v-model="EmpresaStore.$state.cnpj" placeholder="##.###.###/####-##"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <InputText @ok="getAddressInfo" type="cep" title="CEP" v-model="usuario.endereco.cep"/>
        </v-col>
        <v-col cols="4">
          <InputText disabled title="Cidade" v-model="usuario.endereco.cidade"/>
        </v-col>
        <v-col cols="62">
          <InputText disabled title="UF" v-model="usuario.endereco.uf"/>
        </v-col>
        <v-col cols="6">
          <InputText disabled title="Bairro" v-model="usuario.endereco.bairro"/>
        </v-col>
        <v-col cols="6">
          <InputText title="Complemento " v-model="usuario.endereco.descricao"/>
        </v-col>
      </v-row>

      <v-btn @click="edit" color="primary" variant="elevated" block>Atualizar Cadastro</v-btn>
    </FormCard>
  </v-dialog>

  <v-dialog v-model="addVagaDialog">
    <v-card class="py-2">
      <v-card-title>Adicione uma nova vaga</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <InputText title="Cargo" v-model="VagaStore.$state.cargo" />
          </v-col>
          <v-col cols="6">
            <InputText title="Remuneração" v-model="VagaStore.$state.remuneracao" type="number" />
          </v-col>
          <v-col cols="6">
            <v-select
              label="Turno"
              :items="['matutino', 'vespertino', 'noturno']"
              v-model="VagaStore.$state.turno"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-select
              label="Contrato"
              :items="['clt', 'pj']"
              v-model="VagaStore.$state.contrato"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="12">
            <InputText title="Especificação" v-model="VagaStore.$state.especificacao" />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="createVaga" color="primary" variant="elevated" block>Adicionar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="addExperienciaDialog">
    <v-card class="py-2">
      <v-card-title>Adicione uma nova Experiencia</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <InputText title="Nome da Empresa" v-model="ExperienciaStore.$state.empresa" />
          </v-col>
          <v-col cols="6">
            <InputText title="Cargo" v-model="ExperienciaStore.$state.cargo" />
          </v-col>
          <v-col cols="6">
            <InputText title="Data de Início" v-model="ExperienciaStore.$state.data_inicio" type="date" />
          </v-col>
          <v-col cols="6">
            <InputText title="Data de Fim" v-model="ExperienciaStore.$state.data_fim" type="date" />
          </v-col>
          <v-col cols="12">
            <InputText title="Descrição" v-model="ExperienciaStore.$state.descricao" />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="createExperiencia" color="primary" variant="elevated" block>Adicionar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog max-width="500" v-model="showCandidatosDialog">
    <v-card class="py-2">
      <v-card-title>Interessados</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-if="candidaturas.length == 0">
            <v-list-item-title>Nenhuma candidatura para esta vaga ainda</v-list-item-title>
          </v-list-item>
          <v-list-item v-else v-for="(candidatura, i) in candidaturas" :key="candidatura.id">
            <v-list-item-title>{{ i + 1}} - {{ candidatura.candidato.nome_completo }}</v-list-item-title>
            <hr/>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn @click="showCandidatosDialog = false"
               :style="{ 'min-width': '64px', 'max-width': '150px'}"
               color="error"
               variant="elevated"
               block>Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
import TitleCard from "@/components/TitleCard.vue";
import router from "@/router";
import { useCandidatoStore } from "@/store/candidato.store";
import { ref, onMounted, watch } from "vue";
import semImg from '@/assets/sem_imagem.png';
import { useLocalStorage } from "@/store/localStorage.store";
import { useEmpresaStore } from "@/store/empresa.store";
import { useVagaStore } from "@/store/vaga.store";
import { useExperienciaStore } from "@/store/experiencia.store";
import { Candidato } from "@/types/Candidato";
import { Empresa } from "@/types/Empresa";
import FormCard from "@/components/FormCard.vue";
import InputText from "@/components/InputText.vue";
import { EventEmitter } from "@/utils/event-emitter";

const CandidatoStore = useCandidatoStore()
const ExperienciaStore = useExperienciaStore()
const EmpresaStore = useEmpresaStore()
const VagaStore = useVagaStore()
const LocalStorageStore = useLocalStorage()

const usuario = ref<Candidato | Empresa>()
const showIcon = ref(false)
const editProfileDialog = ref(false)
const showCandidatosDialog = ref(false);
const addVagaDialog = ref(false)
const addExperienciaDialog = ref(false)
const userId = LocalStorageStore.user?.id
const userType = LocalStorageStore.user?.type

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
  if(!usuario.value.endereco){
    usuario.value.endereco = {};
  }
});

const vagaHeaders = [
  'Cargo',
  'Remuneração',
  'Turno',
  'Contrato',
  'Candidatos',
]

const experienciaHeaders = [
  'Cargo',
  'Empresa',
  'Período'
]

async function edit() {
  if (userType === 1) {
    await CandidatoStore.update(userId)
  } else if (userType === 2) {
    await EmpresaStore.update(userId)
  }
  editProfileDialog.value = false
}


// Endereço

async function getAddressInfo(cep: string) {
  const formatCEP = (value: string): string => {
    return value.replace('-', '');
  };

  try {
    const response = await fetch(`https://viacep.com.br/ws/${formatCEP(cep)}/json/`);
    const data = await response.json();
    if (data.erro){
      EventEmitter.emit("info", "Não foi possivel obter o endereco!")
      usuario.value.endereco.cep = '';
      usuario.value.endereco.bairro = '';
      usuario.value.endereco.uf = '';
      usuario.value.endereco.cidade = '';
      usuario.value.endereco.descricao = '';
    } else {
      usuario.value.endereco.cep = data.cep;
      usuario.value.endereco.bairro = data.logradouro;
      usuario.value.endereco.uf = data.uf;
      usuario.value.endereco.cidade = data.localidade;
      usuario.value.endereco.descricao = data.complemento;
    }

  } catch (error) {
    EventEmitter.emit("info", "Não foi possivel obter o endereco!")
  }
}

const addressInfo = ref<any>(null);

async function createVaga() {
  VagaStore.$state.empresa = userId;
  VagaStore.$state.remuneracao = parseFloat(String(VagaStore.$state.remuneracao || 0))

  try {
    await VagaStore.create()
    // Limpar os campos após a criação bem-sucedida da vaga
    VagaStore.$state.cargo = '';
    VagaStore.$state.remuneracao = 0;
    VagaStore.$state.turno = '';
    VagaStore.$state.contrato = '';
    VagaStore.$state.especificacao = '';
    EventEmitter.emit('success', 'Vaga adicionada')
    EmpresaStore.getById(userId)
    addVagaDialog.value = false
  } catch (error) {
    EventEmitter.emit('error', 'Não foi possível registrar a vaga')
  }
}

async function deleteVaga(id: string) {
  await VagaStore.delete(id)
  await EmpresaStore.getById(userId)
  EventEmitter.emit('info', 'Vaga removida')
}

async function createExperiencia() {
  ExperienciaStore.$state.candidato = userId;

  try {
    await ExperienciaStore.create()
    ExperienciaStore.$state.empresa = '';
    ExperienciaStore.$state.cargo = '';
    ExperienciaStore.$state.descricao = '';
    ExperienciaStore.$state.data_inicio = null;
    ExperienciaStore.$state.data_fim = null;
    EventEmitter.emit('success', 'Experiencia adicionada')
    CandidatoStore.getById(userId)
    addExperienciaDialog.value = false
  } catch (error) {
    EventEmitter.emit('error', 'Não foi possível registrar a experiencia')
  }
}

async function deleteExperiencia(id: string) {
  await ExperienciaStore.delete(id)
  await CandidatoStore.getById(userId)
  EventEmitter.emit('info', 'Experiencia removida')
}

function formatDate(value: string) {
  const date = new Date(value)
  date.setHours(date.getHours() + 3)

  const dia = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const ano = date.getFullYear();

  return `${dia}/${mes}/${ano}`;
}

const candidaturas = ref([]);
async function getCandidados(id: string) {
  showCandidatosDialog.value = true
  candidaturas.value = await VagaStore.getCandidaturasById(id)
}

watch(usuario, (value: any) => {
  if (!value.endereco) {
    usuario.value.endereco = {}
  }
}, { deep: true })
</script>

<style scoped>
.image:hover {
  filter: brightness(0.7);
  transition: 500ms;
  cursor: pointer;
}
</style>
