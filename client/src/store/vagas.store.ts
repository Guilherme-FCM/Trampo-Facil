import { Register } from '@/types/Auth'
import { Vaga } from '@/types/Vaga';
import axios from '@/utils/axios'
import { defineStore } from 'pinia'

export const useVagasStore = defineStore('vaga', {
  state: (): Vaga[] => ([]),

  actions: {
    async getAll() {
      const response = await axios.get('/vagas');
      this.$state = response.data;
    },
  },
})
