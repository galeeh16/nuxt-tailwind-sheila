<template>
  <div>
    <ClientOnly>
      <Carousel />
    </ClientOnly>

    <div :class="container" class="pt-8 lg:pt-14">

      <Heading3 :title="$t('home_what_we_can')" />

      <MotifGradient />

      <div class="pt-10 lg:pt-20">
        <!-- <div class="grid lg:grid-cols-2 gap-6 lg:gap-10">
          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-gray-800">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="streamline:money-cash-bag-dollar-bag-payment-cash-money-finance"
                  class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_invest') }}</p>
            </div>
            <p class="mt-4 lg:mt-6">{{ $t('home_invest_desc') }}</p>

            <p class="mt-4 leading-7">{{ $t('home_invest_subheading') }} :</p>
            <ul class="list-disc pl-4 leading-7 space-y-1">
              <li>{{ $t('home_invest_1') }}</li>
              <li>{{ $t('home_invest_2') }}</li>
              <li>{{ $t('home_invest_3') }}</li>
            </ul>
          </div>

          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-gray-800">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="material-symbols:home-work-outline-rounded" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_rellocate') }}</p>
            </div>
            <p class="mt-4 lg:mt-6 leading-7">{{ $t('home_rellocate_desc') }}</p>

            <ul class="list-disc pl-4 leading-7 mt-4 space-y-1">
              <li>{{ $t('home_rellocate_1') }}</li>
              <li>{{ $t('home_rellocate_2') }}</li>
              <li>{{ $t('home_rellocate_3') }}</li>
              <li>{{ $t('home_rellocate_4') }}</li>
              <li>{{ $t('home_rellocate_5') }}</li>
              <li>{{ $t('home_rellocate_6') }}</li>
            </ul>

          </div>

          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-gray-800">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="fa6-regular:handshake" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_business') }}</p>
            </div>
            <p class="mt-4 lg:mt-6">{{ $t('home_business_desc') }}</p>
          </div>

          <div class="shadow-lg rounded-xl p-4 md:p-8 bg-gray-800">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="fluent-emoji-high-contrast:palm-tree" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_visiting') }}</p>
            </div>
            <p class="mt-4 lg:mt-6">{{ $t('home_visiting_desc_1') }}</p>

            <p class="mt-4 lg:mt-6">{{ $t('home_visiting_desc_2') }}</p>
          </div>
        </div> -->

        <!-- Investing in Dubai -->
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-20 mb-16 lg:mb-32">
          <div class="flex justify-center lg:justify-normal">
            <img :src="DubaiInvest" alt="Dubai Invest"
              class="w-full max-w-[500px] max-h-[500px] aspect-square object-cover">
          </div>
          <div>
            <div class="flex items-center justify-center lg:justify-normal gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="streamline:money-cash-bag-dollar-bag-payment-cash-money-finance"
                  class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_invest') }}</p>
            </div>
            <p class="mt-4 lg:mt-6">{{ $t('home_invest_desc') }}</p>

            <p class="mt-4 leading-7">{{ $t('home_invest_subheading') }} :</p>
            <ul class="list-disc pl-4 leading-7 space-y-1">
              <li>{{ $t('home_invest_1') }}</li>
              <li>{{ $t('home_invest_2') }}</li>
              <li>{{ $t('home_invest_3') }}</li>
            </ul>
          </div>
        </div>

        <!-- Rellocating to Dubai -->
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-20 mb-16 lg:mb-32">
          <div class="order-2 lg:order-1">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="material-symbols:home-work-outline-rounded" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_rellocate') }}</p>
            </div>
            <p class="mt-4 lg:mt-6 leading-7">{{ $t('home_rellocate_desc') }}</p>

            <ul class="list-disc pl-4 leading-7 mt-4 space-y-1">
              <li>{{ $t('home_rellocate_1') }}</li>
              <li>{{ $t('home_rellocate_2') }}</li>
              <li>{{ $t('home_rellocate_3') }}</li>
              <li>{{ $t('home_rellocate_4') }}</li>
              <li>{{ $t('home_rellocate_5') }}</li>
              <li>{{ $t('home_rellocate_6') }}</li>
            </ul>
          </div>
          <div class="flex justify-center lg:justify-normal order-1 lg:order-2">
            <img :src="DubaiRellocate" alt="Dubai Rellocating"
              class="w-full max-w-[500px] max-h-[500px] aspect-square object-cover">
          </div>
        </div>

        <!-- Dubai Business -->
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-20 mb-16 lg:mb-32">
          <div>
            <div class="flex justify-center lg:justify-normal">
              <img :src="DubaiBusiness" alt="Dubai Business"
                class="w-full max-w-[500px] max-h-[500px] aspect-square object-cover">
            </div>
          </div>
          <div>
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="fa6-regular:handshake" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_business') }}</p>
            </div>
            <p class="mt-4 lg:mt-6">{{ $t('home_business_desc') }}</p>
          </div>

        </div>

        <!-- Visiting Dubai -->
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-20 mb-16 lg:mb-32">
          <div class="order-2 lg:order-1">
            <div class="flex items-center gap-2 lg:gap-3">
              <div class="p-2 lg:p-3 bg-softPrimary rounded-xl">
                <Icon name="fluent-emoji-high-contrast:palm-tree" class="text-primary text-xl lg:text-4xl" />
              </div>
              <p class="font-semibold text-xl text-primary lg:text-2xl">{{ $t('home_visiting') }}</p>
            </div>
            <p class="mt-4 lg:mt-6">{{ $t('home_visiting_desc_1') }}</p>

            <p class="mt-4 lg:mt-6">{{ $t('home_visiting_desc_2') }}</p>
          </div>
          <div class="flex justify-center lg:justify-normal order-1 lg:order-2">
            <img :src="DubaiVisit" alt="Dubai Visiting"
              class="w-full max-w-[500px] max-h-[500px] aspect-square object-cover">
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { container } from '~/constants/style';
import DubaiInvest from '@/assets/images/home/dubai_invest.webp'
import DubaiRellocate from '@/assets/images/home/dubai_rellocating.webp'
import DubaiBusiness from '@/assets/images/home/dubai_business.webp'
import DubaiVisit from '@/assets/images/home/dubai_visit.webp'

</script>
