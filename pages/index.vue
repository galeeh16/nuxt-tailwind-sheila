<template>
  <div>
    <ClientOnly>
      <Carousel />
    </ClientOnly>

    <div :class="container" class="pt-8 lg:pt-14">

      <Heading3 :title="$t('home_what_we_can')" />

      <MotifGradient />

      <div class="pt-10">
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-10">
          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-white">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="heroicons-outline:currency-dollar" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_invest') }}</p>
            </div>
            <p class="mt-4 lg:mt-6">{{ $t('home_invest_desc') }}</p>

            <p class="mt-4 leading-7">{{ $t('home_invest_subheading') }} :</p>
            <ul class="list-disc pl-4 leading-7">
              <li>{{ $t('home_invest_1') }}</li>
              <li>{{ $t('home_invest_2') }}</li>
              <li>{{ $t('home_invest_3') }}</li>
            </ul>
          </div>

          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-white">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="heroicons-outline:home-modern" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_rellocate') }}</p>
            </div>
            <p class="mt-4 lg:mt-6 leading-7">{{ $t('home_rellocate_desc') }}</p>

            <ul class="list-disc pl-4 leading-7 mt-4">
              <li>{{ $t('home_rellocate_1') }}</li>
              <li>{{ $t('home_rellocate_2') }}</li>
              <li>{{ $t('home_rellocate_3') }}</li>
              <li>{{ $t('home_rellocate_4') }}</li>
              <li>{{ $t('home_rellocate_5') }}</li>
              <li>{{ $t('home_rellocate_6') }}</li>
            </ul>

          </div>

          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-white">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="heroicons-outline:shopping-bag" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_business') }}</p>
            </div>
            <p class="mt-4 lg:mt-6">{{ $t('home_business_desc') }}</p>
          </div>

          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-white">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="heroicons-outline:location-marker" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_visiting') }}</p>
            </div>
            <p class="mt-4 lg:mt-6">{{ $t('home_visiting_desc_1') }}</p>

            <p class="mt-4 lg:mt-6">{{ $t('home_visiting_desc_2') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { container } from '~/constants/style';
// import { Motion } from 'motion/vue';

const rotation = ref(0);
</script>
