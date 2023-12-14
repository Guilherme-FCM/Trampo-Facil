import { Vaga } from '@/types/Vaga';
import axios from '@/utils/axios'
import { defineStore } from 'pinia'

export const useVagaStore = defineStore('vaga', {
  state: (): Vaga => ({}),
  actions: {
    async getById(id: string) {
      const response = await axios.get<Vaga>(`/vagas/${id}`);
      this.$state = response.data;
    },

    async getCandidaturasById(id: string) {
      const response = await axios.get<Vaga>(`/vagas/${id}`);
      console.log(response)
      return response.data.candidaturas;
    },

    async create() {
      const response = await axios.post('/vagas', {
        cargo: this.$state.cargo,
        especificacao: this.$state.especificacao,
        remuneracao: this.$state.remuneracao,
        turno: this.$state.turno,
        contrato: this.$state.contrato,
        empresa: this.$state.empresa,
      });
      return response.data
    },

    async delete(id: string) {
      return axios.delete(`/vagas/${id}`);
    }
  },
})
