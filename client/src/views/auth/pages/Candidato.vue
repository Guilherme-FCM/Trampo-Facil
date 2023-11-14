<template>
  <v-container>
    <FormCard>
      <v-row>
        <v-col>
          <InputText title="Nome Completo" v-model="form.nome_completo"/>
        </v-col>
        <v-col>
          <InputText title="CPF" v-model="form.cpf"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <InputText title="Data de Nascimento" v-model="form.data_nascimento"/>
        </v-col>
        <v-col>
          <InputText title="Sexo" v-model="form.sexo"/>
        </v-col>
      </v-row>
      <v-btn @click="$emit('next', form)" color="primary" variant="elevated" block>Finalizar Cadastro</v-btn>
    </FormCard>
  </v-container>
</template>

<script setup lang="ts">
import FormCard from '@/components/FormCard.vue';
import InputText from '@/components/InputText.vue';
import { RegisterCandidato } from '@/types/Auth';
import { reactive } from 'vue';

const form = reactive<RegisterCandidato>({
  nome_completo: '',
  cpf: '',
  data_nascimento: '',
  sexo: '',
})
</script>

<style scoped>

</style>