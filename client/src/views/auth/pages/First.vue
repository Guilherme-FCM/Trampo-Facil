<template>
  <v-container>
    <FormCard
      class="card mx-auto"
      variant="outlined"
    >
      <InputText 
        v-model="form.email" 
        title="E-mail" 
        placeholder="exemplo@mail.com" />

      <InputText 
        v-model="form.password" 
        title="Senha" 
        placeholder="*******" />

      <v-btn @click="$emit('next', form)" color="primary" variant="elevated" block>Continuar</v-btn>
    </FormCard>
  </v-container>
</template>

<script lang="ts" setup>
import InputText from '@/components/InputText.vue';
import FormCard from '@/components/FormCard.vue';
import { reactive } from 'vue';

const form = reactive({
  email: '',
  password: '',
})
</script>

<style scoped>
.card {
  max-width: 800px;
}

.link { cursor: pointer }
</style>
