import { Empresa } from '@/types/Empresa';
import axios from '@/utils/axios'
import { defineStore } from 'pinia'

export const useEmpresaStore = defineStore('empresa', {
  state: (): Empresa => ({} as Empresa),

  actions: {
    async getById(id: string) {
      const response = await axios.get<Empresa>(`/empresas/${id}`);
      this.$state = response.data;
    },

    update(id: string) {
      return axios.put(`/empresas/${id}`, this.$state);
    },
  },
})
