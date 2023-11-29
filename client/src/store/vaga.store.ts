import { Vaga } from '@/types/Vaga';
import axios from '@/utils/axios'
import { defineStore } from 'pinia'

export const useVagaStore = defineStore('vaga', {
  state: (): Vaga => ({} as Vaga),
  // TODO voltar aqui
  actions: {
    async getById(id: string) {
      const response = await axios.get<Vaga>(`/vagas/${id}`);
      this.$state = response.data;
    },
  },
})
