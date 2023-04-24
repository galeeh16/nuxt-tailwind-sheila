<template>
  <div class="mt-[97px]"></div>
  <section :class="container" class="pt-8 lg:pt-14">
    <Heading3 title="Profile" />

    <div class="flex flex-col lg:flex-row gap-8 lg:gap-20 mt-12 lg:mt-16 mb-14 lg:mb-28">
      <div>
        <img :src="SheilaJpg" class="max-w-[400px] lg:max-w-[350px]" />
      </div>
      <div>
        <p class="font-semibold text-xl mb-4 uppercase tracking-widest">Sheila Parubets</p>
        <p class="mb-8">REGIONAL OPERATIONS DIRECTOR, ASIA-PAC/MIDDLE EAST/AFRICA</p>

        <p class="mb-4">Sheila has worked in global mobility for nearly a decade. She leads a team of compassionate and
          committed consultant across Asia Pacific, the Middle East, and the UAE in particular.</p>
        <p class="mb-4">She has a proven track record of working with international companies and employees at all levels
          providing consultations for investment and business set up.</p>
        <p class="mb-4">With personal experience as an expatriate living and working in a number of different countries
          and as
          property investor, she has chosen to follow her passion to share her knowledge, networks and support to
          individuals
          and business looking to seizing new opportunities.</p>
        <p class="mb-4">Passionate about the of international mobility, relocation and property investment, Sheila likes
          to be hands on and will be there for you in every step of the way.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { container } from '~/constants/style'
import SheilaJpg from '~/assets/images/Sheila-Parubets.jpg'

useHead({
  title: 'Rellocate Dubai - Profile'
})
</script>