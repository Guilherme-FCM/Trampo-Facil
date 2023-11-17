import { User } from '@/types/Auth'
import { defineStore } from 'pinia'

type LocalStorageState = {
  _token: string | null
  _user: User | null
}

export const useLocalStorage = defineStore('local_storage', {
  state: (): LocalStorageState => ({
    _token: '',
    _user: null,
  }),

  getters: {
    token(): string | null {
      this._token = localStorage.getItem('token')
      return this._token
    },

    user(): User | null {
      const user = localStorage.getItem('user')
      this._user = user && JSON.parse(user)
      return this._user
    },
  },

  actions: {
    setToken(token: string) {
      localStorage.setItem('token', JSON.stringify(token))
      this._token = token
    },

    setUser(user: User) {
      localStorage.setItem('user', JSON.stringify(user))
      this._user = user
    },

    clear() {
      localStorage.clear()
      this._token = null
      this._user = null
    }
  },
})
