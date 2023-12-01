import { Candidato } from '@/types/Candidato';
import axios from '@/utils/axios'
import { defineStore } from 'pinia'

export const useCandidatoStore = defineStore('candidato', {
  state: (): Candidato => ({} as Candidato),

  actions: {
    async getById(id: string) {
      const response = await axios.get<Candidato>(`/candidatos/${id}`);
      this.$state = response.data;
    },

    update(id: string) {
      return axios.put(`/candidatos/${id}`, this.$state);
    },
  },
})
