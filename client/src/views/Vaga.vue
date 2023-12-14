<template>
  <TitleCard
    :title="VagaStore.$state?.cargo"
  />
  <v-container>
    <v-row>
      <v-col cols="12" align="center">
        <v-btn class="mr-8" @click="verEmpresa" size="large">Ver Empresa</v-btn>
        <v-btn v-if="userType == 1" size="large" @click="candidatar = true" color="primary">Candidatar-se</v-btn>
      </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" size style="font-size: 20px">
          <div class="pb-3"><strong>Faixa salarial: </strong><span>R$ {{ VagaStore.$state?.remuneracao }}</span></div>
          <div class="pb-3"><strong>Turno: </strong><span>{{ VagaStore.$state?.turno }}</span></div>
          <div class="pb-3"><strong>Formato de Contratação: </strong><span>{{ VagaStore.$state?.contrato }}</span></div>
        </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h5">
        <div><strong>Descrição do trabalho</strong></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div>{{ VagaStore.$state?.especificacao }}</div>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog align="center" max-width="500" max-height="600" v-model="candidatar">
  <FormCard class="pa-3 pb-5">
    <v-row>
      <v-col class="text-black tex">
        <div>Deseja realmente se candidatar a essa vaga?</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="enviarCandidatura" color="primary" variant="elevated" block>Enviar</v-btn>
      </v-col>
    </v-row>
  </FormCard>
</v-dialog>
</template>
<script lang="ts" setup>
import TitleCard from "@/components/TitleCard.vue";
import router from "@/router";
import { useRoute } from "vue-router";
import { useVagaStore } from "@/store/vaga.store";
import {onMounted, reactive, ref} from "vue";
import {useLocalStorage} from "@/store/localStorage.store";
import FormCard from "@/components/FormCard.vue";
import {useCandidaturaStore} from "@/store/candidatura.store";
import { Candidatura } from "@/types/Candidatura";
import {EventEmitter} from "@/utils/event-emitter";

const VagaStore = useVagaStore()
const LocalStorageStore = useLocalStorage()
const userType = LocalStorageStore.user?.type
const route = useRoute()
const userId = LocalStorageStore.user?.id;
const candidatar = ref(false)
const CandidaturaStore = useCandidaturaStore()

const form = reactive<Candidatura>({
  candidato: '',
  vaga: ''
})

onMounted(() => {
  VagaStore.getById(route.params.id as string)
  if (!VagaStore.$state) router.push('/404')
});

function verEmpresa() {
  if(VagaStore.$state.empresa.id === userId && userType == 2){
    router.push('/meu-perfil')
  }else{
    const empresaId = VagaStore.$state.empresa.id;
    router.push(`/empresa/${empresaId}`);
  }
}

async function enviarCandidatura() {
  form.candidato = userId;
  form.vaga = VagaStore.$state.id
  try {
    await CandidaturaStore.candidatar(form);
    EventEmitter.emit('success', 'Cadastro realizado!')
  } catch (err: any) {
    const error = err.response?.data;
    const message = "Já esta cadastrado na vaga!";
    EventEmitter.emit('info', message);
  }
  candidatar.value = false
}
</script>

<style scoped>

</style>
