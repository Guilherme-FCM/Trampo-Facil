<template>
  <v-container>
    <v-radio-group v-model="selected">
      <v-row justify="space-around">
        <v-col cols="5">
        <FormCard class="radio-card" :class="selected == 1 && 'selected-card'" @click="selectCard(1)">
          <v-row align="center" justify="space-between">
            <v-col>
              <h3>Candidato</h3>
            </v-col>
            <v-col cols="2">
              <v-radio :value="1" color="primary"></v-radio>
            </v-col>
          </v-row>
          <p class="mt-2">Cadastre suas experiências e aplique para vagas</p>
        </FormCard>
      </v-col>
      <v-col cols="5">
        <FormCard class="radio-card" :class="selected == 2 && 'selected-card'" @click="selectCard(2)">
          <v-row align="center" justify="space-between">
            <v-col>
              <h3>Empresa</h3>
            </v-col>
            <v-col cols="2">
              <v-radio :value="2" color="primary"></v-radio>
            </v-col>
          </v-row>
          <p class="mt-2">Disponibilize vagas e encontre novos colaboradores</p>
        </FormCard>
      </v-col>
    </v-row>
  </v-radio-group>
  <v-row justify="center" class="mt-1">
    <v-col cols="11">
      <v-btn
        @click="$emit('next', selected)"
        color="primary"
        variant="elevated"
        :disabled="disebled"
        block>
        Selecionar Perfil
      </v-btn>
    </v-col>
  </v-row>
</v-container>
</template>

<script setup lang="ts">
import FormCard from '@/components/FormCard.vue';
import { computed } from 'vue';
import { ref } from 'vue';

const selected = ref(0);

function selectCard(value: number) {
  selected.value = value
}

const disebled = computed(() => selected.value == 0)
</script>

<style scoped>
.radio-card {
  cursor: pointer;
}

.selected-card {
  border: 1px solid rgb(var(--v-theme-primary));
}
</style>
