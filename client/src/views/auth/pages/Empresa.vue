<template>
  <v-container>
    <FormCard>
      <v-row>
        <v-col>
          <InputText title="Razão Social" v-model="form.razao_social"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <InputText title="Área de Atuação" v-model="form.area_atuacao"/>
        </v-col>
        <v-col>
          <InputText title="CNPJ" v-model="form.cnpj" placeholder="##.###.###/####-##"/>
        </v-col>
      </v-row>
      <v-btn @click="$emit('next', form)" color="primary" variant="elevated" block>Finalizar Cadastro</v-btn>
    </FormCard>
  </v-container>
</template>

<script setup lang="ts">
import FormCard from '@/components/FormCard.vue';
import InputText from '@/components/InputText.vue';
import { RegisterEmpresa } from '@/types/Auth';
import { reactive } from 'vue';

const form = reactive<RegisterEmpresa>({
  razao_social: '',
  cnpj: '',
  area_atuacao: '',
})
</script>

<style scoped>

</style>