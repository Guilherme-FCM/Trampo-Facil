import { Register } from '@/types/Auth'
import { Vaga } from '@/types/Vaga';
import axios from '@/utils/axios'
import { defineStore } from 'pinia'
import {state} from "vue-tsc/out/shared";
import {useEmpresasStore} from "@/store/empresas.store";

export const useVagasStore = defineStore('vagas', {
  state: (): { vagas: Vaga[] } => ({
    vagas: [],
  }),

  actions: {
    async getAll() {
      const response = await axios.get<Vaga[]>('/vagas');
      this.$state.vagas = response.data;
    },
    async findByValue(valor?: string) {
      const response = await axios.get<Vaga[]>('/vagas/findByValue/', { params: { valor: valor }});
      this.$state.vagas = response.data
    }
  },
})
