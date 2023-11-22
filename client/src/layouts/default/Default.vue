<template>
  <v-app>
    <Header />

    <default-view />

    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from './View.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
</script>
