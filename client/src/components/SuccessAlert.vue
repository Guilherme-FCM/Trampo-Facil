<template>
  <v-dialog transition="dialog-bottom-transition" location="bottom center" >
    <v-alert 
      :text="text"
      type="success"
      variant="elevated"
      closable
      close-label="Fechar" />
  </v-dialog>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  }
})
</script>

<style scoped>
::v-deep .v-overlay__scrim {
  display: none;
}
::v-deep .v-overlay__content {
  position: fixed;
  bottom: 0;
  max-width: 500px !important;
}
</style>