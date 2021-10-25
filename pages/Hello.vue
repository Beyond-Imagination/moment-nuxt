<template>
  <div class="w-full h-full">
    <div class="grid grid-cols-3 gap-2 px-2 py-2">
      <template v-for="(item, index) in data.items" :key="index">
        <AImage
          :src="item.src"
          :alt="item.alt"
          class="bg-indigo-50 hover:bg-indigo-400 transition-colors"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import AImage from "../components/atoms/AImage"
import { reactive } from "@vue/runtime-core"

export default {
  name: "Hello",
  components: { AImage },
  setup () {
    const data = reactive({
      items: Array(100).fill(0).map((_, index) => ({ src: 'https://source.unsplash.com/random/350x350', alt: `image-${index}` }))
    })

    return {
      data
    }
  }
}
</script>

<style scoped>

</style>