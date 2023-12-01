import { Empresa } from '@/types/Empresa';
import axios from '@/utils/axios'
import { defineStore } from 'pinia'

export const useEmpresasStore = defineStore('empresas', {
  state: (): Empresa[] => ([]),

  actions: {
    async getAll() {
      const response = await axios.get<Empresa[]>('/empresas');
      this.$state = response.data;
    },
  },
})
