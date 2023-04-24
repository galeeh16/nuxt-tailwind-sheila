<template>
  <div class="flex items-center justify-center">
    <h3
      class="font-extrabold text-transparent font-raleway text-2xl md:text-3xl lg:text-4xl bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {{
        props.title }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>