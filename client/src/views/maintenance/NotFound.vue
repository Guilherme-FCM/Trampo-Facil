<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="mt-16">
      <v-col cols="12" sm="8" md="6">
        <v-card class="error-card">
          <v-card-title class="display-1 font-weight-bold">404</v-card-title>
          <v-card-subtitle class="subtitle-1">Página não encontrada</v-card-subtitle>
          <v-card-text class="mt-4">
            <p>Ops! A página que você procura não existe.</p>
            <p>Tente voltar para a página anterior ou navegar para a página inicial.</p>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn color="primary" @click="voltarPagina">Voltar</v-btn>
            <v-btn color="primary" @click="irPaginaInicial">Página Inicial</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    voltarPagina() {
      this.$router.go(-1);
    },
    irPaginaInicial() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.error-card {
  padding: 24px;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.error-card .v-card-title {
  color: #ff5722; /* Cor personalizada para o título 404 */
}
</style>
