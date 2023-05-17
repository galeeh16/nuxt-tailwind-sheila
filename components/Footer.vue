<template>
  <section class="mt-10 lg:mt-14 py-4 lg:py-12 bg-gray-800 text-gray-300">
    <div :class="container">
      <p class="text-center">&copy; Copyright {{ new Date().getFullYear() }}. All Right Reserved</p>
    </div>
  </section>
</template>

<script setup>
import { container } from '../constants/style'
</script>