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
        placeholder="exemplo@mail.com" />

      <InputText
        v-model="LoginStore.senha"
        prepend-inner-icon="mdi-lock"
        title="Senha"
        placeholder="*******" />

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
import TitleCard from '@/components/TitleCard.vue';
import router from '@/router';
import { useLoginStore } from '@/store/auth.store';


const LoginStore = useLoginStore();

async function submit() {
  const user = await LoginStore.login();
  router.push('/')
}

</script>

<style scoped>
.card {
  max-width: 800px;
}

.link { cursor: pointer }
</style>
@/store/auth.store