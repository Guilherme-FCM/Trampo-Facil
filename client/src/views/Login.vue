<template>
  <TitleCard title="Login"/>
  <v-container>
    <v-card
      class="card mx-auto"
      variant="outlined"
    >
      <v-card-item>
        <InputText title="E-mail" v-model="form.email" @update="(value: string) => { form.email = value }"/>
        <InputText title="Senha" v-model="form.password" @update="(value: string) => { form.password = value }"/>
      </v-card-item>

      <v-card-actions>
        <v-btn @click="submit">Button</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import InputText from '@/components/InputText.vue';
import TitleCard from '@/components/TitleCard.vue';
import { reactive } from 'vue';

const form = reactive({
  email: '',
  password: '',
})

function submit() {
  
}

</script>

<style scoped>
.card {
  max-width: 800px;
}
</style>
