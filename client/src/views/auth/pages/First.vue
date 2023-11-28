<template>
  <v-container>
    <FormCard
      class="card mx-auto"
      variant="outlined"
    >
      <InputText
        v-model="form.email"
        prepend-inner-icon="mdi-email"
        title="E-mail"
        placeholder="exemplo@mail.com" />

      <InputPassword
        v-model="form.senha"
        prepend-inner-icon="mdi-lock"
        title="Senha"
        type="password"
        placeholder="*******" />

      <v-btn @click="emitNext" color="primary" variant="elevated" block>Continuar</v-btn>
    </FormCard>
  </v-container>
</template>

<script lang="ts" setup>
import InputText from '@/components/InputText.vue';
import FormCard from '@/components/FormCard.vue';
import InputPassword from '@/components/InputPassword.vue';
import { reactive } from 'vue';
import type { Login } from '@/types/Auth';
import { ref, onMounted } from 'vue';


const form = reactive<Login>({
  email: '',
  senha: '',
})
const loading  = ref(false)
const emitNext = () => {
  loading.value=!loading.value
  this.$emit('next', form);
}
</script>

<style scoped>
.card {
  max-width: 800px;
}

.link { cursor: pointer }
</style>
