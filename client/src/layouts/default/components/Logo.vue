<template>
  <v-app-bar-title>
    <v-img
      width="130"
      :src="logo"
    />
    </v-app-bar-title>
</template>

<style scoped>
.container:hover {
  cursor: pointer;
}
</style>
<script setup>
  import logo from "@/assets/logo.png"
</script>
