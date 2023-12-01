import { ApiLoginResponse, Login, User } from '@/types/Auth'
import axios from '@/utils/axios'
import { defineStore } from 'pinia'
import { useLocalStorage } from './localStorage.store';

const LocalStorageStore = useLocalStorage()

export const useLoginStore = defineStore('login', {
  state: (): Login => ({
    email: '',
    senha: '',
  }),

  getters: {
    isLogged: () => !!LocalStorageStore.token,
    user: () => LocalStorageStore.user,
  },

  actions: {
    async login() {
      const response = await axios.post<ApiLoginResponse>('/login', this.$state);
      const { user, token } = response.data

      LocalStorageStore.setToken(token)
      LocalStorageStore.setUser(user)
    },

    logout() {
      LocalStorageStore.clear()
      axios.post('/logout')
    }
  },
})
