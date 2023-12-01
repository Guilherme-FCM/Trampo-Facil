<template>
  <v-label class="mb-1">{{ title }}</v-label>
  <v-text-field
    variant="outlined"
    :placeholder="placeholder"
    :model-value="formattedValue"
    :type="type"
    @input="formatValue"
    @update:model-value="$emit('update:model-value', $event)"
  />
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';

const emit = defineEmits(['ok', 'update:model-value']);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  placeholder: String,
  modelValue: String,
  appendInnerIcon: String,
  prependInnerIcon: String,
  type: {
    type: String,
    validator: (value: string) => ['cpf', 'cnpj', 'celular', 'date'].includes(value),
    default: '',
  },
  error: Boolean,
  errorMessages: String,
});

const formattedValue = ref(props.modelValue);

const formatCPF = (value: string) => {
  value = value.replace(/\D/g, '').slice(0, 11); // Limitando o CPF a 11 dígitos
  if (value.length > 3) {
    value = value.replace(/^(\d{3})(\d)/, '$1.$2');
  }
  if (value.length > 6) {
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  }
  if (value.length > 9) {
    value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  }
  if (value.length == 11) {
    emit('ok', value);
  }
  return value;
};

const formatCNPJ = (value: string) => {
  value = value.replace(/\D/g, '').slice(0, 14); // Limitando o CNPJ a 14 dígitos
  if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
  }
  if (value.length > 6) {
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  }
  if (value.length > 9) {
    value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4');
  }
  if (value.length > 13) {
    value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
  if (value.length == 14) {
    emit('ok', value);
  }
  return value;
};

const formatCelular = (value: string) => {
  value = value.replace(/\D/g, '').slice(0, 11); // Limitando o celular a 11 dígitos
  if (value.length > 0) {
    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  }
  if (value.length > 5) {
    value = `${value.slice(0, 5)} ${value.slice(5)}`;
  }
  if (value.length > 10) {
    value = `${value.slice(0, 10)}-${value.slice(10)}`;
  }
  if (value.length == 11) {
    emit('ok', value);
  }
  return value;
};

const formatValue = (event: any) => {
  let value = event.target.value.replace(/\D/g, '');

  switch (props.type) {
    case 'cpf':
      value = formatCPF(value);
      break;
    case 'cnpj':
      value = formatCNPJ(value);
      break;
    case 'celular':
      value = formatCelular(value);
      break;
    default:
      // Se o tipo não for especificado ou não for nenhum dos tipos conhecidos, aceite texto normal
      formattedValue.value = event.target.value;
      return;
  }

  formattedValue.value = value;
};

watch(() => props.modelValue, (newValue) => {
  formattedValue.value = newValue;
});
</script>

<style scoped>

</style>
