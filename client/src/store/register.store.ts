import { Register } from '@/types/Auth'
import axios from '@/utils/axios'
import { defineStore } from 'pinia'

export const useRegisterStore = defineStore('register', {
  state: (): Register => ({
    email: '',
    senha: '',
  }),

  actions: {
    async registerCandidato() {
      const response = await axios.post('/candidatos', this.$state);
      return response.data
    },

    async registerEmpresa() {
      const response = await axios.post('/empresas', this.$state);
      return response.data
    },
  },
})
