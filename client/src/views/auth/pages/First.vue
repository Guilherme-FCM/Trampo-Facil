<template>
  <v-container>
    <v-card
      class="card mx-auto"
      variant="outlined"
    >
      <v-card-item>
        <InputText 
          v-model="form.email" 
          title="E-mail" 
          placeholder="exemplo@mail.com" />

        <InputText 
          v-model="form.password" 
          title="Senha" 
          placeholder="*******" />

        <v-btn @click="$emit('next', form)" color="primary" variant="elevated" block>Continuar</v-btn>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import InputText from '@/components/InputText.vue';
import { reactive } from 'vue';

const form = reactive({
  email: '',
  password: '',
})
</script>

<style scoped>
.card {
  max-width: 800px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.link { cursor: pointer }
</style>
