<template>
  <TitleCard title="Login"/>
  <v-container>
    <FormCard
      class="card mx-auto"
      variant="outlined"
    >
      <InputText
        v-model="LoginStore.email"
        prepend-inner-icon="mdi-email"
        type="email"
        title="E-mail"
        placeholder="exemplo@mail.com"
        :error="!!errors.email"
        :error-messages="errors.email" />

      <InputPassword
        v-model="LoginStore.senha"
        prepend-inner-icon="mdi-lock"
        title="Senha"
        placeholder="*******"
        :error="!!errors.senha"
        :error-messages="errors.senha" />

      <v-btn @click="submit" color="primary" variant="elevated" block>Login</v-btn>

      <v-row class="mt-1 text-center">
        <v-col>
          <p>
            Não Possui uma conta?
            <strong class="link" @click="$router.push('/register')">Cadastre-se</strong>
          </p>
        </v-col>
      </v-row>
    </FormCard>
  </v-container>
</template>

<script lang="ts" setup>
import FormCard from '@/components/FormCard.vue';
import InputText from '@/components/InputText.vue';
import InputPassword from '@/components/InputPassword.vue';
import TitleCard from '@/components/TitleCard.vue';
import router from '@/router';
import { useLoginStore } from '@/store/auth.store';
import { ref } from 'vue';
import { EventEmitter } from '@/utils/event-emitter';

const LoginStore = useLoginStore();
const errors = ref({
  email: '',
  senha: '',
})
const loading = ref(false)

async function submit() {
  loading.value=!loading.value
  try {
    await LoginStore.login();
    router.push('/')
    EventEmitter.emit('success', 'Login realizado!');
  } catch (err: any) {
    const error = err.response?.data;
    loading.value=!loading.value

    const message = error?.message || 'Houve um erro';
    EventEmitter.emit('error', message);
  }
}

</script>

<style scoped>
.card {
  max-width: 800px;
}

.link { cursor: pointer }
</style>
