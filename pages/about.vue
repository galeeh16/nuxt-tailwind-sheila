<template>
  <div class="mt-[97px]"></div>
  <section :class="container" class="pt-8 lg:pt-14">
    <h3 class="text-center font-semibold text-primary mb-8 lg:mb-12 text-xl lg:text-3xl font-raleway">Tentang Kami
    </h3>

    <p class="mb-4">The Relocate Melbourne team met whilst on the expat trail.</p>
    <p class="mb-4"> Each consultant paused their professional lives to become full-time parents and support their
      partner's career
      globally.
      Their circumstances required them to adapt very quickly to new ways of life. From establishing their children in
      schools, setting up homes, taking on volunteer roles, and packing up and relocating to the next posting, they
      often did so on very little notice.</p>
    <p class="mb-4">The Relocate Melbourne team all have children established in Melbourne schools and universities, with
      team
      members located in Melbourne, Jakarta, Singapore, Hong Kong, Vietnam, and London.

      They provide knowledge and experience when assisting other families moving to Melbourne. Annie and her team have
      their real estate licenses (REIV Certificate) and are experienced in finding your ideal property in Melbourne.

      Relocate Melbourne looks forward to introducing you
      to the world's most liveable city and all its treasures.</p>

    <h3 class="font-semibold mt-20 mb-8 text-xl">Kenali Tim Kami</h3>

    <div class="flex flex-col lg:flex-row gap-8">
      <div class="">
        <img :src="SheilaJpg" class="max-w-[200px] lg:max-w-[295px]" />
      </div>
      <div>
        <p class="font-semibold text-xl mb-4">Sheila Parubets</p>
        <p class="mb-8">REGIONAL OPERATIONS DIRECTOR, ASIA-PAC/MIDDLE EAST/AFRICA</p>
        <p class="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor reiciendis earum suscipit
          necessitatibus quasi
          ullam voluptatum quod excepturi, sunt quos!</p>
        <p class="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor reiciendis earum suscipit
          necessitatibus quasi
          ullam voluptatum quod excepturi, sunt quos!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { container } from '~/constants/style'
import SheilaJpg from '~/assets/images/Sheila-Parubets.jpg'
</script>