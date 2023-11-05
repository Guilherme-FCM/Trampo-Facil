<template>
  <TitleCard title="Login"/>
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

        <v-btn @click="submit" color="primary" variant="elevated" block>Login</v-btn>

        <v-row class="mt-1 text-center">
          <v-col>
            <p>
              Não Possui uma conta? 
              <strong class="link" @click="$router.push('/register')">Cadastre-se</strong>
            </p>
          </v-col>
        </v-row>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import InputText from '@/components/InputText.vue';
import TitleCard from '@/components/TitleCard.vue';
import type { Login } from '@/types/Login';
import { reactive } from 'vue';


const form = reactive<Login>({
  email: '',
  password: '',
})

function submit() {
  
}

</script>

<style scoped>
.card {
  max-width: 800px;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.link { cursor: pointer }
</style>
