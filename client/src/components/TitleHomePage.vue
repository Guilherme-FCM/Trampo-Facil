<template>
    <v-row class="d-flex align-center justify-center">
        <div class="title text-h4">
            <div>
                <strong>
                    {{ props.title }}
                </strong>
            </div>
        </div>
    </v-row>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>

<style scoped>
.title {
  margin-top: 80px;
}
</style>
