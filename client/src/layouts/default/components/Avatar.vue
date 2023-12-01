<template>
      <v-menu>
        <template v-slot:activator="{ props }">
          <span class="mr-4">Olá, {{ LoginStore.user?.name }}</span>
          <v-btn icon v-bind="props" >
            <v-avatar color="primary" size="large">
              <span v-if="initials" class="text-h6">{{ initials }}</span>
              <v-icon v-else icon="mdi mdi-account"/>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="primary">
                <span class="text-h6">{{ initials }}</span>
              </v-avatar>
              <h3>{{ LoginStore.user?.name }}</h3>
              <p class="text-caption mt-1">
                {{ LoginStore.user?.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn rounded variant="text" @click="$router.push('/meu-perfil')">
                Meu Perfil
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn rounded variant="text" color="error" @click="logout">
                Sair
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
</template>

<script setup lang="ts">
import router from '@/router';
import { useLoginStore } from '@/store/auth.store';

const LoginStore = useLoginStore()
const initials = generateInitials(LoginStore.user?.name)

function logout() {
  LoginStore.logout()
  router.push('/')
}

function generateInitials(fullName?: string): string | null {
  if (!fullName) return null;

  const names = fullName.toUpperCase().split(" ");
  
  if (names.length == 1)
    return names[0].slice(0, 2);

  return names.map(name => name[0]).slice(0, 2).join('')
}
</script>@/store/auth.store