<template>
  <div class="mt-[60px] lg:mt-[97px]"></div>
  <section :class="container" class="pt-8 lg:pt-14">
    <Heading3 :title="$t('profile')" />

    <div class="flex flex-col lg:flex-row gap-8 lg:gap-20 mt-12 lg:mt-16 mb-14 lg:mb-28">
      <div>
        <img :src="SheilaJpg" class="max-w-[400px] lg:max-w-[350px]" />
      </div>
      <div>
        <p class="font-semibold text-xl mb-4 uppercase tracking-widest">Sheila Rindo Rindo</p>
        <p class="mb-8">REGIONAL OPERATIONS DIRECTOR, ASIA-PAC/MIDDLE EAST/AFRICA</p>

        <p class="mb-4">{{ $t('about_desc_1') }}</p>
        <p class="mb-4">{{ $t('about_desc_2') }}</p>
        <p class="mb-4">{{ $t('about_desc_3') }}</p>
        <p class="mb-4">{{ $t('about_desc_4') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { container } from '~/constants/style'
import SheilaJpg from '~/assets/images/example-img.jpg'

const { t } = useI18n()

useHead({
  title: `Bisnis Di Dubai - ${t('profile')}`
})
</script>