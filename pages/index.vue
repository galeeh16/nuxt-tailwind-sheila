<template>
  <div>
    <ClientOnly>
      <Carousel />
    </ClientOnly>

    <div :class="container" class="pt-8 lg:pt-14">
      <!-- <h3 class="text-center font-semibold text-primary mb-8 lg:mb-12 text-xl lg:text-3xl font-raleway">Mengapa Dubai?
      </h3> -->
      <Heading3 title="Mengapa Dubai?" />

      <h5 class="mb-2 text-gray-900 font-semibold text-lg">1 - Gateway to the West and the East</h5>
      <p>Dubai is strategically located as a gateway to Europe, Africa, and the Asia-Pacific region; making it just a
        short flight away from numerous countries. Dubai International Airport offers frequent flights to all major
        destinations worldwide by some of the most famous airlines, making the occasional visit home or somewhere exotic
        quick and hassle-free.</p>
      <p>Its favourable geographical location and accessibility also make Dubai an incredibly popular location for tourism
        and commerce.</p>

      <h5 class="mt-5 mb-2 text-gray-900 font-semibold text-lg">2 - Low crime rate</h5>
      <p>Dubai was named one of the <a href="https://www.timeoutdubai.com/news/dubai-safe-city" target="_blank">safest
          cities in the world in 2023</a> for residents. The UAE government has imposed
        stringent laws, and a well-devised justice system, whilst actively investing in modern technology to keep the city
        safe. The reputable Dubai police force and the tolerant policy of the government have made the diverse society in
        Dubai a comfortable environment in 2023 for all 200+ nationalities living in the emirate. The city’s safe
        environment and calm nature make it so special and a safe haven for women, children and the elderly to walk around
        at all times of day and night without a problem or worry.</p>

      <h5 class="mt-5 mb-2 text-gray-900 font-semibold text-lg">3 - The lifestyle</h5>
      <p>Dubai offers a diverse and exceptional lifestyle. The quality of life and amenities available are developing at a
        rapid rate, much faster than is witnessed in many developing economies across the world. Dubai offers world-class
        infrastructure and quality products that let you live your life as you want. Lifestyle options are diverse, and
        one can truly enjoy a vibrant and social atmosphere in Dubai.</p>

      <h5 class="mt-5 mb-2 text-gray-900 font-semibold text-lg">4 - Tax-free income</h5>
      <p>Dubai offers tax-free living for everyone. Whether you are employed in any organisation or running your own
        business in this city, you will not pay any taxes on your income. The tax-free salaries in Dubai make it one of
        the best places to build one’s future. For most expats who come to Dubai looking for greater opportunities,
        tax-free income can mean a higher income and greater wealth, presenting a compelling reason to move to Dubai. With
        tax-free income and just 5% VAT on goods and services, Dubai offers the rare chance to enjoy life, take a
        comfortable vacation once in a while and boost your savings all at once. All these factors have made this city a
        perfect place to live and invest your money.</p>
    </div>
  </div>
</template>

<script setup>
import { container } from '~/constants/style';
// import { Motion } from 'motion/vue';

const rotation = ref(0);
</script>
