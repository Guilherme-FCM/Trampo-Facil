import { Register } from '@/types/Auth'
import { Vaga } from '@/types/Vaga';
import axios from '@/utils/axios'
import { defineStore } from 'pinia'

export const useVagasStore = defineStore('vagas', {
  state: (): Vaga[] => ([]),

  actions: {
    async getAll() {
      const response = await axios.get<Vaga[]>('/vagas');
      this.$state = response.data;
    },
  },
})
