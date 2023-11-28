<template>
    <v-label class="mb-1">{{ title }}</v-label>
    <v-text-field
      :variant="'outlined'"
      :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'string' : 'password'"
      @click:append-inner="showPassword=!showPassword"
      v-bind="props"
      required
    ></v-text-field>
  </template>

  <script setup lang="ts">
  import { defineProps } from 'vue';
  import { ref } from 'vue';
  // TODO Tem que voltar aqui para corrigir o password pq ta chegando vazio
  const showPassword = ref<boolean>(false);

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    ref: String,
    placeholder: String,
    modelValue: String,
    prependInnerIcon: String,
    error: Boolean,
    errorMessages: String,
  });

  </script>

  <style scoped>

  </style>
