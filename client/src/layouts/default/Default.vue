<template>
  <v-app>
    <Header />

    <default-view />

    <Footer />

    <ErrorAlert :text="error.message" v-model="error.alert"/>
    <SuccessAlert :text="success.message" v-model="success.alert"/>
    <InfoAlert :text="info.message" v-model="info.alert"/>
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from './View.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';
import ErrorAlert from "@/components/ErrorAlert.vue";
import SuccessAlert from "@/components/SuccessAlert.vue";
import { EventEmitter } from "@/utils/event-emitter";
import { reactive } from 'vue';
import InfoAlert from "@/components/InfoAlert.vue";

const error = reactive({
  alert: false,
  message: '',
})

const success = reactive({
  alert: false,
  message: '',
})

const info = reactive({
  alert: false,
  message: '',
})

EventEmitter.on('error', (message: string) => {
  error.message = message;
  error.alert = true
  setTimeout(clearAlerts, 2000)
});

EventEmitter.on('success', (message: string) => {
  success.message = message;
  success.alert = true
  setTimeout(clearAlerts, 2000)
});

EventEmitter.on('info', (message: string) => {
  info.message = message;
  info.alert = true
  setTimeout(clearAlerts, 2000)
});

function clearAlerts() {
  error.alert = false
  success.alert = false
  info.alert = false
}

</script>
