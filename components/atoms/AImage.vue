<template>
  <img
    v-lazy="src"
    :alt="alt"
    class="w-full object-cover object-center rounded-lg shadow-md"
  >
</template>

<script lang="ts" setup>
import {
  defineProps
} from '@vue/runtime-core'
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'image'
  }
})
</script>

<style scoped>

</style>