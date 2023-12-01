import { Experiencia } from '@/types/Experiencia';
import axios from '@/utils/axios'
import { defineStore } from 'pinia'

export const useExperienciaStore = defineStore('experiencia', {
  state: (): Experiencia => ({} as Experiencia),

  actions: {
    async create() {
      const response = await axios.post('/experiencias', this.$state);
      return response.data
    },

    async delete(id: string) {
      return axios.delete(`/experiencias/${id}`);
    }
  },
})
