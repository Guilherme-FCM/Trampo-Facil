import { Vaga } from '@/types/Vaga';
import axios from '@/utils/axios'
import { defineStore } from 'pinia'

export const useVagaStore = defineStore('vaga', {
  state: (): Vaga => ({} as Vaga),

  actions: {
    async getById(id: string) {
      const response = await axios.get<Vaga>(`/vagas/${id}`);
      this,this.$state = response.data;
    },
  },
})
