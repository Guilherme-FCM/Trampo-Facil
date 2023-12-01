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
    async findByValue(valor?: string){
      const response = await axios.get<Vaga[]>('/vagas/findByValue/', { params: { valor: valor}});
      this.$state = response.data as Vaga[];

      console.log(response.data)
      console.log(this.$state)

    }
  },
})
