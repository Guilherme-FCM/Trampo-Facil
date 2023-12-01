import axios from '@/utils/axios'
import { defineStore } from 'pinia'
import {Candidatura} from "@/types/Candidatura";
import {EventEmitter} from "@/utils/event-emitter";

export const useCandidaturaStore = defineStore('candidatura', {
  state: (): Candidatar => ({
    candidato: '',
    vaga: '',
  }),

  actions: {
    async candidatar(candidatura: object) {
        const response = await axios.post<Candidatura>(`/candidaturas`, candidatura);
        this.$state = response.data;
    },
  },
})
